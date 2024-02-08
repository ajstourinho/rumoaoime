import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
// Import MUI icons
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
// import Card from "@mui/material/Card";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import ColorButton from "../ColorButton/ColorButton";
import { grey } from "@mui/material/colors";

const QuestaoObjetivaDisplay = () => {
  // Styling for the outer box
  // const outerBoxStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   border: "2px solid lightgrey",
  //   borderRadius: "8px", // slightly rounded corners
  //   padding: "20px",
  //   backgroundColor: "white",
  //   height: "100%",
  //   // boxShadow: "0 0 10px 0 lightgrey",
  // };

  // // Styling for the inner box
  // const innerBoxStyle = {
  //   border: "1px solid darkgrey",
  //   borderRadius: "4px", // even slighter rounded corners
  //   padding: "20px",
  //   width: "100%",
  //   maxWidth: "90%", // adjust this as needed
  //   marginBottom: "20px",
  //   height: "100%",
  // };

  // Button labels
  const buttons = ["A", "B", "C", "D", "E"];

  return (
    <>
      <Card
        sx={{
          height: "500px",
          width: "100%",
          borderColor: "lightgrey",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 2,
        }}
      >
        {/* Ensure the card takes full width */}
        <CardContent>
          <Typography variant="h5" component="div">
            Full Width Card
          </Typography>
          <Typography variant="body2">
            This is an example of a card that expands to fill the width of its
            container.
          </Typography>
        </CardContent>
      </Card>
    </>
    // <Card
    //   sx={{
    //     width: "90%",
    //     borderColor: "lightgrey",
    //     borderWidth: 1,
    //     borderStyle: "solid",
    //     borderRadius: 2, // Adjust for desired roundness
    //     height: "100%"
    //   }}
    // >
    //   <Box sx={innerBoxStyle}>{/* Content of the inner box goes here */}</Box>
    //   <Stack direction="row" spacing={10} justifyContent="center">
    //     <ColorButton
    //       color="white"
    //       backgroundColor={grey[500]}
    //       hoverBackgroundColor={grey[700]}
    //     >
    //       <ArrowBackIos />
    //     </ColorButton>

    //     <Box>
    //       <Stack direction="row" spacing={2} justifyContent="center">
    //         {buttons.map((label) => (
    //           <Button key={label} variant="outlined">
    //             {label}
    //           </Button>
    //         ))}
    //       </Stack>
    //     </Box>

    //     <ColorButton
    //       color="white"
    //       backgroundColor={grey[500]}
    //       hoverBackgroundColor={grey[700]}
    //     >
    //       <ArrowForwardIos />
    //     </ColorButton>
    //   </Stack>
    // </Card>
  );
};

export default QuestaoObjetivaDisplay;
