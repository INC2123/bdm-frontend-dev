// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { createRoot } from "react-dom/client";

// import Card from "./BDM/Components/Workspace/Card";
import { Provider } from "react-redux";
import { store } from "./BDM/redux/store";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import Keycloak from "keycloak-js";
// import reportWebVitals from "./reportWebVitals";
// import { useDispatch } from "react-redux";
// import { setKeycloak } from "./BDM/redux/actions/keycloakActions";

// const keycloak = Keycloak(
//   window.location?.hostname === "localhost"
//     ? "/localhostKeycloak.json"
//     : "/azureKeycloak.json"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
//   // const dispatch = useDispatch();
//   // dispatch(setKeycloak(keycloak));
//   return root.render(
//     authenticated ? (
//       <Provider store={store}>
//         <App keycloak={keycloak} />
//       </Provider>
//     ) : null
//   );
// });
import React from "react";
import Secured from "./BDM/Secured";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
require("./index.css");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Secured />
  </Provider>
);
