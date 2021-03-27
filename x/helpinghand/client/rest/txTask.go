package rest

import (
	"net/http"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
	"gitlab.utwente.nl/blockchaingroup2/helpinghand/x/helpinghand/types"
)

type createTaskRequest struct {
	BaseReq     rest.BaseReq `json:"base_req"`
	Creator     string       `json:"creator"`
	Title       string       `json:"title"`
	Description string       `json:"description"`
	Prize       string       `json:"prize"`
	StartedAt   string       `json:"startedAt"`
	EndedAt     string       `json:"endedAt"`
}

func createTaskHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createTaskRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedTitle := req.Title

		parsedDescription := req.Description

		parsedPrize64, err := strconv.ParseInt(req.Prize, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedPrize := int32(parsedPrize64)

		parsedStartedAt64, err := strconv.ParseInt(req.StartedAt, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedStartedAt := int32(parsedStartedAt64)

		parsedEndedAt64, err := strconv.ParseInt(req.EndedAt, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedEndedAt := int32(parsedEndedAt64)

		msg := types.NewMsgCreateTask(
			req.Creator,
			parsedTitle,
			parsedDescription,
			parsedPrize,
			parsedStartedAt,
			parsedEndedAt,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateTaskRequest struct {
	BaseReq     rest.BaseReq `json:"base_req"`
	Creator     string       `json:"creator"`
	Title       string       `json:"title"`
	Description string       `json:"description"`
	Prize       string       `json:"prize"`
	StartedAt   string       `json:"startedAt"`
	EndedAt     string       `json:"endedAt"`
}

func updateTaskHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateTaskRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedTitle := req.Title

		parsedDescription := req.Description

		parsedPrize64, err := strconv.ParseInt(req.Prize, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedPrize := int32(parsedPrize64)

		parsedStartedAt64, err := strconv.ParseInt(req.StartedAt, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedStartedAt := int32(parsedStartedAt64)

		parsedEndedAt64, err := strconv.ParseInt(req.EndedAt, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedEndedAt := int32(parsedEndedAt64)

		msg := types.NewMsgUpdateTask(
			req.Creator,
			id,
			parsedTitle,
			parsedDescription,
			parsedPrize,
			parsedStartedAt,
			parsedEndedAt,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteTaskRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteTaskHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteTaskRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteTask(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
