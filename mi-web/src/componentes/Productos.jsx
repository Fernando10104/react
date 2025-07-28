import React from "react";


export default function Productos({productosfiltrados}){
  if (productosfiltrados.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productosfiltrados.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.nombre}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Agregar al carrito al hacer hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h14l-1.35 6.75a1 1 0 01-.98.75H8.42a1 1 0 01-.98-.8L5 6H19"
                  />
                </svg>
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {item.nombre}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₲{item.precio.toLocaleString('es-ES')}</span>
              <span className="border border-gray-300 text-xs px-2 py-0.5 rounded-full text-gray-700">
                {item.categoria}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  }
