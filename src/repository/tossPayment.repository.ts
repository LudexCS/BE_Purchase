import AppDataSource from "../config/mysql.config";
import {TossPayment} from "../entity/tossPayment.entity";
import {Repository} from "typeorm";

const tossPaymentRepo: Repository<TossPayment> = AppDataSource.getRepository(TossPayment);

export const saveTossPayment = async (payment: TossPayment): Promise<TossPayment> => {
  try {
    return await tossPaymentRepo.save(payment);
  } catch (error) {
    if (error instanceof Error) {
        console.error("🔴 Failed to save TossPayment:", error.message);
    }
    else {
        console.error("🔴 Failed to save TossPayment: Unknown Error");
    }
    throw new Error("TossPayment 저장에 실패했습니다");
  }
};