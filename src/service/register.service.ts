import {
    RegisterPurchasedGameDto,
    RegisterResourceTransactionDto,
    toPurchasedGameEntity,
    toResourceTransactionEntity
} from "../dto/register.dto";
import {PurchasedGame} from "../entity/purchasedGame.entity";
import {savePurchasedGame} from "../repository/purchasedGame.repository";
import {ResourceTransaction} from "../entity/resourceTransaction.entity";
import {saveResourceTransaction} from "../repository/resourceTransaction.entity";

export async function registerPurchasedGame(purchasedGameDto: RegisterPurchasedGameDto) {
    const entity: PurchasedGame = toPurchasedGameEntity(purchasedGameDto);
    await savePurchasedGame(entity);
}

export async function registerResourceTransaction(resourceTransactionDto: RegisterResourceTransactionDto) {
    const entity: ResourceTransaction = toResourceTransactionEntity(resourceTransactionDto);
    await saveResourceTransaction(entity);
}