// src/components/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PrivateRoute() {
  const [isValid, setIsValid] = useState(null); // null = cargando, true = ok, false = inválido

  useEffect(() => {
    const verificarToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        const res = await fetch('https://api.puntodigitalpy.online/verificar-token', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        setIsValid(data.ok); // asumiendo que { ok: true } viene del backend
      } catch (error) {
        console.error('Error verificando token', error);
        setIsValid(false);
      }
    };

    verificarToken();
  }, []);

  if (isValid === null) return <div>Cargando...</div>; // mientras verifica

  return isValid ? <Outlet /> : <Navigate to="/login" />;
}
