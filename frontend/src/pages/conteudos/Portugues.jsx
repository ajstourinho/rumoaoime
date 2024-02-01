import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const Portugues = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.portugues}
      >
        Português
      </CustomUnderlineTypography>
    </>
  );
};

export default Portugues;
