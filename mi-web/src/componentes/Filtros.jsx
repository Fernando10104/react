import React, { useState, useEffect } from "react";

export default function Filters({ datos, onFiltrar }) {
  const [categoria, setCategoria] = useState("Todas");
  const [ordenPrecio, setOrdenPrecio] = useState("ninguno");

  const filtrarproductos = () => {
    let resultado = datos;

    if (categoria !== "Todas") {
      resultado = resultado.filter((p) => p.category === categoria);
    }

    if (ordenPrecio === "asc") {
      resultado = [...resultado].sort((a, b) => a.price - b.price);
    } else if (ordenPrecio === "desc") {
      resultado = [...resultado].sort((a, b) => b.price - a.price);
    }

    onFiltrar(resultado);
  };

  useEffect(() => {
    filtrarproductos();
  }, [categoria, ordenPrecio, datos]);

  return (
    <div className="contenedor_filtros">
      <h2>Productos</h2>

      <div className="filtros-categoria"> 
        <label htmlFor="categoria">Categoría:</label>
        <select
          name="categoria"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
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
  );
}
