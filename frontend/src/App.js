import MathJax from "mathjax3-react";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

function App() {
  // const html_test = `
  //   Seja \\( S = \\left(1+\\operatorname{tg}(\\alpha)+\\sec(\\alpha)\\right)\\left(1+\\operatorname{cotg}(\\alpha)-\\operatorname{cossec}(\\alpha)\\right) \\).
  //   Mostre que o valor de \\( S \\) é um número inteiro para todo valor do ângulo \\( \\alpha \\) diferente de \\( \\frac{k\\pi}{2} \\), com \\( k \\in \\mathbb{Z} \\) e calcule esse valor.
  // `

  return (
    <div>
      <TopBar />
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          {/* Main content goes here */}
        </Grid>
      </Grid>
      <Footer />
      {/* <MathJax.Provider
        url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"
        options={{ tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: { extensions: ["mhchem.js"] } }}
      >
        <Typography variant="h1">
          <MathJax.Formula formula="$e^{i\pi} = -1$" />
        </Typography>

        <Typography variant="h4">
          <MathJax.Html html="$\ce{CO2 + C -> 2 CO}$" />
        </Typography>

        <Typography variant="h6">
          <MathJax.Html html={html_test} />
        </Typography>

      </MathJax.Provider> */}
    </div>
  );
}

export default App;
