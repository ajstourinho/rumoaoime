import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const SimuladosObjetivos = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.lightGrey}
      >
        Simulados - Objetivos
      </CustomUnderlineTypography>
    </>
  );
};

export default SimuladosObjetivos;