import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ConnectPage from './pages/ConnectPage';
import ConfigPage from './pages/ConfigPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/connect" />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/config/*" element={<ConfigPage />} />
      </Routes>
    </Router>
  );
}
