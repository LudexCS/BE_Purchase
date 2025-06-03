import redis from "../config/redis.config";

export const storePaymentInfo = async (orderId: string, amount: number): Promise<void> => {
    const key = `payment:${orderId}`;
    const ttl = Number(process.env.PAYMENT_TTL);

    try {
        await redis.set(key, amount, 'EX', ttl);
    } catch (error) {
        console.error(`🔴 Redis 저장 실패: ${key}`, error);
        throw new Error('Failed to store payment information');
    }
};

export const deletePaymentInfo = async (orderId: string): Promise<void> => {
    const key = `payment:${orderId}`;
    try {
        await redis.del(key);
    } catch (error) {
        console.error(`🔴 Redis 삭제 실패: ${key}`, error);
        throw new Error('Failed to delete payment information');
    }
};

export const isPaymentInfoEqual = async (orderId: string, amount: number): Promise<boolean> => {
    const key = `payment:${orderId}`;
    try {
        const storedAmount = await redis.get(key);
        if (!storedAmount) return false;
        return Number(storedAmount) === Number(amount);
    } catch (error) {
        console.error(`🔴 Redis 토큰 비교 실패: ${key}`, error);
        throw new Error('Failed to compare payment information');
    }
};