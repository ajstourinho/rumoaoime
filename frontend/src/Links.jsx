import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import TesteAxios from "./pages/TesteAxios"
import TesteMarkdownMathJax from "./pages/TesteMarkdownMathJax"
import TesteMathJax from './pages/TesteMathJax';
import LandingPage from './pages/LandingPage';
import MeuProgresso from './pages/MeuProgresso';

function Links() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/meu-progresso"
        element={
          <ProtectedRoute>
            <MeuProgresso />
          </ProtectedRoute>
        }
      />
      <Route path="/axios" element={<TesteAxios />} />
      <Route path="/markdown-mathjax" element={<TesteMarkdownMathJax />} />
      <Route path="/mathjax" element={<TesteMathJax />} />

      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default Links;
