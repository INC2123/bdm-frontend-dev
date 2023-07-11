// import { Box, TextField, MenuItem, Stack, Typography, Autocomplete } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { fetchWrapper } from "../../services/fetchWrapper";
// // import configData from "../ExtendedComponents/configData.js";
// import Workspace from "@cw/cherrywork-workspace-redesign/Workspace";
// import { useNavigate } from "react-router-dom";

// const ITMApproval = () => {
//   const navigate = useNavigate();
//   const returnUserGroupMap = (oData) => {
//     let parsedGroups = {};
//     oData?.data.map((group, index) => {
//       parsedGroups[group.id] = group;
//     });
//     return parsedGroups;
//   };
//   const returnUserMap = (oData) => {
//     let parsedUsers = {};
//     let dataWithDispName = [],
//       dataWithoutDispName = [];
//     oData?.data?.forEach((userDetails) => {
//       if (userDetails.displayName) {
//         dataWithDispName.push(userDetails);
//       } else {
//         dataWithoutDispName.push(userDetails);
//       }
//     });
//     dataWithDispName?.sort((a, b) => a?.displayName?.localeCompare(b?.displayName));
//     dataWithDispName.concat(dataWithoutDispName);
//     dataWithDispName?.map((user) => {
//       parsedUsers[user.userId] = user;
//     });
//     return parsedUsers;
//   };
//   // const [colId, setColId] = useState();
//   const userGroupRawData = {
//     status: "true",
//     statusCode: "200",
//     message: "Groups are fetched",
//     data: [],
//   };
//   const [configData, setConfigData] = useState({});
//   const [usersList, setusersList] = useState({});
//   const token = useSelector((state) => state.token);
//   const userId = useSelector((state) => state.userId);

//   const userData = useSelector((state) => state.userDetails);
//   const userPermissions = {
//     APPLICATION_PERMISSIONS: ["INBOX"],
//     PERMISSIONS: {
//       MY_TASKS: ["ASSIGNED_TO_ME_TASKS", "SUBSTITUTED_FOR_ME_TASKS"],
//       INBOX: ["CREATED_TASKS", "MY_TASKS", "SUBSTITUTION_TASKS"],
//     },
//   };
//   /**************for qa */
//   // const destinationData = {
//   //   APPLICATION_NAME: "1783",
//   //   CRUD_API_ENV: "itm_qa",
//   //   SERVICE_BASE_URL: [
//   //     {
//   //       Description: "",
//   //       Name: "ITMJavaServices",
//   //       URL: "https://itmservicesqa.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkNetServices",
//   //       URL: "https://wnservicesqa.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "CrudApiServices",
//   //       URL: "https://crudservicesdev.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkAccessServices",
//   //       URL: "https://waservicesqa.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkRulesServices",
//   //       URL: "https://wrservicesdev.cherryworkproducts.com/rest",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "SapIDPServices",
//   //       URL: "https://hrapps.authentication.eu10.hana.ondemand.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkFormsServices",
//   //       URL: "https://wfservicesdev.cherryworkproducts.com/workforms",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkChatServices",
//   //       URL: "https://workchat-java.cfapps.us10.hana.ondemand.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkNotesServices",
//   //       URL: "https://workcollab-java-dev.cfapps.us10.hana.ondemand.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "CW_Worktext",
//   //       URL: "https://cwworktext.cfapps.eu10.hana.ondemand.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "PowerBiServices",
//   //       URL: "https://powerbifunciton.azurewebsites.net",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkCollabServices",
//   //       URL: "https://wcservicesdev.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "WorkRulesEngineServices",
//   //       URL: "https://workrulesengineweb.cfapps.eu10.hana.ondemand.com/rest/v1",
//   //     },
//   //     {
//   //       Description: "",
//   //       Name: "NotificationServices",
//   //       URL: "https://messagingqa.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "Updated IWA Services",
//   //       Name: "IWAServices",
//   //       URL: "https://itm.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "Copied from Dev Services",
//   //       Name: "ConfigServer",
//   //       URL: "https://configservice.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "Dashboard QA Services",
//   //       Name: "ITMGraphServices",
//   //       URL: "https://qadashboard.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "Native Workflow Rest Services QA",
//   //       Name: "NativeWorkflowServices",
//   //       URL: "https://customwfqa.cherryworkproducts.com",
//   //     },
//   //     {
//   //       Description: "Native Workflow UI URL QA",
//   //       Name: "NativeWorkflowUiUrl",
//   //       URL: "https://nativewfqa.cherryworkproducts.com/native-ui",
//   //     },
//   //   ],
//   // };
//   /**********************************/

