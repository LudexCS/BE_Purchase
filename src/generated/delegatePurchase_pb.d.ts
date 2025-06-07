// package: delegatePurchase
// file: delegatePurchase.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PurchaseRequest extends jspb.Message { 
    getItemid(): string;
    setItemid(value: string): PurchaseRequest;
    getOwnerid(): string;
    setOwnerid(value: string): PurchaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurchaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PurchaseRequest): PurchaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurchaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurchaseRequest;
    static deserializeBinaryFromReader(message: PurchaseRequest, reader: jspb.BinaryReader): PurchaseRequest;
}

export namespace PurchaseRequest {
    export type AsObject = {
        itemid: string,
        ownerid: string,
    }
}

export class PurchaseResponse extends jspb.Message { 
    getPurchaseid(): string;
    setPurchaseid(value: string): PurchaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurchaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PurchaseResponse): PurchaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurchaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurchaseResponse;
    static deserializeBinaryFromReader(message: PurchaseResponse, reader: jspb.BinaryReader): PurchaseResponse;
}

export namespace PurchaseResponse {
    export type AsObject = {
        purchaseid: string,
    }
}
