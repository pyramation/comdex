import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Vault {
    id: Long;
    pairId: Long;
    owner: string;
    amountIn: string;
    amountOut: string;
}
export declare const Vault: {
    encode(message: Vault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vault;
    fromJSON(object: any): Vault;
    toJSON(message: Vault): unknown;
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
    } & Record<Exclude<keyof I, keyof Vault>, never>>(object: I): Vault;
};
