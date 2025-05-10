import AppDataSource from "../config/mysql.config";
import {PurchasedGame} from "../entity/purchasedGame.entity";
import {Repository} from "typeorm";

const purchasedGameRepo: Repository<PurchasedGame> = AppDataSource.getRepository(PurchasedGame);

export async function savePurchasedGame(purchasedGame: PurchasedGame) {
    try {
        await purchasedGameRepo.save(purchasedGame);
    } catch (error) {
        console.error('Failed to save purchased game:', error);
        throw new Error('Failed to save purchased game to database');
    }
}