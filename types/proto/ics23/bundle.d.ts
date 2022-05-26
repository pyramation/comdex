import * as _19 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _19.HashOp;
    hashOpToJSON(object: _19.HashOp): string;
    lengthOpFromJSON(object: any): _19.LengthOp;
    lengthOpToJSON(object: _19.LengthOp): string;
    HashOp: typeof _19.HashOp;
    LengthOp: typeof _19.LengthOp;
    ExistenceProof: {
        encode(message: _19.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ExistenceProof;
        fromJSON(object: any): _19.ExistenceProof;
        toJSON(message: _19.ExistenceProof): unknown;
        fromPartial<I extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I["leaf"], keyof _19.LeafOp>, never>;
            path?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I["path"], keyof {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I, keyof _19.ExistenceProof>, never>>(object: I): _19.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _19.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.NonExistenceProof;
        fromJSON(object: any): _19.NonExistenceProof;
        toJSON(message: _19.NonExistenceProof): unknown;
        fromPartial<I_1 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
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
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["leaf"], keyof _19.LeafOp>, never>;
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_1["left"]["path"], keyof {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["left"], keyof _19.ExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["leaf"], keyof _19.LeafOp>, never>;
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_1["right"]["path"], keyof {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["right"], keyof _19.ExistenceProof>, never>;
        } & Record<Exclude<keyof I_1, keyof _19.NonExistenceProof>, never>>(object: I_1): _19.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _19.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitmentProof;
        fromJSON(object: any): _19.CommitmentProof;
        toJSON(message: _19.CommitmentProof): unknown;
        fromPartial<I_2 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        } & {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["leaf"], keyof _19.LeafOp>, never>;
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["exist"]["path"], keyof {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["exist"], keyof _19.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["left"]["path"], keyof {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["left"], keyof _19.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["right"]["path"], keyof {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["right"], keyof _19.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_2["nonexist"], keyof _19.NonExistenceProof>, never>;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"], keyof _19.ExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"], keyof _19.ExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"], keyof _19.ExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"], keyof _19.NonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["batch"]["entries"][number], keyof _19.BatchEntry>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_2["batch"], "entries">, never>;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"], keyof _19.CompressedExistenceProof>, never>;
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"], keyof _19.CompressedExistenceProof>, never>;
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"], keyof _19.CompressedExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"], keyof _19.CompressedNonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["compressed"]["entries"][number], keyof _19.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_2["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[]>, never>;
                lookupInners?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["compressed"]["lookupInners"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_2["compressed"]["lookupInners"], keyof {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["compressed"], keyof _19.CompressedBatchProof>, never>;
        } & Record<Exclude<keyof I_2, keyof _19.CommitmentProof>, never>>(object: I_2): _19.CommitmentProof;
    };
    LeafOp: {
        encode(message: _19.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.LeafOp;
        fromJSON(object: any): _19.LeafOp;
        toJSON(message: _19.LeafOp): unknown;
        fromPartial<I_3 extends {
            hash?: _19.HashOp;
            prehashKey?: _19.HashOp;
            prehashValue?: _19.HashOp;
            length?: _19.LengthOp;
            prefix?: Uint8Array;
        } & {
            hash?: _19.HashOp;
            prehashKey?: _19.HashOp;
            prehashValue?: _19.HashOp;
            length?: _19.LengthOp;
            prefix?: Uint8Array;
        } & Record<Exclude<keyof I_3, keyof _19.LeafOp>, never>>(object: I_3): _19.LeafOp;
    };
    InnerOp: {
        encode(message: _19.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InnerOp;
        fromJSON(object: any): _19.InnerOp;
        toJSON(message: _19.InnerOp): unknown;
        fromPartial<I_4 extends {
            hash?: _19.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & {
            hash?: _19.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & Record<Exclude<keyof I_4, keyof _19.InnerOp>, never>>(object: I_4): _19.InnerOp;
    };
    ProofSpec: {
        encode(message: _19.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ProofSpec;
        fromJSON(object: any): _19.ProofSpec;
        toJSON(message: _19.ProofSpec): unknown;
        fromPartial<I_5 extends {
            leafSpec?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _19.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        } & {
            leafSpec?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_5["leafSpec"], keyof _19.LeafOp>, never>;
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _19.HashOp;
            } & {
                childOrder?: number[] & number[] & Record<Exclude<keyof I_5["innerSpec"]["childOrder"], keyof number[]>, never>;
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _19.HashOp;
            } & Record<Exclude<keyof I_5["innerSpec"], keyof _19.InnerSpec>, never>;
            maxDepth?: number;
            minDepth?: number;
        } & Record<Exclude<keyof I_5, keyof _19.ProofSpec>, never>>(object: I_5): _19.ProofSpec;
    };
    InnerSpec: {
        encode(message: _19.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InnerSpec;
        fromJSON(object: any): _19.InnerSpec;
        toJSON(message: _19.InnerSpec): unknown;
        fromPartial<I_6 extends {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _19.HashOp;
        } & {
            childOrder?: number[] & number[] & Record<Exclude<keyof I_6["childOrder"], keyof number[]>, never>;
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _19.HashOp;
        } & Record<Exclude<keyof I_6, keyof _19.InnerSpec>, never>>(object: I_6): _19.InnerSpec;
    };
    BatchProof: {
        encode(message: _19.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BatchProof;
        fromJSON(object: any): _19.BatchProof;
        toJSON(message: _19.BatchProof): unknown;
        fromPartial<I_7 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"], keyof {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["exist"], keyof _19.ExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"], keyof {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"], keyof _19.ExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"], keyof {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"], keyof _19.ExistenceProof>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["nonexist"], keyof _19.NonExistenceProof>, never>;
            } & Record<Exclude<keyof I_7["entries"][number], keyof _19.BatchEntry>, never>)[] & Record<Exclude<keyof I_7["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[]>, never>;
        } & Record<Exclude<keyof I_7, "entries">, never>>(object: I_7): _19.BatchProof;
    };
    BatchEntry: {
        encode(message: _19.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BatchEntry;
        fromJSON(object: any): _19.BatchEntry;
        toJSON(message: _19.BatchEntry): unknown;
        fromPartial<I_8 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["leaf"], keyof _19.LeafOp>, never>;
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_8["exist"]["path"], keyof {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_8["exist"], keyof _19.ExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["left"]["path"], keyof {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["left"], keyof _19.ExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["path"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["right"]["path"], keyof {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["right"], keyof _19.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_8["nonexist"], keyof _19.NonExistenceProof>, never>;
        } & Record<Exclude<keyof I_8, keyof _19.BatchEntry>, never>>(object: I_8): _19.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _19.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedBatchProof;
        fromJSON(object: any): _19.CompressedBatchProof;
        toJSON(message: _19.CompressedBatchProof): unknown;
        fromPartial<I_9 extends {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        } & {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_9["entries"][number]["exist"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["exist"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["exist"], keyof _19.CompressedExistenceProof>, never>;
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"], keyof _19.CompressedExistenceProof>, never>;
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"], keyof _19.CompressedExistenceProof>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["nonexist"], keyof _19.CompressedNonExistenceProof>, never>;
            } & Record<Exclude<keyof I_9["entries"][number], keyof _19.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_9["entries"], keyof {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[]>, never>;
            lookupInners?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I_9["lookupInners"][number], keyof _19.InnerOp>, never>)[] & Record<Exclude<keyof I_9["lookupInners"], keyof {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_9, keyof _19.CompressedBatchProof>, never>>(object: I_9): _19.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _19.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedBatchEntry;
        fromJSON(object: any): _19.CompressedBatchEntry;
        toJSON(message: _19.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_10["exist"]["leaf"], keyof _19.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_10["exist"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_10["exist"], keyof _19.CompressedExistenceProof>, never>;
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["left"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["left"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["left"], keyof _19.CompressedExistenceProof>, never>;
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["right"]["leaf"], keyof _19.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["right"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["right"], keyof _19.CompressedExistenceProof>, never>;
            } & Record<Exclude<keyof I_10["nonexist"], keyof _19.CompressedNonExistenceProof>, never>;
        } & Record<Exclude<keyof I_10, keyof _19.CompressedBatchEntry>, never>>(object: I_10): _19.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _19.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedExistenceProof;
        fromJSON(object: any): _19.CompressedExistenceProof;
        toJSON(message: _19.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_11["leaf"], keyof _19.LeafOp>, never>;
            path?: number[] & number[] & Record<Exclude<keyof I_11["path"], keyof number[]>, never>;
        } & Record<Exclude<keyof I_11, keyof _19.CompressedExistenceProof>, never>>(object: I_11): _19.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _19.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedNonExistenceProof;
        fromJSON(object: any): _19.CompressedNonExistenceProof;
        toJSON(message: _19.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
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
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["left"]["leaf"], keyof _19.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["left"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["left"], keyof _19.CompressedExistenceProof>, never>;
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["right"]["leaf"], keyof _19.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["right"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["right"], keyof _19.CompressedExistenceProof>, never>;
        } & Record<Exclude<keyof I_12, keyof _19.CompressedNonExistenceProof>, never>>(object: I_12): _19.CompressedNonExistenceProof;
    };
};
