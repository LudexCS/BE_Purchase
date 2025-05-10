// package: purchase_history
// file: purchase_history.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as purchase_history_pb from "./purchase_history_pb";

interface IPurchaseHistoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    checkPurchase: IPurchaseHistoryServiceService_ICheckPurchase;
    checkTransaction: IPurchaseHistoryServiceService_ICheckTransaction;
}

interface IPurchaseHistoryServiceService_ICheckPurchase extends grpc.MethodDefinition<purchase_history_pb.CheckPurchaseRequest, purchase_history_pb.CheckResponse> {
    path: "/purchase_history.PurchaseHistoryService/CheckPurchase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<purchase_history_pb.CheckPurchaseRequest>;
    requestDeserialize: grpc.deserialize<purchase_history_pb.CheckPurchaseRequest>;
    responseSerialize: grpc.serialize<purchase_history_pb.CheckResponse>;
    responseDeserialize: grpc.deserialize<purchase_history_pb.CheckResponse>;
}
interface IPurchaseHistoryServiceService_ICheckTransaction extends grpc.MethodDefinition<purchase_history_pb.CheckTransactionRequest, purchase_history_pb.CheckResponse> {
    path: "/purchase_history.PurchaseHistoryService/CheckTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<purchase_history_pb.CheckTransactionRequest>;
    requestDeserialize: grpc.deserialize<purchase_history_pb.CheckTransactionRequest>;
    responseSerialize: grpc.serialize<purchase_history_pb.CheckResponse>;
    responseDeserialize: grpc.deserialize<purchase_history_pb.CheckResponse>;
}

export const PurchaseHistoryServiceService: IPurchaseHistoryServiceService;

export interface IPurchaseHistoryServiceServer extends grpc.UntypedServiceImplementation {
    checkPurchase: grpc.handleUnaryCall<purchase_history_pb.CheckPurchaseRequest, purchase_history_pb.CheckResponse>;
    checkTransaction: grpc.handleUnaryCall<purchase_history_pb.CheckTransactionRequest, purchase_history_pb.CheckResponse>;
}

export interface IPurchaseHistoryServiceClient {
    checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    checkTransaction(request: purchase_history_pb.CheckTransactionRequest, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    checkTransaction(request: purchase_history_pb.CheckTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    checkTransaction(request: purchase_history_pb.CheckTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}

export class PurchaseHistoryServiceClient extends grpc.Client implements IPurchaseHistoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public checkPurchase(request: purchase_history_pb.CheckPurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public checkTransaction(request: purchase_history_pb.CheckTransactionRequest, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public checkTransaction(request: purchase_history_pb.CheckTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public checkTransaction(request: purchase_history_pb.CheckTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_history_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}
