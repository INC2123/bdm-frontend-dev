import { combineReducers } from "redux";
import approvalCommentsReducer from "./approvalCommentsReducer";
// import keycloakReducer from "./keycloakReducer";

const rootReducer = combineReducers({
  approvalComments: approvalCommentsReducer,
  // keycloak: keycloakReducer,
});

export default rootReducer;
