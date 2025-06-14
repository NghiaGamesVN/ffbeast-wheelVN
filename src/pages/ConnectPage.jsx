import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestFFBPort, openPort } from '../lib/serial';

export default function ConnectPage() {
  const [device, setDevice] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleConnect = async () => {
    try {
      const { port } = await requestFFBPort();
      const infoStr = JSON.stringify(port.getInfo());
      if (infoStr.includes('FFB')) {
        await openPort(port);
        navigate('/config/effects');
      } else {
        setError('Thiết bị không phải là vô lăng FFB DIY.');
      }
    } catch (err) {
      setError('Không thể kết nối thiết bị.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-6">🔌 Kết nối thiết bị FFB DIY</h1>
      <button
        onClick={handleConnect}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
      >
        Quét & Kết nối thiết bị
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
