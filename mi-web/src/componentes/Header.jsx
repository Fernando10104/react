// src/componentes/Header.jsx
import React from "react";
import Buscador from "../componentes/Buscador";

export default function Header({ datos, onFiltrar }) {
  return (
    <header>
      <Buscador datos={datos} onFiltrar={onFiltrar} />
      <h1>Punto Digital</h1>
      <div className="div-menu-header">
        <nav id="menu" className="menu">
          <ul>
            <li><a className="btn-link" href="#/index.html">Inicio</a></li>
            <li><a className="btn-link" href="#/gestion">Productos</a></li>
            <li><a className="btn-link" href="contacto.html">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}