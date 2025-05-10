import {ResourceTransaction} from "../entity/resourceTransaction.entity";
import {Repository} from "typeorm";
import AppDataSource from "../config/mysql.config";

const resourceTransactionRepo: Repository<ResourceTransaction> = AppDataSource.getRepository(ResourceTransaction);

export async function saveResourceTransaction(resourceTransaction: ResourceTransaction) {
    try {
        await resourceTransactionRepo.save(resourceTransaction);
    } catch (error) {
        console.error('Failed to save resource transaction:', error);
        throw new Error('Failed to save resource transaction to database');
    }
}

export async function isExistResourceTransaction(buyerId: number, resourceId: number): Promise<boolean> {
    try {
        const resourceTransaction = await resourceTransactionRepo.findOne({
            where: { buyerId, resourceId }
        });
        return !!resourceTransaction;
    } catch (error) {
        console.error('Failed to check resource transaction existence:', error);
        throw new Error('Failed to check resource transaction in database');
    }
}