import * as _20 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _20.ScalarType;
    scalarTypeToJSON(object: _20.ScalarType): string;
    ScalarType: typeof _20.ScalarType;
    InterfaceDescriptor: {
        encode(message: _20.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.InterfaceDescriptor;
        fromJSON(object: any): _20.InterfaceDescriptor;
        toJSON(message: _20.InterfaceDescriptor): unknown;
        fromPartial<I extends {
            name?: string;
            description?: string;
        } & {
            name?: string;
            description?: string;
        } & Record<Exclude<keyof I, keyof _20.InterfaceDescriptor>, never>>(object: I): _20.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _20.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ScalarDescriptor;
        fromJSON(object: any): _20.ScalarDescriptor;
        toJSON(message: _20.ScalarDescriptor): unknown;
        fromPartial<I_1 extends {
            name?: string;
            description?: string;
            fieldType?: _20.ScalarType[];
        } & {
            name?: string;
            description?: string;
            fieldType?: _20.ScalarType[] & _20.ScalarType[] & Record<Exclude<keyof I_1["fieldType"], keyof _20.ScalarType[]>, never>;
        } & Record<Exclude<keyof I_1, keyof _20.ScalarDescriptor>, never>>(object: I_1): _20.ScalarDescriptor;
    };
};
