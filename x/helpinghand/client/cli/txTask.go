package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

func CmdCreateTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-task [title] [description] [prize] [startedAt] [endedAt]",
		Short: "Creates a new task",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTitle := string(args[0])
			argsDescription := string(args[1])
			argsPrize, _ := strconv.ParseInt(args[2], 10, 64)
			argsStartedAt, _ := strconv.ParseInt(args[3], 10, 64)
			argsEndedAt, _ := strconv.ParseInt(args[4], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTask(clientCtx.GetFromAddress().String(), string(argsTitle), string(argsDescription), int32(argsPrize), int32(argsStartedAt), int32(argsEndedAt))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-task [id] [title] [description] [prize] [startedAt] [endedAt]",
		Short: "Update a task",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTitle := string(args[1])
			argsDescription := string(args[2])
			argsPrize, _ := strconv.ParseInt(args[3], 10, 64)
			argsStartedAt, _ := strconv.ParseInt(args[4], 10, 64)
			argsEndedAt, _ := strconv.ParseInt(args[5], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateTask(clientCtx.GetFromAddress().String(), id, string(argsTitle), string(argsDescription), int32(argsPrize), int32(argsStartedAt), int32(argsEndedAt))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-task [id] [title] [description] [prize] [startedAt] [endedAt]",
		Short: "Delete a task by id",
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

			msg := types.NewMsgDeleteTask(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
