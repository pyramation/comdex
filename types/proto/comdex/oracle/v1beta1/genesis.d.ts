import { Market } from "./oracle";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    markets: Market[];
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["markets"][number], keyof Market>, never>)[] & Record<Exclude<keyof I["markets"], keyof {
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
