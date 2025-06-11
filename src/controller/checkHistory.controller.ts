import {checkPurchaseHistory, checkTransactionHistory} from "../service/checkHistory.service";

export async function checkPurchaseHistoryControl(userId: number, gameId: number): Promise<boolean> {
    return await checkPurchaseHistory(userId, gameId);
}

export async function checkTransactionHistoryControl(userId: number, resourceId: number): Promise<boolean> {
    return await checkTransactionHistory(userId, resourceId);
}