//   /*********************for dev ***************/
//   const destinationData = {
//     APPLICATION_NAME: "1783",
//     CRUD_API_ENV: "itm_dev",
//     SERVICE_BASE_URL: [
//       {
//         Description: "",
//         Name: "ITMJavaServices",
//         URL: "https://coreservices.cherryworkproducts.com",
//       },
//       {
//         Description: "",
//         Name: "ConfigServer",
//         URL: "https://configservice.cherryworkproducts.com",
//       },
//       {
//         Description: "",
//         Name: "WorkNetServices",
//         URL: "https://wnservices.cherryworkproducts.com",
//       },
//       {
//         Description: "",
//         Name: "CrudApiServices",
//         URL: "https://crudservicesdev.cherryworkproducts.com",
//       },
//       {
//         Description: "",
//         Name: "WorkFormsServices",
//         URL: "https://wfservicesdev.cherryworkproducts.com/workforms",
//       },
//       {
//         Description: "",
//         Name: "WorkCollabServices",
//         URL: "https://workcollab-java-dev.cfapps.eu10.hana.ondemand.com",
//       },
//       {
//         Description: "",
//         Name: "NativeWorkflowServices",
//         URL: "https://customwfdev.cherryworkproducts.com",
//       },
//     ],
//   };
//   /****************************/
//   useEffect(() => {
//     fetchWrapper("/IPMServices/rest/v1/user/list").then((usersList) => { //from backend change it
//       let data = usersList?.data?.map((user) => ({ ...user, displayName: user.fullName }));
//       usersList.data = data;
//       setusersList(usersList);
//     });

//     fetch("https://configservice.cherryworkproducts.com/application/default/main/ipm-ui-qa/ipm_qa_itmConfig.json?useDefaultLabel", { method: "get", headers: { "Access-control-Allow-Origin": "*" } })
//       .then((r) => r.json())
//       .then((data) => {
//         setConfigData(data);
//       });
//   }, []);

//   const fetchPriceBookNumber = (task) => {
//     let payload = {
//       args: [task.taskId],
//       query: "getAttributesByTaskId",
//     };
//     const requestOptions = {
//       method: "POST",
//       headers: { env: "itm_dev", "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     };
//     fetchWrapper(`/CrudApiServices/crud/api/fetchQuery?converterName=map`, requestOptions)
//       .then((data) => {
//         if (data) navigate(`/pricebook/cp/SAP/${data.pbNumber}`);
//       })
//       .catch((err) => console.log(err));
//   };
//   const onTaskClick = (task) => {  //change according to BDM
//     if (task?.systemId === "SCP_IPM" || task?.systemId === "SCP") fetchPriceBookNumber(task);
//     console.log(task);
//   };
//   const onActionComplete = (successFlag, taskPayload) => {
//     console.log("Success flag.", successFlag);

//     console.log("Task Payload.", taskPayload);
//   };

//   return (
//     <Stack className="TaskApprovalContainer">
//       {Object.keys(configData).length !== 0 && usersList?.data?.length > 0 && (
//         <Workspace
//           token={token}
//           configData={configData}
//           destinationData={destinationData}
//           userData={userData}
//           userPermissions={userPermissions}
//           userList={returnUserMap(usersList)}
//           groupList={returnUserGroupMap(userGroupRawData)}
//           useWorkAccess={true}
//           useConfigServerDestination={true}
//           inboxTypeKey={"ASSIGNED_TO_ME_TASKS"}
//           workspaceLabel={"Approval Workspace"}
//           subInboxTypeKey={null}
//           onTaskClick={onTaskClick}
//           onActionComplete={onActionComplete}
//           workspaceFiltersByAPIDriven={false}
//           isFilterView={false}
//           // fetchFilterViewList={fetchFilterViewList}
//           savedFilterViewData={[]}
//         />
//       )}
//     </Stack>
//   );
// };

// export default ITMApproval;
