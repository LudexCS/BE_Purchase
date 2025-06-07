import {Repository} from "typeorm";
import AppDataSource from "../config/mysql.config";
import {Account} from "../entity/account.entity";

const accountRepo: Repository<Account> = AppDataSource.getRepository(Account);

export async function findOwnerId (email: string) {
    const account = await accountRepo.findOne({
        where: { email },
        select: ['ownerId']
    });
    return account?.ownerId ?? null;
}

export async function findUserId (email: string) {
    const account = await accountRepo.findOne({
        where: { email },
        select: ['id']
    });
    return account?.id ?? null;
}

export async function saveOwnerId (email: string, ownerId: string) {
    await accountRepo.update({ email }, { ownerId });
}