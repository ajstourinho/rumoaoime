import React from "react";
import MarkdownMathJaxRenderer from "../components/MarkdownMathJaxRenderer/MarkdownMathJaxRenderer";

import sobreOSiteMarkdown from "../assets/markdowns/sobreOSite.md";

const SobreOSite = () => {
  return (
    <>
      <MarkdownMathJaxRenderer contentPath={sobreOSiteMarkdown} />
    </>
  );
};

export default SobreOSite;
