package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TaskAll(c context.Context, req *types.QueryAllTaskRequest) (*types.QueryAllTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tasks []*types.Task
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	taskStore := prefix.NewStore(store, types.KeyPrefix(types.TaskKey))

	pageRes, err := query.Paginate(taskStore, req.Pagination, func(key []byte, value []byte) error {
		var task types.Task
		if err := k.cdc.UnmarshalBinaryBare(value, &task); err != nil {
			return err
		}

		tasks = append(tasks, &task)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTaskResponse{Task: tasks, Pagination: pageRes}, nil
}

func (k Keeper) Task(c context.Context, req *types.QueryGetTaskRequest) (*types.QueryGetTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var task types.Task
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTask(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTaskIDBytes(req.Id)), &task)

	return &types.QueryGetTaskResponse{Task: &task}, nil
}
