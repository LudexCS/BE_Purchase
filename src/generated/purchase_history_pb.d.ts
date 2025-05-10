// package: purchase_history
// file: purchase_history.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CheckPurchaseRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): CheckPurchaseRequest;
    getGameid(): number;
    setGameid(value: number): CheckPurchaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckPurchaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckPurchaseRequest): CheckPurchaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckPurchaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckPurchaseRequest;
    static deserializeBinaryFromReader(message: CheckPurchaseRequest, reader: jspb.BinaryReader): CheckPurchaseRequest;
}

export namespace CheckPurchaseRequest {
    export type AsObject = {
        userid: number,
        gameid: number,
    }
}

export class CheckResponse extends jspb.Message { 
    getIstransacted(): boolean;
    setIstransacted(value: boolean): CheckResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckResponse;
    static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
    export type AsObject = {
        istransacted: boolean,
    }
}

export class CheckTransactionRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): CheckTransactionRequest;
    getResourceid(): number;
    setResourceid(value: number): CheckTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckTransactionRequest): CheckTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckTransactionRequest;
    static deserializeBinaryFromReader(message: CheckTransactionRequest, reader: jspb.BinaryReader): CheckTransactionRequest;
}

export namespace CheckTransactionRequest {
    export type AsObject = {
        userid: number,
        resourceid: number,
    }
}
