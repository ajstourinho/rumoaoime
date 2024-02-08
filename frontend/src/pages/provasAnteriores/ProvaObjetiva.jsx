import React from "react";
import Grid from "@mui/material/Grid";

import PageTemplate from '../../components/PageTemplate/PageTemplate';
import QuestaoObjetivaDisplay from '../../components/QuestaoObjetivaDisplay/QuestaoObjetivaDisplay';
import PainelProvaObjetiva from "../../components/PainelProvaObjetiva/PainelProvaObjetiva";

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
        underlineColor={theme.palette.rumoaoimeCustomColors.darkGrey}
        sideComponent={<PainelProvaObjetiva />}
      >

        <Grid container sx={{ p: 3, height: "100%" }}>
          <Grid item container sx={{ height: "100%"}}>
            <QuestaoObjetivaDisplay />
          </Grid>
        </Grid>

      </PageTemplate>
    </>
  );
}

export default ProvaObjetiva;