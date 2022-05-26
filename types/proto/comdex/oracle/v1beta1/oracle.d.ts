import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Market {
    symbol: string;
    scriptId: Long;
}
export interface Calldata {
    symbols: string[];
    multiplier: Long;
}
export interface Result {
    rates: Long[];
}
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): unknown;
    fromPartial<I extends {
        symbol?: string;
        scriptId?: any;
    } & {
        symbol?: string;
        scriptId?: any;
    } & Record<Exclude<keyof I, keyof Market>, never>>(object: I): Market;
};
export declare const Calldata: {
    encode(message: Calldata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Calldata;
    fromJSON(object: any): Calldata;
    toJSON(message: Calldata): unknown;
    fromPartial<I extends {
        symbols?: string[];
        multiplier?: any;
    } & {
        symbols?: string[] & string[] & Record<Exclude<keyof I["symbols"], keyof string[]>, never>;
        multiplier?: any;
    } & Record<Exclude<keyof I, keyof Calldata>, never>>(object: I): Calldata;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    fromPartial<I extends {
        rates?: any[];
    } & {
        rates?: any[] & any[] & Record<Exclude<keyof I["rates"], keyof any[]>, never>;
    } & Record<Exclude<keyof I, "rates">, never>>(object: I): Result;
};
