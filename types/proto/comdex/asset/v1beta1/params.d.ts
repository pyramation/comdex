import * as _m0 from "protobufjs/minimal";
export interface Params {
    admin: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        admin?: string;
    } & {
        admin?: string;
    } & Record<Exclude<keyof I, "admin">, never>>(object: I): Params;
};
