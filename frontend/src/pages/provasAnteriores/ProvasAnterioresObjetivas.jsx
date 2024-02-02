import React from "react";
import { useTheme } from "@mui/material";

import ButtonCard from "../../components/ButtonCard/ButtonCard";
import ButtonCardsContainer from "../../components/ButtonCardsContainer/ButtonCardsContainer";
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const ProvasAnterioresObjetivas = () => {
  const theme = useTheme();

  const years = [2023, 2022, 2021, 2020, 2019]

  return (
    <>
      <PageTemplate
        pageTitle="Provas Anteriores - Objetivas"
        underlineColor={theme.palette.rumoaoimeCustomColors.lightGrey}
      >
        <ButtonCardsContainer>
          {years.map((year, idx) => (
            <ButtonCard
              key={idx}
              circleColor={theme.palette.rumoaoimeCustomColors.lightGrey}
              title={year}
              subtitle={`/ ${year + 1}`}
              content=""
              pathTo={`/provas-anteriores/objetivas/${year}-${year + 1}`}
            />
          ))}
        </ButtonCardsContainer>
      </PageTemplate>
    </>
  );
};

export default ProvasAnterioresObjetivas;