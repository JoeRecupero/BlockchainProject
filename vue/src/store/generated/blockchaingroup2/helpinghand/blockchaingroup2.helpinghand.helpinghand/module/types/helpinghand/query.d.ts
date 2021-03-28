import { Reader, Writer } from "protobufjs/minimal";
import { Completion } from "../helpinghand/completion";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Task } from "../helpinghand/task";
export declare const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCompletionRequest {
    id: number;
}
export interface QueryGetCompletionResponse {
    Completion: Completion | undefined;
}
export interface QueryAllCompletionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCompletionResponse {
    Completion: Completion[];
    pagination: PageResponse | undefined;
}
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
export declare const QueryGetCompletionRequest: {
    encode(message: QueryGetCompletionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCompletionRequest;
    fromJSON(object: any): QueryGetCompletionRequest;
    toJSON(message: QueryGetCompletionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCompletionRequest>): QueryGetCompletionRequest;
};
export declare const QueryGetCompletionResponse: {
    encode(message: QueryGetCompletionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCompletionResponse;
    fromJSON(object: any): QueryGetCompletionResponse;
    toJSON(message: QueryGetCompletionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCompletionResponse>): QueryGetCompletionResponse;
};
export declare const QueryAllCompletionRequest: {
    encode(message: QueryAllCompletionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCompletionRequest;
    fromJSON(object: any): QueryAllCompletionRequest;
    toJSON(message: QueryAllCompletionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCompletionRequest>): QueryAllCompletionRequest;
};
export declare const QueryAllCompletionResponse: {
    encode(message: QueryAllCompletionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCompletionResponse;
    fromJSON(object: any): QueryAllCompletionResponse;
    toJSON(message: QueryAllCompletionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCompletionResponse>): QueryAllCompletionResponse;
};
export declare const QueryGetTaskRequest: {
    encode(message: QueryGetTaskRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTaskRequest;
    fromJSON(object: any): QueryGetTaskRequest;
    toJSON(message: QueryGetTaskRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTaskRequest>): QueryGetTaskRequest;
};
export declare const QueryGetTaskResponse: {
    encode(message: QueryGetTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTaskResponse;
    fromJSON(object: any): QueryGetTaskResponse;
    toJSON(message: QueryGetTaskResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTaskResponse>): QueryGetTaskResponse;
};
export declare const QueryAllTaskRequest: {
    encode(message: QueryAllTaskRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTaskRequest;
    fromJSON(object: any): QueryAllTaskRequest;
    toJSON(message: QueryAllTaskRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTaskRequest>): QueryAllTaskRequest;
};
export declare const QueryAllTaskResponse: {
    encode(message: QueryAllTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTaskResponse;
    fromJSON(object: any): QueryAllTaskResponse;
    toJSON(message: QueryAllTaskResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTaskResponse>): QueryAllTaskResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Completion(request: QueryGetCompletionRequest): Promise<QueryGetCompletionResponse>;
    CompletionAll(request: QueryAllCompletionRequest): Promise<QueryAllCompletionResponse>;
    Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
    TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Completion(request: QueryGetCompletionRequest): Promise<QueryGetCompletionResponse>;
    CompletionAll(request: QueryAllCompletionRequest): Promise<QueryAllCompletionResponse>;
    Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
    TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
