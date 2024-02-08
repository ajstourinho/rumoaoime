import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TempoDeProva = ({ tempo }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Grid container>
        <Typography variant="subtitle2" sx={{mb: 1}}>Tempo de prova:</Typography>

        <Grid container>
          <Grid item xs={1} />
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Center align items here
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="grey">
              {isVisible ? tempo : "- - : - -"}
            </Typography>
            <Typography variant="caption" sx={{ ml: 0.5 }} color="grey">
              /04:00
            </Typography>
          </Grid>

          <Grid
            item
            xs
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Center align items here
              justifyContent: "center",
            }}
          >
            <IconButton
              aria-label="change visibility"
              onClick={() => setIsVisible((bool) => !bool)}
            >
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TempoDeProva;
