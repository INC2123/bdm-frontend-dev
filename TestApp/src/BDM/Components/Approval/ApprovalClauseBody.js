import React from "react";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

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

export default function ApprovalClauseBody() {
  const classes = useStyles();
  return (
    <Stack className={classes.approval_body}>
      <Stack className={classes.approval_clause_name}>
        Master Service Agreement
      </Stack>
      <Stack className={classes.approval_clause_body}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          velit? Et repellat nemo nulla quaerat excepturi sequi totam sapiente
          magni incidunt, corrupti porro nam quis fuga, distinctio illo
          possimus, beatae fugiat. Rerum quas itaque at enim voluptas quam odit,
          facilis voluptate. Consequatur molestiae expedita magni consectetur
          voluptatem natus, exercitationem assumenda, nam harum corporis
          suscipit consequuntur aliquam tenetur sed laboriosam esse qui. Nemo
          deserunt atque consequuntur repudiandae non corporis, quasi, sed
          commodi laudantium, repellat nesciunt distinctio pariatur harum
          deleniti optio minus officia. Molestiae, officia maiores? Ullam, at
          tempore laboriosam quisquam labore, atque ratione praesentium
          necessitatibus rem porro soluta quibusdam corporis vero?
        </p>
      </Stack>
    </Stack>
  );
}
