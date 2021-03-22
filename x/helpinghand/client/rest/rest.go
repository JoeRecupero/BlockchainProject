package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers helpinghand-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/helpinghand/tasks/{id}", getTaskHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/helpinghand/tasks", listTaskHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/helpinghand/tasks", createTaskHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/helpinghand/tasks/{id}", updateTaskHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/helpinghand/tasks/{id}", deleteTaskHandler(clientCtx)).Methods("POST")

}
