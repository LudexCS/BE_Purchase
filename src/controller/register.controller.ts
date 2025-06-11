import {Request} from 'express';
import {getUserIdByEmail} from "../grpc/auth.client";
import {RegisterPurchasedGameDto, RegisterResourceTransactionDto} from "../dto/register.dto";
import {registerPurchasedGame, registerResourceTransaction} from "../service/register.service";
import {getUserIdByResource} from "../grpc/resource.client";
import {increaseDownloadCount, increaseTransactionCount} from "../grpc/downloadCount.client";

export async function registerPurchasedGameControl(req: Request) {
    const email = req.user;
    if (!email) throw new Error('Invalid user');
    const userId = await getUserIdByEmail(email);
    const purchasedGameDto: RegisterPurchasedGameDto = req.body;
    purchasedGameDto.userId = userId;
    await registerPurchasedGame(purchasedGameDto);
    await increaseDownloadCount(purchasedGameDto.gameId);
}

export async function registerResourceTransactionControl(req: Request) {
    const email = req.user;
    if (!email) throw new Error('Invalid user');
    const userId = await getUserIdByEmail(email);
    const resourceId = req.body.resourceId;
    const resourceTransactionDto: RegisterResourceTransactionDto = {} as RegisterResourceTransactionDto;
    resourceTransactionDto.resourceId = resourceId;
    resourceTransactionDto.buyerId = userId;
    resourceTransactionDto.sellerId = await getUserIdByResource(resourceId);
    await registerResourceTransaction(resourceTransactionDto);
    await increaseTransactionCount(resourceId);
}