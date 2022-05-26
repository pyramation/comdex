import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface IBCParams {
    port: string;
    version: string;
}
export interface OracleParams {
    askCount: Long;
    minCount: Long;
    multiplier: Long;
}
export interface Params {
    ibc: IBCParams;
    oracle: OracleParams;
}
export declare const IBCParams: {
    encode(message: IBCParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCParams;
    fromJSON(object: any): IBCParams;
    toJSON(message: IBCParams): unknown;
    fromPartial<I extends {
        port?: string;
        version?: string;
    } & {
        port?: string;
        version?: string;
    } & Record<Exclude<keyof I, keyof IBCParams>, never>>(object: I): IBCParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams;
    fromJSON(object: any): OracleParams;
    toJSON(message: OracleParams): unknown;
    fromPartial<I extends {
        askCount?: any;
        minCount?: any;
        multiplier?: any;
    } & {
        askCount?: any;
        minCount?: any;
        multiplier?: any;
    } & Record<Exclude<keyof I, keyof OracleParams>, never>>(object: I): OracleParams;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        ibc?: {
            port?: string;
            version?: string;
        };
        oracle?: {
            askCount?: any;
            minCount?: any;
            multiplier?: any;
        };
    } & {
        ibc?: {
            port?: string;
            version?: string;
        } & {
            port?: string;
            version?: string;
        } & Record<Exclude<keyof I["ibc"], keyof IBCParams>, never>;
        oracle?: {
            askCount?: any;
            minCount?: any;
            multiplier?: any;
        } & {
            askCount?: any;
            minCount?: any;
            multiplier?: any;
        } & Record<Exclude<keyof I["oracle"], keyof OracleParams>, never>;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
