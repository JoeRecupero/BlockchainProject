/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";

export interface Completion {
  creator: string;
  id: number;
  taskID: number;
  imageURL: string;
  imageHash: string;
<<<<<<< HEAD
  status: string;
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}

const baseCompletion: object = {
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

export const Completion = {
  encode(message: Completion, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Completion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompletion } as Completion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Completion {
    const message = { ...baseCompletion } as Completion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.taskID !== undefined && object.taskID !== null) {
      message.taskID = Number(object.taskID);
    } else {
      message.taskID = 0;
    }
    if (object.imageURL !== undefined && object.imageURL !== null) {
      message.imageURL = String(object.imageURL);
    } else {
      message.imageURL = "";
    }
    if (object.imageHash !== undefined && object.imageHash !== null) {
      message.imageHash = String(object.imageHash);
    } else {
      message.imageHash = "";
    }
<<<<<<< HEAD
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
    return message;
  },

  toJSON(message: Completion): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<Completion>): Completion {
    const message = { ...baseCompletion } as Completion;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.taskID !== undefined && object.taskID !== null) {
      message.taskID = object.taskID;
    } else {
      message.taskID = 0;
    }
    if (object.imageURL !== undefined && object.imageURL !== null) {
      message.imageURL = object.imageURL;
    } else {
      message.imageURL = "";
    }
    if (object.imageHash !== undefined && object.imageHash !== null) {
      message.imageHash = object.imageHash;
    } else {
      message.imageHash = "";
    }
<<<<<<< HEAD
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
