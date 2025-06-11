import {isExistPurchasedGame} from "../repository/purchasedGame.repository";
import {isExistResourceTransaction} from "../repository/resourceTransaction.entity";


/**
 * Checks the purchase history of a user to determine if they have previously purchased a specific game.
 *
 * @param {number} userId - The unique identifier of the user whose purchase history will be checked.
 * @param {number} gameId - The unique identifier of the game to verify in the user's purchase history.
 * @return {Promise<boolean>} A promise that resolves to true if the game has not been purchased by the user, otherwise false.
 */
export async function checkPurchaseHistory(userId: number, gameId: number): Promise<boolean> {
    return !(await isExistPurchasedGame(userId, gameId));
}

/**
 * Checks the transaction history for a specific user and resource to determine
 * if a corresponding resource transaction exists or not.
 *
 * @param {number} userId - The unique identifier of the user.
 * @param {number} resourceId - The unique identifier of the resource.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating
 * whether the resource transaction does not exist for the given user and resource.
 */
export async function checkTransactionHistory(userId: number, resourceId: number): Promise<boolean> {
    return !(await isExistResourceTransaction(userId, resourceId));
}