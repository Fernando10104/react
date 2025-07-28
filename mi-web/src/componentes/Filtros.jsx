import React, { useState, useEffect } from "react";

export default function Filters({ datos, onFiltrar }) {
  const [categoria, setCategoria] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("ninguno");

  const filtrarproductos = () => {
    let resultado = datos;

    if (categoria !== "Todas") {
      resultado = resultado.filter((p) => p.categoria === categoria);
    }

    if (ordenPrecio === "asc") {
      resultado = [...resultado].sort((a, b) => a.precio - b.precio);
    } else if (ordenPrecio === "desc") {
      resultado = [...resultado].sort((a, b) => b.precio - a.precio);
    }

    onFiltrar(resultado);
  };

  useEffect(() => {
    filtrarproductos();
  }, [categoria, ordenPrecio, datos]);

  return (

    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Productos</h1>
        <p className="text-gray-600 text-base">Descubre nuestra colección exclusiva</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm border">

        <div className="filtros-categoria"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter h-5 w-5 text-gray-500" data-lov-id="src/components/FilterBar.tsx:25:8" data-lov-name="Filter" data-component-path="src/components/FilterBar.tsx" data-component-line="25" data-component-file="FilterBar.tsx" data-component-name="Filter" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-gray-500%22%7D"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          <label htmlFor="categoria">Categoría:</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="ZAPATILLA">ZAPATILLA</option>
            <option value="CALZADO">CALZADO</option>
          </select>
        </div>
        <div className="ordenarprecio">
          <label htmlFor="ordenar_precio">Ordenar por:</label>
          <select
            name="ordenar_precio"
            id="ordenar_precio"
            value={ordenPrecio}
            onChange={(e) => setOrdenPrecio(e.target.value)}
          >
            <option value="ninguno">Sin orden</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
      </div>
    </div>
  );
}
