import MathJax from "mathjax3-react";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <MathJax.Provider
        url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"
        options={{ tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: { extensions: ["mhchem.js"] } }}
      >
        <Typography variant="h1">
          <MathJax.Formula formula="$e^{i\pi} = -1$" />
        </Typography>

        <Typography variant="h4">
          <MathJax.Html html="$\ce{CO2 + C -> 2 CO}$" />
        </Typography>

      </MathJax.Provider>
    </div>
  );
}

export default App;
