import './estilos/Inicio.css';
import React, { useState, useEffect } from "react";
import Header from "../componentes/Header";
import Productos from '../componentes/Productos';
import Filters from '../componentes/Filtros';
import Footer from '../componentes/Footer'

export default function Inicio() {
  const [listaOriginal, setListaOriginal] = useState([]);
  const [buscados, setBuscados] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15); // 👈 cantidad que se muestra

  useEffect(() => {
    fetch("https://api.puntodigitalpy.online/productos")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setListaOriginal(data.productos);
        setBuscados(data.productos);
        setFiltrados(data.productos);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (bottom) {
        setVisibleCount(prev => prev + 15); // 👈 carga 10 más
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Si cambia el filtro, reseteamos la cantidad visible
  useEffect(() => {
    setVisibleCount(15);
  }, [filtrados]);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header datos={listaOriginal} onFiltrar={setBuscados} />

      <main className='max-w-[1400px] mx-auto px-4 py-8'>
        <Filters datos={buscados} onFiltrar={setFiltrados} />
        <Productos productosfiltrados={filtrados.slice(0, visibleCount)} />
        
      </main>
    </div>
  );
}
