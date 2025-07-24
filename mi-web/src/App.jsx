// App.jsx
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './componentes/PrivateRoute';
import Crear from './pages/CrearProducto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} /> 

      <Route element={<PrivateRoute />}>
        <Route path="/Gestion" element={<Home />} />
        <Route path="/Crear" element={<Crear />} />
      </Route>
    </Routes>
  );
}

export default App;
