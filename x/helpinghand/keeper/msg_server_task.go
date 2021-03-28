package keeper

import
(
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"

)

func (k msgServer) CreateTask(goCtx context.Context, msg *types.MsgCreateTask) (*types.MsgCreateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendTask(
		ctx,
		msg.Creator,
		msg.Title,
		msg.Description,
		msg.Prize,
		msg.StartedAt,
		msg.EndedAt,
	)

	return &types.MsgCreateTaskResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTask(goCtx context.Context, msg *types.MsgUpdateTask) (*types.MsgUpdateTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var task = types.Task{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Title:       msg.Title,
		Description: msg.Description,
		Prize:       msg.Prize,
		StartedAt:   msg.StartedAt,
		EndedAt:     msg.EndedAt,
	}

	// Checks that the element exists
	if !k.HasTask(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTaskOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTask(ctx, task)

	return &types.MsgUpdateTaskResponse{}, nil
}

func (k msgServer) DeleteTask(goCtx context.Context, msg *types.MsgDeleteTask) (*types.MsgDeleteTaskResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTask(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTaskOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTask(ctx, msg.Id)

	return &types.MsgDeleteTaskResponse{}, nil
}
