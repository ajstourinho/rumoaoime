import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import TesteAxios from "./pages/TesteAxios"
import TesteMarkdownMathJax from "./pages/TesteMarkdownMathJax"
import TesteMathJax from './pages/TesteMathJax';
import LandingPage from './pages/LandingPage';
import MeuProgresso from './pages/MeuProgresso';
import Matematica from './pages/conteudos/Matematica';
import Fisica from './pages/conteudos/Fisica';
import Quimica from './pages/conteudos/Quimica';
import Portugues from './pages/conteudos/Portugues';
import Ingles from './pages/conteudos/Ingles';
import Redacao from './pages/conteudos/Redacao';

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

      {/* Conteúdos */}
      <Route path="/conteudos/matematica" element={<Matematica />} />
      <Route path="/conteudos/fisica" element={<Fisica />} />
      <Route path="/conteudos/quimica" element={<Quimica />} />
      <Route path="/conteudos/portugues" element={<Portugues />} />
      <Route path="/conteudos/ingles" element={<Ingles />} />
      <Route path="/conteudos/redacao" element={<Redacao />} />

      {/* Testes */}
      <Route path="/axios" element={<TesteAxios />} />
      <Route path="/markdown-mathjax" element={<TesteMarkdownMathJax />} />
      <Route path="/mathjax" element={<TesteMathJax />} />

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default Links;
