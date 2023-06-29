import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MinimizeIcon from "@mui/icons-material/Minimize";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const useStyles = makeStyles((theme) => ({
  SidebarWrapper: {
    display: "flex",
    flexDirection: "column",
    flexShrink: "0px",
    alignItems: "center",
    padding: "8px",
    gap: "16px",
    isolation: "isolate",
    position: "absolute",
    width: "72px",
    height: "963px",
    marginTop: "64px",
    color: "#fff",
    backgroundColor: "#082940",
  },

  IconLabelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
  },

  IconLabel: {
    marginTop: "4px",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14px",
    letterSpacing: "0.03em",
    textAlign: "center",
    Color: "#fff",
  },

  DividerWrapper: {
    width: "100%",
    height: "1px",
    backgroundColor: "#fff",
  },

  // SettingsButtonWrapper: {
  //   marginTop: "auto",
  // },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <Grid>
      <Stack className={classes.SidebarWrapper}>
        {/* <Item> */}
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <AddCircleOutlineIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
            Create
          </Typography>
        </Stack>

        <Stack className={classes.DividerWrapper}></Stack>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <HomeOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
            Home
          </Typography>
        </Stack>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <WorkspacesOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
           Workspace
          </Typography>
        </Stack>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <InsightsOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
           Insights
          </Typography>
        </Stack>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <AdminPanelSettingsOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
            Admin
            Console
          </Typography>
        </Stack>

        <Stack className={classes.IconLabelContainer}>
          <IconButton color="inherit" aria-label="home">
            <SettingsOutlinedIcon />
          </IconButton>
          <Typography
            className={classes.IconLabel}
          >
            Settings
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
