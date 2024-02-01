import React from "react";
import { useTheme } from "@mui/material";
import CustomUnderlineTypography from "../../components/CustomUnderlineTypography/CustomUnderlineTypography";

import ButtonCard from "../../components/ButtonCard/ButtonCard";
import ButtonCardsContainer from "../../components/ButtonCardsContainer/ButtonCardsContainer";

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

      <ButtonCardsContainer>
        {
          [1, 2, 3, 4, 5, 6, 7].map(() =>
            <ButtonCard
              circleColor={theme.palette.rumoaoimeCustomColors.lightGrey}
              title="Título"
              content="Texto"
            />
          )
        }
      </ButtonCardsContainer>

    </>
  );
};

export default ProvasAnterioresObjetivas;