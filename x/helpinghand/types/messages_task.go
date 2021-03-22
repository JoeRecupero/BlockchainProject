package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTask{}

func NewMsgCreateTask(creator string, title string, description string, prize int32, startedAt int32, endedAt int32) *MsgCreateTask {
	return &MsgCreateTask{
		Creator:     creator,
		Title:       title,
		Description: description,
		Prize:       prize,
		StartedAt:   startedAt,
		EndedAt:     endedAt,
	}
}

func (msg *MsgCreateTask) Route() string {
	return RouterKey
}

func (msg *MsgCreateTask) Type() string {
	return "CreateTask"
}

func (msg *MsgCreateTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTask{}

func NewMsgUpdateTask(creator string, id uint64, title string, description string, prize int32, startedAt int32, endedAt int32) *MsgUpdateTask {
	return &MsgUpdateTask{
		Id:          id,
		Creator:     creator,
		Title:       title,
		Description: description,
		Prize:       prize,
		StartedAt:   startedAt,
		EndedAt:     endedAt,
	}
}

func (msg *MsgUpdateTask) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTask) Type() string {
	return "UpdateTask"
}

func (msg *MsgUpdateTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateTask{}

func NewMsgDeleteTask(creator string, id uint64) *MsgDeleteTask {
	return &MsgDeleteTask{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTask) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTask) Type() string {
	return "DeleteTask"
}

func (msg *MsgDeleteTask) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTask) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTask) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}