import React, { useState } from "react";
import { Typography, Dialog, DialogContent, Button } from "@mui/material";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import SubmitIcon from "../../Assets/SubmitIcon";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Comments() {
  const [highlightedText, setHighlightedText] = useState("");
  const [comment, setComment] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [commentSaved, setCommentSaved] = useState(false);

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
      const range = window.getSelection().getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      span.textContent = selectedText;

      range.deleteContents();
      range.insertNode(span);

      setSelectedRange(range);
      setHighlightedText(selectedText);
      setCommentSaved(false);
    }
  };

  const handleOpenDialog = () => {
    if (highlightedText) {
      setDialogOpen(true);
    }
  };

  const handleCommentSave = () => {
    setComment("");
    setDialogOpen(false);
    setCommentSaved(true);
  };

  return (
    <div>
      <Typography onMouseUp={handleTextSelection}>
        This is a sample text to be highlighted.
      </Typography>

      {!commentSaved && highlightedText && (
        <Button onClick={handleOpenDialog}>
          <MarkChatUnreadOutlinedIcon sx={{ color: "#646464" }} />
        </Button>
      )}

      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        sx={{
          border: "1px solid rgba(124, 124, 124, 0.25)",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
          borderRadius: "4px",
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "20rem",
            height: "2rem",
          }}
        >
          <Avatar
            sx={{
              height: "1.8rem",
              width: "1.8rem",
            }}
            alt="Remy Sharp"
            src="https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_thumbnail_ee72093c-3c01-433a-8d25-701cca06c975.jpg"
          />

          <FormControl
            sx={{
              height: "2rem",
              width: "17rem",
              alignItems: "center",
            }}
            variant="standard"
          >
            <Input
              placeholder="Post your Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Button onClick={handleCommentSave}>
                    <SubmitIcon />
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Comments;
