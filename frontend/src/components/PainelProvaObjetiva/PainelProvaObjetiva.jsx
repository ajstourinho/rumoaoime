import React from "react";
import Box from "@mui/material/Box";
import PainelContent from "./PainelContent";

const PainelProvaObjetiva = () => {
  // Styling for the outer box
  const outerBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    border: "2px solid lightgrey",
    borderRadius: "8px", // slightly rounded corners
    padding: "20px",
    backgroundColor: "white",
    height: "100%",
    // boxShadow: "0 0 10px 0 lightgrey",
  };

  return (
    <Box sx={outerBoxStyle}>
      <PainelContent />
    </Box>
  );
};

export default PainelProvaObjetiva;
