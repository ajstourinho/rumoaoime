import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import PainelProvaObjetivaContent from "../PainelProvaObjetivaContent/PainelProvaObjetivaContent";

const PainelProvaObjetiva = () => {

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          borderColor: "lightgrey",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 2,
        }}
      >
        <PainelProvaObjetivaContent />
      </Card>
    </Box>
  );
};

export default PainelProvaObjetiva;
