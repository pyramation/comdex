import * as _0 from "./asset/v1beta1/asset";
import * as _1 from "./asset/v1beta1/events";
import * as _2 from "./asset/v1beta1/genesis";
import * as _3 from "./asset/v1beta1/gov";
import * as _4 from "./asset/v1beta1/msg";
import * as _5 from "./asset/v1beta1/pair";
import * as _6 from "./asset/v1beta1/params";
import * as _7 from "./asset/v1beta1/querier";
import * as _8 from "./oracle/v1beta1/genesis";
import * as _9 from "./oracle/v1beta1/gov";
import * as _10 from "./oracle/v1beta1/msg";
import * as _11 from "./oracle/v1beta1/oracle";
import * as _12 from "./oracle/v1beta1/params";
import * as _13 from "./oracle/v1beta1/querier";
import * as _14 from "./vault/v1beta1/events";
import * as _15 from "./vault/v1beta1/genesis";
import * as _16 from "./vault/v1beta1/msg";
import * as _17 from "./vault/v1beta1/querier";
import * as _18 from "./vault/v1beta1/vault";
export declare namespace comdex {
    namespace asset {
        const v1beta1: {
            QueryAssetsRequest: {
                encode(message: _7.QueryAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAssetsRequest;
                fromJSON(object: any): _7.QueryAssetsRequest;
                toJSON(message: _7.QueryAssetsRequest): unknown;
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
                    } & Record<Exclude<keyof I["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I, "pagination">, never>>(object: I): _7.QueryAssetsRequest;
            };
            QueryAssetsResponse: {
                encode(message: _7.QueryAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAssetsResponse;
                fromJSON(object: any): _7.QueryAssetsResponse;
                toJSON(message: _7.QueryAssetsResponse): unknown;
                fromPartial<I_1 extends {
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
                    } & Record<Exclude<keyof I_1["assets"][number], keyof _0.Asset>, never>)[] & Record<Exclude<keyof I_1["assets"], keyof {
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
                    } & Record<Exclude<keyof I_1["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_1, keyof _7.QueryAssetsResponse>, never>>(object: I_1): _7.QueryAssetsResponse;
            };
            QueryAssetRequest: {
                encode(message: _7.QueryAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAssetRequest;
                fromJSON(object: any): _7.QueryAssetRequest;
                toJSON(message: _7.QueryAssetRequest): unknown;
                fromPartial<I_2 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_2, "id">, never>>(object: I_2): _7.QueryAssetRequest;
            };
            QueryAssetResponse: {
                encode(message: _7.QueryAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAssetResponse;
                fromJSON(object: any): _7.QueryAssetResponse;
                toJSON(message: _7.QueryAssetResponse): unknown;
                fromPartial<I_3 extends {
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
                    } & Record<Exclude<keyof I_3["asset"], keyof _0.Asset>, never>;
                } & Record<Exclude<keyof I_3, "asset">, never>>(object: I_3): _7.QueryAssetResponse;
            };
            PairInfo: {
                encode(message: _7.PairInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PairInfo;
                fromJSON(object: any): _7.PairInfo;
                toJSON(message: _7.PairInfo): unknown;
                fromPartial<I_4 extends {
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
                } & Record<Exclude<keyof I_4, keyof _7.PairInfo>, never>>(object: I_4): _7.PairInfo;
            };
            QueryPairsRequest: {
                encode(message: _7.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryPairsRequest;
                fromJSON(object: any): _7.QueryPairsRequest;
                toJSON(message: _7.QueryPairsRequest): unknown;
                fromPartial<I_5 extends {
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
                    } & Record<Exclude<keyof I_5["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_5, "pagination">, never>>(object: I_5): _7.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _7.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryPairsResponse;
                fromJSON(object: any): _7.QueryPairsResponse;
                toJSON(message: _7.QueryPairsResponse): unknown;
                fromPartial<I_6 extends {
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
                    } & Record<Exclude<keyof I_6["pairsInfo"][number], keyof _7.PairInfo>, never>)[] & Record<Exclude<keyof I_6["pairsInfo"], keyof {
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
                    } & Record<Exclude<keyof I_6["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_6, keyof _7.QueryPairsResponse>, never>>(object: I_6): _7.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _7.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryPairRequest;
                fromJSON(object: any): _7.QueryPairRequest;
                toJSON(message: _7.QueryPairRequest): unknown;
                fromPartial<I_7 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_7, "id">, never>>(object: I_7): _7.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _7.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryPairResponse;
                fromJSON(object: any): _7.QueryPairResponse;
                toJSON(message: _7.QueryPairResponse): unknown;
                fromPartial<I_8 extends {
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
                    } & Record<Exclude<keyof I_8["pairInfo"], keyof _7.PairInfo>, never>;
                } & Record<Exclude<keyof I_8, "pairInfo">, never>>(object: I_8): _7.QueryPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _7.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial<I_10 extends {
                    params?: {
                        admin?: string;
                    };
                } & {
                    params?: {
                        admin?: string;
                    } & {
                        admin?: string;
                    } & Record<Exclude<keyof I_10["params"], "admin">, never>;
                } & Record<Exclude<keyof I_10, "params">, never>>(object: I_10): _7.QueryParamsResponse;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial<I_11 extends {
                    admin?: string;
                } & {
                    admin?: string;
                } & Record<Exclude<keyof I_11, "admin">, never>>(object: I_11): _6.Params;
            };
            Pair: {
                encode(message: _5.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Pair;
                fromJSON(object: any): _5.Pair;
                toJSON(message: _5.Pair): unknown;
                fromPartial<I_12 extends {
                    id?: any;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                } & {
                    id?: any;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                } & Record<Exclude<keyof I_12, keyof _5.Pair>, never>>(object: I_12): _5.Pair;
            };
            MsgAddAssetRequest: {
                encode(message: _4.MsgAddAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgAddAssetRequest;
                fromJSON(object: any): _4.MsgAddAssetRequest;
                toJSON(message: _4.MsgAddAssetRequest): unknown;
                fromPartial<I_13 extends {
                    from?: string;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                } & {
                    from?: string;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                } & Record<Exclude<keyof I_13, keyof _4.MsgAddAssetRequest>, never>>(object: I_13): _4.MsgAddAssetRequest;
            };
            MsgAddAssetResponse: {
                encode(_: _4.MsgAddAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgAddAssetResponse;
                fromJSON(_: any): _4.MsgAddAssetResponse;
                toJSON(_: _4.MsgAddAssetResponse): unknown;
                fromPartial<I_14 extends {} & {} & Record<Exclude<keyof I_14, never>, never>>(_: I_14): _4.MsgAddAssetResponse;
            };
            MsgUpdateAssetRequest: {
                encode(message: _4.MsgUpdateAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateAssetRequest;
                fromJSON(object: any): _4.MsgUpdateAssetRequest;
                toJSON(message: _4.MsgUpdateAssetRequest): unknown;
                fromPartial<I_15 extends {
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
                } & Record<Exclude<keyof I_15, keyof _4.MsgUpdateAssetRequest>, never>>(object: I_15): _4.MsgUpdateAssetRequest;
            };
            MsgUpdateAssetResponse: {
                encode(_: _4.MsgUpdateAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateAssetResponse;
                fromJSON(_: any): _4.MsgUpdateAssetResponse;
                toJSON(_: _4.MsgUpdateAssetResponse): unknown;
                fromPartial<I_16 extends {} & {} & Record<Exclude<keyof I_16, never>, never>>(_: I_16): _4.MsgUpdateAssetResponse;
            };
            MsgAddPairRequest: {
                encode(message: _4.MsgAddPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgAddPairRequest;
                fromJSON(object: any): _4.MsgAddPairRequest;
                toJSON(message: _4.MsgAddPairRequest): unknown;
                fromPartial<I_17 extends {
                    from?: string;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                } & {
                    from?: string;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                } & Record<Exclude<keyof I_17, keyof _4.MsgAddPairRequest>, never>>(object: I_17): _4.MsgAddPairRequest;
            };
            MsgAddPairResponse: {
                encode(_: _4.MsgAddPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgAddPairResponse;
                fromJSON(_: any): _4.MsgAddPairResponse;
                toJSON(_: _4.MsgAddPairResponse): unknown;
                fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _4.MsgAddPairResponse;
            };
            MsgUpdatePairRequest: {
                encode(message: _4.MsgUpdatePairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdatePairRequest;
                fromJSON(object: any): _4.MsgUpdatePairRequest;
                toJSON(message: _4.MsgUpdatePairRequest): unknown;
                fromPartial<I_19 extends {
                    from?: string;
                    id?: any;
                    liquidationRatio?: string;
                } & {
                    from?: string;
                    id?: any;
                    liquidationRatio?: string;
                } & Record<Exclude<keyof I_19, keyof _4.MsgUpdatePairRequest>, never>>(object: I_19): _4.MsgUpdatePairRequest;
            };
            MsgUpdatePairResponse: {
                encode(_: _4.MsgUpdatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdatePairResponse;
                fromJSON(_: any): _4.MsgUpdatePairResponse;
                toJSON(_: _4.MsgUpdatePairResponse): unknown;
                fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _4.MsgUpdatePairResponse;
            };
            UpdateAdminProposal: {
                encode(message: _3.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.UpdateAdminProposal;
                fromJSON(object: any): _3.UpdateAdminProposal;
                toJSON(message: _3.UpdateAdminProposal): unknown;
                fromPartial<I_21 extends {
                    title?: string;
                    description?: string;
                    address?: string;
                } & {
                    title?: string;
                    description?: string;
                    address?: string;
                } & Record<Exclude<keyof I_21, keyof _3.UpdateAdminProposal>, never>>(object: I_21): _3.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromJSON(object: any): _2.GenesisState;
                toJSON(message: _2.GenesisState): unknown;
                fromPartial<I_22 extends {
                    assets?: {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    }[];
                    pairs?: {
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    }[];
                    params?: {
                        admin?: string;
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
                    } & Record<Exclude<keyof I_22["assets"][number], keyof _0.Asset>, never>)[] & Record<Exclude<keyof I_22["assets"], keyof {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    }[]>, never>;
                    pairs?: {
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    }[] & ({
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    } & {
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    } & Record<Exclude<keyof I_22["pairs"][number], keyof _5.Pair>, never>)[] & Record<Exclude<keyof I_22["pairs"], keyof {
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    }[]>, never>;
                    params?: {
                        admin?: string;
                    } & {
                        admin?: string;
                    } & Record<Exclude<keyof I_22["params"], "admin">, never>;
                } & Record<Exclude<keyof I_22, keyof _2.GenesisState>, never>>(object: I_22): _2.GenesisState;
            };
            EventAddPair: {
                encode(message: _1.EventAddPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventAddPair;
                fromJSON(object: any): _1.EventAddPair;
                toJSON(message: _1.EventAddPair): unknown;
                fromPartial<I_23 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_23, "id">, never>>(object: I_23): _1.EventAddPair;
            };
            Asset: {
                encode(message: _0.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Asset;
                fromJSON(object: any): _0.Asset;
                toJSON(message: _0.Asset): unknown;
                fromPartial<I_24 extends {
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                } & {
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                } & Record<Exclude<keyof I_24, keyof _0.Asset>, never>>(object: I_24): _0.Asset;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            QueryMarketsRequest: {
                encode(message: _13.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryMarketsRequest;
                fromJSON(object: any): _13.QueryMarketsRequest;
                toJSON(message: _13.QueryMarketsRequest): unknown;
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
                    } & Record<Exclude<keyof I["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I, "pagination">, never>>(object: I): _13.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _13.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryMarketsResponse;
                fromJSON(object: any): _13.QueryMarketsResponse;
                toJSON(message: _13.QueryMarketsResponse): unknown;
                fromPartial<I_1 extends {
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
                    } & Record<Exclude<keyof I_1["markets"][number], keyof _11.Market>, never>)[] & Record<Exclude<keyof I_1["markets"], keyof {
                        symbol?: string;
                        scriptId?: any;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_1["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_1, keyof _13.QueryMarketsResponse>, never>>(object: I_1): _13.QueryMarketsResponse;
            };
            QueryMarketRequest: {
                encode(message: _13.QueryMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryMarketRequest;
                fromJSON(object: any): _13.QueryMarketRequest;
                toJSON(message: _13.QueryMarketRequest): unknown;
                fromPartial<I_2 extends {
                    symbol?: string;
                } & {
                    symbol?: string;
                } & Record<Exclude<keyof I_2, "symbol">, never>>(object: I_2): _13.QueryMarketRequest;
            };
            QueryMarketResponse: {
                encode(message: _13.QueryMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryMarketResponse;
                fromJSON(object: any): _13.QueryMarketResponse;
                toJSON(message: _13.QueryMarketResponse): unknown;
                fromPartial<I_3 extends {
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
                    } & Record<Exclude<keyof I_3["market"], keyof _11.Market>, never>;
                } & Record<Exclude<keyof I_3, "market">, never>>(object: I_3): _13.QueryMarketResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial<I_5 extends {
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
                        } & Record<Exclude<keyof I_5["params"]["ibc"], keyof _12.IBCParams>, never>;
                        oracle?: {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        } & {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        } & Record<Exclude<keyof I_5["params"]["oracle"], keyof _12.OracleParams>, never>;
                    } & Record<Exclude<keyof I_5["params"], keyof _12.Params>, never>;
                } & Record<Exclude<keyof I_5, "params">, never>>(object: I_5): _13.QueryParamsResponse;
            };
            IBCParams: {
                encode(message: _12.IBCParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.IBCParams;
                fromJSON(object: any): _12.IBCParams;
                toJSON(message: _12.IBCParams): unknown;
                fromPartial<I_6 extends {
                    port?: string;
                    version?: string;
                } & {
                    port?: string;
                    version?: string;
                } & Record<Exclude<keyof I_6, keyof _12.IBCParams>, never>>(object: I_6): _12.IBCParams;
            };
            OracleParams: {
                encode(message: _12.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.OracleParams;
                fromJSON(object: any): _12.OracleParams;
                toJSON(message: _12.OracleParams): unknown;
                fromPartial<I_7 extends {
                    askCount?: any;
                    minCount?: any;
                    multiplier?: any;
                } & {
                    askCount?: any;
                    minCount?: any;
                    multiplier?: any;
                } & Record<Exclude<keyof I_7, keyof _12.OracleParams>, never>>(object: I_7): _12.OracleParams;
            };
            Params: {
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Params;
                fromJSON(object: any): _12.Params;
                toJSON(message: _12.Params): unknown;
                fromPartial<I_8 extends {
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
                    } & Record<Exclude<keyof I_8["ibc"], keyof _12.IBCParams>, never>;
                    oracle?: {
                        askCount?: any;
                        minCount?: any;
                        multiplier?: any;
                    } & {
                        askCount?: any;
                        minCount?: any;
                        multiplier?: any;
                    } & Record<Exclude<keyof I_8["oracle"], keyof _12.OracleParams>, never>;
                } & Record<Exclude<keyof I_8, keyof _12.Params>, never>>(object: I_8): _12.Params;
            };
            Market: {
                encode(message: _11.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Market;
                fromJSON(object: any): _11.Market;
                toJSON(message: _11.Market): unknown;
                fromPartial<I_9 extends {
                    symbol?: string;
                    scriptId?: any;
                } & {
                    symbol?: string;
                    scriptId?: any;
                } & Record<Exclude<keyof I_9, keyof _11.Market>, never>>(object: I_9): _11.Market;
            };
            Calldata: {
                encode(message: _11.Calldata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Calldata;
                fromJSON(object: any): _11.Calldata;
                toJSON(message: _11.Calldata): unknown;
                fromPartial<I_10 extends {
                    symbols?: string[];
                    multiplier?: any;
                } & {
                    symbols?: string[] & string[] & Record<Exclude<keyof I_10["symbols"], keyof string[]>, never>;
                    multiplier?: any;
                } & Record<Exclude<keyof I_10, keyof _11.Calldata>, never>>(object: I_10): _11.Calldata;
            };
            Result: {
                encode(message: _11.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Result;
                fromJSON(object: any): _11.Result;
                toJSON(message: _11.Result): unknown;
                fromPartial<I_11 extends {
                    rates?: any[];
                } & {
                    rates?: any[] & any[] & Record<Exclude<keyof I_11["rates"], keyof any[]>, never>;
                } & Record<Exclude<keyof I_11, "rates">, never>>(object: I_11): _11.Result;
            };
            MsgAddMarketRequest: {
                encode(message: _10.MsgAddMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgAddMarketRequest;
                fromJSON(object: any): _10.MsgAddMarketRequest;
                toJSON(message: _10.MsgAddMarketRequest): unknown;
                fromPartial<I_12 extends {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                    id?: any;
                } & {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                    id?: any;
                } & Record<Exclude<keyof I_12, keyof _10.MsgAddMarketRequest>, never>>(object: I_12): _10.MsgAddMarketRequest;
            };
            MsgAddMarketResponse: {
                encode(_: _10.MsgAddMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgAddMarketResponse;
                fromJSON(_: any): _10.MsgAddMarketResponse;
                toJSON(_: _10.MsgAddMarketResponse): unknown;
                fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _10.MsgAddMarketResponse;
            };
            MsgUpdateMarketRequest: {
                encode(message: _10.MsgUpdateMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateMarketRequest;
                fromJSON(object: any): _10.MsgUpdateMarketRequest;
                toJSON(message: _10.MsgUpdateMarketRequest): unknown;
                fromPartial<I_14 extends {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                } & {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                } & Record<Exclude<keyof I_14, keyof _10.MsgUpdateMarketRequest>, never>>(object: I_14): _10.MsgUpdateMarketRequest;
            };
            MsgUpdateMarketResponse: {
                encode(_: _10.MsgUpdateMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateMarketResponse;
                fromJSON(_: any): _10.MsgUpdateMarketResponse;
                toJSON(_: _10.MsgUpdateMarketResponse): unknown;
                fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _10.MsgUpdateMarketResponse;
            };
            MsgRemoveMarketForAssetRequest: {
                encode(message: _10.MsgRemoveMarketForAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgRemoveMarketForAssetRequest;
                fromJSON(object: any): _10.MsgRemoveMarketForAssetRequest;
                toJSON(message: _10.MsgRemoveMarketForAssetRequest): unknown;
                fromPartial<I_16 extends {
                    from?: string;
                    id?: any;
                    symbol?: string;
                } & {
                    from?: string;
                    id?: any;
                    symbol?: string;
                } & Record<Exclude<keyof I_16, keyof _10.MsgRemoveMarketForAssetRequest>, never>>(object: I_16): _10.MsgRemoveMarketForAssetRequest;
            };
            MsgRemoveMarketForAssetResponse: {
                encode(_: _10.MsgRemoveMarketForAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgRemoveMarketForAssetResponse;
                fromJSON(_: any): _10.MsgRemoveMarketForAssetResponse;
                toJSON(_: _10.MsgRemoveMarketForAssetResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _10.MsgRemoveMarketForAssetResponse;
            };
            MsgFetchPriceRequest: {
                encode(message: _10.MsgFetchPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgFetchPriceRequest;
                fromJSON(object: any): _10.MsgFetchPriceRequest;
                toJSON(message: _10.MsgFetchPriceRequest): unknown;
                fromPartial<I_18 extends {
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
                    } & Record<Exclude<keyof I_18["timeoutHeight"], keyof import("../ibc/core/client/v1/client").Height>, never>;
                    timeoutTimestamp?: any;
                    symbols?: string[] & string[] & Record<Exclude<keyof I_18["symbols"], keyof string[]>, never>;
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
                    } & Record<Exclude<keyof I_18["feeLimit"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_18["feeLimit"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    prepareGas?: any;
                    executeGas?: any;
                } & Record<Exclude<keyof I_18, keyof _10.MsgFetchPriceRequest>, never>>(object: I_18): _10.MsgFetchPriceRequest;
            };
            MsgFetchPriceResponse: {
                encode(_: _10.MsgFetchPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgFetchPriceResponse;
                fromJSON(_: any): _10.MsgFetchPriceResponse;
                toJSON(_: _10.MsgFetchPriceResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _10.MsgFetchPriceResponse;
            };
            UpdateAdminProposal: {
                encode(message: _9.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.UpdateAdminProposal;
                fromJSON(object: any): _9.UpdateAdminProposal;
                toJSON(message: _9.UpdateAdminProposal): unknown;
                fromPartial<I_20 extends {
                    title?: string;
                    description?: string;
                    address?: string;
                } & {
                    title?: string;
                    description?: string;
                    address?: string;
                } & Record<Exclude<keyof I_20, keyof _9.UpdateAdminProposal>, never>>(object: I_20): _9.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): unknown;
                fromPartial<I_21 extends {
                    markets?: {
                        symbol?: string;
                        scriptId?: any;
                    }[];
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
                    markets?: {
                        symbol?: string;
                        scriptId?: any;
                    }[] & ({
                        symbol?: string;
                        scriptId?: any;
                    } & {
                        symbol?: string;
                        scriptId?: any;
                    } & Record<Exclude<keyof I_21["markets"][number], keyof _11.Market>, never>)[] & Record<Exclude<keyof I_21["markets"], keyof {
                        symbol?: string;
                        scriptId?: any;
                    }[]>, never>;
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
                        } & Record<Exclude<keyof I_21["params"]["ibc"], keyof _12.IBCParams>, never>;
                        oracle?: {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        } & {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        } & Record<Exclude<keyof I_21["params"]["oracle"], keyof _12.OracleParams>, never>;
                    } & Record<Exclude<keyof I_21["params"], keyof _12.Params>, never>;
                } & Record<Exclude<keyof I_21, keyof _8.GenesisState>, never>>(object: I_21): _8.GenesisState;
            };
        };
    }
    namespace vault {
        const v1beta1: {
            Vault: {
                encode(message: _18.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Vault;
                fromJSON(object: any): _18.Vault;
                toJSON(message: _18.Vault): unknown;
                fromPartial<I extends {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                } & {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                } & Record<Exclude<keyof I, keyof _18.Vault>, never>>(object: I): _18.Vault;
            };
            VaultInfo: {
                encode(message: _17.VaultInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.VaultInfo;
                fromJSON(object: any): _17.VaultInfo;
                toJSON(message: _17.VaultInfo): unknown;
                fromPartial<I_1 extends {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralizationRatio?: string;
                } & {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_1["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_1["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    collateralizationRatio?: string;
                } & Record<Exclude<keyof I_1, keyof _17.VaultInfo>, never>>(object: I_1): _17.VaultInfo;
            };
            QueryVaultRequest: {
                encode(message: _17.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryVaultRequest;
                fromJSON(object: any): _17.QueryVaultRequest;
                toJSON(message: _17.QueryVaultRequest): unknown;
                fromPartial<I_2 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_2, "id">, never>>(object: I_2): _17.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _17.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryVaultResponse;
                fromJSON(object: any): _17.QueryVaultResponse;
                toJSON(message: _17.QueryVaultResponse): unknown;
                fromPartial<I_3 extends {
                    vaultInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    };
                } & {
                    vaultInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    } & {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_3["vaultInfo"]["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        debt?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_3["vaultInfo"]["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        collateralizationRatio?: string;
                    } & Record<Exclude<keyof I_3["vaultInfo"], keyof _17.VaultInfo>, never>;
                } & Record<Exclude<keyof I_3, "vaultInfo">, never>>(object: I_3): _17.QueryVaultResponse;
            };
            QueryVaultsRequest: {
                encode(message: _17.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryVaultsRequest;
                fromJSON(object: any): _17.QueryVaultsRequest;
                toJSON(message: _17.QueryVaultsRequest): unknown;
                fromPartial<I_4 extends {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    owner?: string;
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
                    } & Record<Exclude<keyof I_4["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_4, keyof _17.QueryVaultsRequest>, never>>(object: I_4): _17.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _17.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryVaultsResponse;
                fromJSON(object: any): _17.QueryVaultsResponse;
                toJSON(message: _17.QueryVaultsResponse): unknown;
                fromPartial<I_5 extends {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[] & ({
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    } & {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_5["vaultsInfo"][number]["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        debt?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_5["vaultsInfo"][number]["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        collateralizationRatio?: string;
                    } & Record<Exclude<keyof I_5["vaultsInfo"][number], keyof _17.VaultInfo>, never>)[] & Record<Exclude<keyof I_5["vaultsInfo"], keyof {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_5["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_5, keyof _17.QueryVaultsResponse>, never>>(object: I_5): _17.QueryVaultsResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _17.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllVaultsRequest;
                fromJSON(object: any): _17.QueryAllVaultsRequest;
                toJSON(message: _17.QueryAllVaultsRequest): unknown;
                fromPartial<I_6 extends {
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
                    } & Record<Exclude<keyof I_6["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _17.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _17.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllVaultsResponse;
                fromJSON(object: any): _17.QueryAllVaultsResponse;
                toJSON(message: _17.QueryAllVaultsResponse): unknown;
                fromPartial<I_7 extends {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[] & ({
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    } & {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_7["vaultsInfo"][number]["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        debt?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_7["vaultsInfo"][number]["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        collateralizationRatio?: string;
                    } & Record<Exclude<keyof I_7["vaultsInfo"][number], keyof _17.VaultInfo>, never>)[] & Record<Exclude<keyof I_7["vaultsInfo"], keyof {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_7["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_7, keyof _17.QueryAllVaultsResponse>, never>>(object: I_7): _17.QueryAllVaultsResponse;
            };
            MsgCreateRequest: {
                encode(message: _16.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgCreateRequest;
                fromJSON(object: any): _16.MsgCreateRequest;
                toJSON(message: _16.MsgCreateRequest): unknown;
                fromPartial<I_8 extends {
                    from?: string;
                    pairId?: any;
                    amountIn?: string;
                    amountOut?: string;
                } & {
                    from?: string;
                    pairId?: any;
                    amountIn?: string;
                    amountOut?: string;
                } & Record<Exclude<keyof I_8, keyof _16.MsgCreateRequest>, never>>(object: I_8): _16.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _16.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgCreateResponse;
                fromJSON(_: any): _16.MsgCreateResponse;
                toJSON(_: _16.MsgCreateResponse): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _16.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _16.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgDepositRequest;
                fromJSON(object: any): _16.MsgDepositRequest;
                toJSON(message: _16.MsgDepositRequest): unknown;
                fromPartial<I_10 extends {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & Record<Exclude<keyof I_10, keyof _16.MsgDepositRequest>, never>>(object: I_10): _16.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _16.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgDepositResponse;
                fromJSON(_: any): _16.MsgDepositResponse;
                toJSON(_: _16.MsgDepositResponse): unknown;
                fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _16.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _16.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgWithdrawRequest;
                fromJSON(object: any): _16.MsgWithdrawRequest;
                toJSON(message: _16.MsgWithdrawRequest): unknown;
                fromPartial<I_12 extends {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & Record<Exclude<keyof I_12, keyof _16.MsgWithdrawRequest>, never>>(object: I_12): _16.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _16.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgWithdrawResponse;
                fromJSON(_: any): _16.MsgWithdrawResponse;
                toJSON(_: _16.MsgWithdrawResponse): unknown;
                fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _16.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _16.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgDrawRequest;
                fromJSON(object: any): _16.MsgDrawRequest;
                toJSON(message: _16.MsgDrawRequest): unknown;
                fromPartial<I_14 extends {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & Record<Exclude<keyof I_14, keyof _16.MsgDrawRequest>, never>>(object: I_14): _16.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _16.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgDrawResponse;
                fromJSON(_: any): _16.MsgDrawResponse;
                toJSON(_: _16.MsgDrawResponse): unknown;
                fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _16.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _16.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRepayRequest;
                fromJSON(object: any): _16.MsgRepayRequest;
                toJSON(message: _16.MsgRepayRequest): unknown;
                fromPartial<I_16 extends {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & {
                    from?: string;
                    id?: any;
                    amount?: string;
                } & Record<Exclude<keyof I_16, keyof _16.MsgRepayRequest>, never>>(object: I_16): _16.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _16.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRepayResponse;
                fromJSON(_: any): _16.MsgRepayResponse;
                toJSON(_: _16.MsgRepayResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _16.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _16.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgCloseRequest;
                fromJSON(object: any): _16.MsgCloseRequest;
                toJSON(message: _16.MsgCloseRequest): unknown;
                fromPartial<I_18 extends {
                    from?: string;
                    id?: any;
                } & {
                    from?: string;
                    id?: any;
                } & Record<Exclude<keyof I_18, keyof _16.MsgCloseRequest>, never>>(object: I_18): _16.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _16.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgCloseResponse;
                fromJSON(_: any): _16.MsgCloseResponse;
                toJSON(_: _16.MsgCloseResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _16.MsgCloseResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial<I_20 extends {
                    vaults?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    }[];
                } & {
                    vaults?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    }[] & ({
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    } & {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    } & Record<Exclude<keyof I_20["vaults"][number], keyof _18.Vault>, never>)[] & Record<Exclude<keyof I_20["vaults"], keyof {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_20, "vaults">, never>>(object: I_20): _15.GenesisState;
            };
            EventCreateVault: {
                encode(message: _14.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventCreateVault;
                fromJSON(object: any): _14.EventCreateVault;
                toJSON(message: _14.EventCreateVault): unknown;
                fromPartial<I_21 extends {
                    sender?: string;
                    collateralType?: string;
                } & {
                    sender?: string;
                    collateralType?: string;
                } & Record<Exclude<keyof I_21, keyof _14.EventCreateVault>, never>>(object: I_21): _14.EventCreateVault;
            };
            EventDepositCollateral: {
                encode(message: _14.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventDepositCollateral;
                fromJSON(object: any): _14.EventDepositCollateral;
                toJSON(message: _14.EventDepositCollateral): unknown;
                fromPartial<I_22 extends {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_22["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_22, keyof _14.EventDepositCollateral>, never>>(object: I_22): _14.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _14.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventWithdrawCollateral;
                fromJSON(object: any): _14.EventWithdrawCollateral;
                toJSON(message: _14.EventWithdrawCollateral): unknown;
                fromPartial<I_23 extends {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_23["collateral"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_23, keyof _14.EventWithdrawCollateral>, never>>(object: I_23): _14.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _14.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventDrawDebt;
                fromJSON(object: any): _14.EventDrawDebt;
                toJSON(message: _14.EventDrawDebt): unknown;
                fromPartial<I_24 extends {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_24["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_24, keyof _14.EventDrawDebt>, never>>(object: I_24): _14.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _14.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventRepayDebt;
                fromJSON(object: any): _14.EventRepayDebt;
                toJSON(message: _14.EventRepayDebt): unknown;
                fromPartial<I_25 extends {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                } & {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_25["debt"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                } & Record<Exclude<keyof I_25, keyof _14.EventRepayDebt>, never>>(object: I_25): _14.EventRepayDebt;
            };
            EventCloseVault: {
                encode(message: _14.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.EventCloseVault;
                fromJSON(object: any): _14.EventCloseVault;
                toJSON(message: _14.EventCloseVault): unknown;
                fromPartial<I_26 extends {
                    owner?: string;
                    collateralType?: string;
                } & {
                    owner?: string;
                    collateralType?: string;
                } & Record<Exclude<keyof I_26, keyof _14.EventCloseVault>, never>>(object: I_26): _14.EventCloseVault;
            };
        };
    }
}
