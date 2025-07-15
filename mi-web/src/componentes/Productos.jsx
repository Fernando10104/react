import React from "react";

export default function Productos({productosfiltrados}){
    if (productosfiltrados.length === 0) {
      return <p>No hay productos para mostrar.</p>;
    }
    return(
        <div className="lista-productos">
          {productosfiltrados.map((item, index) => (
            <div key={index} className="producto">
              <img className="producto-imagen" src={item.image} alt={item.title} width="100" />
              <div className="producto-info">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                
              </div>
              
            </div>
          ))}
        </div>
    )
}
