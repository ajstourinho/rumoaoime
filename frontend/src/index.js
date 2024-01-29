import React from 'react';
import * as ReactDOM from 'react-dom';

import "./styles/index.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';

import { store } from './store/store'
import { Provider } from 'react-redux'

import MathJax from "mathjax3-react";

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <MathJax.Provider
      url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"
      options={{ tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: { extensions: ["mhchem.js"] } }}
    >
      <Provider store={store}>
        <App />
      </Provider>,
    </MathJax.Provider>
  </React.StrictMode>,
  root
)
