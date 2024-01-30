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

import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="816971905092-mflohce7sbvtui2tffm5s1dmmssnns6c.apps.googleusercontent.com">
      <MathJax.Provider
        url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"
        options={{ tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: { extensions: ["mhchem.js"] } }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      </MathJax.Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  root
)
