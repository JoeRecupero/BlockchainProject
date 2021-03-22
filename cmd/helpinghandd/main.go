package main

import (
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/app"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/cmd/helpinghandd/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
