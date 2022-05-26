import { Height } from "../../../ibc/core/client/v1/client";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgAddMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
    id: Long;
}
export interface MsgAddMarketResponse {
}
export interface MsgUpdateMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
}
export interface MsgUpdateMarketResponse {
}
export interface MsgRemoveMarketForAssetRequest {
    from: string;
    id: Long;
    symbol: string;
}
export interface MsgRemoveMarketForAssetResponse {
}
export interface MsgFetchPriceRequest {
    from: string;
    sourcePort: string;
    sourceChannel: string;
    timeoutHeight: Height;
    timeoutTimestamp: Long;
    symbols: string[];
    scriptId: Long;
    feeLimit: Coin[];
    prepareGas: Long;
    executeGas: Long;
}
export interface MsgFetchPriceResponse {
}
export declare const MsgAddMarketRequest: {
    encode(message: MsgAddMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketRequest;
    fromJSON(object: any): MsgAddMarketRequest;
    toJSON(message: MsgAddMarketRequest): unknown;
    fromPartial<I extends {
        from?: string;
        symbol?: string;
        scriptId?: any;
        id?: any;
    } & {
        from?: string;
        symbol?: string;
        scriptId?: any;
        id?: any;
    } & Record<Exclude<keyof I, keyof MsgAddMarketRequest>, never>>(object: I): MsgAddMarketRequest;
};
export declare const MsgAddMarketResponse: {
    encode(_: MsgAddMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketResponse;
    fromJSON(_: any): MsgAddMarketResponse;
    toJSON(_: MsgAddMarketResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddMarketResponse;
};
export declare const MsgUpdateMarketRequest: {
    encode(message: MsgUpdateMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketRequest;
    fromJSON(object: any): MsgUpdateMarketRequest;
    toJSON(message: MsgUpdateMarketRequest): unknown;
    fromPartial<I extends {
        from?: string;
        symbol?: string;
        scriptId?: any;
    } & {
        from?: string;
        symbol?: string;
        scriptId?: any;
    } & Record<Exclude<keyof I, keyof MsgUpdateMarketRequest>, never>>(object: I): MsgUpdateMarketRequest;
};
export declare const MsgUpdateMarketResponse: {
    encode(_: MsgUpdateMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketResponse;
    fromJSON(_: any): MsgUpdateMarketResponse;
    toJSON(_: MsgUpdateMarketResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateMarketResponse;
};
export declare const MsgRemoveMarketForAssetRequest: {
    encode(message: MsgRemoveMarketForAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetRequest;
    fromJSON(object: any): MsgRemoveMarketForAssetRequest;
    toJSON(message: MsgRemoveMarketForAssetRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        symbol?: string;
    } & {
        from?: string;
        id?: any;
        symbol?: string;
    } & Record<Exclude<keyof I, keyof MsgRemoveMarketForAssetRequest>, never>>(object: I): MsgRemoveMarketForAssetRequest;
};
export declare const MsgRemoveMarketForAssetResponse: {
    encode(_: MsgRemoveMarketForAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetResponse;
    fromJSON(_: any): MsgRemoveMarketForAssetResponse;
    toJSON(_: MsgRemoveMarketForAssetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRemoveMarketForAssetResponse;
};
export declare const MsgFetchPriceRequest: {
    encode(message: MsgFetchPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceRequest;
    fromJSON(object: any): MsgFetchPriceRequest;
    toJSON(message: MsgFetchPriceRequest): unknown;
    fromPartial<I extends {
        from?: string;
        sourcePort?: string;
        sourceChannel?: string;
        timeoutHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        };
        timeoutTimestamp?: any;
        symbols?: string[];
        scriptId?: any;
        feeLimit?: {
            denom?: string;
            amount?: string;
        }[];
        prepareGas?: any;
        executeGas?: any;
    } & {
        from?: string;
        sourcePort?: string;
        sourceChannel?: string;
        timeoutHeight?: {
            revisionNumber?: any;
            revisionHeight?: any;
        } & {
            revisionNumber?: any;
            revisionHeight?: any;
        } & Record<Exclude<keyof I["timeoutHeight"], keyof Height>, never>;
        timeoutTimestamp?: any;
        symbols?: string[] & string[] & Record<Exclude<keyof I["symbols"], keyof string[]>, never>;
        scriptId?: any;
        feeLimit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["feeLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["feeLimit"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        prepareGas?: any;
        executeGas?: any;
    } & Record<Exclude<keyof I, keyof MsgFetchPriceRequest>, never>>(object: I): MsgFetchPriceRequest;
};
export declare const MsgFetchPriceResponse: {
    encode(_: MsgFetchPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceResponse;
    fromJSON(_: any): MsgFetchPriceResponse;
    toJSON(_: MsgFetchPriceResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgFetchPriceResponse;
};
