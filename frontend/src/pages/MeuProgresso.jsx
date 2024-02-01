import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../components/CustomUnderlineTypography/CustomUnderlineTypography";

const MeuProgresso = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.darkBlue}
      >
        Meu Progresso
      </CustomUnderlineTypography>
    </>
  );
}

export default MeuProgresso;