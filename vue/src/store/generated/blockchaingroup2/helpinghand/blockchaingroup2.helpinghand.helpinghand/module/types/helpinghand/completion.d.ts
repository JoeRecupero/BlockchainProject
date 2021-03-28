import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "blockchaingroup2.helpinghand.helpinghand";
export interface Completion {
    creator: string;
    id: number;
    taskID: number;
    imageURL: string;
    imageHash: string;
    status: string;
}
export declare const Completion: {
    encode(message: Completion, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Completion;
    fromJSON(object: any): Completion;
    toJSON(message: Completion): unknown;
    fromPartial(object: DeepPartial<Completion>): Completion;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
