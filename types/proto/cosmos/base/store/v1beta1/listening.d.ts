import * as _m0 from "protobufjs/minimal";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    encode(message: StoreKVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial<I extends {
        storeKey?: string;
        delete?: boolean;
        key?: Uint8Array;
        value?: Uint8Array;
    } & {
        storeKey?: string;
        delete?: boolean;
        key?: Uint8Array;
        value?: Uint8Array;
    } & Record<Exclude<keyof I, keyof StoreKVPair>, never>>(object: I): StoreKVPair;
};
