import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCompletion {
    creator: string;
    taskID: number;
    imageURL: string;
    imageHash: string;
<<<<<<< HEAD
    status: string;
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}
export interface MsgCreateCompletionResponse {
    id: number;
}
export interface MsgUpdateCompletion {
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
export interface MsgUpdateCompletionResponse {
}
export interface MsgDeleteCompletion {
    creator: string;
    id: number;
}
export interface MsgDeleteCompletionResponse {
}
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
export interface MsgUpdateTaskResponse {
}
export interface MsgDeleteTask {
    creator: string;
    id: number;
}
export interface MsgDeleteTaskResponse {
}
export declare const MsgCreateCompletion: {
    encode(message: MsgCreateCompletion, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCompletion;
    fromJSON(object: any): MsgCreateCompletion;
    toJSON(message: MsgCreateCompletion): unknown;
    fromPartial(object: DeepPartial<MsgCreateCompletion>): MsgCreateCompletion;
};
export declare const MsgCreateCompletionResponse: {
    encode(message: MsgCreateCompletionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCompletionResponse;
    fromJSON(object: any): MsgCreateCompletionResponse;
    toJSON(message: MsgCreateCompletionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCompletionResponse>): MsgCreateCompletionResponse;
};
export declare const MsgUpdateCompletion: {
    encode(message: MsgUpdateCompletion, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCompletion;
    fromJSON(object: any): MsgUpdateCompletion;
    toJSON(message: MsgUpdateCompletion): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCompletion>): MsgUpdateCompletion;
};
export declare const MsgUpdateCompletionResponse: {
    encode(_: MsgUpdateCompletionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCompletionResponse;
    fromJSON(_: any): MsgUpdateCompletionResponse;
    toJSON(_: MsgUpdateCompletionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCompletionResponse>): MsgUpdateCompletionResponse;
};
export declare const MsgDeleteCompletion: {
    encode(message: MsgDeleteCompletion, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCompletion;
    fromJSON(object: any): MsgDeleteCompletion;
    toJSON(message: MsgDeleteCompletion): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCompletion>): MsgDeleteCompletion;
};
export declare const MsgDeleteCompletionResponse: {
    encode(_: MsgDeleteCompletionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCompletionResponse;
    fromJSON(_: any): MsgDeleteCompletionResponse;
    toJSON(_: MsgDeleteCompletionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCompletionResponse>): MsgDeleteCompletionResponse;
};
export declare const MsgCreateTask: {
    encode(message: MsgCreateTask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTask;
    fromJSON(object: any): MsgCreateTask;
    toJSON(message: MsgCreateTask): unknown;
    fromPartial(object: DeepPartial<MsgCreateTask>): MsgCreateTask;
};
export declare const MsgCreateTaskResponse: {
    encode(message: MsgCreateTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTaskResponse;
    fromJSON(object: any): MsgCreateTaskResponse;
    toJSON(message: MsgCreateTaskResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTaskResponse>): MsgCreateTaskResponse;
};
export declare const MsgUpdateTask: {
    encode(message: MsgUpdateTask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTask;
    fromJSON(object: any): MsgUpdateTask;
    toJSON(message: MsgUpdateTask): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTask>): MsgUpdateTask;
};
export declare const MsgUpdateTaskResponse: {
    encode(_: MsgUpdateTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTaskResponse;
    fromJSON(_: any): MsgUpdateTaskResponse;
    toJSON(_: MsgUpdateTaskResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTaskResponse>): MsgUpdateTaskResponse;
};
export declare const MsgDeleteTask: {
    encode(message: MsgDeleteTask, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTask;
    fromJSON(object: any): MsgDeleteTask;
    toJSON(message: MsgDeleteTask): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTask>): MsgDeleteTask;
};
export declare const MsgDeleteTaskResponse: {
    encode(_: MsgDeleteTaskResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTaskResponse;
    fromJSON(_: any): MsgDeleteTaskResponse;
    toJSON(_: MsgDeleteTaskResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCompletion(request: MsgCreateCompletion): Promise<MsgCreateCompletionResponse>;
    UpdateCompletion(request: MsgUpdateCompletion): Promise<MsgUpdateCompletionResponse>;
    DeleteCompletion(request: MsgDeleteCompletion): Promise<MsgDeleteCompletionResponse>;
    CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
    UpdateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse>;
    DeleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCompletion(request: MsgCreateCompletion): Promise<MsgCreateCompletionResponse>;
    UpdateCompletion(request: MsgUpdateCompletion): Promise<MsgUpdateCompletionResponse>;
    DeleteCompletion(request: MsgDeleteCompletion): Promise<MsgDeleteCompletionResponse>;
    CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
    UpdateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse>;
    DeleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
