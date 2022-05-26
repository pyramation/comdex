import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgCreateRequest {
    from: string;
    pairId: Long;
    amountIn: string;
    amountOut: string;
}
export interface MsgCreateResponse {
}
export interface MsgDepositRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDepositResponse {
}
export interface MsgWithdrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgWithdrawResponse {
}
export interface MsgDrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDrawResponse {
}
export interface MsgRepayRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgRepayResponse {
}
export interface MsgCloseRequest {
    from: string;
    id: Long;
}
export interface MsgCloseResponse {
}
export declare const MsgCreateRequest: {
    encode(message: MsgCreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest;
    fromJSON(object: any): MsgCreateRequest;
    toJSON(message: MsgCreateRequest): unknown;
    fromPartial<I extends {
        from?: string;
        pairId?: any;
        amountIn?: string;
        amountOut?: string;
    } & {
        from?: string;
        pairId?: any;
        amountIn?: string;
        amountOut?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateRequest>, never>>(object: I): MsgCreateRequest;
};
export declare const MsgCreateResponse: {
    encode(_: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromJSON(_: any): MsgCreateResponse;
    toJSON(_: MsgCreateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateResponse;
};
export declare const MsgDepositRequest: {
    encode(message: MsgDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRequest;
    fromJSON(object: any): MsgDepositRequest;
    toJSON(message: MsgDepositRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        amount?: string;
    } & {
        from?: string;
        id?: any;
        amount?: string;
    } & Record<Exclude<keyof I, keyof MsgDepositRequest>, never>>(object: I): MsgDepositRequest;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDepositResponse;
};
export declare const MsgWithdrawRequest: {
    encode(message: MsgWithdrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest;
    fromJSON(object: any): MsgWithdrawRequest;
    toJSON(message: MsgWithdrawRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        amount?: string;
    } & {
        from?: string;
        id?: any;
        amount?: string;
    } & Record<Exclude<keyof I, keyof MsgWithdrawRequest>, never>>(object: I): MsgWithdrawRequest;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawResponse;
};
export declare const MsgDrawRequest: {
    encode(message: MsgDrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRequest;
    fromJSON(object: any): MsgDrawRequest;
    toJSON(message: MsgDrawRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        amount?: string;
    } & {
        from?: string;
        id?: any;
        amount?: string;
    } & Record<Exclude<keyof I, keyof MsgDrawRequest>, never>>(object: I): MsgDrawRequest;
};
export declare const MsgDrawResponse: {
    encode(_: MsgDrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawResponse;
    fromJSON(_: any): MsgDrawResponse;
    toJSON(_: MsgDrawResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDrawResponse;
};
export declare const MsgRepayRequest: {
    encode(message: MsgRepayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayRequest;
    fromJSON(object: any): MsgRepayRequest;
    toJSON(message: MsgRepayRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
        amount?: string;
    } & {
        from?: string;
        id?: any;
        amount?: string;
    } & Record<Exclude<keyof I, keyof MsgRepayRequest>, never>>(object: I): MsgRepayRequest;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse;
    fromJSON(_: any): MsgRepayResponse;
    toJSON(_: MsgRepayResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRepayResponse;
};
export declare const MsgCloseRequest: {
    encode(message: MsgCloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseRequest;
    fromJSON(object: any): MsgCloseRequest;
    toJSON(message: MsgCloseRequest): unknown;
    fromPartial<I extends {
        from?: string;
        id?: any;
    } & {
        from?: string;
        id?: any;
    } & Record<Exclude<keyof I, keyof MsgCloseRequest>, never>>(object: I): MsgCloseRequest;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse;
    fromJSON(_: any): MsgCloseResponse;
    toJSON(_: MsgCloseResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCloseResponse;
};
