package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		CompletionList: []*Completion{},
		TaskList:       []*Task{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in completion
	completionIdMap := make(map[string]bool)

	for _, elem := range gs.CompletionList {
		if _, ok := completionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for completion")
		}
		completionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in task
	taskIdMap := make(map[uint64]bool)

	for _, elem := range gs.TaskList {
		if _, ok := taskIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for task")
		}
		taskIdMap[elem.Id] = true
	}

	return nil
}
