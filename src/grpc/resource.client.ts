import * as grpc from '@grpc/grpc-js';
import {ResourceServiceClient} from "../generated/resource_grpc_pb";
import {resourceRequest} from "../generated/resource_pb";


const SERVICE_NAME = process.env.MANAGEMENT_INNER as string;

const client = new ResourceServiceClient(
    SERVICE_NAME,
    grpc.credentials.createInsecure()
);

export const getUserIdByResource = (resourceId: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        const request = new resourceRequest();
        request.setResourceid(resourceId);

        client.getUserIdByResource(request, (err, res) => {
            if (err) {
                console.error('gRPC Error:', err);
                return reject(err);
            }
            resolve(res.getUserid());
        });
    });
};