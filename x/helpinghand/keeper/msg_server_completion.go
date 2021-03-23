package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

func (k msgServer) CreateCompletion(goCtx context.Context, msg *types.MsgCreateCompletion) (*types.MsgCreateCompletionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendCompletion(
		ctx,
		msg.Creator,
		msg.TaskID,
		msg.ImageURL,
		msg.ImageHash,
	)

	return &types.MsgCreateCompletionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCompletion(goCtx context.Context, msg *types.MsgUpdateCompletion) (*types.MsgUpdateCompletionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var completion = types.Completion{
		Creator:   msg.Creator,
		Id:        msg.Id,
		TaskID:    msg.TaskID,
		ImageURL:  msg.ImageURL,
		ImageHash: msg.ImageHash,
	}

	// Checks that the element exists
	if !k.HasCompletion(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCompletionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCompletion(ctx, completion)

	return &types.MsgUpdateCompletionResponse{}, nil
}

func (k msgServer) DeleteCompletion(goCtx context.Context, msg *types.MsgDeleteCompletion) (*types.MsgDeleteCompletionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCompletion(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCompletionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCompletion(ctx, msg.Id)

	return &types.MsgDeleteCompletionResponse{}, nil
}
