import React, { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
// import "/TestApp/src/index.css";
import App from "../App";
import NotAuthorizedPage from "./Components/NoAuth/NotAuthorizedPage";
import LoadingApplication from "./Components/ExtendedComponents/LoadingApplication";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/reducers/keycloakReducer";

const Secured = () => {
  const [action, setAction] = useState("checkAuthentication");
  const [authenticated, setAuthenticated] = useState("loading");
  const [authorised, setAuthorized] = useState("loading");
  const [keycloak, setKeycloak] = useState("null");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const keycloak = Keycloak(
      window.location?.hostname === "localhost"
        ? "/localhostKeycloak.json"
        : "/azureKeycloak.json"
    );
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        setAction(authenticated ? "checkAuthorisation" : "checkAuthentication");
        setAuthenticated(authenticated);
        setAuthorized("loading");
        setKeycloak(keycloak);

        const bearer = keycloak.idToken;
        console.log("====================================");
        console.log(bearer);
        console.log("====================================");
        dispatch(setToken(bearer));

        const headers = {
          Authorization: bearer,
        };
        let url = "https://iwaservicesqa.cherryworkproducts.com/api/v2/groups";
        fetch(url, { headers: headers })
          .then((res) => res.json())
          .then((response) => {
            if (response.data) {
              setUserData(response.data);
              setAction("checkAuthorisation");
              response?.data?.forEach((ele) => {
                if (ele?.name.startsWith("Admin")) {
                  setAuthorized("authorized");
                }
              });
            } else {
              setAuthorized("notauthorized");
            }
          });
      });
  }, []);

  if (action === "checkAuthentication") {
    if (authenticated === "loading") {
      {
        //   Check for authorisation
        // Step 1 progress 30%
        return (
          <LoadingApplication
            status="loading"
            variant="determinate"
            progressValue={10} //2nd step
            message="Please wait while we sign you in..."
          />
        );
      }
    } else {
      // Invalid user logged in Progress 100%
      return (
        <LoadingApplication
          status="failure"
          variant="determinate"
          progressValue={100}
          message="Please check your credentials and try again."
        />
      );
    }
  }

  if (action === "checkAuthorisation") {
    if (authorised === "loading") {
      //   Check for authorisation Progress 60%
      return (
        <LoadingApplication
          status="loading"
          variant="determinate"
          progressValue={60} //2nd step
          // message="Please wait while we sign you in..."
          message="Almost there, fetching your privileges..."
        />
      );
    } else if (authorised === "authorized") {
      //   Authorised user
      return <App />;
    } else {
      return <NotAuthorizedPage />;
    }
  }
};

export default Secured;
