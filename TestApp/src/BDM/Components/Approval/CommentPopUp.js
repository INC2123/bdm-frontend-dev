import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function CommentPopUp() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {open ? (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          style={{
            pointerEvents: "none", // Prevent the popover from capturing mouse events
          }}
        >
          <div style={{ padding: "8px" }}>
            <Avatar
              alt="User Avatar"
              src="/path/to/avatar.png"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid blue",
              }}
            />
            <Typography variant="subtitle1">John Doe</Typography>
            <Typography variant="caption">June 1, 2023</Typography>
            <Typography variant="body1">This is a comment message.</Typography>
          </div>
        </Popover>
      ) : (
        <Avatar
          alt="User Avatar"
          src="/path/to/avatar.png"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid blue",
          }}
        />
      )}
    </div>
  );
}
