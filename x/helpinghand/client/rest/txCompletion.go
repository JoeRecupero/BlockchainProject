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

type createCompletionRequest struct {
	BaseReq   rest.BaseReq `json:"base_req"`
	Creator   string       `json:"creator"`
	TaskID    string       `json:"taskID"`
	ImageURL  string       `json:"imageURL"`
	ImageHash string       `json:"imageHash"`
}

func createCompletionHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createCompletionRequest
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

		parsedTaskID64, err := strconv.ParseInt(req.TaskID, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedTaskID := int32(parsedTaskID64)

		parsedImageURL := req.ImageURL

		parsedImageHash := req.ImageHash

		msg := types.NewMsgCreateCompletion(
			req.Creator,
			parsedTaskID,
			parsedImageURL,
			parsedImageHash,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateCompletionRequest struct {
	BaseReq   rest.BaseReq `json:"base_req"`
	Creator   string       `json:"creator"`
	TaskID    string       `json:"taskID"`
	ImageURL  string       `json:"imageURL"`
	ImageHash string       `json:"imageHash"`
<<<<<<< HEAD
	Status    string       `json:"status"`
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}

func updateCompletionHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateCompletionRequest
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

		parsedTaskID64, err := strconv.ParseInt(req.TaskID, 10, 32)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		parsedTaskID := int32(parsedTaskID64)

		parsedImageURL := req.ImageURL

		parsedImageHash := req.ImageHash

<<<<<<< HEAD
		parsedStatus := req.Status

=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
		msg := types.NewMsgUpdateCompletion(
			req.Creator,
			id,
			parsedTaskID,
			parsedImageURL,
			parsedImageHash,
<<<<<<< HEAD
			parsedStatus,
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteCompletionRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteCompletionHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteCompletionRequest
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

		msg := types.NewMsgDeleteCompletion(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
