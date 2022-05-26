import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Pair {
    id: Long;
    assetIn: Long;
    assetOut: Long;
    liquidationRatio: string;
}
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromJSON(object: any): Pair;
    toJSON(message: Pair): unknown;
    fromPartial<I extends {
        id?: any;
        assetIn?: any;
        assetOut?: any;
        liquidationRatio?: string;
    } & {
        id?: any;
        assetIn?: any;
        assetOut?: any;
        liquidationRatio?: string;
    } & Record<Exclude<keyof I, keyof Pair>, never>>(object: I): Pair;
};
