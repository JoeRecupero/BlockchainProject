package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateCompletion{}, "helpinghand/CreateCompletion", nil)
	cdc.RegisterConcrete(&MsgUpdateCompletion{}, "helpinghand/UpdateCompletion", nil)
	cdc.RegisterConcrete(&MsgDeleteCompletion{}, "helpinghand/DeleteCompletion", nil)

	cdc.RegisterConcrete(&MsgCreateTask{}, "helpinghand/CreateTask", nil)
	cdc.RegisterConcrete(&MsgUpdateTask{}, "helpinghand/UpdateTask", nil)
	cdc.RegisterConcrete(&MsgDeleteTask{}, "helpinghand/DeleteTask", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCompletion{},
		&MsgUpdateCompletion{},
		&MsgDeleteCompletion{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTask{},
		&MsgUpdateTask{},
		&MsgDeleteTask{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
