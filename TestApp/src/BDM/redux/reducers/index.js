import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./appReducer";
import highlighterReducer from "./highlighterReducer";
import keycloakReducer from "./keycloakReducer";

const reducers = combineReducers({
  appReducer: appReducer,
  highlighterReducer: highlighterReducer,
  keycloakReducer: keycloakReducer,
});

export default reducers;
