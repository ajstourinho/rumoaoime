import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const Ingles = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.ingles}
      >
        Inglês
      </CustomUnderlineTypography>
    </>
  );
};

export default Ingles;
