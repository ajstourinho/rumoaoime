import React from "react";
import Button from "@mui/material/Button";
import buttonCustomStyle from "../PainelProvaObjetivaContent/styles/buttonCustomStyle";

const PainelButton = ({
  state,
  sx,
  children,
}) => {

  const customStyle = { ...buttonCustomStyle[state], ...sx };

  return (
    <Button
      style={customStyle}
    >
      {children}
    </Button>
  );
};

export default PainelButton;
