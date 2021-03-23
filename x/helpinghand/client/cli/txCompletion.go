package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

func CmdCreateCompletion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-completion [taskID] [imageURL] [imageHash]",
		Short: "Creates a new completion",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTaskID, _ := strconv.ParseInt(args[0], 10, 64)
			argsImageURL := string(args[1])
			argsImageHash := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCompletion(clientCtx.GetFromAddress().String(), int32(argsTaskID), string(argsImageURL), string(argsImageHash))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCompletion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-completion [id] [taskID] [imageURL] [imageHash]",
		Short: "Update a completion",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTaskID, _ := strconv.ParseInt(args[1], 10, 64)
			argsImageURL := string(args[2])
			argsImageHash := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCompletion(clientCtx.GetFromAddress().String(), id, int32(argsTaskID), string(argsImageURL), string(argsImageHash))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCompletion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-completion [id] [taskID] [imageURL] [imageHash]",
		Short: "Delete a completion by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCompletion(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
