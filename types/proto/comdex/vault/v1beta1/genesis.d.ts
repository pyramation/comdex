import { Vault } from "./vault";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    vaults: Vault[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["vaults"][number], keyof Vault>, never>)[] & Record<Exclude<keyof I["vaults"], keyof {
            id?: any;
            pairId?: any;
            owner?: string;
            amountIn?: string;
            amountOut?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "vaults">, never>>(object: I): GenesisState;
};
