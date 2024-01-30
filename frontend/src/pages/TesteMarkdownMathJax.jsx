import React from "react";

import MarkdownMathJaxRenderer from "../components/MarkdownMathJaxRenderer/MarkdownMathJaxRenderer";
import exampleMd from "../assets/markdowns/1.md";

function TesteMarkdownMathJax() {
  return (
    <>
      <MarkdownMathJaxRenderer contentPath={exampleMd} />
    </>
  );
}

export default TesteMarkdownMathJax;
