// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var delegatePurchase_pb = require('./delegatePurchase_pb.js');

function serialize_delegatePurchase_PurchaseRequest(arg) {
  if (!(arg instanceof delegatePurchase_pb.PurchaseRequest)) {
    throw new Error('Expected argument of type delegatePurchase.PurchaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_delegatePurchase_PurchaseRequest(buffer_arg) {
  return delegatePurchase_pb.PurchaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_delegatePurchase_PurchaseResponse(arg) {
  if (!(arg instanceof delegatePurchase_pb.PurchaseResponse)) {
    throw new Error('Expected argument of type delegatePurchase.PurchaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_delegatePurchase_PurchaseResponse(buffer_arg) {
  return delegatePurchase_pb.PurchaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PurchaseServiceService = exports.PurchaseServiceService = {
  delegatedPurchase: {
    path: '/delegatePurchase.PurchaseService/DelegatedPurchase',
    requestStream: false,
    responseStream: false,
    requestType: delegatePurchase_pb.PurchaseRequest,
    responseType: delegatePurchase_pb.PurchaseResponse,
    requestSerialize: serialize_delegatePurchase_PurchaseRequest,
    requestDeserialize: deserialize_delegatePurchase_PurchaseRequest,
    responseSerialize: serialize_delegatePurchase_PurchaseResponse,
    responseDeserialize: deserialize_delegatePurchase_PurchaseResponse,
  },
};

exports.PurchaseServiceClient = grpc.makeGenericClientConstructor(PurchaseServiceService, 'PurchaseService');
