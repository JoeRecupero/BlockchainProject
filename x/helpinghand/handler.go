package helpinghand

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/keeper"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		// this line is used by starport scaffolding # 1
		case *types.MsgCreateCompletion:
			return handleMsgCreateCompletion(ctx, k, msg)

		case *types.MsgUpdateCompletion:
			return handleMsgUpdateCompletion(ctx, k, msg)

		case *types.MsgDeleteCompletion:
			return handleMsgDeleteCompletion(ctx, k, msg)

		case *types.MsgCreateTask:
			res, err := msgServer.CreateTask(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateTask:
			res, err := msgServer.UpdateTask(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteTask:
			res, err := msgServer.DeleteTask(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
