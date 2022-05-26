import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgAddAssetRequest {
    from: string;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgAddAssetResponse {
}
export interface MsgUpdateAssetRequest {
    from: string;
    id: Long;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgUpdateAssetResponse {
}
export interface MsgAddPairRequest {
    from: string;
    assetIn: Long;
    assetOut: Long;
    liquidationRatio: string;
}
export interface MsgAddPairResponse {
}
export interface MsgUpdatePairRequest {
    from: string;
    id: Long;
    liquidationRatio: string;
}
export interface MsgUpdatePairResponse {
}
export declare const MsgAddAssetRequest: {
    encode(message: MsgAddAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetRequest;
    fromJSON(object: any): MsgAddAssetRequest;
    toJSON(message: MsgAddAssetRequest): unknown;
    fromPartial<I extends {
        from?: string;
        name?: string;
        denom?: string;
        decimals?: any;
    } & {
        from?: string;
        name?: string;
        denom?: string;
        decimals?: any;
    } & Record<Exclude<keyof I, keyof MsgAddAssetRequest>, never>>(object: I): MsgAddAssetRequest;
};
export declare const MsgAddAssetResponse: {
    encode(_: MsgAddAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse;
    fromJSON(_: any): MsgAddAssetResponse;
    toJSON(_: MsgAddAssetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddAssetResponse;
};
export declare const MsgUpdateAssetRequest: {
    encode(message: MsgUpdateAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetRequest;
    fromJSON(object: any): MsgUpdateAssetRequest;
    toJSON(message: MsgUpdateAssetRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        name?: string;
        denom?: string;
        decimals?: any;
    } & {
        from?: string;
        id?: any;
        name?: string;
        denom?: string;
        decimals?: any;
    } & Record<Exclude<keyof I, keyof MsgUpdateAssetRequest>, never>>(object: I): MsgUpdateAssetRequest;
};
export declare const MsgUpdateAssetResponse: {
    encode(_: MsgUpdateAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse;
    fromJSON(_: any): MsgUpdateAssetResponse;
    toJSON(_: MsgUpdateAssetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateAssetResponse;
};
export declare const MsgAddPairRequest: {
    encode(message: MsgAddPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairRequest;
    fromJSON(object: any): MsgAddPairRequest;
    toJSON(message: MsgAddPairRequest): unknown;
    fromPartial<I extends {
        from?: string;
        assetIn?: any;
        assetOut?: any;
        liquidationRatio?: string;
    } & {
        from?: string;
        assetIn?: any;
        assetOut?: any;
        liquidationRatio?: string;
    } & Record<Exclude<keyof I, keyof MsgAddPairRequest>, never>>(object: I): MsgAddPairRequest;
};
export declare const MsgAddPairResponse: {
    encode(_: MsgAddPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairResponse;
    fromJSON(_: any): MsgAddPairResponse;
    toJSON(_: MsgAddPairResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddPairResponse;
};
export declare const MsgUpdatePairRequest: {
    encode(message: MsgUpdatePairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairRequest;
    fromJSON(object: any): MsgUpdatePairRequest;
    toJSON(message: MsgUpdatePairRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        liquidationRatio?: string;
    } & {
        from?: string;
        id?: any;
        liquidationRatio?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdatePairRequest>, never>>(object: I): MsgUpdatePairRequest;
};
export declare const MsgUpdatePairResponse: {
    encode(_: MsgUpdatePairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairResponse;
    fromJSON(_: any): MsgUpdatePairResponse;
    toJSON(_: MsgUpdatePairResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdatePairResponse;
};
