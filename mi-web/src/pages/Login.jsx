// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // para redirigir después del login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.puntodigitalpy.online/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        alert('Login fallido: usuario o contraseña incorrectos');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token);

      alert('Login exitoso. Redirigiendo...');
      navigate('/Gestion'); // ✅ cambia "crear" según lo que quieras mostrar luego del login
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error durante el login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
