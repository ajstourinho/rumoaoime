import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const SimuladosDiscursivos = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.lightGrey}
      >
        Simulados - Discursivos
      </CustomUnderlineTypography>
    </>
  );
};

export default SimuladosDiscursivos;