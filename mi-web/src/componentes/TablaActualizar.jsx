import React, { useEffect, useState } from "react";
import ProductEditModal from "./EditarProductoModal"; // Asegúrate de que esté en el mismo directorio o ajusta la ruta

import { useNavigate } from "react-router-dom"; 

export default function TablaActualizar({ busqueda = "" }) {
  const [listaOriginal, setListaOriginal] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.puntodigitalpy.online/productos")
      .then((res) => res.json())
      .then((data) => {
        const productos = data.productos || [];
        setListaOriginal(productos);
        setFiltrados(productos);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottom) setVisibleCount((prev) => prev + 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setVisibleCount(15);
  }, [filtrados]);

  useEffect(() => {
    const busquedaLower = busqueda.toLowerCase();
    const resultado = listaOriginal.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(busquedaLower) ||
        producto.categoria.toLowerCase().includes(busquedaLower)
    );
    setFiltrados(resultado);
  }, [busqueda, listaOriginal]);

  const handleEdit = (producto) => {
    setSelectedProduct(producto);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (producto) => {
    const confirmacion = window.confirm(`¿Estás seguro de que quieres eliminar "${producto.nombre}"?`);
    if (!confirmacion) return;

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No estás autenticado. Por favor inicia sesión.");
      return;
    }

    try {
      const response = await fetch(`https://api.puntodigitalpy.online/productos/${producto.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Producto eliminado correctamente");
        window.location.reload(); // También podrías usar setState si estás manejando estado
      } else {
        const error = await response.json();
        console.error("Error al eliminar el producto:", error.detail || response.statusText);
      }
    } catch (error) {
      console.error("Error de red al eliminar el producto:", error);
    }
    };


  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

    const handleSaveProduct = async (updatedProduct) => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
        console.log("No estás autenticado. Por favor inicia sesión.");
        return;
        }

        const res = await fetch(`https://api.puntodigitalpy.online/productos/${updatedProduct.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProduct),
        });

        if (res.status === 401) {
        console.log("Sesión expirada o no autorizada. Por favor inicia sesión nuevamente.");
        // Opcional: limpiar token y redirigir a login
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
        }

        if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || "Error al actualizar el producto");
        }

        const updated = await res.json();

        const updatedList = listaOriginal.map((prod) =>
        prod.id === updated.id ? updated : prod
        );

        setListaOriginal(updatedList);

        console.log("Producto actualizado correctamente");
        window.location.reload();
        handleCloseModal();

    } catch (error) {
        console.error("Error al guardar producto:", error);
        console.log(error.message || "Error al guardar el producto");
    }
    };



  return (
    <>
      {filtrados.slice(0, visibleCount).map((producto, index) => (
        <div
          key={producto.id}
          className="rounded-lg bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-pink-200 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <div className="lg:col-span-1 text-sm font-mono text-gray-500">#{index + 1}</div>

            <div className="lg:col-span-2">
              <img
                src={producto.image || "https://via.placeholder.com/150"}
                alt={producto.nombre}
                className="w-full h-20 object-cover rounded-lg border-2 border-gray-100"
              />
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-900">{producto.nombre}</h3>
              <p className="text-sm text-gray-600">{producto.categoria || "Sin categoría"}</p>
            </div>

            <div className="lg:col-span-1 text-center">
              <p className="text-lg font-bold text-green-600">${producto.precio}</p>
              <p className="text-xs text-gray-500">{producto.cantidad} unidad</p>
            </div>

            <div className="lg:col-span-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-pink-100 text-pink-800 border-pink-200">
                {(producto.categoria || "SIN-CATEGORÍA").toUpperCase()}
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm text-gray-600 line-clamp-2">{producto.detalles}</p>
            </div>

            <div className="lg:col-span-1 flex justify-end gap-2">
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => {handleEdit(producto)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pen-line w-5 h-5 text-pink-600"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path>
                </svg>
              </div>

              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => {handleDelete(producto)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}

      <ProductEditModal
        product={selectedProduct}
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
      />
    </>
  );
}
