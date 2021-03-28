package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

// GetTaskCount get the total number of task
func (k Keeper) GetTaskCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskCountKey))
	byteKey := types.KeyPrefix(types.TaskCountKey)
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

// SetTaskCount set the total number of task
func (k Keeper) SetTaskCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskCountKey))
	byteKey := types.KeyPrefix(types.TaskCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTask appends a task in the store with a new id and update the count
func (k Keeper) AppendTask(
	ctx sdk.Context,
	creator string,
	title string,
	description string,
	prize int32,
	startedAt string,
	endedAt string,
) uint64 {
	// Create the task
	count := k.GetTaskCount(ctx)
	var task = types.Task{
		Creator:     creator,
		Id:          count,
		Title:       title,
		Description: description,
		Prize:       prize,
		StartedAt:   startedAt,
		EndedAt:     endedAt,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	value := k.cdc.MustMarshalBinaryBare(&task)
	store.Set(GetTaskIDBytes(task.Id), value)

	// Update task count
	k.SetTaskCount(ctx, count+1)

	return count
}

// SetTask set a specific task in the store
func (k Keeper) SetTask(ctx sdk.Context, task types.Task) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	b := k.cdc.MustMarshalBinaryBare(&task)
	store.Set(GetTaskIDBytes(task.Id), b)
}

// GetTask returns a task from its id
func (k Keeper) GetTask(ctx sdk.Context, id uint64) types.Task {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	var task types.Task
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTaskIDBytes(id)), &task)
	return task
}

// HasTask checks if the task exists in the store
func (k Keeper) HasTask(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	return store.Has(GetTaskIDBytes(id))
}

// GetTaskOwner returns the creator of the task
func (k Keeper) GetTaskOwner(ctx sdk.Context, id uint64) string {
	return k.GetTask(ctx, id).Creator
}

// RemoveTask removes a task from the store
func (k Keeper) RemoveTask(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	store.Delete(GetTaskIDBytes(id))
}

// GetAllTask returns all task
func (k Keeper) GetAllTask(ctx sdk.Context) (list []types.Task) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TaskKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Task
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTaskIDBytes returns the byte representation of the ID
func GetTaskIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTaskIDFromBytes returns ID in uint64 format from a byte array
func GetTaskIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
