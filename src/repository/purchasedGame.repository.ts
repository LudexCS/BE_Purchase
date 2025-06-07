import AppDataSource from "../config/mysql.config";
import {PurchasedGame} from "../entity/purchasedGame.entity";
import {Repository} from "typeorm";

const purchasedGameRepo: Repository<PurchasedGame> = AppDataSource.getRepository(PurchasedGame);

export async function savePurchasedGame(purchasedGame: PurchasedGame) {
    try {
        return (await purchasedGameRepo.save(purchasedGame)).id;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Failed to save purchased game:', error.message);
        }
        else {
            console.error('Failed to save purchased game: Unknown Error');
        }
        throw new Error('Failed to save purchased game to database');
    }
}

export async function isExistPurchasedGame(userId: number, gameId: number): Promise<boolean> {
    try {
        const purchasedGame = await purchasedGameRepo.findOne({
            where: { userId, gameId }
        });
        return !!purchasedGame;
    } catch (error) {
        console.error('Failed to check purchased game existence:', error);
        throw new Error('Failed to check purchased game in database');
    }
}