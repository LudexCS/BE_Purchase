import {BeforePaymentDto, ConfirmPaymentDto} from "../dto/tossPayment.dto";
import {deletePaymentInfo, isPaymentInfoEqual, storePaymentInfo} from "../repository/redis.repository";

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
        return { response, result};
    });
}