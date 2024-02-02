import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const QuestaoObjetivaDisplay = () => {
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

  // Styling for the inner box
  const innerBoxStyle = {
    border: "1px solid darkgrey",
    borderRadius: "4px", // even slighter rounded corners
    padding: "20px",
    width: "100%",
    maxWidth: "90%", // adjust this as needed
    marginBottom: "20px",
  };

  // Button labels
  const buttons = ["A", "B", "C", "D", "E"];

  return (
    <Box sx={outerBoxStyle}>
      <Box sx={innerBoxStyle}>{/* Content of the inner box goes here */}</Box>
      <Stack direction="row" spacing={2} justifyContent="center">
        {buttons.map((label) => (
          <Button key={label} variant="outlined">
            {label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default QuestaoObjetivaDisplay;