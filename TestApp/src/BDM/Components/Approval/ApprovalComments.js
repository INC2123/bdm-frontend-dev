import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "@fontsource/roboto";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { setShowComments } from "../../redux/reducers/highlighterReducer";

const useStyles = makeStyles((theme) => ({
  approval_comments: {
    marginTop: "1.625rem",
    width: "22vw",
    marginRight: "2rem",
  },

  approval_comments_btn: {
    color: "#092A41 !important",
    textTransform: "capitalize !important",
    border: "0.5px solid #BDBDBD !important",
    borderRadius: "0.25rem !important",
    width: "7rem !important",
    padding: "0 1rem !important",
  },
  approval_comments_box: {
    border: "1px solid #E0E0E0",
    backgroundColor: "#FFFFFF",
    height: "fitContent",
    paddingBottom: "2rem",
  },
  approval_comments_box_header: {
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: "600",
    borderBottom: "1px dashed #E0E0E0",
    marginTop: "1rem",
    padding: "0.5rem",
  },
  approval_comments_box_body_comment: {
    color: "#A4A4A4",
    fontSize: "0.875rem",
    padding: "1.5rem",
  },
  approval_comments_box_body_name: {
    fontSize: "0.75rem !important",
    fontWeight: "700 !important",
    color: "#000000 !important",
  },
  approval_comments_box_body_date: {
    fontSize: "0.6rem !important",
    fontWeight: "400 !important",
    color: "#A4A4A4 !important",
    marginLeft: "0.5rem !important",
    marginTop: "0.1rem !important",
  },
  approval_comments_box_body_textfield: {
    width: "100%",
    fontSize: "0.75rem !important",
    border: "0.5px #A4A4A4",
    backgroundColor: "#FAFAFA",
    borderRadius: "0.313rem",
  },
}));

export default function ApprovalComments(props) {
  const showComments = useSelector(
    (state) => state.highlighterReducer.showComments
  );
  const isHighlighted = useSelector(
    (state) => state.highlighterReducer.isHighlighted
  );

  const dispatch = useDispatch();
  const classes = useStyles();
  const handleCommentsClick = () => {
    dispatch(setShowComments(false));
  };
  const handleCloseClick = () => {
    dispatch(setShowComments(true));
  };
  const [containt, setContaint] = useState("");
  console.log(containt);

  return (
    <Stack className={classes.approval_comments}>
      {showComments ? (
        <Button
          className={classes.approval_comments_btn}
          onClick={handleCommentsClick}
        >
          <ChatBubbleOutlineOutlinedIcon sx={{ marginRight: "0.2rem" }} />
          Comments
        </Button>
      ) : (
        <Stack className={classes.approval_comments_box}>
          <Stack
            className={classes.approval_comments_box_header}
            direction="row"
            justifyContent="space-between"
          >
            <Stack sx={{ paddingTop: "0.5rem" }}>Comments</Stack>
            <Stack>
              <Button onClick={handleCloseClick}>
                <CloseIcon sx={{ color: "#000", fontSize: "large" }} />
              </Button>
            </Stack>
          </Stack>
          {isHighlighted ? (
            <Stack
              className={classes.approval_comments_box_body_comment}
              alignItems="center"
            >
              No Comments to show.
            </Stack>
          ) : (
            Object.keys(props.combinedObject).map((index) => (
              <Stack key={index} className="approval_repeat_comment">
                <Stack
                  direction="row"
                  sx={{
                    margin: "1rem",
                  }}
                >
                  <Stack>
                    <Avatar
                      sx={{
                        height: "1.5rem",
                        width: "1.5rem",
                      }}
                      alt="Remy Sharp"
                      src="https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_thumbnail_ee72093c-3c01-433a-8d25-701cca06c975.jpg"
                    />
                  </Stack>
                  <Stack sx={{ marginLeft: "0.5rem" }}>
                    <Stack direction="row">
                      <Typography
                        className={classes.approval_comments_box_body_name}
                      >
                        Sai Shree
                      </Typography>

                      <Typography
                        className={classes.approval_comments_box_body_date}
                      >
                        12:54 Today
                      </Typography>
                    </Stack>
                    <Stack>
                      <TextField
                        value={
                          props.combinedObject[index]
                            ? props.combinedObject[index]
                            : ""
                        }
                        onChange={(e) =>
                          props.setCombinedObject((prev) => ({
                            ...prev,
                            [index]: e.target.value,
                          }))
                        }
                        variant="outlined"
                        multiline
                        rows={2}
                        className={classes.approval_comments_box_body_textfield}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))
          )}
        </Stack>
      )}
    </Stack>
  );
}
