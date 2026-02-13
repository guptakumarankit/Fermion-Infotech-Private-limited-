import { configureStore } from "@reduxjs/toolkit";
import operationReducer from "./slices/OperationSlice.js";

export const store = configureStore({
  reducer: {
    operation: operationReducer,
  },
});

// subscribe() is a method of the Redux store.
// It runs every time the store state changes, no matter which part changed.

store.subscribe(() => {
  // getState give access of full global store.
  const state = store.getState();
  // console.log(state.operation.todos);
  localStorage.setItem("todoList", JSON.stringify(state.operation.todos));
});
