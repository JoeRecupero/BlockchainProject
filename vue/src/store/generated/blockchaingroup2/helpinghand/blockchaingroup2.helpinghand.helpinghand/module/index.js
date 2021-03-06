// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateCompletion } from "./types/helpinghand/tx";
import { MsgCreateCompletion } from "./types/helpinghand/tx";
import { MsgDeleteTask } from "./types/helpinghand/tx";
import { MsgCreateTask } from "./types/helpinghand/tx";
import { MsgDeleteCompletion } from "./types/helpinghand/tx";
import { MsgUpdateTask } from "./types/helpinghand/tx";
const types = [
    ["/blockchaingroup2.helpinghand.helpinghand.MsgUpdateCompletion", MsgUpdateCompletion],
    ["/blockchaingroup2.helpinghand.helpinghand.MsgCreateCompletion", MsgCreateCompletion],
    ["/blockchaingroup2.helpinghand.helpinghand.MsgDeleteTask", MsgDeleteTask],
    ["/blockchaingroup2.helpinghand.helpinghand.MsgCreateTask", MsgCreateTask],
    ["/blockchaingroup2.helpinghand.helpinghand.MsgDeleteCompletion", MsgDeleteCompletion],
    ["/blockchaingroup2.helpinghand.helpinghand.MsgUpdateTask", MsgUpdateTask],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgUpdateCompletion: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgUpdateCompletion", value: data }),
        msgCreateCompletion: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgCreateCompletion", value: data }),
        msgDeleteTask: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgDeleteTask", value: data }),
        msgCreateTask: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgCreateTask", value: data }),
        msgDeleteCompletion: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgDeleteCompletion", value: data }),
        msgUpdateTask: (data) => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgUpdateTask", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
