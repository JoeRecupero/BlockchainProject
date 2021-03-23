package helpinghand

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/keeper"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

func handleMsgCreateCompletion(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateCompletion) (*sdk.Result, error) {
	k.CreateCompletion(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgUpdateCompletion(ctx sdk.Context, k keeper.Keeper, msg *types.MsgUpdateCompletion) (*sdk.Result, error) {
	var completion = types.Completion{
		Creator:   msg.Creator,
		Id:        msg.Id,
		TaskID:    msg.TaskID,
		ImageURL:  msg.ImageURL,
		ImageHash: msg.ImageHash,
	}

	// Checks that the element exists
	if !k.HasCompletion(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %s doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCompletionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCompletion(ctx, completion)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}

func handleMsgDeleteCompletion(ctx sdk.Context, k keeper.Keeper, msg *types.MsgDeleteCompletion) (*sdk.Result, error) {
	if !k.HasCompletion(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %s doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCompletionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.DeleteCompletion(ctx, msg.Id)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
