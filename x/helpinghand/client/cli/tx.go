package cli

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdCreateCompletion())
	cmd.AddCommand(CmdUpdateCompletion())
	cmd.AddCommand(CmdDeleteCompletion())

	cmd.AddCommand(CmdCreateTask())
	cmd.AddCommand(CmdUpdateTask())
	cmd.AddCommand(CmdDeleteTask())

	return cmd
}
