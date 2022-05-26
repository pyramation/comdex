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
import * as _184 from "./applications/transfer/v1/tx.amino";
import * as _185 from "./core/channel/v1/tx.amino";
import * as _186 from "./core/client/v1/tx.amino";
import * as _187 from "./core/connection/v1/tx.amino";
import * as _188 from "./applications/transfer/v1/tx.registry";
import * as _189 from "./core/channel/v1/tx.registry";
import * as _190 from "./core/client/v1/tx.registry";
import * as _191 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._184,
        ..._188
      };
      export const v2 = { ..._125
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._185,
        ..._189
      };
    }
    export namespace client {
      export const v1 = { ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._186,
        ..._190
      };
    }
    export namespace commitment {
      export const v1 = { ..._134
      };
    }
    export namespace connection {
      export const v1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._187,
        ..._191
      };
    }
    export namespace port {
      export const v1 = { ..._139
      };
    }
    export namespace types {
      export const v1 = { ..._140
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._141
      };
    }
    export namespace solomachine {
      export const v1 = { ..._142
      };
      export const v2 = { ..._143
      };
    }
    export namespace tendermint {
      export const v1 = { ..._144
      };
    }
  }
}