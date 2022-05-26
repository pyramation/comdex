import * as _21 from "./app/v1alpha1/config";
import * as _22 from "./app/v1alpha1/module";
import * as _23 from "./app/v1alpha1/query";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/query/v1beta1/pagination";
import * as _40 from "./base/reflection/v1beta1/reflection";
import * as _41 from "./base/reflection/v2alpha1/reflection";
import * as _42 from "./base/snapshots/v1beta1/snapshot";
import * as _43 from "./base/store/v1beta1/commit_info";
import * as _44 from "./base/store/v1beta1/listening";
import * as _45 from "./base/tendermint/v1beta1/query";
import * as _46 from "./base/v1beta1/coin";
import * as _47 from "./capability/v1beta1/capability";
import * as _48 from "./capability/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/tx";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/v1beta1/distribution";
import * as _58 from "./distribution/v1beta1/genesis";
import * as _59 from "./distribution/v1beta1/query";
import * as _60 from "./distribution/v1beta1/tx";
import * as _61 from "./evidence/v1beta1/evidence";
import * as _62 from "./evidence/v1beta1/genesis";
import * as _63 from "./evidence/v1beta1/query";
import * as _64 from "./evidence/v1beta1/tx";
import * as _65 from "./feegrant/v1beta1/feegrant";
import * as _66 from "./feegrant/v1beta1/genesis";
import * as _67 from "./feegrant/v1beta1/query";
import * as _68 from "./feegrant/v1beta1/tx";
import * as _69 from "./genutil/v1beta1/genesis";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./mint/v1beta1/genesis";
import * as _84 from "./mint/v1beta1/mint";
import * as _85 from "./mint/v1beta1/query";
import * as _86 from "./msg/v1/msg";
import * as _87 from "./nft/v1beta1/event";
import * as _88 from "./nft/v1beta1/genesis";
import * as _89 from "./nft/v1beta1/nft";
import * as _90 from "./nft/v1beta1/query";
import * as _91 from "./nft/v1beta1/tx";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/query";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _156 from "./authz/v1beta1/tx.amino";
import * as _157 from "./bank/v1beta1/tx.amino";
import * as _158 from "./crisis/v1beta1/tx.amino";
import * as _159 from "./distribution/v1beta1/tx.amino";
import * as _160 from "./evidence/v1beta1/tx.amino";
import * as _161 from "./feegrant/v1beta1/tx.amino";
import * as _162 from "./gov/v1/tx.amino";
import * as _163 from "./gov/v1beta1/tx.amino";
import * as _164 from "./group/v1/tx.amino";
import * as _165 from "./nft/v1beta1/tx.amino";
import * as _166 from "./slashing/v1beta1/tx.amino";
import * as _167 from "./staking/v1beta1/tx.amino";
import * as _168 from "./upgrade/v1beta1/tx.amino";
import * as _169 from "./vesting/v1beta1/tx.amino";
import * as _170 from "./authz/v1beta1/tx.registry";
import * as _171 from "./bank/v1beta1/tx.registry";
import * as _172 from "./crisis/v1beta1/tx.registry";
import * as _173 from "./distribution/v1beta1/tx.registry";
import * as _174 from "./evidence/v1beta1/tx.registry";
import * as _175 from "./feegrant/v1beta1/tx.registry";
import * as _176 from "./gov/v1/tx.registry";
import * as _177 from "./gov/v1beta1/tx.registry";
import * as _178 from "./group/v1/tx.registry";
import * as _179 from "./nft/v1beta1/tx.registry";
import * as _180 from "./slashing/v1beta1/tx.registry";
import * as _181 from "./staking/v1beta1/tx.registry";
import * as _182 from "./upgrade/v1beta1/tx.registry";
import * as _183 from "./vesting/v1beta1/tx.registry";
import * as _184 from "./auth/v1beta1/query.lcd";
import * as _185 from "./authz/v1beta1/query.lcd";
import * as _186 from "./bank/v1beta1/query.lcd";
import * as _187 from "./distribution/v1beta1/query.lcd";
import * as _188 from "./evidence/v1beta1/query.lcd";
import * as _189 from "./feegrant/v1beta1/query.lcd";
import * as _190 from "./gov/v1/query.lcd";
import * as _191 from "./gov/v1beta1/query.lcd";
import * as _192 from "./group/v1/query.lcd";
import * as _193 from "./mint/v1beta1/query.lcd";
import * as _194 from "./nft/v1beta1/query.lcd";
import * as _195 from "./params/v1beta1/query.lcd";
import * as _196 from "./slashing/v1beta1/query.lcd";
import * as _197 from "./staking/v1beta1/query.lcd";
import * as _198 from "./upgrade/v1beta1/query.lcd";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._21,
      ..._22,
      ..._23
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._184
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._156,
      ..._170,
      ..._185
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._157,
      ..._171,
      ..._186
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._37
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._38
      };
    }
    export namespace query {
      export const v1beta1 = { ..._39
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._40
      };
      export const v2alpha1 = { ..._41
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._42
      };
    }
    export namespace store {
      export const v1beta1 = { ..._43,
        ..._44
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._45
      };
    }
    export const v1beta1 = { ..._46
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._47,
      ..._48
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._49,
      ..._50,
      ..._158,
      ..._172
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._51
    };
    export namespace hd {
      export const v1 = { ..._52
      };
    }
    export namespace keyring {
      export const v1 = { ..._53
      };
    }
    export const multisig = { ..._54
    };
    export const secp256k1 = { ..._55
    };
    export const secp256r1 = { ..._56
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._159,
      ..._173,
      ..._187
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._160,
      ..._174,
      ..._188
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._161,
      ..._175,
      ..._189
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._69
    };
  }
  export namespace gov {
    export const v1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._162,
      ..._176,
      ..._190
    };
    export const v1beta1 = { ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._163,
      ..._177,
      ..._191
    };
  }
  export namespace group {
    export const v1 = { ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._164,
      ..._178,
      ..._192
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._83,
      ..._84,
      ..._85,
      ..._193
    };
  }
  export namespace msg {
    export const v1 = { ..._86
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._165,
      ..._179,
      ..._194
    };
  }
  export namespace orm {
    export const v1 = { ..._92
    };
    export const v1alpha1 = { ..._93
    };
  }
  export namespace params {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._195
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._166,
      ..._180,
      ..._196
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._167,
      ..._181,
      ..._197
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._105
      };
    }
    export const v1beta1 = { ..._106,
      ..._107
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._108,
      ..._109,
      ..._110,
      ..._168,
      ..._182,
      ..._198
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._111,
      ..._112,
      ..._169,
      ..._183
    };
  }
}