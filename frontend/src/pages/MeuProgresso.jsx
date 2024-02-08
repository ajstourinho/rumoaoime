import React from "react";
import { useTheme } from "@mui/material";
import PageTemplate from '../components/PageTemplate/PageTemplate';
import Grid from "@mui/material/Grid";

const MeuProgresso = () => {
  const theme = useTheme();

  return (
    <>
      <PageTemplate
        pageTitle="Meu Progresso"
        underlineColor={theme.palette.rumoaoimeCustomColors.darkBlue}
      >


      </PageTemplate>
    </>
  );
}

export default MeuProgresso;