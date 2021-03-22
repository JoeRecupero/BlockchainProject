package helpinghand

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/keeper"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the task
	for _, elem := range genState.TaskList {
		k.SetTask(ctx, *elem)
	}

	// Set task count
	k.SetTaskCount(ctx, uint64(len(genState.TaskList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all task
	taskList := k.GetAllTask(ctx)
	for _, elem := range taskList {
		elem := elem
		genesis.TaskList = append(genesis.TaskList, &elem)
	}

	return genesis
}
