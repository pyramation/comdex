import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface VaultInfo {
    id: Long;
    pairId: Long;
    owner: string;
    collateral: Coin;
    debt: Coin;
    collateralizationRatio: string;
}
export interface QueryVaultRequest {
    id: Long;
}
export interface QueryVaultResponse {
    vaultInfo: VaultInfo;
}
export interface QueryVaultsRequest {
    owner: string;
    pagination: PageRequest;
}
export interface QueryVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination: PageResponse;
}
export interface QueryAllVaultsRequest {
    pagination: PageRequest;
}
export interface QueryAllVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination: PageResponse;
}
export declare const VaultInfo: {
    encode(message: VaultInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultInfo;
    fromJSON(object: any): VaultInfo;
    toJSON(message: VaultInfo): unknown;
    fromPartial<I extends {
        id?: any;
        pairId?: any;
        owner?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        };
        debt?: {
            denom?: string;
            amount?: string;
        };
        collateralizationRatio?: string;
    } & {
        id?: any;
        pairId?: any;
        owner?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["collateral"], keyof Coin>, never>;
        debt?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["debt"], keyof Coin>, never>;
        collateralizationRatio?: string;
    } & Record<Exclude<keyof I, keyof VaultInfo>, never>>(object: I): VaultInfo;
};
export declare const QueryVaultRequest: {
    encode(message: QueryVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultRequest;
    fromJSON(object: any): QueryVaultRequest;
    toJSON(message: QueryVaultRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryVaultRequest;
};
export declare const QueryVaultResponse: {
    encode(message: QueryVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultResponse;
    fromJSON(object: any): QueryVaultResponse;
    toJSON(message: QueryVaultResponse): unknown;
    fromPartial<I extends {
        vaultInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        };
    } & {
        vaultInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        } & {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultInfo"]["collateral"], keyof Coin>, never>;
            debt?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultInfo"]["debt"], keyof Coin>, never>;
            collateralizationRatio?: string;
        } & Record<Exclude<keyof I["vaultInfo"], keyof VaultInfo>, never>;
    } & Record<Exclude<keyof I, "vaultInfo">, never>>(object: I): QueryVaultResponse;
};
export declare const QueryVaultsRequest: {
    encode(message: QueryVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest;
    fromJSON(object: any): QueryVaultsRequest;
    toJSON(message: QueryVaultsRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        owner?: string;
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
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryVaultsRequest>, never>>(object: I): QueryVaultsRequest;
};
export declare const QueryVaultsResponse: {
    encode(message: QueryVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse;
    fromJSON(object: any): QueryVaultsResponse;
    toJSON(message: QueryVaultsResponse): unknown;
    fromPartial<I extends {
        vaultsInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        vaultsInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[] & ({
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        } & {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultsInfo"][number]["collateral"], keyof Coin>, never>;
            debt?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultsInfo"][number]["debt"], keyof Coin>, never>;
            collateralizationRatio?: string;
        } & Record<Exclude<keyof I["vaultsInfo"][number], keyof VaultInfo>, never>)[] & Record<Exclude<keyof I["vaultsInfo"], keyof {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryVaultsResponse>, never>>(object: I): QueryVaultsResponse;
};
export declare const QueryAllVaultsRequest: {
    encode(message: QueryAllVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsRequest;
    fromJSON(object: any): QueryAllVaultsRequest;
    toJSON(message: QueryAllVaultsRequest): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllVaultsRequest;
};
export declare const QueryAllVaultsResponse: {
    encode(message: QueryAllVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsResponse;
    fromJSON(object: any): QueryAllVaultsResponse;
    toJSON(message: QueryAllVaultsResponse): unknown;
    fromPartial<I extends {
        vaultsInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        vaultsInfo?: {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[] & ({
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        } & {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultsInfo"][number]["collateral"], keyof Coin>, never>;
            debt?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vaultsInfo"][number]["debt"], keyof Coin>, never>;
            collateralizationRatio?: string;
        } & Record<Exclude<keyof I["vaultsInfo"][number], keyof VaultInfo>, never>)[] & Record<Exclude<keyof I["vaultsInfo"], keyof {
            id?: any;
            pairId?: any;
            owner?: string;
            collateral?: {
                denom?: string;
                amount?: string;
            };
            debt?: {
                denom?: string;
                amount?: string;
            };
            collateralizationRatio?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllVaultsResponse>, never>>(object: I): QueryAllVaultsResponse;
};
