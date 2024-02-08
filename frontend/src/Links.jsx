import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import LandingPage from './pages/LandingPage';
import MeuProgresso from './pages/MeuProgresso';

import ProvasAnterioresObjetivas from './pages/provasAnteriores/ProvasAnterioresObjetivas';
import ProvasAnterioresDiscursivas from './pages/provasAnteriores/ProvasAnterioresDiscursivas';
import ProvaObjetiva from './pages/provasAnteriores/ProvaObjetiva';

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

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default Links;
