import React from "react";
import { useTheme } from "@mui/material";
import PageTemplate from './PageTemplate';

const MeuProgresso = () => {
  const theme = useTheme();

  return (
    <>
      <PageTemplate
        pageTitle="Meu Progresso"
        underlineColor={theme.palette.rumoaoimeCustomColors.darkBlue}
      >
        <p>some content</p>
        
      </PageTemplate>
    </>
  );
}

export default MeuProgresso;