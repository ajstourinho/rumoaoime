import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const ProvasAnterioresObjetivas = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.lightGrey}
      >
        Provas Anteriores - Objetivas
      </CustomUnderlineTypography>
    </>
  );
};

export default ProvasAnterioresObjetivas;