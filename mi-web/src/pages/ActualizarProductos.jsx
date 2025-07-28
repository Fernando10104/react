import React, { useState } from "react";
import TablaActualizar from "../componentes/TablaActualizar";

export default function ActualizarProductos() {
    const [busqueda, setBusqueda] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSaveProduct = (updatedProduct) => {
        // Actualiza el producto en el backend o estado
        console.log("Producto guardado:", updatedProduct);
        handleCloseModal();
    };

  return (
    <>
      <div className=" bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => (window.location.href = "#/Gestion")}
                className="flex items-center bg-[#a7f3db] px-4 py-0 rounded-xl text-1xl border gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                Volver
              </button>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Actualizar Productos
              </h1>
            </div>

            <p className="text-gray-600 text-lg mb-4">
              Haz clic en cualquier producto para editarlo
            </p>

            {/* 🔍 Input de búsqueda */}
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 🔄 Pasamos la búsqueda como prop */}
      <TablaActualizar busqueda={busqueda} onEdit={handleEditProduct} />

        {/* Modal flotante */}
        {isEditModalOpen && (
            <ProductEditModal
            product={selectedProduct}
            isOpen={isEditModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveProduct}
            />
        )}
      
    </>
  );
}
