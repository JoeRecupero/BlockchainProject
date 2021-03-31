/* eslint-disable */
import { Completion } from "../helpinghand/completion";
import { Task } from "../helpinghand/task";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  completionList: Completion[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  taskList: Task[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.completionList) {
      Completion.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.taskList) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.completionList = [];
    message.taskList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.completionList.push(
            Completion.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
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

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.completionList) {
      obj.completionList = message.completionList.map((e) =>
        e ? Completion.toJSON(e) : undefined
      );
    } else {
      obj.completionList = [];
    }
    if (message.taskList) {
      obj.taskList = message.taskList.map((e) =>
        e ? Task.toJSON(e) : undefined
      );
    } else {
      obj.taskList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
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

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
