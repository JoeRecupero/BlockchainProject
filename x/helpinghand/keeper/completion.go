package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
	"strconv"
)

// GetCompletionCount get the total number of completion
func (k Keeper) GetCompletionCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionCountKey))
	byteKey := types.KeyPrefix(types.CompletionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseInt(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to int64
		panic("cannot decode count")
	}

	return count
}

// SetCompletionCount set the total number of completion
func (k Keeper) SetCompletionCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionCountKey))
	byteKey := types.KeyPrefix(types.CompletionCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}

// CreateCompletion creates a completion with a new id and update the count
func (k Keeper) CreateCompletion(ctx sdk.Context, msg types.MsgCreateCompletion) {
	// Create the completion
	count := k.GetCompletionCount(ctx)
	var completion = types.Completion{
		Creator:   msg.Creator,
		Id:        strconv.FormatInt(count, 10),
		TaskID:    msg.TaskID,
		ImageURL:  msg.ImageURL,
		ImageHash: msg.ImageHash,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	key := types.KeyPrefix(types.CompletionKey + completion.Id)
	value := k.cdc.MustMarshalBinaryBare(&completion)
	store.Set(key, value)

	// Update completion count
	k.SetCompletionCount(ctx, count+1)
}

// SetCompletion set a specific completion in the store
func (k Keeper) SetCompletion(ctx sdk.Context, completion types.Completion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	b := k.cdc.MustMarshalBinaryBare(&completion)
	store.Set(types.KeyPrefix(types.CompletionKey+completion.Id), b)
}

// GetCompletion returns a completion from its id
func (k Keeper) GetCompletion(ctx sdk.Context, key string) types.Completion {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	var completion types.Completion
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.CompletionKey+key)), &completion)
	return completion
}

// HasCompletion checks if the completion exists
func (k Keeper) HasCompletion(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	return store.Has(types.KeyPrefix(types.CompletionKey + id))
}

// GetCompletionOwner returns the creator of the completion
func (k Keeper) GetCompletionOwner(ctx sdk.Context, key string) string {
	return k.GetCompletion(ctx, key).Creator
}

// DeleteCompletion deletes a completion
func (k Keeper) DeleteCompletion(ctx sdk.Context, key string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	store.Delete(types.KeyPrefix(types.CompletionKey + key))
}

// GetAllCompletion returns all completion
func (k Keeper) GetAllCompletion(ctx sdk.Context) (msgs []types.Completion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.CompletionKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.Completion
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}
