import * as grpc from '@grpc/grpc-js';
import {PurchaseServiceClient} from "../generated/downloadCount_grpc_pb";
import {IncreaseDownloadCountRequest, IncreaseTransactionCountRequest} from "../generated/downloadCount_pb";



const SERVICE_NAME = process.env.MANAGEMENT_INNER as string;

const client = new PurchaseServiceClient(
    SERVICE_NAME,
    grpc.credentials.createInsecure()
);

export const increaseDownloadCount = (gameId: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = new IncreaseDownloadCountRequest();
        request.setGameid(gameId);

        client.increaseDownloadCount(request, (err, res) => {
            if (err) {
                console.error('gRPC Error:', err.message);
                return reject(err);
            }
            resolve(res.getSuccess());
        });
    });
};

export const increaseTransactionCount = (resourceId: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = new IncreaseTransactionCountRequest();
        request.setResourceid(resourceId);

        client.increaseTransactionCount(request, (err, res) => {
            if (err) {
                console.error('gRPC Error:', err.message);
                return reject(err);
            }
            resolve(res.getSuccess());
        });
    })
}