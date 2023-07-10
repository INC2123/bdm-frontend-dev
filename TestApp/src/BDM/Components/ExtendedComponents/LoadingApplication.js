// import React from "react";
// import CherryworkLogo from "../../Assets/CherryWorkIcon";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// // @params
// // message - TEXT
// // variant - options ( null/determinate)
// // value - % needed for the progress
// // function  - for logout of the user
// // Button text - Example "refresh" or "logout"
// // status - "loading, failure, success"

// const LoadingApplication = ({
//   message,
//   status,
//   variant,
//   progressValue,
//   onClick,
//   btnText,
// }) => {
//   return (
//     <Stack
//       justifyContent="center"
//       alignItems="center"
//       // className="wbSetHeight100"
//       sx={{ pt: "15%" }}
//     >
//       <img
//         src={CherryworkLogo}
//         alt="Logo"
//         height="60px"
//         style={{ marginBottom: "10px" }}
//       ></img>
//       {status === "loading" && variant === "determinate" && (
//         <LinearProgress
//           sx={{
//             // margin: "10px 0px 10px 0px",
//             width: "16%",
//             height: "5px",
//             borderRadius: "6px",
//           }}
//         />
//         // <LinearDeterminate value={progressValue || [0, 100]} />
//       )}
//       {status === "loading" && !variant && (
//         <LinearProgress
//           sx={{
//             // margin: "10px 0px 10px 0px",
//             width: "16%",
//             height: "5px",
//             borderRadius: "6px",
//           }}
//         />
//       )}
//       <Typography
//         sx={{ fontSize: "16px !important", marginTop: "10px" }}
//         color="text.primary"
//         gutterBottom
//       >
//         {message}
//       </Typography>
//       {status === "failure" || status === "success" ? (
//         <>
//           <Button variant="contained" size="small" onClick={onClick}>
//             {btnText}
//           </Button>
//         </>
//       ) : (
//         <></>
//       )}
//     </Stack>
//   );
// };
// export default LoadingApplication;

import React from "react";

export default function LoadingApplication() {
  return <div>LoadingApplication</div>;
}
