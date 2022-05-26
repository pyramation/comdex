import { Asset } from "./asset";
import { Pair } from "./pair";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    assets: Asset[];
    pairs: Pair[];
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["assets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
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
        } & Record<Exclude<keyof I["pairs"][number], keyof Pair>, never>)[] & Record<Exclude<keyof I["pairs"], keyof {
            id?: any;
            assetIn?: any;
            assetOut?: any;
            liquidationRatio?: string;
        }[]>, never>;
        params?: {
            admin?: string;
        } & {
            admin?: string;
        } & Record<Exclude<keyof I["params"], "admin">, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
