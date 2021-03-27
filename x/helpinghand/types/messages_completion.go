package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCompletion{}

func NewMsgCreateCompletion(creator string, taskID int32, imageURL string, imageHash string) *MsgCreateCompletion {
	return &MsgCreateCompletion{
		Creator:   creator,
		TaskID:    taskID,
		ImageURL:  imageURL,
		ImageHash: imageHash,
<<<<<<< HEAD
		Status:    "Pending",
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
	}
}

func (msg *MsgCreateCompletion) Route() string {
	return RouterKey
}

func (msg *MsgCreateCompletion) Type() string {
	return "CreateCompletion"
}

func (msg *MsgCreateCompletion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCompletion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCompletion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCompletion{}

<<<<<<< HEAD
func NewMsgUpdateCompletion(creator string, id uint64, taskID int32, imageURL string, imageHash string, status string) *MsgUpdateCompletion {
=======
func NewMsgUpdateCompletion(creator string, id uint64, taskID int32, imageURL string, imageHash string) *MsgUpdateCompletion {
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
	return &MsgUpdateCompletion{
		Id:        id,
		Creator:   creator,
		TaskID:    taskID,
		ImageURL:  imageURL,
		ImageHash: imageHash,
<<<<<<< HEAD
		Status:    status,
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
	}
}

func (msg *MsgUpdateCompletion) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCompletion) Type() string {
	return "UpdateCompletion"
}

func (msg *MsgUpdateCompletion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCompletion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCompletion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateCompletion{}

func NewMsgDeleteCompletion(creator string, id uint64) *MsgDeleteCompletion {
	return &MsgDeleteCompletion{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCompletion) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCompletion) Type() string {
	return "DeleteCompletion"
}

func (msg *MsgDeleteCompletion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCompletion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCompletion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
