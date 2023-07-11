import { Provider } from "react-redux";
import { store } from "./BDM/redux/store";
import React from "react";
import Secured from "./BDM/Secured";
import ReactDOM from "react-dom/client";

require("./index.css");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Secured />
  </Provider>
);
