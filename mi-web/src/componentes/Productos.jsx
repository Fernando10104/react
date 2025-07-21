import React from "react";

export default function Productos({productosfiltrados}){
    if (productosfiltrados.length === 0) {
      return <p>No hay productos para mostrar.</p>;
    }
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosfiltrados.map((item, index) => (
            <div key={index} className="producto">
              <img className="producto-imagen" src={item.image} alt={item.nombre} width="100" />
              <div className="producto-info">
                <h3>{item.nombre}</h3>
                <p>₲{item.precio}</p>
                
              </div>
              
            </div>
          ))}
        </div>
    )
}
