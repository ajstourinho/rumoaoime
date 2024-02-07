import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = ({ color, backgroundColor, hoverBackgroundColor, children }) => {

  const GenericColorButton = styled(Button)(({ theme }) => ({
    color: color ? color : "red",
    backgroundColor: backgroundColor ? backgroundColor : "blue",
    "&:hover": {
      backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : "black",
    },
  }));

  return (
    <GenericColorButton>
      {children}
    </GenericColorButton>
  )
}


export default ColorButton;