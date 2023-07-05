import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import ReworkIcon from "../../Assets/ReworkIcon";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const useStyles = makeStyles((theme) => ({
  approval_btn_rework: {
    width: "6.188rem",
    height: "2.25rem",
  },

  approval_rework: {
    width: "2.938rem",
    height: "1rem",
    fontWeight: "400",
    fontSize: "0.875rem",
    color: "#082940",
    textTransform: "capitalize",
    lineHeight: "1",
  },

  approval_btn_approve: {
    alignItems: "center",
    width: "6.5rem",
    height: "2.25rem",
    borderRadius: "0.25rem",
    "&:hover ": {
      backgroundColor: "#082940 !important",
    },
  },

  approval_approve: {
    width: "2.938rem",
    height: "1rem",
    fontWeight: "400",
    fontSize: "0.875rem",
    color: "white",
    textTransform: "capitalize",
    lineHeight: "1",
  },
}));

export default function ApproversButtons(props) {
  const classes = useStyles();

  const handleReworkClick = () => {
    props.onReworkClick();
  };
  return (
    <div>
      <Button
        className={classes.approval_btn_rework}
        onClick={handleReworkClick}
        // disabled={props.numHighlightedTexts === 0}
        sx={{
          marginRight: "1rem",
          border: "1px solid #082940",
          borderRadius: "4px",
        }}
      >
        <ReworkIcon />
        <span className={classes.approval_rework}>Rework</span>
      </Button>
      <Button
        className={classes.approval_btn_approve}
        sx={{
          marginRight: "2rem",
          backgroundColor: "#082940",
        }}
      >
        <ThumbUpOffAltIcon
          sx={{
            height: "1rem",
            width: "1rem",
            marginRight: "0.5rem",
            color: "white",
          }}
        />
        <span className={classes.approval_approve}>Approve</span>
      </Button>
    </div>
  );
}
