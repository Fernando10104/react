// src/componentes/Buscador.jsx
import React, { useState } from "react";

export default function Buscador({ datos, onFiltrar }) {
  const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    const filtrado = datos.filter((item) =>
      item.title.toLowerCase().includes(valor.toLowerCase())
    );
    onFiltrar(filtrado);
  };

  return (
    <div className="flex-1 max-w-xl mx-8">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" data-lov-id="src/components/Header.tsx:24:14" data-lov-name="Search" data-component-path="src/components/Header.tsx" data-component-line="24" data-component-file="Header.tsx" data-component-name="Search" data-component-content="%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-gray-400%20h-4%20w-4%22%7D"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>

        <input 
          className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={manejarCambio}
          />
          
      </div>
    </div>
  );
}
