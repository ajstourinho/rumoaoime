import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const PainelProvaObjetiva = () => {
  // Styling for the outer box
  const outerBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightgrey",
    borderRadius: "8px", // slightly rounded corners
    padding: "20px",
    backgroundColor: "white",
  };

  return (
    <Box sx={outerBoxStyle}>

      {/* <Stack direction="row" spacing={2} justifyContent="center">
        {buttons.map((label) => (
          <Button key={label} variant="outlined">
            {label}
          </Button>
        ))}
      </Stack> */}
    </Box>
  );
};

export default PainelProvaObjetiva;
