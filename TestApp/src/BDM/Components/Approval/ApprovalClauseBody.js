import React from "react";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import ApprovalHighlighter from "./ApprovalHighlighter";

const useStyles = makeStyles((theme) => ({
  approval_body: {
    alignItems: "center",
    width: "62vw",
    height: "fitContent",
    border: "1px solid #E0E0E0",
    borderRadius: "0.25rem",
    backgroundColor: "#FFFFFF",
    marginTop: "1.625rem",
  },

  approval_clause_name: {
    marginTop: "1rem",
    fontWeight: "700",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
  },

  approval_clause_body: {
    marginTop: "1rem",
    marginBottom: "2.7rem",
    backgroundColor: "#F9F9F9",
    border: "1px dashed #E0E0E0",
    textAlign: "justify",
    padding: "0 2rem",
    fontSize: "0.875rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
  },
}));

export default function ApprovalClauseBody(props) {
  const classes = useStyles();
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fefef e ef er e e reeeeee eeeeeeeee trre e eeeeeeeeeeeee rer e   eeet     errrrrrrrr e         errerere         rerere";
  return (
    <Stack className={classes.approval_body}>
      <Stack className={classes.approval_clause_name}>
        Master Service Agreement
      </Stack>
      <Stack className={classes.approval_clause_body}>
        <p>
          <ApprovalHighlighter
            text={text}
            setCombinedObject={props.setCombinedObject}
          />
        </p>
      </Stack>
    </Stack>
  );
}
