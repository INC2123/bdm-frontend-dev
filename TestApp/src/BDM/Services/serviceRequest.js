import { store } from "../redux/store";
// import { applicationProperties } from "./applicationConfig";

export const doAjax = (sUrl, sMethod, oPayload, rSuccess, rError, oHeaders) => {
  const userState = store.getState().keycloakReducer;

  let oParams = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (sUrl.startsWith("/WorkObjectsJavaServices")) {
    oParams.headers = {
      ...oParams.headers,
    };
  }

  if (true) {
    if (userState?.token?.length) {
      oParams.headers = {
        ...oParams.headers,
        Authorization: `Bearer ${userState.token}`,
      };
    }
  }

  if (sUrl.startsWith("/CrudApiServices")) {
    oParams.headers = {
      ...oParams.headers,
      // env: "wf_dev_hana",
      // Accept: "*/*"
    };
  }

  if (sUrl.startsWith("/ITMJavaServices")) {
    oParams.headers = {
      ...oParams.headers,
      tenantId: "azure",
    };
  }

  if (true) {
    let splitUrl = sUrl.split("/");
    sUrl = sUrl.replace(
      "/" + splitUrl[1],
      process.env["REACT_APP_" + splitUrl[1]]
    );
  }
  switch (sMethod.toLowerCase()) {
    case "post":
      fetch(sUrl, {
        method: "POST",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "postblobfile": //POST Method call for blob type file upload
      let oHeaders = {};
      if (true) {
        oHeaders = {
          ...oHeaders,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userState.token}`,
        };
      } else {
        oHeaders = {
          ...oHeaders,
          "Access-Control-Allow-Origin": "*",
        };
      }
      fetch(sUrl, {
        method: "POST",
        headers: oHeaders,
        body: oPayload, // For file type we should not parse the body object to JSON.Stringify
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })

        .catch((err) => {
          rError(err);
        });

      break;

    case "getblobfile": //GET method for blob files (EXCEL DOWNLOAD)
      fetch(sUrl, {
        method: "POST",
        headers: oParams.headers,
        body: JSON.stringify(oPayload),
        mode: "cors",
      })
        .then((res) => res.blob()) // return type should be in blob type
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "get":
      fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        // mode: "cors",
      })
        // .get(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "delete":
      fetch(sUrl, {
        method: "DELETE",
        headers: oParams.headers,
        // mode: "cors",
      })
        // .delete(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    default:
      return;
  }
};

export const doAjaxWithAsync = async (
  sUrl,
  sMethod,
  oPayload,
  rSuccess,
  rError,
  oHeaders
) => {
  const userState = store.getState().appReducer;

  let oParams = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (sUrl.startsWith("/WorkObjectsJavaServices")) {
    oParams.headers = {
      ...oParams.headers,
    };
  }

  if (userState?.token?.length) {
    oParams.headers = {
      ...oParams.headers,
      Authorization: `Bearer ${userState.token}`,
    };
  }

  if (sUrl.startsWith("/CrudApiServices")) {
    oParams.headers = {
      ...oParams.headers,
      env: "wf_dev_hana",
      // Accept: "*/*"
    };
  }

  if (sUrl.startsWith("/ITMJavaServices")) {
    oParams.headers = {
      ...oParams.headers,
      tenantId: "azure",
    };
  }

  let splitUrl = sUrl.split("/");
  sUrl = sUrl.replace(
    "/" + splitUrl[1],
    process.env["REACT_APP_" + splitUrl[1]]
  );

  switch (sMethod.toLowerCase()) {
    case "post":
      await fetch(sUrl, {
        method: "POST",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "postblobfile": //POST Method call for blob type file upload
      let oHeaders = {};
      if (true) {
        oHeaders = {
          ...oHeaders,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userState.token}`,
        };
      } else {
        oHeaders = {
          ...oHeaders,
          "Access-Control-Allow-Origin": "*",
        };
      }
      await fetch(sUrl, {
        method: "POST",
        headers: oHeaders,
        body: oPayload, // For file type we should not parse the body object to JSON.Stringify and no headers should be passed
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })

        .catch((err) => {
          rError(err);
        });

      break;

    case "getblobfile": //GET method for blob files (EXCEL DOWNLOAD)
      await fetch(sUrl, {
        method: "POST",
        headers: oParams.headers,
        body: JSON.stringify(oPayload),
        mode: "cors",
      })
        .then((res) => res.blob()) // return type should be in blob type
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "get":
      await fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        // mode: "cors",
      })
        // .get(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;

    case "delete":
      await fetch(sUrl, {
        method: "DELETE",
        headers: oParams.headers,
        // mode: "cors",
      })
        // .delete(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    default:
      return;
  }
};
