import React, { useState } from "react";
import { Stack, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MessageIcon from "@mui/icons-material/Message";

const useStyles = makeStyles((theme) => ({
  highlight: {
    backgroundColor: "yellow",
    display: "inline",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  messageIcon: {
    fontSize: "1.2rem",
    paddingLeft: "0.5rem",
  },
}));

export default function EditorHighlighter() {
  const classes = useStyles();
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. dsjsdhfuj  hfuhfuf ajfhuifhuiaf uhfhuihfuahf ufuihfuihfuw ufhwuidfiowhdfow uhfihfahf fhhfiuafiuef fuhfhfiuf ufuifhuiff fuugwwuifwfuhf fuugfhuihfuwhf fuwfuwgfohwfhqwfh fwuhfiwhfowwhfowwf oifhwhfohfhhofh foihfoqhfywyfy fiwgfiohqwf8qw fwwugfiqwhfwfoqwoyyfwqyd fowhfiqwufuwufhww8fuwf iwhfeijfufiief foijafihwifjeuuhf ewofhiihfiehfieehf wwoifhwifhwiihfqif woiifhhqqwifowfh";
  const ranges = [
    [6, 11],
    [60, 70],
  ];

  const messageList = ["Message for range 1", "Message for range 2"];

  const [hoveredRange, setHoveredRange] = useState(null);

  const handleHover = (index) => {
    setHoveredRange(index);
  };

  const handleClose = () => {
    setHoveredRange(null);
  };

  const applyHighlight = () => {
    let result = [];
    let lastIndex = 0;

    ranges.forEach((range, index) => {
      const [start, end] = range;

      result.push(
        <React.Fragment key={index}>
          {text.slice(lastIndex, start)}
          <Tooltip title={messageList[index]} placement="bottom" arrow>
            <span
              className={classes.highlight}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleClose}
            >
              {text.slice(start, end)}
              <MessageIcon className={classes.messageIcon} />
            </span>
          </Tooltip>
        </React.Fragment>
      );

      lastIndex = end;
    });

    result.push(
      <React.Fragment key={ranges.length}>
        {text.slice(lastIndex)}
      </React.Fragment>
    );

    return result;
  };

  return (
    <Stack sx={{ marginTop: "5rem", marginLeft: "6rem" }}>
      <Typography variant="body1">{applyHighlight()}</Typography>
    </Stack>
  );
}
