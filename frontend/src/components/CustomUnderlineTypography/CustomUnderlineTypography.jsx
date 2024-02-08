import React from "react";
import { Typography, Box } from "@mui/material";

const CustomUnderlineTypography = ({ children, underlineColor, variant }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
      }}
    >
      <Typography variant={variant}>{children}</Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: -5,
          left: 0,
          width: "100%",
          height: "6px", // Customize the thickness of the underline
          backgroundColor: underlineColor, // Custom color for the underline
        }}
      />
    </Box>
  );
};

export default CustomUnderlineTypography;
