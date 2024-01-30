import React from "react";
import MathJax from "mathjax3-react";

import Typography from "@mui/material/Typography";


function TesteMathJax() {
  const html_test = `
    Seja \\( S = \\left(1+\\operatorname{tg}(\\alpha)+\\sec(\\alpha)\\right)\\left(1+\\operatorname{cotg}(\\alpha)-\\operatorname{cossec}(\\alpha)\\right) \\).
    Mostre que o valor de \\( S \\) é um número inteiro para todo valor do ângulo \\( \\alpha \\) diferente de \\( \\frac{k\\pi}{2} \\), com \\( k \\in \\mathbb{Z} \\) e calcule esse valor.
  `

  return (
    <>
      <Typography variant="h1">
        <MathJax.Formula formula="$e^{i\pi} = -1$" />
      </Typography>

      <Typography variant="h4">
        <MathJax.Html html="$\ce{CO2 + C -> 2 CO}$" />
      </Typography>

      <Typography variant="h6">
        <MathJax.Html html={html_test} />
      </Typography>
    </>
  );
}

export default TesteMathJax;
