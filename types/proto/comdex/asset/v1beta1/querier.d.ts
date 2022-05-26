import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "./asset";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QueryAssetsRequest {
    pagination: PageRequest;
}
export interface QueryAssetsResponse {
    assets: Asset[];
    pagination: PageResponse;
}
export interface QueryAssetRequest {
    id: Long;
}
export interface QueryAssetResponse {
    asset: Asset;
}
export interface PairInfo {
    id: Long;
    assetIn: Long;
    denomIn: string;
    assetOut: Long;
    denomOut: string;
    liquidationRatio: string;
}
export interface QueryPairsRequest {
    pagination: PageRequest;
}
export interface QueryPairsResponse {
    pairsInfo: PairInfo[];
    pagination: PageResponse;
}
export interface QueryPairRequest {
    id: Long;
}
export interface QueryPairResponse {
    pairInfo: PairInfo;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryAssetsRequest: {
    encode(message: QueryAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsRequest;
    fromJSON(object: any): QueryAssetsRequest;
    toJSON(message: QueryAssetsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAssetsRequest;
};
export declare const QueryAssetsResponse: {
    encode(message: QueryAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsResponse;
    fromJSON(object: any): QueryAssetsResponse;
    toJSON(message: QueryAssetsResponse): unknown;
    fromPartial<I extends {
        assets?: {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        assets?: {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        }[] & ({
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        } & {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        } & Record<Exclude<keyof I["assets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAssetsResponse>, never>>(object: I): QueryAssetsResponse;
};
export declare const QueryAssetRequest: {
    encode(message: QueryAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest;
    fromJSON(object: any): QueryAssetRequest;
    toJSON(message: QueryAssetRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryAssetRequest;
};
export declare const QueryAssetResponse: {
    encode(message: QueryAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse;
    fromJSON(object: any): QueryAssetResponse;
    toJSON(message: QueryAssetResponse): unknown;
    fromPartial<I extends {
        asset?: {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        };
    } & {
        asset?: {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        } & {
            id?: any;
            name?: string;
            denom?: string;
            decimals?: any;
        } & Record<Exclude<keyof I["asset"], keyof Asset>, never>;
    } & Record<Exclude<keyof I, "asset">, never>>(object: I): QueryAssetResponse;
};
export declare const PairInfo: {
    encode(message: PairInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PairInfo;
    fromJSON(object: any): PairInfo;
    toJSON(message: PairInfo): unknown;
    fromPartial<I extends {
        id?: any;
        assetIn?: any;
        denomIn?: string;
        assetOut?: any;
        denomOut?: string;
        liquidationRatio?: string;
    } & {
        id?: any;
        assetIn?: any;
        denomIn?: string;
        assetOut?: any;
        denomOut?: string;
        liquidationRatio?: string;
    } & Record<Exclude<keyof I, keyof PairInfo>, never>>(object: I): PairInfo;
};
export declare const QueryPairsRequest: {
    encode(message: QueryPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest;
    fromJSON(object: any): QueryPairsRequest;
    toJSON(message: QueryPairsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryPairsRequest;
};
export declare const QueryPairsResponse: {
    encode(message: QueryPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse;
    fromJSON(object: any): QueryPairsResponse;
    toJSON(message: QueryPairsResponse): unknown;
    fromPartial<I extends {
        pairsInfo?: {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        pairsInfo?: {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        }[] & ({
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        } & {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        } & Record<Exclude<keyof I["pairsInfo"][number], keyof PairInfo>, never>)[] & Record<Exclude<keyof I["pairsInfo"], keyof {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryPairsResponse>, never>>(object: I): QueryPairsResponse;
};
export declare const QueryPairRequest: {
    encode(message: QueryPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest;
    fromJSON(object: any): QueryPairRequest;
    toJSON(message: QueryPairRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryPairRequest;
};
export declare const QueryPairResponse: {
    encode(message: QueryPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse;
    fromJSON(object: any): QueryPairResponse;
    toJSON(message: QueryPairResponse): unknown;
    fromPartial<I extends {
        pairInfo?: {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        };
    } & {
        pairInfo?: {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        } & {
            id?: any;
            assetIn?: any;
            denomIn?: string;
            assetOut?: any;
            denomOut?: string;
            liquidationRatio?: string;
        } & Record<Exclude<keyof I["pairInfo"], keyof PairInfo>, never>;
    } & Record<Exclude<keyof I, "pairInfo">, never>>(object: I): QueryPairResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            admin?: string;
        };
    } & {
        params?: {
            admin?: string;
        } & {
            admin?: string;
        } & Record<Exclude<keyof I["params"], "admin">, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
