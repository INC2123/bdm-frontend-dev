import React, { useState, useEffect, useRef } from "react";
import { Typography, Button } from "@mui/material";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowComments,
  setIsHighlighted,
} from "../../redux/reducers/highlighterReducer";

function ApprovalHighlighter(props) {
  const [highlightedTextList, setHighlightedTextList] = useState([]);
  const [showMessageButton, setShowMessageButton] = useState(false);
  const highlightedRef = useRef(null);
  const dispatch = useDispatch();

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
      setHighlightedTextList((prevList) => [...prevList, selectedText]);
      setShowMessageButton(true);
    } else {
      setHighlightedTextList([]);
      setShowMessageButton(false);
    }
  };

  const handleOpenDialog = () => {
    if (highlightedTextList.length > 0) {
      highlightedTextList.forEach((highlightedText) => {
        const range = window.getSelection().getRangeAt(0);
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        span.textContent = highlightedText;

        range.deleteContents();
        range.insertNode(span);
        let key = `${range.startOffset},${range.endOffset}`;
        props.setCombinedObject((prev) => ({ ...prev, [key]: "" }));
      });

      clearSelection();
      setHighlightedTextList([]);
      setShowMessageButton(false);
      dispatch(setShowComments(false));
      dispatch(setIsHighlighted(false));
      // dispatch(setCommentCount(commentCount + 1)); // Increment comment count
    }
  };

  const clearSelection = () => {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE
      document.selection.empty();
    }
  };

  const handleClickOutside = (event) => {
    if (
      highlightedRef.current &&
      !highlightedRef.current.contains(event.target)
    ) {
      setHighlightedTextList([]);
      setShowMessageButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Typography onMouseUp={handleTextSelection}>{props.text}</Typography>

      {showMessageButton && (
        <div ref={highlightedRef}>
          <Button onClick={handleOpenDialog}>
            <MarkChatUnreadOutlinedIcon sx={{ color: "#646464" }} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default ApprovalHighlighter;
