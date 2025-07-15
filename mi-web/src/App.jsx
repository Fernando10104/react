import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Gestion" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
