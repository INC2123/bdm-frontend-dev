import React from "react";
import { Box, Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import { ReactComponent as clockicon } from "../../Assets/clockicon.svg";

const useStyles = makeStyles((theme) => ({
  chipLabel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    boxSizing:"border-box",
  },

}));

const CustomChip = ({ status }) => {
  const classes = useStyles();

  const getIconAndLabel = () => {
    switch (status) {
      case "Approved":
        return {
          icon: <CheckCircleRoundedIcon style={{ color: "#26A933" }} />,
          label: "Approved",
          color: "#B1DCB6",
          borderColor: "#E8FAEA",
        };
      case "Rework":
        return {
          icon: <SmsFailedIcon style={{ color: "#F6594E" }} />,
          label: "Rework",
          color: "#FFD3D3",
          borderColor: "#FFEEEE",
        };
      case "InProgress":
        return {
          icon: (
            <SvgIcon
              component={clockicon}
              style={{ color: "#3E7EE9", marginTop: "6px" }}
            />
          ),
          label: "InProgress",
          color: "#97DFEA",
          borderColor: "#EEF6FF",
        };
      default:
        return {
          icon: null,
          label: "",
          color: "",
          borderColor: "",
        };
    }
  };

  const { icon, label, color, borderColor } = getIconAndLabel();
  const lighterBackgroundColor = (hexColor, opacity) => {
    const colorWithoutHash = hexColor.replace("#", "");
    const r = parseInt(colorWithoutHash.substr(0, 2), 16);
    const g = parseInt(colorWithoutHash.substr(2, 2), 16);
    const b = parseInt(colorWithoutHash.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const backgroundColor = lighterBackgroundColor(color, 0.7);

  return (
    <Chip
      icon={icon}
      label={label}
      classes={{ label: classes.chipLabel }}
      style={{
        backgroundColor: color,
        border:'1px solid #FFD3D3',
        borderRadius:"5px",
      }}
    />
  );
};

export default CustomChip;
