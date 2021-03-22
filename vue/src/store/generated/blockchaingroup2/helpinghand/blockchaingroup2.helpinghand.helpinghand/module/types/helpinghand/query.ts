/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Task } from "../helpinghand/task";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetTaskRequest {
  id: number;
}

export interface QueryGetTaskResponse {
  Task: Task | undefined;
}

export interface QueryAllTaskRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTaskResponse {
  Task: Task[];
  pagination: PageResponse | undefined;
}

const baseQueryGetTaskRequest: object = { id: 0 };

export const QueryGetTaskRequest = {
  encode(
    message: QueryGetTaskRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTaskRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTaskRequest } as QueryGetTaskRequest;
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

  fromJSON(object: any): QueryGetTaskRequest {
    const message = { ...baseQueryGetTaskRequest } as QueryGetTaskRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTaskRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTaskRequest>): QueryGetTaskRequest {
    const message = { ...baseQueryGetTaskRequest } as QueryGetTaskRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTaskResponse: object = {};

export const QueryGetTaskResponse = {
  encode(
    message: QueryGetTaskResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Task !== undefined) {
      Task.encode(message.Task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTaskResponse } as QueryGetTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Task = Task.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTaskResponse {
    const message = { ...baseQueryGetTaskResponse } as QueryGetTaskResponse;
    if (object.Task !== undefined && object.Task !== null) {
      message.Task = Task.fromJSON(object.Task);
    } else {
      message.Task = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTaskResponse): unknown {
    const obj: any = {};
    message.Task !== undefined &&
      (obj.Task = message.Task ? Task.toJSON(message.Task) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTaskResponse>): QueryGetTaskResponse {
    const message = { ...baseQueryGetTaskResponse } as QueryGetTaskResponse;
    if (object.Task !== undefined && object.Task !== null) {
      message.Task = Task.fromPartial(object.Task);
    } else {
      message.Task = undefined;
    }
    return message;
  },
};

const baseQueryAllTaskRequest: object = {};

export const QueryAllTaskRequest = {
  encode(
    message: QueryAllTaskRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTaskRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTaskRequest } as QueryAllTaskRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTaskRequest {
    const message = { ...baseQueryAllTaskRequest } as QueryAllTaskRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTaskRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTaskRequest>): QueryAllTaskRequest {
    const message = { ...baseQueryAllTaskRequest } as QueryAllTaskRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTaskResponse: object = {};

export const QueryAllTaskResponse = {
  encode(
    message: QueryAllTaskResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Task) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTaskResponse } as QueryAllTaskResponse;
    message.Task = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Task.push(Task.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTaskResponse {
    const message = { ...baseQueryAllTaskResponse } as QueryAllTaskResponse;
    message.Task = [];
    if (object.Task !== undefined && object.Task !== null) {
      for (const e of object.Task) {
        message.Task.push(Task.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTaskResponse): unknown {
    const obj: any = {};
    if (message.Task) {
      obj.Task = message.Task.map((e) => (e ? Task.toJSON(e) : undefined));
    } else {
      obj.Task = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTaskResponse>): QueryAllTaskResponse {
    const message = { ...baseQueryAllTaskResponse } as QueryAllTaskResponse;
    message.Task = [];
    if (object.Task !== undefined && object.Task !== null) {
      for (const e of object.Task) {
        message.Task.push(Task.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse> {
    const data = QueryGetTaskRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blockchaingroup2.helpinghand.helpinghand.Query",
      "Task",
      data
    );
    return promise.then((data) =>
      QueryGetTaskResponse.decode(new Reader(data))
    );
  }

  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse> {
    const data = QueryAllTaskRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blockchaingroup2.helpinghand.helpinghand.Query",
      "TaskAll",
      data
    );
    return promise.then((data) =>
      QueryAllTaskResponse.decode(new Reader(data))
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
