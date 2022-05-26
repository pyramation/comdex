import * as _121 from "./applications/transfer/v1/genesis";
import * as _122 from "./applications/transfer/v1/query";
import * as _123 from "./applications/transfer/v1/transfer";
import * as _124 from "./applications/transfer/v1/tx";
import * as _125 from "./applications/transfer/v2/packet";
import * as _126 from "./core/channel/v1/channel";
import * as _127 from "./core/channel/v1/genesis";
import * as _128 from "./core/channel/v1/query";
import * as _129 from "./core/channel/v1/tx";
import * as _130 from "./core/client/v1/client";
import * as _131 from "./core/client/v1/genesis";
import * as _132 from "./core/client/v1/query";
import * as _133 from "./core/client/v1/tx";
import * as _134 from "./core/commitment/v1/commitment";
import * as _135 from "./core/connection/v1/connection";
import * as _136 from "./core/connection/v1/genesis";
import * as _137 from "./core/connection/v1/query";
import * as _138 from "./core/connection/v1/tx";
import * as _139 from "./core/port/v1/query";
import * as _140 from "./core/types/v1/genesis";
import * as _141 from "./lightclients/localhost/v1/localhost";
import * as _142 from "./lightclients/solomachine/v1/solomachine";
import * as _143 from "./lightclients/solomachine/v2/solomachine";
import * as _144 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _124.MsgTransfer): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _124.MsgTransfer): {
                            typeUrl: string;
                            value: _124.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _124.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _124.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _124.MsgTransfer): {
                            typeUrl: string;
                            value: _124.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _124.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        }) => _124.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _124.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgTransfer;
                    fromJSON(object: any): _124.MsgTransfer;
                    toJSON(message: _124.MsgTransfer): unknown;
                    fromPartial<I extends {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    } & {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["timeoutHeight"], keyof _130.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I, keyof _124.MsgTransfer>, never>>(object: I): _124.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _124.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgTransferResponse;
                    fromJSON(_: any): _124.MsgTransferResponse;
                    toJSON(_: _124.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _124.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _123.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.DenomTrace;
                    fromJSON(object: any): _123.DenomTrace;
                    toJSON(message: _123.DenomTrace): unknown;
                    fromPartial<I_2 extends {
                        path?: string;
                        baseDenom?: string;
                    } & {
                        path?: string;
                        baseDenom?: string;
                    } & Record<Exclude<keyof I_2, keyof _123.DenomTrace>, never>>(object: I_2): _123.DenomTrace;
                };
                Params: {
                    encode(message: _123.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Params;
                    fromJSON(object: any): _123.Params;
                    toJSON(message: _123.Params): unknown;
                    fromPartial<I_3 extends {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & Record<Exclude<keyof I_3, keyof _123.Params>, never>>(object: I_3): _123.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _122.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomTraceRequest;
                    fromJSON(object: any): _122.QueryDenomTraceRequest;
                    toJSON(message: _122.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends {
                        hash?: string;
                    } & {
                        hash?: string;
                    } & Record<Exclude<keyof I_4, "hash">, never>>(object: I_4): _122.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _122.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomTraceResponse;
                    fromJSON(object: any): _122.QueryDenomTraceResponse;
                    toJSON(message: _122.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    } & {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_5["denomTrace"], keyof _123.DenomTrace>, never>;
                    } & Record<Exclude<keyof I_5, "denomTrace">, never>>(object: I_5): _122.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _122.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomTracesRequest;
                    fromJSON(object: any): _122.QueryDenomTracesRequest;
                    toJSON(message: _122.QueryDenomTracesRequest): unknown;
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
                    } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _122.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _122.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryDenomTracesResponse;
                    fromJSON(object: any): _122.QueryDenomTracesResponse;
                    toJSON(message: _122.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_7["denomTraces"][number], keyof _123.DenomTrace>, never>)[] & Record<Exclude<keyof I_7["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_7["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_7, keyof _122.QueryDenomTracesResponse>, never>>(object: I_7): _122.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
                    fromJSON(_: any): _122.QueryParamsRequest;
                    toJSON(_: _122.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _122.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
                    fromJSON(object: any): _122.QueryParamsResponse;
                    toJSON(message: _122.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_9["params"], keyof _123.Params>, never>;
                    } & Record<Exclude<keyof I_9, "params">, never>>(object: I_9): _122.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromJSON(object: any): _121.GenesisState;
                    toJSON(message: _121.GenesisState): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_10["denomTraces"][number], keyof _123.DenomTrace>, never>)[] & Record<Exclude<keyof I_10["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_10["params"], keyof _123.Params>, never>;
                    } & Record<Exclude<keyof I_10, keyof _121.GenesisState>, never>>(object: I_10): _121.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _125.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.FungibleTokenPacketData;
                    fromJSON(object: any): _125.FungibleTokenPacketData;
                    toJSON(message: _125.FungibleTokenPacketData): unknown;
                    fromPartial<I extends {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & Record<Exclude<keyof I, keyof _125.FungibleTokenPacketData>, never>>(object: I): _125.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _129.MsgChannelOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _129.MsgChannelOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _129.MsgChannelOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _129.MsgChannelOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _129.MsgChannelCloseInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _129.MsgChannelCloseConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _129.MsgRecvPacket): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeout(value: _129.MsgTimeout): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _129.MsgTimeoutOnClose): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _129.MsgAcknowledgement): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _129.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _129.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _129.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _129.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _129.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _129.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _129.MsgRecvPacket): {
                            typeUrl: string;
                            value: _129.MsgRecvPacket;
                        };
                        timeout(value: _129.MsgTimeout): {
                            typeUrl: string;
                            value: _129.MsgTimeout;
                        };
                        timeoutOnClose(value: _129.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _129.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _129.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _129.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _129.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _129.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _129.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _129.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _129.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _129.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _129.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _129.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _129.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _129.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _129.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _129.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _129.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _129.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _129.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _129.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _129.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _129.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _129.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _129.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _129.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _129.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _129.MsgRecvPacket): {
                            typeUrl: string;
                            value: _129.MsgRecvPacket;
                        };
                        timeout(value: _129.MsgTimeout): {
                            typeUrl: string;
                            value: _129.MsgTimeout;
                        };
                        timeoutOnClose(value: _129.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _129.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _129.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _129.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _129.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _129.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _129.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _129.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _129.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _129.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _129.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _129.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _129.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _129.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _129.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _129.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _129.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _129.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _129.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _129.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenInit;
                    fromJSON(object: any): _129.MsgChannelOpenInit;
                    toJSON(message: _129.MsgChannelOpenInit): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I["channel"], keyof _126.Channel>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _129.MsgChannelOpenInit>, never>>(object: I): _129.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _129.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _129.MsgChannelOpenInitResponse;
                    toJSON(_: _129.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _129.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _129.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenTry;
                    fromJSON(object: any): _129.MsgChannelOpenTry;
                    toJSON(message: _129.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_2["channel"]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_2["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_2["channel"], keyof _126.Channel>, never>;
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _129.MsgChannelOpenTry>, never>>(object: I_2): _129.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _129.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _129.MsgChannelOpenTryResponse;
                    toJSON(_: _129.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _129.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _129.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenAck;
                    fromJSON(object: any): _129.MsgChannelOpenAck;
                    toJSON(message: _129.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _129.MsgChannelOpenAck>, never>>(object: I_4): _129.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _129.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _129.MsgChannelOpenAckResponse;
                    toJSON(_: _129.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _129.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _129.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenConfirm;
                    fromJSON(object: any): _129.MsgChannelOpenConfirm;
                    toJSON(message: _129.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _129.MsgChannelOpenConfirm>, never>>(object: I_6): _129.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _129.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _129.MsgChannelOpenConfirmResponse;
                    toJSON(_: _129.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _129.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _129.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelCloseInit;
                    fromJSON(object: any): _129.MsgChannelCloseInit;
                    toJSON(message: _129.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_8, keyof _129.MsgChannelCloseInit>, never>>(object: I_8): _129.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _129.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _129.MsgChannelCloseInitResponse;
                    toJSON(_: _129.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _129.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _129.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelCloseConfirm;
                    fromJSON(object: any): _129.MsgChannelCloseConfirm;
                    toJSON(message: _129.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_10["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_10, keyof _129.MsgChannelCloseConfirm>, never>>(object: I_10): _129.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _129.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _129.MsgChannelCloseConfirmResponse;
                    toJSON(_: _129.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _129.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _129.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgRecvPacket;
                    fromJSON(object: any): _129.MsgRecvPacket;
                    toJSON(message: _129.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_12["packet"]["timeoutHeight"], keyof _130.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_12["packet"], keyof _126.Packet>, never>;
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_12["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_12, keyof _129.MsgRecvPacket>, never>>(object: I_12): _129.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _129.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgRecvPacketResponse;
                    fromJSON(_: any): _129.MsgRecvPacketResponse;
                    toJSON(_: _129.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _129.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _129.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgTimeout;
                    fromJSON(object: any): _129.MsgTimeout;
                    toJSON(message: _129.MsgTimeout): unknown;
                    fromPartial<I_14 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_14["packet"]["timeoutHeight"], keyof _130.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_14["packet"], keyof _126.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_14["proofHeight"], keyof _130.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_14, keyof _129.MsgTimeout>, never>>(object: I_14): _129.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _129.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgTimeoutResponse;
                    fromJSON(_: any): _129.MsgTimeoutResponse;
                    toJSON(_: _129.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _129.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _129.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgTimeoutOnClose;
                    fromJSON(object: any): _129.MsgTimeoutOnClose;
                    toJSON(message: _129.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_16["packet"]["timeoutHeight"], keyof _130.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_16["packet"], keyof _126.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_16["proofHeight"], keyof _130.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_16, keyof _129.MsgTimeoutOnClose>, never>>(object: I_16): _129.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _129.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _129.MsgTimeoutOnCloseResponse;
                    toJSON(_: _129.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _129.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _129.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgAcknowledgement;
                    fromJSON(object: any): _129.MsgAcknowledgement;
                    toJSON(message: _129.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_18["packet"]["timeoutHeight"], keyof _130.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_18["packet"], keyof _126.Packet>, never>;
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_18["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_18, keyof _129.MsgAcknowledgement>, never>>(object: I_18): _129.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _129.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgAcknowledgementResponse;
                    fromJSON(_: any): _129.MsgAcknowledgementResponse;
                    toJSON(_: _129.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _129.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _128.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelRequest;
                    fromJSON(object: any): _128.QueryChannelRequest;
                    toJSON(message: _128.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_20, keyof _128.QueryChannelRequest>, never>>(object: I_20): _128.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _128.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelResponse;
                    fromJSON(object: any): _128.QueryChannelResponse;
                    toJSON(message: _128.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends {
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_21["channel"]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_21["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_21["channel"], keyof _126.Channel>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_21["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_21, keyof _128.QueryChannelResponse>, never>>(object: I_21): _128.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _128.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelsRequest;
                    fromJSON(object: any): _128.QueryChannelsRequest;
                    toJSON(message: _128.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends {
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
                        } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _128.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _128.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelsResponse;
                    fromJSON(object: any): _128.QueryChannelsResponse;
                    toJSON(message: _128.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_23["channels"][number]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_23["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_23["channels"][number], keyof _126.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_23["channels"], keyof {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_23["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_23, keyof _128.QueryChannelsResponse>, never>>(object: I_23): _128.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _128.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _128.QueryConnectionChannelsRequest;
                    toJSON(message: _128.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        connection?: string;
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
                        } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_24, keyof _128.QueryConnectionChannelsRequest>, never>>(object: I_24): _128.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _128.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _128.QueryConnectionChannelsResponse;
                    toJSON(message: _128.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_25["channels"][number]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_25["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_25["channels"][number], keyof _126.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_25["channels"], keyof {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_25["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_25, keyof _128.QueryConnectionChannelsResponse>, never>>(object: I_25): _128.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _128.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelClientStateRequest;
                    fromJSON(object: any): _128.QueryChannelClientStateRequest;
                    toJSON(message: _128.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_26, keyof _128.QueryChannelClientStateRequest>, never>>(object: I_26): _128.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _128.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelClientStateResponse;
                    fromJSON(object: any): _128.QueryChannelClientStateResponse;
                    toJSON(message: _128.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_27["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_27["identifiedClientState"], keyof _130.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_27["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_27, keyof _128.QueryChannelClientStateResponse>, never>>(object: I_27): _128.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _128.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _128.QueryChannelConsensusStateRequest;
                    toJSON(message: _128.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_28, keyof _128.QueryChannelConsensusStateRequest>, never>>(object: I_28): _128.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _128.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _128.QueryChannelConsensusStateResponse;
                    toJSON(message: _128.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_29["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_29["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_29, keyof _128.QueryChannelConsensusStateResponse>, never>>(object: I_29): _128.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _128.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _128.QueryPacketCommitmentRequest;
                    toJSON(message: _128.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_30, keyof _128.QueryPacketCommitmentRequest>, never>>(object: I_30): _128.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _128.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _128.QueryPacketCommitmentResponse;
                    toJSON(message: _128.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_31["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_31, keyof _128.QueryPacketCommitmentResponse>, never>>(object: I_31): _128.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _128.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _128.QueryPacketCommitmentsRequest;
                    toJSON(message: _128.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_32["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_32, keyof _128.QueryPacketCommitmentsRequest>, never>>(object: I_32): _128.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _128.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _128.QueryPacketCommitmentsResponse;
                    toJSON(message: _128.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_33["commitments"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I_33["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_33["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_33["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_33, keyof _128.QueryPacketCommitmentsResponse>, never>>(object: I_33): _128.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _128.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketReceiptRequest;
                    fromJSON(object: any): _128.QueryPacketReceiptRequest;
                    toJSON(message: _128.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_34, keyof _128.QueryPacketReceiptRequest>, never>>(object: I_34): _128.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _128.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketReceiptResponse;
                    fromJSON(object: any): _128.QueryPacketReceiptResponse;
                    toJSON(message: _128.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_35["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_35, keyof _128.QueryPacketReceiptResponse>, never>>(object: I_35): _128.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _128.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _128.QueryPacketAcknowledgementRequest;
                    toJSON(message: _128.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_36, keyof _128.QueryPacketAcknowledgementRequest>, never>>(object: I_36): _128.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _128.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _128.QueryPacketAcknowledgementResponse;
                    toJSON(message: _128.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_37["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_37, keyof _128.QueryPacketAcknowledgementResponse>, never>>(object: I_37): _128.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _128.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _128.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _128.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
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
                        } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_38["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_38, keyof _128.QueryPacketAcknowledgementsRequest>, never>>(object: I_38): _128.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _128.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _128.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _128.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_39["acknowledgements"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I_39["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_39["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_39["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_39, keyof _128.QueryPacketAcknowledgementsResponse>, never>>(object: I_39): _128.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _128.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _128.QueryUnreceivedPacketsRequest;
                    toJSON(message: _128.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_40["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_40, keyof _128.QueryUnreceivedPacketsRequest>, never>>(object: I_40): _128.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _128.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _128.QueryUnreceivedPacketsResponse;
                    toJSON(message: _128.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_41["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_41["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_41, keyof _128.QueryUnreceivedPacketsResponse>, never>>(object: I_41): _128.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _128.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _128.QueryUnreceivedAcksRequest;
                    toJSON(message: _128.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[] & any[] & Record<Exclude<keyof I_42["packetAckSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_42, keyof _128.QueryUnreceivedAcksRequest>, never>>(object: I_42): _128.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _128.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _128.QueryUnreceivedAcksResponse;
                    toJSON(message: _128.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_43["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_43["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_43, keyof _128.QueryUnreceivedAcksResponse>, never>>(object: I_43): _128.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _128.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _128.QueryNextSequenceReceiveRequest;
                    toJSON(message: _128.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_44, keyof _128.QueryNextSequenceReceiveRequest>, never>>(object: I_44): _128.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _128.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _128.QueryNextSequenceReceiveResponse;
                    toJSON(message: _128.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_45["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_45, keyof _128.QueryNextSequenceReceiveResponse>, never>>(object: I_45): _128.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                    fromJSON(object: any): _127.GenesisState;
                    toJSON(message: _127.GenesisState): unknown;
                    fromPartial<I_46 extends {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    } & {
                        channels?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_46["channels"][number]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_46["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_46["channels"][number], keyof _126.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_46["channels"], keyof {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["acknowledgements"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I_46["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["commitments"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I_46["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["receipts"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I_46["receipts"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["sendSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["sendSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["recvSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["recvSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["ackSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["ackSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        nextChannelSequence?: any;
                    } & Record<Exclude<keyof I_46, keyof _127.GenesisState>, never>>(object: I_46): _127.GenesisState;
                };
                PacketSequence: {
                    encode(message: _127.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PacketSequence;
                    fromJSON(object: any): _127.PacketSequence;
                    toJSON(message: _127.PacketSequence): unknown;
                    fromPartial<I_47 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_47, keyof _127.PacketSequence>, never>>(object: I_47): _127.PacketSequence;
                };
                stateFromJSON(object: any): _126.State;
                stateToJSON(object: _126.State): string;
                orderFromJSON(object: any): _126.Order;
                orderToJSON(object: _126.Order): string;
                State: typeof _126.State;
                Order: typeof _126.Order;
                Channel: {
                    encode(message: _126.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Channel;
                    fromJSON(object: any): _126.Channel;
                    toJSON(message: _126.Channel): unknown;
                    fromPartial<I_48 extends {
                        state?: _126.State;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    } & {
                        state?: _126.State;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_48["counterparty"], keyof _126.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_48["connectionHops"], keyof string[]>, never>;
                        version?: string;
                    } & Record<Exclude<keyof I_48, keyof _126.Channel>, never>>(object: I_48): _126.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _126.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.IdentifiedChannel;
                    fromJSON(object: any): _126.IdentifiedChannel;
                    toJSON(message: _126.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends {
                        state?: _126.State;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & {
                        state?: _126.State;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_49["counterparty"], keyof _126.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_49["connectionHops"], keyof string[]>, never>;
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_49, keyof _126.IdentifiedChannel>, never>>(object: I_49): _126.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _126.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Counterparty;
                    fromJSON(object: any): _126.Counterparty;
                    toJSON(message: _126.Counterparty): unknown;
                    fromPartial<I_50 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_50, keyof _126.Counterparty>, never>>(object: I_50): _126.Counterparty;
                };
                Packet: {
                    encode(message: _126.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Packet;
                    fromJSON(object: any): _126.Packet;
                    toJSON(message: _126.Packet): unknown;
                    fromPartial<I_51 extends {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    } & {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_51["timeoutHeight"], keyof _130.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I_51, keyof _126.Packet>, never>>(object: I_51): _126.Packet;
                };
                PacketState: {
                    encode(message: _126.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.PacketState;
                    fromJSON(object: any): _126.PacketState;
                    toJSON(message: _126.PacketState): unknown;
                    fromPartial<I_52 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_52, keyof _126.PacketState>, never>>(object: I_52): _126.PacketState;
                };
                Acknowledgement: {
                    encode(message: _126.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Acknowledgement;
                    fromJSON(object: any): _126.Acknowledgement;
                    toJSON(message: _126.Acknowledgement): unknown;
                    fromPartial<I_53 extends {
                        result?: Uint8Array;
                        error?: string;
                    } & {
                        result?: Uint8Array;
                        error?: string;
                    } & Record<Exclude<keyof I_53, keyof _126.Acknowledgement>, never>>(object: I_53): _126.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _133.MsgCreateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _133.MsgUpdateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _133.MsgUpgradeClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _133.MsgSubmitMisbehaviour): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _133.MsgCreateClient): {
                            typeUrl: string;
                            value: _133.MsgCreateClient;
                        };
                        updateClient(value: _133.MsgUpdateClient): {
                            typeUrl: string;
                            value: _133.MsgUpdateClient;
                        };
                        upgradeClient(value: _133.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _133.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _133.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _133.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _133.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _133.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _133.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _133.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _133.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _133.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _133.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _133.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _133.MsgCreateClient): {
                            typeUrl: string;
                            value: _133.MsgCreateClient;
                        };
                        updateClient(value: _133.MsgUpdateClient): {
                            typeUrl: string;
                            value: _133.MsgUpdateClient;
                        };
                        upgradeClient(value: _133.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _133.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _133.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _133.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _133.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _133.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _133.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _133.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _133.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _133.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _133.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _133.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _133.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgCreateClient;
                    fromJSON(object: any): _133.MsgCreateClient;
                    toJSON(message: _133.MsgCreateClient): unknown;
                    fromPartial<I extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _133.MsgCreateClient>, never>>(object: I): _133.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _133.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgCreateClientResponse;
                    fromJSON(_: any): _133.MsgCreateClientResponse;
                    toJSON(_: _133.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _133.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _133.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUpdateClient;
                    fromJSON(object: any): _133.MsgUpdateClient;
                    toJSON(message: _133.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["header"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _133.MsgUpdateClient>, never>>(object: I_2): _133.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _133.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUpdateClientResponse;
                    fromJSON(_: any): _133.MsgUpdateClientResponse;
                    toJSON(_: _133.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _133.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _133.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUpgradeClient;
                    fromJSON(object: any): _133.MsgUpgradeClient;
                    toJSON(message: _133.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _133.MsgUpgradeClient>, never>>(object: I_4): _133.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _133.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUpgradeClientResponse;
                    fromJSON(_: any): _133.MsgUpgradeClientResponse;
                    toJSON(_: _133.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _133.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _133.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _133.MsgSubmitMisbehaviour;
                    toJSON(message: _133.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_6["misbehaviour"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _133.MsgSubmitMisbehaviour>, never>>(object: I_6): _133.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _133.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _133.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _133.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _133.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _132.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStateRequest;
                    fromJSON(object: any): _132.QueryClientStateRequest;
                    toJSON(message: _132.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_8, "clientId">, never>>(object: I_8): _132.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _132.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStateResponse;
                    fromJSON(object: any): _132.QueryClientStateResponse;
                    toJSON(message: _132.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _132.QueryClientStateResponse>, never>>(object: I_9): _132.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _132.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStatesRequest;
                    fromJSON(object: any): _132.QueryClientStatesRequest;
                    toJSON(message: _132.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends {
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
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _132.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _132.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStatesResponse;
                    fromJSON(object: any): _132.QueryClientStatesResponse;
                    toJSON(message: _132.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_11["clientStates"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_11["clientStates"][number], keyof _130.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_11["clientStates"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_11, keyof _132.QueryClientStatesResponse>, never>>(object: I_11): _132.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _132.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryConsensusStateRequest;
                    fromJSON(object: any): _132.QueryConsensusStateRequest;
                    toJSON(message: _132.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & Record<Exclude<keyof I_12, keyof _132.QueryConsensusStateRequest>, never>>(object: I_12): _132.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _132.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryConsensusStateResponse;
                    fromJSON(object: any): _132.QueryConsensusStateResponse;
                    toJSON(message: _132.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_13["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _132.QueryConsensusStateResponse>, never>>(object: I_13): _132.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _132.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryConsensusStatesRequest;
                    fromJSON(object: any): _132.QueryConsensusStatesRequest;
                    toJSON(message: _132.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        clientId?: string;
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
                        } & Record<Exclude<keyof I_14["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_14, keyof _132.QueryConsensusStatesRequest>, never>>(object: I_14): _132.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _132.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryConsensusStatesResponse;
                    fromJSON(object: any): _132.QueryConsensusStatesResponse;
                    toJSON(message: _132.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["height"], keyof _130.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["consensusStates"][number], keyof _130.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_15["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_15["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_15, keyof _132.QueryConsensusStatesResponse>, never>>(object: I_15): _132.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _132.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStatusRequest;
                    fromJSON(object: any): _132.QueryClientStatusRequest;
                    toJSON(message: _132.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_16, "clientId">, never>>(object: I_16): _132.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _132.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientStatusResponse;
                    fromJSON(object: any): _132.QueryClientStatusResponse;
                    toJSON(message: _132.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends {
                        status?: string;
                    } & {
                        status?: string;
                    } & Record<Exclude<keyof I_17, "status">, never>>(object: I_17): _132.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _132.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientParamsRequest;
                    fromJSON(_: any): _132.QueryClientParamsRequest;
                    toJSON(_: _132.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _132.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _132.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryClientParamsResponse;
                    fromJSON(object: any): _132.QueryClientParamsResponse;
                    toJSON(message: _132.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends {
                        params?: {
                            allowedClients?: string[];
                        };
                    } & {
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_19["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["params"], "allowedClients">, never>;
                    } & Record<Exclude<keyof I_19, "params">, never>>(object: I_19): _132.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _132.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _132.QueryUpgradedClientStateRequest;
                    toJSON(_: _132.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _132.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _132.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _132.QueryUpgradedClientStateResponse;
                    toJSON(message: _132.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_21["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_21, "upgradedClientState">, never>>(object: I_21): _132.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _132.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _132.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _132.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _132.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _132.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _132.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _132.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_23["upgradedConsensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_23, "upgradedConsensusState">, never>>(object: I_23): _132.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                    fromJSON(object: any): _131.GenesisState;
                    toJSON(message: _131.GenesisState): unknown;
                    fromPartial<I_24 extends {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    } & {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_24["clients"][number], keyof _130.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_24["clients"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[] & ({
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        } & {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _130.Height>, never>;
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number], keyof _130.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"], keyof {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsConsensus"][number], keyof _130.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"], keyof {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[]>, never>;
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[] & ({
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        } & {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[] & ({
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"][number], keyof _131.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"], keyof {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsMetadata"][number], keyof _131.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"], keyof {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[]>, never>;
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_24["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_24["params"], "allowedClients">, never>;
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    } & Record<Exclude<keyof I_24, keyof _131.GenesisState>, never>>(object: I_24): _131.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _131.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisMetadata;
                    fromJSON(object: any): _131.GenesisMetadata;
                    toJSON(message: _131.GenesisMetadata): unknown;
                    fromPartial<I_25 extends {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25, keyof _131.GenesisMetadata>, never>>(object: I_25): _131.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _131.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _131.IdentifiedGenesisMetadata;
                    toJSON(message: _131.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    } & {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_26["clientMetadata"][number], keyof _131.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_26["clientMetadata"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26, keyof _131.IdentifiedGenesisMetadata>, never>>(object: I_26): _131.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _130.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.IdentifiedClientState;
                    fromJSON(object: any): _130.IdentifiedClientState;
                    toJSON(message: _130.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_27["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_27, keyof _130.IdentifiedClientState>, never>>(object: I_27): _130.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _130.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusStateWithHeight;
                    fromJSON(object: any): _130.ConsensusStateWithHeight;
                    toJSON(message: _130.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_28["height"], keyof _130.Height>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_28, keyof _130.ConsensusStateWithHeight>, never>>(object: I_28): _130.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _130.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientConsensusStates;
                    fromJSON(object: any): _130.ClientConsensusStates;
                    toJSON(message: _130.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    } & {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["height"], keyof _130.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_29["consensusStates"][number], keyof _130.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_29["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_29, keyof _130.ClientConsensusStates>, never>>(object: I_29): _130.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _130.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientUpdateProposal;
                    fromJSON(object: any): _130.ClientUpdateProposal;
                    toJSON(message: _130.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & Record<Exclude<keyof I_30, keyof _130.ClientUpdateProposal>, never>>(object: I_30): _130.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _130.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpgradeProposal;
                    fromJSON(object: any): _130.UpgradeProposal;
                    toJSON(message: _130.UpgradeProposal): unknown;
                    fromPartial<I_31 extends {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_31["plan"]["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_31["plan"], keyof import("../cosmos/upgrade/v1beta1/upgrade").Plan>, never>;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_31["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_31, keyof _130.UpgradeProposal>, never>>(object: I_31): _130.UpgradeProposal;
                };
                Height: {
                    encode(message: _130.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Height;
                    fromJSON(object: any): _130.Height;
                    toJSON(message: _130.Height): unknown;
                    fromPartial<I_32 extends {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_32, keyof _130.Height>, never>>(object: I_32): _130.Height;
                };
                Params: {
                    encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                    fromJSON(object: any): _130.Params;
                    toJSON(message: _130.Params): unknown;
                    fromPartial<I_33 extends {
                        allowedClients?: string[];
                    } & {
                        allowedClients?: string[] & string[] & Record<Exclude<keyof I_33["allowedClients"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_33, "allowedClients">, never>>(object: I_33): _130.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _134.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MerkleRoot;
                    fromJSON(object: any): _134.MerkleRoot;
                    toJSON(message: _134.MerkleRoot): unknown;
                    fromPartial<I extends {
                        hash?: Uint8Array;
                    } & {
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I, "hash">, never>>(object: I): _134.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _134.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MerklePrefix;
                    fromJSON(object: any): _134.MerklePrefix;
                    toJSON(message: _134.MerklePrefix): unknown;
                    fromPartial<I_1 extends {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I_1, "keyPrefix">, never>>(object: I_1): _134.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _134.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MerklePath;
                    fromJSON(object: any): _134.MerklePath;
                    toJSON(message: _134.MerklePath): unknown;
                    fromPartial<I_2 extends {
                        keyPath?: string[];
                    } & {
                        keyPath?: string[] & string[] & Record<Exclude<keyof I_2["keyPath"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_2, "keyPath">, never>>(object: I_2): _134.MerklePath;
                };
                MerkleProof: {
                    encode(message: _134.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MerkleProof;
                    fromJSON(object: any): _134.MerkleProof;
                    toJSON(message: _134.MerkleProof): unknown;
                    fromPartial<I_3 extends {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    } & {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[] & ({
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        } & {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            } & {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[] & ({
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number], keyof import("../confio/proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"], "entries">, never>;
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../confio/proofs").CompressedNonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number], keyof import("../confio/proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[]>, never>;
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"], keyof import("../confio/proofs").CompressedBatchProof>, never>;
                        } & Record<Exclude<keyof I_3["proofs"][number], keyof import("../confio/proofs").CommitmentProof>, never>)[] & Record<Exclude<keyof I_3["proofs"], keyof {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_3, "proofs">, never>>(object: I_3): _134.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _138.MsgConnectionOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _138.MsgConnectionOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _138.MsgConnectionOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _138.MsgConnectionOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _138.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _138.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _138.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _138.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _138.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _138.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _138.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _138.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _138.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _138.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _138.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _138.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _138.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _138.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _138.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _138.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _138.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _138.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _138.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _138.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _138.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _138.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenInit;
                    fromJSON(object: any): _138.MsgConnectionOpenInit;
                    toJSON(message: _138.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    } & {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I["counterparty"], keyof _135.Counterparty>, never>;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["version"], keyof _135.Version>, never>;
                        delayPeriod?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _138.MsgConnectionOpenInit>, never>>(object: I): _138.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _138.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _138.MsgConnectionOpenInitResponse;
                    toJSON(_: _138.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _138.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _138.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenTry;
                    fromJSON(object: any): _138.MsgConnectionOpenTry;
                    toJSON(message: _138.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_2["counterparty"], keyof _135.Counterparty>, never>;
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_2["counterpartyVersions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_2["counterpartyVersions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_2["counterpartyVersions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _130.Height>, never>;
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["consensusHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _138.MsgConnectionOpenTry>, never>>(object: I_2): _138.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _138.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _138.MsgConnectionOpenTryResponse;
                    toJSON(_: _138.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _138.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _138.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenAck;
                    fromJSON(object: any): _138.MsgConnectionOpenAck;
                    toJSON(message: _138.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_4["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_4["version"], keyof _135.Version>, never>;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _130.Height>, never>;
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["consensusHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _138.MsgConnectionOpenAck>, never>>(object: I_4): _138.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _138.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _138.MsgConnectionOpenAckResponse;
                    toJSON(_: _138.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _138.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _138.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _138.MsgConnectionOpenConfirm;
                    toJSON(message: _138.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _130.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _138.MsgConnectionOpenConfirm>, never>>(object: I_6): _138.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _138.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _138.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _138.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _138.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _137.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionRequest;
                    fromJSON(object: any): _137.QueryConnectionRequest;
                    toJSON(message: _137.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_8, "connectionId">, never>>(object: I_8): _137.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _137.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionResponse;
                    fromJSON(object: any): _137.QueryConnectionResponse;
                    toJSON(message: _137.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_9["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_9["connection"]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_9["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_9["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_9["connection"]["counterparty"], keyof _135.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_9["connection"], keyof _135.ConnectionEnd>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _137.QueryConnectionResponse>, never>>(object: I_9): _137.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _137.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionsRequest;
                    fromJSON(object: any): _137.QueryConnectionsRequest;
                    toJSON(message: _137.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends {
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
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _137.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _137.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionsResponse;
                    fromJSON(object: any): _137.QueryConnectionsResponse;
                    toJSON(message: _137.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_11["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_11["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_11["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["counterparty"], keyof _135.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_11["connections"][number], keyof _135.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_11["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_11["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_11, keyof _137.QueryConnectionsResponse>, never>>(object: I_11): _137.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _137.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryClientConnectionsRequest;
                    fromJSON(object: any): _137.QueryClientConnectionsRequest;
                    toJSON(message: _137.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_12, "clientId">, never>>(object: I_12): _137.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _137.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryClientConnectionsResponse;
                    fromJSON(object: any): _137.QueryClientConnectionsResponse;
                    toJSON(message: _137.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connectionPaths?: string[] & string[] & Record<Exclude<keyof I_13["connectionPaths"], keyof string[]>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _137.QueryClientConnectionsResponse>, never>>(object: I_13): _137.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _137.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _137.QueryConnectionClientStateRequest;
                    toJSON(message: _137.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_14, "connectionId">, never>>(object: I_14): _137.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _137.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _137.QueryConnectionClientStateResponse;
                    toJSON(message: _137.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["identifiedClientState"], keyof _130.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_15["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_15, keyof _137.QueryConnectionClientStateResponse>, never>>(object: I_15): _137.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _137.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _137.QueryConnectionConsensusStateRequest;
                    toJSON(message: _137.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_16, keyof _137.QueryConnectionConsensusStateRequest>, never>>(object: I_16): _137.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _137.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _137.QueryConnectionConsensusStateResponse;
                    toJSON(message: _137.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_17["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_17["proofHeight"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I_17, keyof _137.QueryConnectionConsensusStateResponse>, never>>(object: I_17): _137.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                    fromJSON(object: any): _136.GenesisState;
                    toJSON(message: _136.GenesisState): unknown;
                    fromPartial<I_18 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_18["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_18["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_18["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["counterparty"], keyof _135.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_18["connections"][number], keyof _135.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_18["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[]>, never>;
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[] & ({
                            clientId?: string;
                            paths?: string[];
                        } & {
                            clientId?: string;
                            paths?: string[] & string[] & Record<Exclude<keyof I_18["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_18["clientConnectionPaths"][number], keyof _135.ConnectionPaths>, never>)[] & Record<Exclude<keyof I_18["clientConnectionPaths"], keyof {
                            clientId?: string;
                            paths?: string[];
                        }[]>, never>;
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        } & {
                            maxExpectedTimePerBlock?: any;
                        } & Record<Exclude<keyof I_18["params"], "maxExpectedTimePerBlock">, never>;
                    } & Record<Exclude<keyof I_18, keyof _136.GenesisState>, never>>(object: I_18): _136.GenesisState;
                };
                stateFromJSON(object: any): _135.State;
                stateToJSON(object: _135.State): string;
                State: typeof _135.State;
                ConnectionEnd: {
                    encode(message: _135.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ConnectionEnd;
                    fromJSON(object: any): _135.ConnectionEnd;
                    toJSON(message: _135.ConnectionEnd): unknown;
                    fromPartial<I_19 extends {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _135.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    } & {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_19["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_19["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _135.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_19["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_19["counterparty"], keyof _135.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_19, keyof _135.ConnectionEnd>, never>>(object: I_19): _135.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _135.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.IdentifiedConnection;
                    fromJSON(object: any): _135.IdentifiedConnection;
                    toJSON(message: _135.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _135.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    } & {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_20["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_20["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_20["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _135.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_20["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_20["counterparty"], keyof _135.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_20, keyof _135.IdentifiedConnection>, never>>(object: I_20): _135.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _135.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Counterparty;
                    fromJSON(object: any): _135.Counterparty;
                    toJSON(message: _135.Counterparty): unknown;
                    fromPartial<I_21 extends {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        } & {
                            keyPrefix?: Uint8Array;
                        } & Record<Exclude<keyof I_21["prefix"], "keyPrefix">, never>;
                    } & Record<Exclude<keyof I_21, keyof _135.Counterparty>, never>>(object: I_21): _135.Counterparty;
                };
                ClientPaths: {
                    encode(message: _135.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ClientPaths;
                    fromJSON(object: any): _135.ClientPaths;
                    toJSON(message: _135.ClientPaths): unknown;
                    fromPartial<I_22 extends {
                        paths?: string[];
                    } & {
                        paths?: string[] & string[] & Record<Exclude<keyof I_22["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22, "paths">, never>>(object: I_22): _135.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _135.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ConnectionPaths;
                    fromJSON(object: any): _135.ConnectionPaths;
                    toJSON(message: _135.ConnectionPaths): unknown;
                    fromPartial<I_23 extends {
                        clientId?: string;
                        paths?: string[];
                    } & {
                        clientId?: string;
                        paths?: string[] & string[] & Record<Exclude<keyof I_23["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_23, keyof _135.ConnectionPaths>, never>>(object: I_23): _135.ConnectionPaths;
                };
                Version: {
                    encode(message: _135.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Version;
                    fromJSON(object: any): _135.Version;
                    toJSON(message: _135.Version): unknown;
                    fromPartial<I_24 extends {
                        identifier?: string;
                        features?: string[];
                    } & {
                        identifier?: string;
                        features?: string[] & string[] & Record<Exclude<keyof I_24["features"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_24, keyof _135.Version>, never>>(object: I_24): _135.Version;
                };
                Params: {
                    encode(message: _135.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Params;
                    fromJSON(object: any): _135.Params;
                    toJSON(message: _135.Params): unknown;
                    fromPartial<I_25 extends {
                        maxExpectedTimePerBlock?: any;
                    } & {
                        maxExpectedTimePerBlock?: any;
                    } & Record<Exclude<keyof I_25, "maxExpectedTimePerBlock">, never>>(object: I_25): _135.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _139.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryAppVersionRequest;
                    fromJSON(object: any): _139.QueryAppVersionRequest;
                    toJSON(message: _139.QueryAppVersionRequest): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    } & {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _126.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I["counterparty"], keyof _126.Counterparty>, never>;
                        proposedVersion?: string;
                    } & Record<Exclude<keyof I, keyof _139.QueryAppVersionRequest>, never>>(object: I): _139.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _139.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryAppVersionResponse;
                    fromJSON(object: any): _139.QueryAppVersionResponse;
                    toJSON(message: _139.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends {
                        portId?: string;
                        version?: string;
                    } & {
                        portId?: string;
                        version?: string;
                    } & Record<Exclude<keyof I_1, keyof _139.QueryAppVersionResponse>, never>>(object: I_1): _139.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                    fromJSON(object: any): _140.GenesisState;
                    toJSON(message: _140.GenesisState): unknown;
                    fromPartial<I extends {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    } & {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        } & {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof _130.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[] & ({
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            } & {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[] & ({
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                } & {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _130.Height>, never>;
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof _130.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof _130.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[]>, never>;
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[] & ({
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            } & {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[] & ({
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof _131.GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof _131.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[]>, never>;
                            params?: {
                                allowedClients?: string[];
                            } & {
                                allowedClients?: string[] & string[] & Record<Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["params"], "allowedClients">, never>;
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        } & Record<Exclude<keyof I["clientGenesis"], keyof _131.GenesisState>, never>;
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        } & {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[] & ({
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            } & {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[] & ({
                                    identifier?: string;
                                    features?: string[];
                                } & {
                                    identifier?: string;
                                    features?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                                    identifier?: string;
                                    features?: string[];
                                }[]>, never>;
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                } & {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    } & {
                                        keyPrefix?: Uint8Array;
                                    } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof _135.Counterparty>, never>;
                                delayPeriod?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof _135.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _135.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[]>, never>;
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[] & ({
                                clientId?: string;
                                paths?: string[];
                            } & {
                                clientId?: string;
                                paths?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof _135.ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                                clientId?: string;
                                paths?: string[];
                            }[]>, never>;
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            } & {
                                maxExpectedTimePerBlock?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
                        } & Record<Exclude<keyof I["connectionGenesis"], keyof _136.GenesisState>, never>;
                        channelGenesis?: {
                            channels?: {
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        } & {
                            channels?: {
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[] & ({
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & {
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                } & {
                                    portId?: string;
                                    channelId?: string;
                                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof _126.Counterparty>, never>;
                                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof _126.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                                state?: _126.State;
                                ordering?: _126.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[]>, never>;
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof _126.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof _127.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            nextChannelSequence?: any;
                        } & Record<Exclude<keyof I["channelGenesis"], keyof _127.GenesisState>, never>;
                    } & Record<Exclude<keyof I, keyof _140.GenesisState>, never>>(object: I): _140.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _141.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ClientState;
                    fromJSON(object: any): _141.ClientState;
                    toJSON(message: _141.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["height"], keyof _130.Height>, never>;
                    } & Record<Exclude<keyof I, keyof _141.ClientState>, never>>(object: I): _141.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _142.DataType;
                dataTypeToJSON(object: _142.DataType): string;
                DataType: typeof _142.DataType;
                ClientState: {
                    encode(message: _142.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ClientState;
                    fromJSON(object: any): _142.ClientState;
                    toJSON(message: _142.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _142.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _142.ClientState>, never>>(object: I): _142.ClientState;
                };
                ConsensusState: {
                    encode(message: _142.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ConsensusState;
                    fromJSON(object: any): _142.ConsensusState;
                    toJSON(message: _142.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _142.ConsensusState>, never>>(object: I_1): _142.ConsensusState;
                };
                Header: {
                    encode(message: _142.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Header;
                    fromJSON(object: any): _142.Header;
                    toJSON(message: _142.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _142.Header>, never>>(object: I_2): _142.Header;
                };
                Misbehaviour: {
                    encode(message: _142.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Misbehaviour;
                    fromJSON(object: any): _142.Misbehaviour;
                    toJSON(message: _142.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _142.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _142.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _142.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _142.Misbehaviour>, never>>(object: I_3): _142.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _142.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SignatureAndData;
                    fromJSON(object: any): _142.SignatureAndData;
                    toJSON(message: _142.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _142.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _142.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _142.SignatureAndData>, never>>(object: I_4): _142.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _142.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TimestampedSignatureData;
                    fromJSON(object: any): _142.TimestampedSignatureData;
                    toJSON(message: _142.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _142.TimestampedSignatureData>, never>>(object: I_5): _142.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _142.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SignBytes;
                    fromJSON(object: any): _142.SignBytes;
                    toJSON(message: _142.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _142.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _142.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _142.SignBytes>, never>>(object: I_6): _142.SignBytes;
                };
                HeaderData: {
                    encode(message: _142.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.HeaderData;
                    fromJSON(object: any): _142.HeaderData;
                    toJSON(message: _142.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _142.HeaderData>, never>>(object: I_7): _142.HeaderData;
                };
                ClientStateData: {
                    encode(message: _142.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ClientStateData;
                    fromJSON(object: any): _142.ClientStateData;
                    toJSON(message: _142.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _142.ClientStateData>, never>>(object: I_8): _142.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _142.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ConsensusStateData;
                    fromJSON(object: any): _142.ConsensusStateData;
                    toJSON(message: _142.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _142.ConsensusStateData>, never>>(object: I_9): _142.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _142.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ConnectionStateData;
                    fromJSON(object: any): _142.ConnectionStateData;
                    toJSON(message: _142.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _135.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _135.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _142.ConnectionStateData>, never>>(object: I_10): _142.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _142.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ChannelStateData;
                    fromJSON(object: any): _142.ChannelStateData;
                    toJSON(message: _142.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _126.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _142.ChannelStateData>, never>>(object: I_11): _142.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _142.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PacketCommitmentData;
                    fromJSON(object: any): _142.PacketCommitmentData;
                    toJSON(message: _142.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _142.PacketCommitmentData>, never>>(object: I_12): _142.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _142.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PacketAcknowledgementData;
                    fromJSON(object: any): _142.PacketAcknowledgementData;
                    toJSON(message: _142.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _142.PacketAcknowledgementData>, never>>(object: I_13): _142.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _142.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PacketReceiptAbsenceData;
                    fromJSON(object: any): _142.PacketReceiptAbsenceData;
                    toJSON(message: _142.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _142.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _142.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.NextSequenceRecvData;
                    fromJSON(object: any): _142.NextSequenceRecvData;
                    toJSON(message: _142.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _142.NextSequenceRecvData>, never>>(object: I_15): _142.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _143.DataType;
                dataTypeToJSON(object: _143.DataType): string;
                DataType: typeof _143.DataType;
                ClientState: {
                    encode(message: _143.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ClientState;
                    fromJSON(object: any): _143.ClientState;
                    toJSON(message: _143.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _143.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _143.ClientState>, never>>(object: I): _143.ClientState;
                };
                ConsensusState: {
                    encode(message: _143.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConsensusState;
                    fromJSON(object: any): _143.ConsensusState;
                    toJSON(message: _143.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _143.ConsensusState>, never>>(object: I_1): _143.ConsensusState;
                };
                Header: {
                    encode(message: _143.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Header;
                    fromJSON(object: any): _143.Header;
                    toJSON(message: _143.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _143.Header>, never>>(object: I_2): _143.Header;
                };
                Misbehaviour: {
                    encode(message: _143.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Misbehaviour;
                    fromJSON(object: any): _143.Misbehaviour;
                    toJSON(message: _143.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _143.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _143.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _143.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _143.Misbehaviour>, never>>(object: I_3): _143.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _143.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureAndData;
                    fromJSON(object: any): _143.SignatureAndData;
                    toJSON(message: _143.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _143.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _143.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _143.SignatureAndData>, never>>(object: I_4): _143.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _143.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.TimestampedSignatureData;
                    fromJSON(object: any): _143.TimestampedSignatureData;
                    toJSON(message: _143.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _143.TimestampedSignatureData>, never>>(object: I_5): _143.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _143.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignBytes;
                    fromJSON(object: any): _143.SignBytes;
                    toJSON(message: _143.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _143.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _143.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _143.SignBytes>, never>>(object: I_6): _143.SignBytes;
                };
                HeaderData: {
                    encode(message: _143.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.HeaderData;
                    fromJSON(object: any): _143.HeaderData;
                    toJSON(message: _143.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _143.HeaderData>, never>>(object: I_7): _143.HeaderData;
                };
                ClientStateData: {
                    encode(message: _143.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ClientStateData;
                    fromJSON(object: any): _143.ClientStateData;
                    toJSON(message: _143.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _143.ClientStateData>, never>>(object: I_8): _143.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _143.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConsensusStateData;
                    fromJSON(object: any): _143.ConsensusStateData;
                    toJSON(message: _143.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _143.ConsensusStateData>, never>>(object: I_9): _143.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _143.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConnectionStateData;
                    fromJSON(object: any): _143.ConnectionStateData;
                    toJSON(message: _143.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _135.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _135.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _135.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _135.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _143.ConnectionStateData>, never>>(object: I_10): _143.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _143.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ChannelStateData;
                    fromJSON(object: any): _143.ChannelStateData;
                    toJSON(message: _143.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _126.State;
                            ordering?: _126.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _126.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _126.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _143.ChannelStateData>, never>>(object: I_11): _143.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _143.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketCommitmentData;
                    fromJSON(object: any): _143.PacketCommitmentData;
                    toJSON(message: _143.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _143.PacketCommitmentData>, never>>(object: I_12): _143.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _143.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketAcknowledgementData;
                    fromJSON(object: any): _143.PacketAcknowledgementData;
                    toJSON(message: _143.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _143.PacketAcknowledgementData>, never>>(object: I_13): _143.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _143.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PacketReceiptAbsenceData;
                    fromJSON(object: any): _143.PacketReceiptAbsenceData;
                    toJSON(message: _143.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _143.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _143.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.NextSequenceRecvData;
                    fromJSON(object: any): _143.NextSequenceRecvData;
                    toJSON(message: _143.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _143.NextSequenceRecvData>, never>>(object: I_15): _143.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _144.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ClientState;
                    fromJSON(object: any): _144.ClientState;
                    toJSON(message: _144.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        } & {
                            numerator?: any;
                            denominator?: any;
                        } & Record<Exclude<keyof I["trustLevel"], keyof _144.Fraction>, never>;
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["frozenHeight"], keyof _130.Height>, never>;
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["latestHeight"], keyof _130.Height>, never>;
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[] & ({
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        } & {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["leafSpec"], keyof import("../confio/proofs").LeafOp>, never>;
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & {
                                childOrder?: number[] & number[] & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"]["childOrder"], keyof number[]>, never>;
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"], keyof import("../confio/proofs").InnerSpec>, never>;
                            maxDepth?: number;
                            minDepth?: number;
                        } & Record<Exclude<keyof I["proofSpecs"][number], keyof import("../confio/proofs").ProofSpec>, never>)[] & Record<Exclude<keyof I["proofSpecs"], keyof {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[]>, never>;
                        upgradePath?: string[] & string[] & Record<Exclude<keyof I["upgradePath"], keyof string[]>, never>;
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & Record<Exclude<keyof I, keyof _144.ClientState>, never>>(object: I): _144.ClientState;
                };
                ConsensusState: {
                    encode(message: _144.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ConsensusState;
                    fromJSON(object: any): _144.ConsensusState;
                    toJSON(message: _144.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    } & {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        } & {
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_1["root"], "hash">, never>;
                        nextValidatorsHash?: Uint8Array;
                    } & Record<Exclude<keyof I_1, keyof _144.ConsensusState>, never>>(object: I_1): _144.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _144.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Misbehaviour;
                    fromJSON(object: any): _144.Misbehaviour;
                    toJSON(message: _144.Misbehaviour): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    } & {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_1"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedHeight"], keyof _130.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_1"], keyof _144.Header>, never>;
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_2"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedHeight"], keyof _130.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_2"], keyof _144.Header>, never>;
                    } & Record<Exclude<keyof I_2, keyof _144.Misbehaviour>, never>>(object: I_2): _144.Misbehaviour;
                };
                Header: {
                    encode(message: _144.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Header;
                    fromJSON(object: any): _144.Header;
                    toJSON(message: _144.Header): unknown;
                    fromPartial<I_3 extends {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & {
                                version?: {
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_3["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                        } & Record<Exclude<keyof I_3["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_3["trustedHeight"], keyof _130.Height>, never>;
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["trustedValidators"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_3, keyof _144.Header>, never>>(object: I_3): _144.Header;
                };
                Fraction: {
                    encode(message: _144.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Fraction;
                    fromJSON(object: any): _144.Fraction;
                    toJSON(message: _144.Fraction): unknown;
                    fromPartial<I_4 extends {
                        numerator?: any;
                        denominator?: any;
                    } & {
                        numerator?: any;
                        denominator?: any;
                    } & Record<Exclude<keyof I_4, keyof _144.Fraction>, never>>(object: I_4): _144.Fraction;
                };
            };
        }
    }
}
