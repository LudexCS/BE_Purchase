export interface BeforePaymentDto {
    orderId: string;
    amount: number;
}

export interface ConfirmPaymentDto {
    paymentKey: string;
    orderId: string;
    amount: number;

    // delegate-purchase를 위한 정보
    itemId: string;
    email: string;

    // purchased-game 저장을 위한 정보
    gameId: number;
    tokenAmount: string;
}