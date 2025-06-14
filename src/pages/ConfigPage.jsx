import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import EffectsPanel from '../components/EffectsPanel';
import PeripheryPanel from '../components/PeripheryPanel';
import ControllerPanel from '../components/ControllerPanel';

export default function ConfigPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-gray-100 px-4 py-3 flex gap-4 shadow">
        <Link to="/config/effects" className="text-blue-600 hover:underline">Lực phản hồi</Link>
        <Link to="/config/periphery" className="text-blue-600 hover:underline">Ngoại vi</Link>
        <Link to="/config/controller" className="text-blue-600 hover:underline">Nút điều khiển</Link>
      </nav>
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="effects" />} />
          <Route path="effects" element={<EffectsPanel />} />
          <Route path="periphery" element={<PeripheryPanel />} />
          <Route path="controller" element={<ControllerPanel />} />
        </Routes>
      </main>
    </div>
  );
}
