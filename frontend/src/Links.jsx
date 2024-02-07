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
import ProvasAnterioresObjetivas from './pages/provasAnteriores/ProvasAnterioresObjetivas';
import ProvasAnterioresDiscursivas from './pages/provasAnteriores/ProvasAnterioresDiscursivas';
import SimuladosObjetivos from './pages/simulados/SimuladosObjetivos';
import SimuladosDiscursivos from './pages/simulados/SimuladosDiscursivos';
import SobreOIME from './pages/SobreOIME';
import SobreOSite from './pages/SobreOSite';
import ProvaObjetiva from './components/ProvaObjetiva/ProvaObjetiva';

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

      {/* TopBar */}
      {/* <Route path="/sobre-o-ime/" element={<SobreOIME />} />
      <Route path="/sobre-o-site/" element={<SobreOSite />} /> */}

      {/* Conteúdos */}
      {/* <Route path="/conteudos/matematica" element={<Matematica />} />
      <Route path="/conteudos/fisica" element={<Fisica />} />
      <Route path="/conteudos/quimica" element={<Quimica />} />
      <Route path="/conteudos/portugues" element={<Portugues />} />
      <Route path="/conteudos/ingles" element={<Ingles />} />
      <Route path="/conteudos/redacao" element={<Redacao />} /> */}

      {/* Provas Anteriores */}
      <Route
        path="/provas-anteriores/objetivas"
        element={<ProvasAnterioresObjetivas />}
      />
      <Route
        path="/provas-anteriores/objetivas/:yearYearPlusOne"
        element={<ProvaObjetiva />}
      />

      <Route
        path="/provas-anteriores/discursivas"
        element={<ProvasAnterioresDiscursivas />}
      />

      {/* Simulados */}
      {/* <Route path="/simulados/objetivos" element={<SimuladosObjetivos />} />
      <Route path="/simulados/discursivos" element={<SimuladosDiscursivos />} /> */}

      {/* Testes */}
      {/* <Route path="/axios" element={<TesteAxios />} />
      <Route path="/markdown-mathjax" element={<TesteMarkdownMathJax />} />
      <Route path="/mathjax" element={<TesteMathJax />} /> */}

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default Links;
