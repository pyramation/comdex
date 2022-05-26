import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Market } from "./oracle";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
export interface QueryMarketsRequest {
    pagination: PageRequest;
}
export interface QueryMarketsResponse {
    markets: Market[];
    pagination: PageResponse;
}
export interface QueryMarketRequest {
    symbol: string;
}
export interface QueryMarketResponse {
    market: Market;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryMarketsRequest: {
    encode(message: QueryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest;
    fromJSON(object: any): QueryMarketsRequest;
    toJSON(message: QueryMarketsRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryMarketsRequest;
};
export declare const QueryMarketsResponse: {
    encode(message: QueryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse;
    fromJSON(object: any): QueryMarketsResponse;
    toJSON(message: QueryMarketsResponse): unknown;
    fromPartial<I extends {
        markets?: {
            symbol?: string;
            scriptId?: any;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        markets?: {
            symbol?: string;
            scriptId?: any;
        }[] & ({
            symbol?: string;
            scriptId?: any;
        } & {
            symbol?: string;
            scriptId?: any;
        } & Record<Exclude<keyof I["markets"][number], keyof Market>, never>)[] & Record<Exclude<keyof I["markets"], keyof {
            symbol?: string;
            scriptId?: any;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryMarketsResponse>, never>>(object: I): QueryMarketsResponse;
};
export declare const QueryMarketRequest: {
    encode(message: QueryMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketRequest;
    fromJSON(object: any): QueryMarketRequest;
    toJSON(message: QueryMarketRequest): unknown;
    fromPartial<I extends {
        symbol?: string;
    } & {
        symbol?: string;
    } & Record<Exclude<keyof I, "symbol">, never>>(object: I): QueryMarketRequest;
};
export declare const QueryMarketResponse: {
    encode(message: QueryMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketResponse;
    fromJSON(object: any): QueryMarketResponse;
    toJSON(message: QueryMarketResponse): unknown;
    fromPartial<I extends {
        market?: {
            symbol?: string;
            scriptId?: any;
        };
    } & {
        market?: {
            symbol?: string;
            scriptId?: any;
        } & {
            symbol?: string;
            scriptId?: any;
        } & Record<Exclude<keyof I["market"], keyof Market>, never>;
    } & Record<Exclude<keyof I, "market">, never>>(object: I): QueryMarketResponse;
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
            ibc?: {
                port?: string;
                version?: string;
            };
            oracle?: {
                askCount?: any;
                minCount?: any;
                multiplier?: any;
            };
        };
    } & {
        params?: {
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
            } & Record<Exclude<keyof I["params"]["ibc"], keyof import("./params").IBCParams>, never>;
            oracle?: {
                askCount?: any;
                minCount?: any;
                multiplier?: any;
            } & {
                askCount?: any;
                minCount?: any;
                multiplier?: any;
            } & Record<Exclude<keyof I["params"]["oracle"], keyof import("./params").OracleParams>, never>;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
