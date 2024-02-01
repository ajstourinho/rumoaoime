import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

const Quimica = () => {
  const theme = useTheme();

  return (
    <>
      <CustomUnderlineTypography
        variant="h4"
        underlineColor={theme.palette.rumoaoimeCustomColors.quimica}
      >
        Química
      </CustomUnderlineTypography>
    </>
  );
};

export default Quimica;
