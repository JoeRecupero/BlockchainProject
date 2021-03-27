package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
	"strconv"
)

// GetCompletionCount get the total number of completion
func (k Keeper) GetCompletionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionCountKey))
	byteKey := types.KeyPrefix(types.CompletionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetCompletionCount set the total number of completion
func (k Keeper) SetCompletionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionCountKey))
	byteKey := types.KeyPrefix(types.CompletionCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCompletion appends a completion in the store with a new id and update the count
func (k Keeper) AppendCompletion(
	ctx sdk.Context,
	creator string,
	taskID int32,
	imageURL string,
	imageHash string,
	status string,
) uint64 {
	// Create the completion
	count := k.GetCompletionCount(ctx)
	var completion = types.Completion{
		Creator:   creator,
		Id:        count,
		TaskID:    taskID,
		ImageURL:  imageURL,
		ImageHash: imageHash,
		Status:    status,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	value := k.cdc.MustMarshalBinaryBare(&completion)
	store.Set(GetCompletionIDBytes(completion.Id), value)

	// Update completion count
	k.SetCompletionCount(ctx, count+1)

	return count
}

// SetCompletion set a specific completion in the store
func (k Keeper) SetCompletion(ctx sdk.Context, completion types.Completion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	b := k.cdc.MustMarshalBinaryBare(&completion)
	store.Set(GetCompletionIDBytes(completion.Id), b)
}

// GetCompletion returns a completion from its id
func (k Keeper) GetCompletion(ctx sdk.Context, id uint64) types.Completion {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	var completion types.Completion
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCompletionIDBytes(id)), &completion)
	return completion
}

// HasCompletion checks if the completion exists in the store
func (k Keeper) HasCompletion(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	return store.Has(GetCompletionIDBytes(id))
}

// GetCompletionOwner returns the creator of the completion
func (k Keeper) GetCompletionOwner(ctx sdk.Context, id uint64) string {
	return k.GetCompletion(ctx, id).Creator
}

// RemoveCompletion removes a completion from the store
func (k Keeper) RemoveCompletion(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	store.Delete(GetCompletionIDBytes(id))
}

// GetAllCompletion returns all completion
func (k Keeper) GetAllCompletion(ctx sdk.Context) (list []types.Completion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompletionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Completion
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCompletionIDBytes returns the byte representation of the ID
func GetCompletionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCompletionIDFromBytes returns ID in uint64 format from a byte array
func GetCompletionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
