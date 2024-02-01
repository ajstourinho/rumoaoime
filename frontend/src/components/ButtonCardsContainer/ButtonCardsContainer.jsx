import React from "react";
import Box from "@mui/material/Box";

const ButtonCardsContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers children horizontally in the container
        flexWrap: "wrap", // Allows items to wrap to the next line as needed
        gap: 3, // Spacing between items
        p: 3, // Padding around the entire container for some spacing from the edges of the screen
      }}
    >
      {children}
    </Box>
  );
};

export default ButtonCardsContainer;
