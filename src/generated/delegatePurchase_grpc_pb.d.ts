// package: delegatePurchase
// file: delegatePurchase.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as delegatePurchase_pb from "./delegatePurchase_pb";

interface IPurchaseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    delegatedPurchase: IPurchaseServiceService_IDelegatedPurchase;
}

interface IPurchaseServiceService_IDelegatedPurchase extends grpc.MethodDefinition<delegatePurchase_pb.PurchaseRequest, delegatePurchase_pb.PurchaseResponse> {
    path: "/delegatePurchase.PurchaseService/DelegatedPurchase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<delegatePurchase_pb.PurchaseRequest>;
    requestDeserialize: grpc.deserialize<delegatePurchase_pb.PurchaseRequest>;
    responseSerialize: grpc.serialize<delegatePurchase_pb.PurchaseResponse>;
    responseDeserialize: grpc.deserialize<delegatePurchase_pb.PurchaseResponse>;
}

export const PurchaseServiceService: IPurchaseServiceService;

export interface IPurchaseServiceServer extends grpc.UntypedServiceImplementation {
    delegatedPurchase: grpc.handleUnaryCall<delegatePurchase_pb.PurchaseRequest, delegatePurchase_pb.PurchaseResponse>;
}

export interface IPurchaseServiceClient {
    delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
    delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
    delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
}

export class PurchaseServiceClient extends grpc.Client implements IPurchaseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
    public delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
    public delegatedPurchase(request: delegatePurchase_pb.PurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: delegatePurchase_pb.PurchaseResponse) => void): grpc.ClientUnaryCall;
}
