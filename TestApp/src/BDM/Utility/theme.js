import { createTheme } from "@mui/material";

import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  palette: {
    spacing: (factor) => `${0.5 * factor}rem`,
    primary: {
      main: "rgba(48, 38, 185, 1)", //app primary theme col
      dark: "rgba(234, 233, 255, 1)", //darker version of the app theme color
      light: "#F1F5FE", //lighter version of the app  theme color
      secondary: "#E5E5E5", //Background color of the page
    },
    background: {
      default: "#FAFCFF",
      paper: "#FFFFFF",
      navbar: "#082940",
      accordionLight: "#F9FBFE",
    },
    secondary: {
      main: "#CB4747", // ---- Cherrywork - red
      light: "#ea9493", //lighter---- Cherrywork - red
      complementary: "#649b45", //lighter brand colour ---- Cherrywork - green
    },
    common: {
      white: "#FFFFFF",
      black: "#1D1D11",
    },
    action: {
      main: "#DBE9FF",
    },
    itmColors: {
      inprogress: "#97DFEA", //for state in progress
      approved: "#4CAF50", //for state closed or completed
      rework: "#FF0101", //reject and rework
    },
    button: {
      createClause: "#002D5D", //create clause button bg color
    },
    text: {
      primary: "#1D1D11", //primary text color
      black: "#3F3F3F",
      secondary: "#999A96",
      darkGrey: "#5E5E5E",
      lightGrey: "#F2F2F2",
      midGrey: "#757575",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2rem !important", //20
      fontweight: "normal",
    },
    h2: {
      fontSize: "1.5rem !important", //16
      fontweight: "normal",
    },
    h3: {
      fontSize: "1.25rem !important", //14
      fontweight: "normal",
    },
    h4: {
      fontSize: "1rem !important", //12
      fontweight: "normal",
    },
    h5: {
      fontSize: "1rem !important", //12
      fontweight: "normal",
    },
    h6: {
      fontSize: "1rem !important", //12
      fontweight: "normal",
    },
  },
});
