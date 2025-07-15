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
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={manejarCambio}
      />
    </div>
  );
}
