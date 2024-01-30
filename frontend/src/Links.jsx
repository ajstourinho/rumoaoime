import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TesteAxios from "./pages/TesteAxios"
import TesteMarkdownMathJax from "./pages/TesteMarkdownMathJax"
import TesteMathJax from './pages/TesteMathJax';
import LandingPage from './pages/LandingPage';

function Links() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/axios" element={<TesteAxios />} />
      <Route path="/markdown-mathjax" element={<TesteMarkdownMathJax />} />
      <Route path="/mathjax" element={<TesteMathJax />} />

      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Links;
