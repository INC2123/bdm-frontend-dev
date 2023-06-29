import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  approval_categeory: {
    marginTop: "1.625rem",
    width: "8.5vw",
    marginLeft: "2.5rem",
    height: "fitContent",
    textTransform: "capitalize",
    fontSize: "0.75rem",
    fontFamily: "Roboto",
  },
}));
export default function ApprovalCategeory() {
  const classes = useStyles();
  const categories = ["Company policies", "HR", "Code Of Conduct"]; // Array of category names
  const colorsAndBackgrounds = [
    { color: "#284076", backgroundColor: "#E5EDFF" },
    { color: "#BA4E4E", backgroundColor: "#FCE8E8" },
    { color: "#9A562B", backgroundColor: "#FCF1EA" },
  ];
  return (
    <div className={classes.approval_categeory}>
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            // width: "auto",
            color: colorsAndBackgrounds[index].color,
            backgroundColor: colorsAndBackgrounds[index].backgroundColor,
            padding: "0.2rem 0.5rem",
            marginBottom: "8px",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
          }}
        >
          <div>{category}</div>
        </Box>
      ))}
    </div>
  );
}
