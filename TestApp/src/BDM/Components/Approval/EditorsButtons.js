import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  editor_btn_cancel: {
    width: "7.5rem",
    height: "2.25rem",
    color: "#002D5D",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "0.875rem",
  },

  editor_btn_send_approval: {
    width: "9.375rem",
    height: "2.25rem",
    color: "#FFF",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "0.875rem",
    borderRadius: "0.25rem",
    "&:hover ": {
      backgroundColor: "#082940 !important",
    },
  },
}));

export default function EditorsButtons() {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.editor_btn_cancel}
        sx={{
          marginRight: "1rem",
          border: "1px solid #082940",
          borderRadius: "4px",
        }}
      >
        Cancel
      </Button>
      <Button
        className={classes.editor_btn_cancel}
        sx={{
          marginRight: "1rem",
          border: "1px solid #082940",
          borderRadius: "4px",
        }}
      >
        Save As Draft
      </Button>
      <Button
        className={classes.editor_btn_send_approval}
        sx={{
          marginRight: "2rem",
          backgroundColor: "#082940",
        }}
      >
        Send For Approval
      </Button>
    </div>
  );
}
