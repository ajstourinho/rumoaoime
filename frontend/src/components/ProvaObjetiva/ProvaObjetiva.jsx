import React from "react";
import Grid from "@mui/material/Grid";

import PageTemplate from '../PageTemplate/PageTemplate';
import QuestaoObjetivaDisplay from '../QuestaoObjetivaDisplay/QuestaoObjetivaDisplay';
import PainelProvaObjetiva from "../PainelProvaObjetiva/PainelProvaObjetiva";

import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";

const ProvaObjetiva = () => {
  const { yearYearPlusOne } = useParams();
  const theme = useTheme();

  return (
    <>
      <PageTemplate
        pageTitle={`Provas Anteriores - Objetivas - ${yearYearPlusOne.replace(
          "-",
          "/"
        )}`}
        underlineColor={theme.palette.rumoaoimeCustomColors.lightGrey}
      >
        <Grid container spacing={3}>
          <Grid item xs={9} style={{ height: "calc(100vh - 280px)" }}>
            <QuestaoObjetivaDisplay />
          </Grid>
          <Grid item xs={3} style={{ height: "calc(100vh - 280px)" }}>
            <PainelProvaObjetiva />
          </Grid>
        </Grid>
      </PageTemplate>
    </>
  );
}

export default ProvaObjetiva;