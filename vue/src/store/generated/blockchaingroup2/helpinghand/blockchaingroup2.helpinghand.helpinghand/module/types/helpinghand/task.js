/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
const baseTask = {
    creator: "",
    id: 0,
    title: "",
    description: "",
    prize: 0,
    startedAt: 0,
    endedAt: 0,
};
export const Task = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.prize !== 0) {
            writer.uint32(40).int32(message.prize);
        }
        if (message.startedAt !== 0) {
            writer.uint32(48).int32(message.startedAt);
        }
        if (message.endedAt !== 0) {
            writer.uint32(56).int32(message.endedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTask };
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
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.prize = reader.int32();
                    break;
                case 6:
                    message.startedAt = reader.int32();
                    break;
                case 7:
                    message.endedAt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTask };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.prize !== undefined && object.prize !== null) {
            message.prize = Number(object.prize);
        }
        else {
            message.prize = 0;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = Number(object.startedAt);
        }
        else {
            message.startedAt = 0;
        }
        if (object.endedAt !== undefined && object.endedAt !== null) {
            message.endedAt = Number(object.endedAt);
        }
        else {
            message.endedAt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.prize !== undefined && (obj.prize = message.prize);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt);
        message.endedAt !== undefined && (obj.endedAt = message.endedAt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTask };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.prize !== undefined && object.prize !== null) {
            message.prize = object.prize;
        }
        else {
            message.prize = 0;
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        }
        else {
            message.startedAt = 0;
        }
        if (object.endedAt !== undefined && object.endedAt !== null) {
            message.endedAt = object.endedAt;
        }
        else {
            message.endedAt = 0;
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
