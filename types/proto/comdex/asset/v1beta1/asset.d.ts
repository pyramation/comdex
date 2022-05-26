import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Asset {
    id: Long;
    name: string;
    denom: string;
    decimals: Long;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial<I extends {
        id?: any;
        name?: string;
        denom?: string;
        decimals?: any;
    } & {
        id?: any;
        name?: string;
        denom?: string;
        decimals?: any;
    } & Record<Exclude<keyof I, keyof Asset>, never>>(object: I): Asset;
};
