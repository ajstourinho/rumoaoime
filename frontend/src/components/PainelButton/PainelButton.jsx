import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

const PainelButton = ({
  state,
  sx,
  children,
}) => {
  const theme = useTheme();

  const stateStyles = {
    seen: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "black",
      backgroundColor: theme.palette.rumoaoimeCustomColors.lightGrey,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.grey,
      },
    },
    notSeen: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.lightGrey,
      },
    },
    current: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "white",
      backgroundColor: theme.palette.rumoaoimeCustomColors.darkGrey,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.darkerGrey,
      },
    },
    marked: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "white",
      backgroundColor: theme.palette.rumoaoimeCustomColors.darkBlue,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.darkerBlue,
      },
    },
  };

  const customStyle = { ...stateStyles[state], ...sx };

  return (
    <Button
      style={customStyle}
    >
      {children}
    </Button>
  );
};

export default PainelButton;
