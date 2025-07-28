import { useState, useEffect } from "react";

export default function ProductEditModal({ product, isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    id: null,
    nombre: "",
    tamaño: "",
    precio: 0,
    cantidad: 1,
    categoria: "",
    image: "",
    descripcion: "",
    detalles: "",
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardando producto:", form);
    onSave(form); // Ya hace el PUT y actualiza
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Editar Producto #{form.id}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Nombre</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">tamaño</label>
            <input
              name="tamaño"
              value={form.tamaño}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Precio</label>
            <input
              name="precio"
              type="number"
              value={form.precio}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Cantidad</label>
            <input
              name="cantidad"
              type="number"
              value={form.cantidad}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Categoría</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Seleccionar categoría</option>
              <option value="ZAPATILLA">ZAPATILLA</option>
              <option value="CALZADO">CALZADO</option>
              <option value="OTROS">OTROS</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">URL Imagen</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {form.image && (
              <img
                src={form.image}
                alt="Vista previa"
                className="mt-2 w-32 h-32 object-cover border rounded"
              />
            )}
          </div>

          <div>
            <label className="block font-semibold">Descripción</label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Detalles</label>
            <textarea
              name="detalles"
              value={form.detalles}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
