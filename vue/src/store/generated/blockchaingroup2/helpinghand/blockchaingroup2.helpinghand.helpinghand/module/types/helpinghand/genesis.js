/* eslint-disable */
import { Completion } from "../helpinghand/completion";
import { Task } from "../helpinghand/task";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.completionList) {
            Completion.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.taskList) {
            Task.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.completionList = [];
        message.taskList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.completionList.push(Completion.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.taskList.push(Task.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.completionList = [];
        message.taskList = [];
        if (object.completionList !== undefined && object.completionList !== null) {
            for (const e of object.completionList) {
                message.completionList.push(Completion.fromJSON(e));
            }
        }
        if (object.taskList !== undefined && object.taskList !== null) {
            for (const e of object.taskList) {
                message.taskList.push(Task.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.completionList) {
            obj.completionList = message.completionList.map((e) => e ? Completion.toJSON(e) : undefined);
        }
        else {
            obj.completionList = [];
        }
        if (message.taskList) {
            obj.taskList = message.taskList.map((e) => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.taskList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.completionList = [];
        message.taskList = [];
        if (object.completionList !== undefined && object.completionList !== null) {
            for (const e of object.completionList) {
                message.completionList.push(Completion.fromPartial(e));
            }
        }
        if (object.taskList !== undefined && object.taskList !== null) {
            for (const e of object.taskList) {
                message.taskList.push(Task.fromPartial(e));
            }
        }
        return message;
    },
};
