/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
const baseMsgCreateCompletion = {
    creator: "",
    taskID: 0,
    imageURL: "",
    imageHash: "",
<<<<<<< HEAD
    status: "",
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
};
export const MsgCreateCompletion = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.taskID !== 0) {
            writer.uint32(16).int32(message.taskID);
        }
        if (message.imageURL !== "") {
            writer.uint32(26).string(message.imageURL);
        }
        if (message.imageHash !== "") {
            writer.uint32(34).string(message.imageHash);
        }
<<<<<<< HEAD
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCompletion };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.taskID = reader.int32();
                    break;
                case 3:
                    message.imageURL = reader.string();
                    break;
                case 4:
                    message.imageHash = reader.string();
                    break;
<<<<<<< HEAD
                case 5:
                    message.status = reader.string();
                    break;
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCompletion };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
<<<<<<< HEAD
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.taskID !== undefined && (obj.taskID = message.taskID);
        message.imageURL !== undefined && (obj.imageURL = message.imageURL);
        message.imageHash !== undefined && (obj.imageHash = message.imageHash);
<<<<<<< HEAD
        message.status !== undefined && (obj.status = message.status);
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCompletion };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
<<<<<<< HEAD
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return message;
    },
};
const baseMsgCreateCompletionResponse = { id: 0 };
export const MsgCreateCompletionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateCompletionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateCompletionResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateCompletionResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateCompletion = {
    creator: "",
    id: 0,
    taskID: 0,
    imageURL: "",
    imageHash: "",
<<<<<<< HEAD
    status: "",
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
};
export const MsgUpdateCompletion = {
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
<<<<<<< HEAD
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCompletion };
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
<<<<<<< HEAD
                case 6:
                    message.status = reader.string();
                    break;
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCompletion };
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
<<<<<<< HEAD
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.taskID !== undefined && (obj.taskID = message.taskID);
        message.imageURL !== undefined && (obj.imageURL = message.imageURL);
        message.imageHash !== undefined && (obj.imageHash = message.imageHash);
<<<<<<< HEAD
        message.status !== undefined && (obj.status = message.status);
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCompletion };
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
<<<<<<< HEAD
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
        return message;
    },
};
const baseMsgUpdateCompletionResponse = {};
export const MsgUpdateCompletionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCompletionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateCompletionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateCompletionResponse,
        };
        return message;
    },
};
const baseMsgDeleteCompletion = { creator: "", id: 0 };
export const MsgDeleteCompletion = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCompletion };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteCompletion };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCompletion };
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
        return message;
    },
};
const baseMsgDeleteCompletionResponse = {};
export const MsgDeleteCompletionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteCompletionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteCompletionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteCompletionResponse,
        };
        return message;
    },
};
const baseMsgCreateTask = {
    creator: "",
    title: "",
    description: "",
    prize: 0,
    startedAt: 0,
    endedAt: 0,
};
export const MsgCreateTask = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.prize !== 0) {
            writer.uint32(32).int32(message.prize);
        }
        if (message.startedAt !== 0) {
            writer.uint32(40).int32(message.startedAt);
        }
        if (message.endedAt !== 0) {
            writer.uint32(48).int32(message.endedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTask };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.prize = reader.int32();
                    break;
                case 5:
                    message.startedAt = reader.int32();
                    break;
                case 6:
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
        const message = { ...baseMsgCreateTask };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.prize !== undefined && (obj.prize = message.prize);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt);
        message.endedAt !== undefined && (obj.endedAt = message.endedAt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTask };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
const baseMsgCreateTaskResponse = { id: 0 };
export const MsgCreateTaskResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTaskResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTaskResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTaskResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateTask = {
    creator: "",
    id: 0,
    title: "",
    description: "",
    prize: 0,
    startedAt: 0,
    endedAt: 0,
};
export const MsgUpdateTask = {
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
        const message = { ...baseMsgUpdateTask };
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
        const message = { ...baseMsgUpdateTask };
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
        const message = { ...baseMsgUpdateTask };
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
const baseMsgUpdateTaskResponse = {};
export const MsgUpdateTaskResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTaskResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateTaskResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateTaskResponse };
        return message;
    },
};
const baseMsgDeleteTask = { creator: "", id: 0 };
export const MsgDeleteTask = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTask };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteTask };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteTask };
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
        return message;
    },
};
const baseMsgDeleteTaskResponse = {};
export const MsgDeleteTaskResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTaskResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteTaskResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteTaskResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateCompletion(request) {
        const data = MsgCreateCompletion.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "CreateCompletion", data);
        return promise.then((data) => MsgCreateCompletionResponse.decode(new Reader(data)));
    }
    UpdateCompletion(request) {
        const data = MsgUpdateCompletion.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "UpdateCompletion", data);
        return promise.then((data) => MsgUpdateCompletionResponse.decode(new Reader(data)));
    }
    DeleteCompletion(request) {
        const data = MsgDeleteCompletion.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "DeleteCompletion", data);
        return promise.then((data) => MsgDeleteCompletionResponse.decode(new Reader(data)));
    }
    CreateTask(request) {
        const data = MsgCreateTask.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "CreateTask", data);
        return promise.then((data) => MsgCreateTaskResponse.decode(new Reader(data)));
    }
    UpdateTask(request) {
        const data = MsgUpdateTask.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "UpdateTask", data);
        return promise.then((data) => MsgUpdateTaskResponse.decode(new Reader(data)));
    }
    DeleteTask(request) {
        const data = MsgDeleteTask.encode(request).finish();
        const promise = this.rpc.request("blockchaingroup2.helpinghand.helpinghand.Msg", "DeleteTask", data);
        return promise.then((data) => MsgDeleteTaskResponse.decode(new Reader(data)));
    }
}
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
