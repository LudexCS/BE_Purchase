export interface BeforePaymentDto {
    orderId: string;
    amount: number;
}

export interface ConfirmPaymentDto {
    paymentKey: string;
    orderId: string;
    amount: number;
}