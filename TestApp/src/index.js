import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./BDM/Components/Workspace/Card";
import { Provider } from "react-redux";
import { store } from "./BDM/redux/store";
import Keycloak from "keycloak-js";
import reportWebVitals from "./reportWebVitals";
import { useDispatch } from "react-redux";
// import { setKeycloak } from "./BDM/redux/actions/keycloakActions";

const keycloak = Keycloak(
  window.location?.hostname === "localhost"
    ? "/localhostKeycloak.json"
    : "/azureKeycloak.json"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  // const dispatch = useDispatch();
  // dispatch(setKeycloak(keycloak));
  return root.render(
    authenticated ? (
      <Provider store={store}>
        <App keycloak={keycloak} />
      </Provider>
    ) : null
  );
});
