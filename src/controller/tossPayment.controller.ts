import {BeforePaymentDto, ConfirmPaymentDto} from "../dto/tossPayment.dto";
import {confirmPayment, saveBeforePaymentInfo} from "../service/tossPayment.service";

export async function beforePaymentControl(beforePaymentDto: BeforePaymentDto) {
    if (!beforePaymentDto?.orderId) throw new Error('Invalid request, orderId is required');
    if (!beforePaymentDto?.amount) throw new Error('Invalid request, amount is required');
    await saveBeforePaymentInfo(beforePaymentDto);
}

export async function confirmPaymentControl(confirmPaymentDto: ConfirmPaymentDto) {
    if (!confirmPaymentDto?.paymentKey) throw new Error('Invalid request, paymentKey is required');
    if (!confirmPaymentDto?.orderId) throw new Error('Invalid request, orderId is required');
    if (!confirmPaymentDto?.amount) throw new Error('Invalid request, amount is required');
    return await confirmPayment(confirmPaymentDto);
}