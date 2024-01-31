import React from "react";
import MarkdownMathJaxRenderer from '../components/MarkdownMathJaxRenderer/MarkdownMathJaxRenderer';

import sobreOIMEMarkdown from "../assets/markdowns/sobreOIME.md"

const SobreOIME = () => {
  return (
    <>  
      <MarkdownMathJaxRenderer contentPath={sobreOIMEMarkdown} />
    </>
  );
};

export default SobreOIME;
