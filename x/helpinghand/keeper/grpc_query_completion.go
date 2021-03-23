package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CompletionAll(c context.Context, req *types.QueryAllCompletionRequest) (*types.QueryAllCompletionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var completions []*types.Completion
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	completionStore := prefix.NewStore(store, types.KeyPrefix(types.CompletionKey))

	pageRes, err := query.Paginate(completionStore, req.Pagination, func(key []byte, value []byte) error {
		var completion types.Completion
		if err := k.cdc.UnmarshalBinaryBare(value, &completion); err != nil {
			return err
		}

		completions = append(completions, &completion)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCompletionResponse{Completion: completions, Pagination: pageRes}, nil
}

func (k Keeper) Completion(c context.Context, req *types.QueryGetCompletionRequest) (*types.QueryGetCompletionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var completion types.Completion
	ctx := sdk.UnwrapSDKContext(c)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.CompletionKey+req.Id)), &completion)

	return &types.QueryGetCompletionResponse{Completion: &completion}, nil
}
