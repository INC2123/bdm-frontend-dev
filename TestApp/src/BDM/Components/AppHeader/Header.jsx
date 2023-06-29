import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Stack, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CherryworkLogo from "../../Assets/CherryworkLogo.svg";
import ITMLogo from "../../Assets/BDMLogo.svg";
import WorkGetsDone from "../../Assets/WorkGetsDone.svg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    "&.MuiAppBar-root": {
      backgroundColor: theme.palette.background.navbar,
      boxShadow: "none !important",
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 24px 8px 24px",
    },
    height: 64,
    width: 1440,
    [theme.breakpoints.down("sm")]: {},
    overflow: "hidden",
  },
  cwLogo: {
    height: "35px",
    width: "31px",
    marginRight:'24px',
    transform: "rotate(0deg)",
  },
  root: {
    "& .muitypography-root": {
      color: "#ffffff",
    },
    "& .muitypography-root.title": {
      fontFamily:"Roboto Slab",
      fontStyle:"normal",
      fontWeight:700,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0.02rem",
    },
    // "& .muitypography-root.subtitle": {
    //   fontFamily: "Montserrat",
    //   fontStyle: "italic",
    //   fontWeight: 400,
    //   fontSize: "10px",
    //   lineHeight: "15px",
    //   // top: "25.02px",
    // },
  },

  // headerIcons1:{
  //   color:theme.palette.text.primary,
  //   fontSize:18,
  // },
  // inputRoot:{
  //   color:"inherit",
  //   width:"100%",
  //   borderRadius:theme.shape.borderRadius,
  //   backgroundColor:theme.palette.common.black,
  //   "&:hover":{
  //     backgroundColor:theme.palette.common.black,
  //   },
  // },
  // inputInput:{
  //     padding:theme.spacing(1,1.5,1,1.5),
  //     transition:theme.transitions.create("width"),
  //     width:"100%",
  //     [theme.breakpoints.up("md")]:{
  //         width:"100%",
  // },
  // },
  // iconPadding:{
  //     padding:4,
  // },
  // sectionDesktop:{
  //     display:"none",
  //     [theme.breakpoints.up("md")]:{
  //         display:"flex",
  // },
  // },
  // sectionMobile:{
  //     display:"flex",
  //     [theme.breakpoints.up("md")]:{
  //         display:"none",
  // },
  // },
  // title:{
  //   color:"#FFFFFF",
  //   fontSize:"18px",
  //   fontWeight:700,
  //   fontFamily:theme.typography.caption,
  //   fontStyle:"normal",
  //   lineHeight:"24px",
  //   letterSpacing:'0.02rem',
  // },
  // caption:{
  //   color:"#FFFFFF",
  //   fontSize:"10px",
  //   fontWeight:400,
  //   fontFamily:theme.typography.caption,
  //   fontStyle:"italic",
  //   lineHeight:"15px",
  //   letterSpacing:'0.02rem',
  // },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
          <Toolbar>
          <Stack className={classes.cwLogo}>
            <img src={CherryworkLogo} alt="CherryworkLogo"></img>
          </Stack>
          <Stack className={classes.root}>
            <Typography className="muitypography-root title">
              Business Document Management
          </Typography>
            {/* <Typography className="muitypography-root subtitle">
              Work Gets Done
            </Typography> */}
          </Stack>
          {/* </div> */}
  
          
          {/* <Grid
                item
                container
                xs={4}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
              {/* <Grid item>
                  <Stack onClick={handleProfileMenuOpen} style={{marginRight:"4px"}}>
                    <CustomAvatar
                      className={"wbMR8"}
                      size={"default"}
                      src={userReducer?.userData?.img_url}
                      name={displayName}
                    />
                  </Stack>
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <div>{isMenuOpen ? <div>{renderMenu}</div> : null}</div>
                  </ClickAwayListener>
                </Grid> */}
          {/* </Grid>
              <div
                style={{
                  display: "none",
                  flexGrow: 1,
                }}
              >
                <Grid
                  zeroMinWidth
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid
                    className={classes.search}
                    item
                    xs={11}
                    sm={11}
                    md={5}
                    lg={4}
                  ></Grid>
                  <Grid
                    item
                    container
                    xs={1}
                    sm={1}
                    md={5}
                    lg={8}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                  ></Grid>
                </Grid> */}
        {/* </Grid>
      </Grid> */}
      </Toolbar>
    </AppBar>
  );
}
