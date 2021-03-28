import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCompletion } from "./types/helpinghand/tx";
import { MsgUpdateTask } from "./types/helpinghand/tx";
import { MsgCreateTask } from "./types/helpinghand/tx";
import { MsgUpdateCompletion } from "./types/helpinghand/tx";
import { MsgDeleteCompletion } from "./types/helpinghand/tx";
import { MsgDeleteTask } from "./types/helpinghand/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateCompletion: (data: MsgCreateCompletion) => EncodeObject;
    msgUpdateTask: (data: MsgUpdateTask) => EncodeObject;
    msgCreateTask: (data: MsgCreateTask) => EncodeObject;
    msgUpdateCompletion: (data: MsgUpdateCompletion) => EncodeObject;
    msgDeleteCompletion: (data: MsgDeleteCompletion) => EncodeObject;
    msgDeleteTask: (data: MsgDeleteTask) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
