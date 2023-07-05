import { configureStore } from "@reduxjs/toolkit";
import approvalCommentsReducer from "./reducers/approvalCommentsReducer";

export const store = configureStore({
  //   reducer: reducers,
  reducer: {
    approvalComments: approvalCommentsReducer,
  },
});
