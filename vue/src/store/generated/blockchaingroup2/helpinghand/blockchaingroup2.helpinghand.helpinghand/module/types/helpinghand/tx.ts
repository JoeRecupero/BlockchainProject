/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTask {
  creator: string;
  title: string;
  description: string;
  prize: number;
  startedAt: number;
  endedAt: number;
}

export interface MsgCreateTaskResponse {
  id: number;
}

export interface MsgUpdateTask {
  creator: string;
  id: number;
  title: string;
  description: string;
  prize: number;
  startedAt: number;
  endedAt: number;
}

export interface MsgUpdateTaskResponse {}

export interface MsgDeleteTask {
  creator: string;
  id: number;
}

export interface MsgDeleteTaskResponse {}

const baseMsgCreateTask: object = {
  creator: "",
  title: "",
  description: "",
  prize: 0,
  startedAt: 0,
  endedAt: 0,
};

export const MsgCreateTask = {
  encode(message: MsgCreateTask, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
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

  fromJSON(object: any): MsgCreateTask {
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.prize !== undefined && object.prize !== null) {
      message.prize = Number(object.prize);
    } else {
      message.prize = 0;
    }
    if (object.startedAt !== undefined && object.startedAt !== null) {
      message.startedAt = Number(object.startedAt);
    } else {
      message.startedAt = 0;
    }
    if (object.endedAt !== undefined && object.endedAt !== null) {
      message.endedAt = Number(object.endedAt);
    } else {
      message.endedAt = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.prize !== undefined && (obj.prize = message.prize);
    message.startedAt !== undefined && (obj.startedAt = message.startedAt);
    message.endedAt !== undefined && (obj.endedAt = message.endedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTask>): MsgCreateTask {
    const message = { ...baseMsgCreateTask } as MsgCreateTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.prize !== undefined && object.prize !== null) {
      message.prize = object.prize;
    } else {
      message.prize = 0;
    }
    if (object.startedAt !== undefined && object.startedAt !== null) {
      message.startedAt = object.startedAt;
    } else {
      message.startedAt = 0;
    }
    if (object.endedAt !== undefined && object.endedAt !== null) {
      message.endedAt = object.endedAt;
    } else {
      message.endedAt = 0;
    }
    return message;
  },
};

const baseMsgCreateTaskResponse: object = { id: 0 };

export const MsgCreateTaskResponse = {
  encode(
    message: MsgCreateTaskResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTaskResponse {
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTaskResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTaskResponse>
  ): MsgCreateTaskResponse {
    const message = { ...baseMsgCreateTaskResponse } as MsgCreateTaskResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTask: object = {
  creator: "",
  id: 0,
  title: "",
  description: "",
  prize: 0,
  startedAt: 0,
  endedAt: 0,
};

export const MsgUpdateTask = {
  encode(message: MsgUpdateTask, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTask } as MsgUpdateTask;
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

  fromJSON(object: any): MsgUpdateTask {
    const message = { ...baseMsgUpdateTask } as MsgUpdateTask;
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
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.prize !== undefined && object.prize !== null) {
      message.prize = Number(object.prize);
    } else {
      message.prize = 0;
    }
    if (object.startedAt !== undefined && object.startedAt !== null) {
      message.startedAt = Number(object.startedAt);
    } else {
      message.startedAt = 0;
    }
    if (object.endedAt !== undefined && object.endedAt !== null) {
      message.endedAt = Number(object.endedAt);
    } else {
      message.endedAt = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateTask): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgUpdateTask>): MsgUpdateTask {
    const message = { ...baseMsgUpdateTask } as MsgUpdateTask;
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
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.prize !== undefined && object.prize !== null) {
      message.prize = object.prize;
    } else {
      message.prize = 0;
    }
    if (object.startedAt !== undefined && object.startedAt !== null) {
      message.startedAt = object.startedAt;
    } else {
      message.startedAt = 0;
    }
    if (object.endedAt !== undefined && object.endedAt !== null) {
      message.endedAt = object.endedAt;
    } else {
      message.endedAt = 0;
    }
    return message;
  },
};

const baseMsgUpdateTaskResponse: object = {};

export const MsgUpdateTaskResponse = {
  encode(_: MsgUpdateTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTaskResponse } as MsgUpdateTaskResponse;
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

  fromJSON(_: any): MsgUpdateTaskResponse {
    const message = { ...baseMsgUpdateTaskResponse } as MsgUpdateTaskResponse;
    return message;
  },

  toJSON(_: MsgUpdateTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTaskResponse>): MsgUpdateTaskResponse {
    const message = { ...baseMsgUpdateTaskResponse } as MsgUpdateTaskResponse;
    return message;
  },
};

const baseMsgDeleteTask: object = { creator: "", id: 0 };

export const MsgDeleteTask = {
  encode(message: MsgDeleteTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTask } as MsgDeleteTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTask {
    const message = { ...baseMsgDeleteTask } as MsgDeleteTask;
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
    return message;
  },

  toJSON(message: MsgDeleteTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteTask>): MsgDeleteTask {
    const message = { ...baseMsgDeleteTask } as MsgDeleteTask;
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
    return message;
  },
};

const baseMsgDeleteTaskResponse: object = {};

export const MsgDeleteTaskResponse = {
  encode(_: MsgDeleteTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTaskResponse } as MsgDeleteTaskResponse;
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

  fromJSON(_: any): MsgDeleteTaskResponse {
    const message = { ...baseMsgDeleteTaskResponse } as MsgDeleteTaskResponse;
    return message;
  },

  toJSON(_: MsgDeleteTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse {
    const message = { ...baseMsgDeleteTaskResponse } as MsgDeleteTaskResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
  UpdateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse>;
  DeleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request(
      "blockchaingroup2.helpinghand.helpinghand.Msg",
      "CreateTask",
      data
    );
    return promise.then((data) =>
      MsgCreateTaskResponse.decode(new Reader(data))
    );
  }

  UpdateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse> {
    const data = MsgUpdateTask.encode(request).finish();
    const promise = this.rpc.request(
      "blockchaingroup2.helpinghand.helpinghand.Msg",
      "UpdateTask",
      data
    );
    return promise.then((data) =>
      MsgUpdateTaskResponse.decode(new Reader(data))
    );
  }

  DeleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse> {
    const data = MsgDeleteTask.encode(request).finish();
    const promise = this.rpc.request(
      "blockchaingroup2.helpinghand.helpinghand.Msg",
      "DeleteTask",
      data
    );
    return promise.then((data) =>
      MsgDeleteTaskResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
