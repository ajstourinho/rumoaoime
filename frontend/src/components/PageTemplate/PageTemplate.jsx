import React from "react";

import CustomUnderlineTypography from "../CustomUnderlineTypography/CustomUnderlineTypography";

const PageTemplate = ({ pageTitle, underlineColor, children }) => {

  return (
    <>
      <CustomUnderlineTypography variant="h4" underlineColor={underlineColor}>
        {pageTitle}
      </CustomUnderlineTypography>

      {children}
    </>
  );
}

export default PageTemplate;