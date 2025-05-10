import * as grpc from '@grpc/grpc-js';
import {IPurchaseHistoryServiceServer, PurchaseHistoryServiceService} from "../generated/purchase_history_grpc_pb";
import {CheckResponse} from "../generated/purchase_history_pb";
import {isExistPurchasedGame} from "../repository/purchasedGame.repository";
import {isExistResourceTransaction} from "../repository/resourceTransaction.entity";

const purchaseHistoryServiceImpl: IPurchaseHistoryServiceServer = {
    checkPurchase: async (call, callback) => {
        const userId = call.request.getUserid();
        const gameId = call.request.getGameid();

        try {
            const result = await isExistPurchasedGame(userId, gameId);
            const response = new CheckResponse();
            response.setIstransacted(result);
            callback(null, response);
        } catch (error) {
            console.error("checkPurchase error:", error);
            callback(error as Error, null);
        }
    },
    checkTransaction: async (call, callback) => {
        const userId = call.request.getUserid();
        const resourceId = call.request.getResourceid();

        try {
            const result = await isExistResourceTransaction(userId, resourceId);
            const response = new CheckResponse();
            response.setIstransacted(result);
            callback(null, response);
        } catch (error) {
            console.error("checkTransaction error:", error);
            callback(error as Error, null);
        }
    }
};

export async function startGrpcServer() {
    const server = new grpc.Server();

    server.addService(PurchaseHistoryServiceService, purchaseHistoryServiceImpl);

    await new Promise<void>((resolve, reject) => {
        server.bindAsync('0.0.0.0:50056', grpc.ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
                return reject(err);
            }
            console.log(`gRPC Service running on port ${port}`);
            resolve();
        });
    });
}