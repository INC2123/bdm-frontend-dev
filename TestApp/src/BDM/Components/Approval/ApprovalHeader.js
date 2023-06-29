import Stack from "@mui/material/Stack";
import "@fontsource/roboto";
import AdministativeIcon from "../../Assets/AdministativeIcon.js";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Box from "@mui/material/Box";
import VerticleLineIcon from "../../Assets/VerticleLineIcon.js";

const useStyles = makeStyles((theme) => ({
  approval_header_box: {
    height: "7.188rem",
    background: "#FFFFFF",
    fontFamily: "Roboto ",
    fontStyle: "normal",
  },
  approval_header: {
    marginTop: "1.5rem",
  },
  approval_header_title: {
    fontWeight: "700 !important",
    fontSize: "1.25rem !important",
    color: "#1D1D11",
    marginRight: "1rem",
    marginLeft: "2.5rem",
  },

  approval_administrative_line: {
    marginRight: "1rem",
    fontSize: "1rem",
    fontWeight: "400",
    color: "#424242",
  },
  approval_administrative_icon: {
    marginRight: "0.3rem",
    fontSize: "1rem",
    fontWeight: "400",
    color: "#424242",
  },

  approval_administrative: {
    fontSize: " 1rem ",
    fontWeight: "400",
    color: "#424242",
    paddingTop: "2px",
  },

  approval_btn: {
    marginTop: "2rem",
  },

  approval_clause_details: {
    fontSize: "0.875rem !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    marginLeft: "2.5rem !important",
    padding: "0px !important",
    minHeight: "3rem !important",
  },
  approval_activity_log: {
    fontSize: "0.875rem !important",
    textTransform: "capitalize !important",
    fontWeight: "600 !important",
    marginLeft: "1.5rem !important",
    padding: "0px !important",
    minHeight: "2.5rem !important",
  },
}));

export default function ApprovalHeader(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [tabColor, setTabColor] = React.useState("#757575");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleTabClick = (event) => {
  //   setTabColor("#171717");
  // };

  return (
    <Stack className={classes.approval_header_box}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" className={classes.approval_header}>
          <Stack className={classes.approval_header_title}>
            Master Services Agreement
          </Stack>
          <Stack className={classes.approval_administrative_line}>
            <VerticleLineIcon />
          </Stack>
          <Stack className={classes.approval_administrative_icon}>
            <AdministativeIcon />
          </Stack>
          <Stack className={classes.approval_administrative}>
            Administrative
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          className={classes.approval_btn}
        >
          {props.button}
        </Stack>
      </Stack>
      <Stack>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#171717",
              },
            }}
            textColor="#171717"
          >
            <Tab
              sx={{ p: 4 }}
              className={classes.approval_clause_details}
              icon={<AssignmentOutlinedIcon />}
              iconPosition="start"
              label="Clause Details"
              // onClick={handleTabClick}
            />

            <Tab
              sx={{ p: 4 }}
              className={classes.approval_activity_log}
              icon={<PendingActionsOutlinedIcon />}
              iconPosition="start"
              label="Activity Log"
              // onClick={handleTabClick}
            />
          </Tabs>
        </Box>
      </Stack>
    </Stack>
  );
}
