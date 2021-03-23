// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCompletion } from "./types/helpinghand/tx";
import { MsgUpdateTask } from "./types/helpinghand/tx";
import { MsgCreateTask } from "./types/helpinghand/tx";
import { MsgDeleteTask } from "./types/helpinghand/tx";
import { MsgCreateCompletion } from "./types/helpinghand/tx";
import { MsgUpdateCompletion } from "./types/helpinghand/tx";


const types = [
  ["/blockchaingroup2.helpinghand.helpinghand.MsgDeleteCompletion", MsgDeleteCompletion],
  ["/blockchaingroup2.helpinghand.helpinghand.MsgUpdateTask", MsgUpdateTask],
  ["/blockchaingroup2.helpinghand.helpinghand.MsgCreateTask", MsgCreateTask],
  ["/blockchaingroup2.helpinghand.helpinghand.MsgDeleteTask", MsgDeleteTask],
  ["/blockchaingroup2.helpinghand.helpinghand.MsgCreateCompletion", MsgCreateCompletion],
  ["/blockchaingroup2.helpinghand.helpinghand.MsgUpdateCompletion", MsgUpdateCompletion],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteCompletion: (data: MsgDeleteCompletion): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgDeleteCompletion", value: data }),
    msgUpdateTask: (data: MsgUpdateTask): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgUpdateTask", value: data }),
    msgCreateTask: (data: MsgCreateTask): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgCreateTask", value: data }),
    msgDeleteTask: (data: MsgDeleteTask): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgDeleteTask", value: data }),
    msgCreateCompletion: (data: MsgCreateCompletion): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgCreateCompletion", value: data }),
    msgUpdateCompletion: (data: MsgUpdateCompletion): EncodeObject => ({ typeUrl: "/blockchaingroup2.helpinghand.helpinghand.MsgUpdateCompletion", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
