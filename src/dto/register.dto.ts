import {PurchasedGame} from "../entity/purchasedGame.entity";
import {ResourceTransaction} from "../entity/resourceTransaction.entity";

export interface RegisterPurchasedGameDto {
    userId?: number;
    gameId: number;
    pricePaid: string;
    isNftIssued: boolean;
    purchaseId: string;
}

export interface RegisterResourceTransactionDto {
    resourceId: number;
    buyerId: number;
    sellerId: number;
}

export function toPurchasedGameEntity(dto: RegisterPurchasedGameDto): PurchasedGame {
    const entity = new PurchasedGame();
    if (dto.userId) entity.userId = dto.userId;
    entity.gameId = dto.gameId;
    entity.pricePaid = dto.pricePaid;
    entity.isNftIssued = dto.isNftIssued;
    entity.purchaseId = dto.purchaseId;
    entity.purchasedAt = new Date();
    return entity;
}

export function toResourceTransactionEntity(dto: RegisterResourceTransactionDto): ResourceTransaction {
    const entity = new ResourceTransaction();
    entity.resourceId = dto.resourceId;
    entity.buyerId = dto.buyerId;
    entity.sellerId = dto.sellerId;
    entity.registeredAt = new Date();
    return entity;
}