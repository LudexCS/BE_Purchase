import {BeforePaymentDto, ConfirmPaymentDto} from "../dto/tossPayment.dto";
import {deletePaymentInfo, isPaymentInfoEqual, storePaymentInfo} from "../repository/redis.repository";
import {findOwnerId, findUserId, saveOwnerId} from "../repository/account.repository";
import crypto from "crypto";
import {requestDelegatedPurchase} from "../grpc/delegatePurchase.client";
import {PurchasedGame} from "../entity/purchasedGame.entity";
import {savePurchasedGame} from "../repository/purchasedGame.repository";
import {parseTossPaymentMethod, parseTossPaymentStatus, TossPayment} from "../entity/tossPayment.entity";
import {saveTossPayment} from "../repository/tossPayment.repository";

export async function saveBeforePaymentInfo(beforePaymentDto: BeforePaymentDto) {
    const {orderId, amount} = beforePaymentDto;
    await storePaymentInfo(orderId, amount);
}

export async function confirmPayment(confirmPaymentDto: ConfirmPaymentDto) {
    const tossPaymentApiSecretKey = process.env.TOSS_PAYMENT_API_SECRET_KEY as string;
    const encryptedApiSecretKey = "Basic " + Buffer.from(tossPaymentApiSecretKey + ":").toString("base64");
    const { paymentKey, orderId, amount } = confirmPaymentDto;

    // 결제 과정에서 금액이 변경되지 않았는지 확인.
    if (!await isPaymentInfoEqual(orderId, amount)) {
        throw new Error('Invalid payment information');
    }

    // 결제 승인 API를 호출하세요.
    // 결제를 승인하면 결제수단에서 금액이 차감돼요.
    // @docs https://docs.tosspayments.com/guides/v2/payment-widget/integration#3-결제-승인하기
    return fetch("https://api.tosspayments.com/v1/payments/confirm", {
        method: "POST",
        headers: {
            Authorization: encryptedApiSecretKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderId: orderId,
            amount: amount,
            paymentKey: paymentKey,
        }),
    }).then(async function (response) {
        const result = await response.json();
        console.log(result);

        if (!response.ok) {
            // TODO: 결제 승인 실패 비즈니스 로직을 구현하세요.
            return { response, result};
        }

        // TODO: 결제 완료 비즈니스 로직을 구현하세요.
        // redis에서 결제 정보 삭제
        await deletePaymentInfo(orderId);

        // web3에 결제 정보 등록
        const purchaseId = await delegatedPurchaseByWeb3(confirmPaymentDto);
        const userId = await findUserId(confirmPaymentDto.email);
        if (!userId) {
            throw new Error('Invalid user Id');
        }

        const purchasedGameEntity: PurchasedGame = new PurchasedGame();
        purchasedGameEntity.userId = userId;
        purchasedGameEntity.gameId = confirmPaymentDto.gameId;
        purchasedGameEntity.pricePaid = confirmPaymentDto.tokenAmount;
        purchasedGameEntity.isNftIssued = false;
        purchasedGameEntity.purchaseId = purchaseId;
        purchasedGameEntity.purchasedAt = result.approvedAt;
        const purchasedGameId: number = await savePurchasedGame(purchasedGameEntity);

        const tossPayment: TossPayment = new TossPayment();
        tossPayment.userId = userId;
        tossPayment.purchasedGameId = purchasedGameId;
        tossPayment.tossOrderId = result.orderId;
        tossPayment.tossPaymentKey = result.paymentKey;
        tossPayment.tossPaymentMethod = parseTossPaymentMethod(result.method);
        tossPayment.tossPaymentStatus = parseTossPaymentStatus(result.status);
        tossPayment.amount = result.amount;
        tossPayment.currency = result.currency;
        tossPayment.approvedAt = result.approvedAt;
        tossPayment.requestedAt = result.requestedAt;
        await saveTossPayment(tossPayment);

        return { response, result};
    });
}

export async function delegatedPurchaseByWeb3(confirmPaymentDto: ConfirmPaymentDto) {
    const email = confirmPaymentDto.email;
    let ownerId = await findOwnerId(email);
    if (!ownerId) {
       ownerId = generateOwnerId(email).toString();
       await saveOwnerId(email, ownerId);
    }
    return await requestDelegatedPurchase(confirmPaymentDto.itemId, ownerId);
}

function generateOwnerId(seed: string): bigint {
    const hash = crypto.createHash("sha256").update(seed).digest("hex");
    // Take the first 16 bytes (128 bits) of the hash and convert to bigint
    return BigInt("0x" + hash.slice(0, 8));
}