import React from "react";

import CustomUnderlineTypography from "../CustomUnderlineTypography/CustomUnderlineTypography";
import { Grid, Stack } from '@mui/material';

const PageTemplate = ({ pageTitle, underlineColor, children, sideComponent }) => {

  return (
    <>
      <Grid container>
        <Grid container item xs={9}>

            <Grid item xs sx={{mb: 2 }}>
              <CustomUnderlineTypography
                variant="h4"
                underlineColor={underlineColor}
              >
                {pageTitle}
              </CustomUnderlineTypography>
            </Grid>

            {children}
        </Grid>

        <Grid item xs={3}>
          {sideComponent}
        </Grid>
      </Grid>
    </>
  );
}

export default PageTemplate;