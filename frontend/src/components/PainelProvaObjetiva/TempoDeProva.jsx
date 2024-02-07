import React, { useState } from "react";
import { Stack, Grid, Button, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TempoDeProva = ({ tempo }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Typography variant="subtitle1" gutterBottom>
        Tempo de prova:
      </Typography>

      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "end" }}
        color="grey"
      >
        <Typography variant="h6" sx={{ minWidth: "55px" }}>
          {isVisible ? tempo : "- - : - -"}
        </Typography>
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          / 04:00
        </Typography>
        <IconButton
          aria-label="change visibility"
          onClick={() => setIsVisible((bool) => !bool)}
          sx={{ ml: 2 }}
        >
          {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
}

export default TempoDeProva;