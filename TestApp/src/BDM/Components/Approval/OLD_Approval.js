import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ReworkIcon from "../../Assets/ReworkIcon";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";
import "@fontsource/roboto";
import AdministativeIcon from "../../Assets/AdministativeIcon";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Box from "@mui/material/Box";
import MessageIcon from "../../Assets/MessageIcon";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  approval_page_container: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "calc(100vw )",
    height: "calc(100vh)",
    background: "#FAFAFF",
    border: "1px solid #ECEBFE",
    borderRadius: "1rem 0 0 0",
  },

  approval_header_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "7.188rem",
    background: "#FFFFFF",
    borderBottom: "1px solid #E0E0E0",
    borderRadius: "1rem 0 0 0",
    padding: "1rem 0",
  },
  approval_header_title: {
    /* width: 27.063rem; */
    height: "1.438rem",
    textAlign: " left",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.25rem",
    color: "#1D1D11",
    marginLeft: "1rem",
    marginBottom: "2rem",
    marginRight: "1rem",
  },

  approval_administrative_line: {
    marginRight: "1rem",
    fontSize: "1rem",
    fontWeight: "400",
    color: "#424242",
  },
  approval_administrative_icon: {
    marginRight: "0.3rem",
    fontSize: "1rem",
    fontWeight: "400",
    color: "#424242",
  },

  approval_administrative: {
    fontSize: " 1rem",
    fontWeight: "400",
    color: "#424242",
  },

  approval_header_clause: {
    fontWeight: "600",
    fontSize: "0.9rem",
    marginLeft: "1rem",
  },

  approval_activity_log: {
    marginLeft: "1rem",
  },

  approval_btn_rework: {
    width: "6.188rem",
    height: "2.25rem",
    order: "0",
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
    order: "1",
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

  approval_body: {
    /* display: flex;
      flex-direction: column;
      align-items: center; */
    width: "62vw",
    height: "fitContent",
    border: "1px solid #E0E0E0",
    borderRadius: "0.25rem",
    backgroundColor: "#FFFFFF",
    /* align-self: center; */
    marginTop: "1.625rem",
  },

  approval_clause_name: {
    marginTop: "1.5rem",
    fontWeight: "700",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
  },

  approval_clause_body: {
    marginTop: "2rem",
    marginBottom: "2.7rem",
    backgroundColor: "#F9F9F9",
    border: "1px dashed #E0E0E0",
    textAlign: "justify",
    padding: "0 2rem",
  },
  approval_categeory: {
    marginTop: "1.625rem",
    width: "8.5vw",
    marginLeft: "2.5rem",
    height: "fitContent",
    textTransform: "capitalize",
    fontSize: "0.75rem",
  },

  approval_comments: {
    marginTop: "1.625rem",
    width: "22vw",
    marginRight: "2rem",
  },
}));
export default function Approval() {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(true);

  const handleCommentsClick = () => {
    setShowComments(false);
  };
  const handleCloseClick = () => {
    setShowComments(true);
  };
  const categories = ["Company policies", "HR", "Code Of Conduct"]; // Array of category names
  const colorsAndBackgrounds = [
    { color: "#284076", backgroundColor: "#E5EDFF" },
    { color: "#BA4E4E", backgroundColor: "#FCE8E8" },
    { color: "#9A562B", backgroundColor: "#FCF1EA" },
  ];
  return (
    <div className={classes.approval_page_container}>
      <Stack
        direction="row"
        className={classes.approval_header_box}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row">
          <Stack direction="column" alignItems="flex-start">
            <Stack direction="row">
              <span className={classes.approval_header_title}>
                Master Services Agreement
              </span>
              <span className={classes.approval_administrative_line}>|</span>
              <span className={classes.approval_administrative_icon}>
                <AdministativeIcon />
              </span>
              <span className={classes.approval_administrative}>
                Administrative
              </span>
            </Stack>
            <Stack
              className={classes.approval_header_clause}
              direction="row"
              justifyContent="flex-start"
            >
              <Button
                className={classes.approval_clause_details}
                sx={{ color: "#171717", textTransform: "capitalize" }}
              >
                <AssignmentOutlinedIcon sx={{ marginRight: "0.5rem" }} /> Clause
                Details
              </Button>
              <Button
                className={classes.approval_activity_log}
                sx={{ color: "#757575", textTransform: "capitalize" }}
              >
                <PendingActionsOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                Activity Log
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          className={classes.approval_btn}
        >
          <Button
            className={classes.approval_btn_rework}
            sx={{
              marginRight: "1rem",
              border: "1px solid #082940",
              borderRadius: "4px",
              fontFamily: "Roboto",
              fontStyle: "normal",
            }}
          >
            <ReworkIcon />
            <span className={classes.approval_rework}>Rework</span>
          </Button>
          <Button
            className={classes.approval_btn_approve}
            sx={{
              marginRight: "1rem",
              fontFamily: "Roboto",
              fontStyle: "normal",
              backgroundColor: "#082940",
              //   pointerEvents: "none",
              //   cursor: "auto",
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
        </Stack>
      </Stack>
      <Stack direction="row" className={classes.approval_body_box} gap="2rem">
        <Stack alignItems="flex-start" className={classes.approval_categeory}>
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                color: colorsAndBackgrounds[index].color,
                backgroundColor: colorsAndBackgrounds[index].backgroundColor,
                padding: "0.2rem 0.5rem",
                marginBottom: "8px",
                borderRadius: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              <Typography variant="body1">{category}</Typography>
            </Box>
          ))}
        </Stack>
        <Stack className={classes.approval_body}>
          <Stack className={classes.approval_clause_name}>
            Master Service Agreement
          </Stack>
          <Stack className={classes.approval_clause_body}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              velit? Et repellat nemo nulla quaerat excepturi sequi totam
              sapiente magni incidunt, corrupti porro nam quis fuga, distinctio
              illo possimus, beatae fugiat. Rerum quas itaque at enim voluptas
              quam odit, facilis voluptate. Consequatur molestiae expedita magni
              consectetur voluptatem natus, exercitationem assumenda, nam harum
              corporis suscipit consequuntur aliquam tenetur sed laboriosam esse
              qui. Nemo deserunt atque consequuntur repudiandae non corporis,
              quasi, sed commodi laudantium, repellat nesciunt distinctio
              pariatur harum deleniti optio minus officia. Molestiae, officia
              maiores? Ullam, at tempore laboriosam quisquam labore, atque
              ratione praesentium necessitatibus rem porro soluta quibusdam
              corporis vero?
            </p>
          </Stack>
        </Stack>
        <Stack className={classes.approval_comments}>
          {showComments ? (
            <Button
              sx={{
                color: "#092A41",
                textTransform: "capitalize",
                border: "0.5px solid #BDBDBD",
                borderRadius: "0.25rem",
                width: "7rem",
                padding: "0 1rem",
              }}
              onClick={handleCommentsClick}
            >
              <ChatBubbleOutlineOutlinedIcon sx={{ marginRight: "0.2rem" }} />
              Comments
            </Button>
          ) : (
            <Stack
              sx={{
                border: "1px solid #E0E0E0",
                backgroundColor: "#FFFFFF",
                height: "100vh",
              }}
            >
              <Stack direction="row">
                <Box flexGrow={1}>
                  <Stack
                    sx={{
                      fontSize: "0.875rem",
                      padding: "1rem",
                    }}
                  >
                    Comments
                  </Stack>
                </Box>

                <Button onClick={handleCloseClick}>
                  <CloseIcon sx={{ color: "#757575", fontSize: "small" }} />
                </Button>
              </Stack>
              <Stack direction="row">
                <Box flexGrow={1}>
                  <Stack sx={{ color: "#A4A4A4", fontSize: "0.875rem" }}>
                    No Comments to show.
                  </Stack>
                </Box>

                <Button>
                  <MessageIcon />
                </Button>
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
                <Button>
                  <MessageIcon />
                </Button>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                // alignItems="center"
                sx={{ border: "0.5px solid #A4A4A4", width: "81%" }}
              >
                <Stack>
                  <TextField
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      width: "90%",
                      fontSize: "0.75rem",
                      border: "0.5px solid #A4A4A4",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "0.313rem",
                    }}
                  />
                </Stack>
                <Stack>
                  <TextField
                    variant="outlined"
                    multiline
                    placeholder="Reply or @mention"
                    size="small"
                    sx={{
                      width: "90%",
                      fontSize: "0.75rem",
                      border: "0.5px solid #D9D9D9",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "0.313rem",
                      marginTop: "1.5rem",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </div>
  );
}
