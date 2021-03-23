/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
const baseCompletion = {
    creator: "",
    id: 0,
    taskID: 0,
    imageURL: "",
    imageHash: "",
};
export const Completion = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.taskID !== 0) {
            writer.uint32(24).int32(message.taskID);
        }
        if (message.imageURL !== "") {
            writer.uint32(34).string(message.imageURL);
        }
        if (message.imageHash !== "") {
            writer.uint32(42).string(message.imageHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCompletion };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.taskID = reader.int32();
                    break;
                case 4:
                    message.imageURL = reader.string();
                    break;
                case 5:
                    message.imageHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCompletion };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.taskID !== undefined && object.taskID !== null) {
            message.taskID = Number(object.taskID);
        }
        else {
            message.taskID = 0;
        }
        if (object.imageURL !== undefined && object.imageURL !== null) {
            message.imageURL = String(object.imageURL);
        }
        else {
            message.imageURL = "";
        }
        if (object.imageHash !== undefined && object.imageHash !== null) {
            message.imageHash = String(object.imageHash);
        }
        else {
            message.imageHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.taskID !== undefined && (obj.taskID = message.taskID);
        message.imageURL !== undefined && (obj.imageURL = message.imageURL);
        message.imageHash !== undefined && (obj.imageHash = message.imageHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCompletion };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.taskID !== undefined && object.taskID !== null) {
            message.taskID = object.taskID;
        }
        else {
            message.taskID = 0;
        }
        if (object.imageURL !== undefined && object.imageURL !== null) {
            message.imageURL = object.imageURL;
        }
        else {
            message.imageURL = "";
        }
        if (object.imageHash !== undefined && object.imageHash !== null) {
            message.imageHash = object.imageHash;
        }
        else {
            message.imageHash = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
