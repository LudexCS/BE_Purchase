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