// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var purchase_history_pb = require('./purchase_history_pb.js');

function serialize_purchase_history_CheckPurchaseRequest(arg) {
  if (!(arg instanceof purchase_history_pb.CheckPurchaseRequest)) {
    throw new Error('Expected argument of type purchase_history.CheckPurchaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_purchase_history_CheckPurchaseRequest(buffer_arg) {
  return purchase_history_pb.CheckPurchaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_purchase_history_CheckResponse(arg) {
  if (!(arg instanceof purchase_history_pb.CheckResponse)) {
    throw new Error('Expected argument of type purchase_history.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_purchase_history_CheckResponse(buffer_arg) {
  return purchase_history_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_purchase_history_CheckTransactionRequest(arg) {
  if (!(arg instanceof purchase_history_pb.CheckTransactionRequest)) {
    throw new Error('Expected argument of type purchase_history.CheckTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_purchase_history_CheckTransactionRequest(buffer_arg) {
  return purchase_history_pb.CheckTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PurchaseHistoryServiceService = exports.PurchaseHistoryServiceService = {
  checkPurchase: {
    path: '/purchase_history.PurchaseHistoryService/CheckPurchase',
    requestStream: false,
    responseStream: false,
    requestType: purchase_history_pb.CheckPurchaseRequest,
    responseType: purchase_history_pb.CheckResponse,
    requestSerialize: serialize_purchase_history_CheckPurchaseRequest,
    requestDeserialize: deserialize_purchase_history_CheckPurchaseRequest,
    responseSerialize: serialize_purchase_history_CheckResponse,
    responseDeserialize: deserialize_purchase_history_CheckResponse,
  },
  checkTransaction: {
    path: '/purchase_history.PurchaseHistoryService/CheckTransaction',
    requestStream: false,
    responseStream: false,
    requestType: purchase_history_pb.CheckTransactionRequest,
    responseType: purchase_history_pb.CheckResponse,
    requestSerialize: serialize_purchase_history_CheckTransactionRequest,
    requestDeserialize: deserialize_purchase_history_CheckTransactionRequest,
    responseSerialize: serialize_purchase_history_CheckResponse,
    responseDeserialize: deserialize_purchase_history_CheckResponse,
  },
};

exports.PurchaseHistoryServiceClient = grpc.makeGenericClientConstructor(PurchaseHistoryServiceService, 'PurchaseHistoryService');
