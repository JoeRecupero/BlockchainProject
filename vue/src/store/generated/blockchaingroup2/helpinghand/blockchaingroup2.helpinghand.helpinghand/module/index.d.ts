import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
<<<<<<< HEAD
import { MsgDeleteTask } from "./types/helpinghand/tx";
import { MsgDeleteCompletion } from "./types/helpinghand/tx";
import { MsgUpdateCompletion } from "./types/helpinghand/tx";
import { MsgCreateTask } from "./types/helpinghand/tx";
import { MsgUpdateTask } from "./types/helpinghand/tx";
import { MsgCreateCompletion } from "./types/helpinghand/tx";
=======
import { MsgDeleteCompletion } from "./types/helpinghand/tx";
import { MsgUpdateTask } from "./types/helpinghand/tx";
import { MsgCreateTask } from "./types/helpinghand/tx";
import { MsgDeleteTask } from "./types/helpinghand/tx";
import { MsgCreateCompletion } from "./types/helpinghand/tx";
import { MsgUpdateCompletion } from "./types/helpinghand/tx";
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
<<<<<<< HEAD
    msgDeleteTask: (data: MsgDeleteTask) => EncodeObject;
    msgDeleteCompletion: (data: MsgDeleteCompletion) => EncodeObject;
    msgUpdateCompletion: (data: MsgUpdateCompletion) => EncodeObject;
    msgCreateTask: (data: MsgCreateTask) => EncodeObject;
    msgUpdateTask: (data: MsgUpdateTask) => EncodeObject;
    msgCreateCompletion: (data: MsgCreateCompletion) => EncodeObject;
=======
    msgDeleteCompletion: (data: MsgDeleteCompletion) => EncodeObject;
    msgUpdateTask: (data: MsgUpdateTask) => EncodeObject;
    msgCreateTask: (data: MsgCreateTask) => EncodeObject;
    msgDeleteTask: (data: MsgDeleteTask) => EncodeObject;
    msgCreateCompletion: (data: MsgCreateCompletion) => EncodeObject;
    msgUpdateCompletion: (data: MsgUpdateCompletion) => EncodeObject;
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
