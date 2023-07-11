import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  editor_btn_cancel: {
    width: "7.5rem !important",
    height: "2.25rem !important",
    color: "#002D5D !important",
    textTransform: "capitalize !important",
    fontWeight: "400 !important",
    fontSize: "0.875rem !important",
  },

  editor_btn_send_approval: {
    width: "9.375rem !important",
    height: "2.25rem !important",
    color: "#FFF !important",
    textTransform: "capitalize !important",
    fontWeight: "400 !important",
    fontSize: "0.875rem !important",
    borderRadius: "0.25rem !important",
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
