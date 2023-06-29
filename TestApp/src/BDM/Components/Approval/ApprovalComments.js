import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "@fontsource/roboto";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Box from "@mui/material/Box";
import MessageIcon from "../../Assets/MessageIcon";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

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
}));

export default function ApprovalComments() {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(true);
  const handleCommentsClick = () => {
    setShowComments(false);
  };
  const handleCloseClick = () => {
    setShowComments(true);
  };

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
            direction="row"
            justifyContent="space-between"
            sx={{
              fontSize: "1rem",
              // padding: "1rem",
              fontFamily: "Roboto",
              fontWeight: "600",
              borderBottom: "1px dashed #E0E0E0",
            }}
          >
            <Stack sx={{ paddingTop: "0.5rem" }}>Comments</Stack>
            <Stack>
              <Button onClick={handleCloseClick}>
                <CloseIcon sx={{ color: "#757575", fontSize: "large" }} />
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            sx={{ color: "#A4A4A4", fontSize: "0.875rem" }}
          >
            No Comments to show.
          </Stack>

          <Stack direction="row" display="flex" justifyContent="flex-start">
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              sx={{ gap: "0.5rem" }}
              flexGrow="1"
            >
              <Avatar
                sx={{
                  height: "1.8rem",
                  width: "1.8rem",
                  marginLeft: "1rem",
                }}
                alt="Remy Sharp"
                src="https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_thumbnail_ee72093c-3c01-433a-8d25-701cca06c975.jpg"
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  color: "#000000",
                }}
              >
                Sai Shree
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.688rem",
                  fontWeight: "400",
                  color: "#A4A4A4",
                }}
              >
                12:54 Today
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <TextField
              variant="outlined"
              multiline
              rows={4}
              sx={{
                width: "70%",
                fontSize: "0.75rem",
                border: "0.5px solid #A4A4A4",
                backgroundColor: "#FAFAFA",
                borderRadius: "0.313rem",
              }}
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
