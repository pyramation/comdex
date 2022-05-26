import * as _m0 from "protobufjs/minimal";
export interface UpdateAdminProposal {
    title: string;
    description: string;
    address: string;
}
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial<I extends {
        title?: string;
        description?: string;
        address?: string;
    } & {
        title?: string;
        description?: string;
        address?: string;
    } & Record<Exclude<keyof I, keyof UpdateAdminProposal>, never>>(object: I): UpdateAdminProposal;
};
