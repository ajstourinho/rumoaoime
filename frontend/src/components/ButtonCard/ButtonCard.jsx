import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Box } from "@mui/material";

const ButtonCard = ({ circleColor, title, content }) => {
  return (
    <Card
      sx={{
        width: "90%",
        borderColor: "lightgrey",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 2, // Adjust for desired roundness
        ":hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: hover effect
        },
        // mb: 4
      }}
    >
      <CardActionArea>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={3} sx={{mb: 2}}>
            <Box
              sx={{
                bgcolor: circleColor,
                width: 20,
                height: 20,
                borderRadius: "50%",
              }}
            />
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ButtonCard;
