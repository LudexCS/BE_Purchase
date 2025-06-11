import * as grpc from '@grpc/grpc-js';
import {PurchaseServiceClient} from "../generated/delegatePurchase_grpc_pb";
import {PurchaseRequest} from "../generated/delegatePurchase_pb";


const SERVICE_NAME = process.env.WEB3GATEWAY_INNER as string;

const client = new PurchaseServiceClient(
    SERVICE_NAME,
    grpc.credentials.createInsecure()
)

export const requestDelegatedPurchase = (itemId: string, ownerId: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const request = new PurchaseRequest();
        request.setItemid(itemId);
        request.setOwnerid(ownerId);

        client.delegatedPurchase(request, (err, res) => {
            if (err) {
                console.error('gRPC Error:', err.message);
                return reject(err);
            }
            resolve(res.getPurchaseid());
        })
    });
}