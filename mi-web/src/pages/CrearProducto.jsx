import React, { useState, useEffect } from "react"; 
import './estilos/CrearProducto.css';



export default function Crear(){
    const token = localStorage.getItem("token");
    if (!token) {
    alert("No has iniciado sesión");
    return;
    }


    const [formData, setFormData] = useState({
        nombre: "",
        tamaño: "",
        precio: 0,
        cantidad: "",
        categoria: "",
        imagen: null,
        descripcion: "",
        detalles: "",
    });

    const [previewImage, setPreviewImage] = useState(null);

    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: name === "precio"? parseFloat(value) : value,
        }));
    };

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setFormData((prev) => ({
        ...prev,
        imagen: file,
        }));
        setPreviewImage(URL.createObjectURL(file)); // ✅ Agregar esto para que funcione el preview
    }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

    const partes = formData.descripcion.split("-").map(p => p.trim()).filter(Boolean);
    const descripcionFormateada = partes.map(p => `<br> • ${p}`).join("");
    const detallesConSaltos = formData.detalles.replace(/\n/g, "<br>");

    if (formData.imagen) {
      const form = new FormData();
      form.append("file", formData.imagen);
      form.append("nombre", formData.nombre);
      form.append("tamaño", formData.tamaño);
      form.append("precio", formData.precio);
      form.append("cantidad", formData.cantidad);
      form.append("categoria", formData.categoria);
      form.append("descripcion", descripcionFormateada);
      form.append("detalles", detallesConSaltos);

      try {
        const res = await fetch("https://api.puntodigitalpy.online/upload-image", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
          body: form,
          
        });

        const data = await res.json();

        if (res.ok && data.filename) {
          alert("Imagen subida correctamente: " + data.filename);
        } else if (res.ok && data.detail) {
          alert("Error al subir imagen: " + data.detail);
        } else {
          alert("Error al subir imagen.");
        }
      } catch (err) {
        alert("Error al procesar la solicitud: " + err.message);
      }
    } else {
      alert("Selecciona una imagen antes de enviar.");
    }
  };
    const limpiarCampos = () => {
        setFormData({
        nombre: "",
        tamaño: "",
        precio: 0,
        cantidad: 1,
        categoria: "",
        imagen: null,
        descripcion: "",
        detalles: "",
        });
        setPreviewImage(null); // <-- limpiar preview también
    };
    
return(
    <>
    <div className="flex flex-col bg-green-50 justify-center items-center">

        <div className="rounded-xls  bg-transparent">

            <div className="flex gap-8 py-6 pl-4 bg-transparent w-[896px]" >

                <button onClick={() => window.location.href = "#/Gestion"} className="flex items-center bg-[#a7f3db]  px-4 py-0 rounded-xl text-1xl border gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>Volver</button>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Crear Nuevo Producto</h1>
                
                
            </div>
            <div  className="flex flex-col gap-8 py-6 pl-16 bg-transparent  w-[896px]"> 
                <p className="text-lg">Completa la información para agregar un nuevo producto</p>
            </div>


        </div>
        
        <div className="flex flex-col gap-8 py-6  bg-green-50 items-center">
            

            <div className="bg-white p-4 w-[896px]  border rounded-xl">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 flex flex-col ">
                            <label htmlFor="nombre" className="whitespace-nowrap">Nombre Principal *</label>
                            <input
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="min-w-96 max-w-xl border border-green-300 focus:border-green-500 outline-none px-4 py-2  rounded"
                            placeholder="Ej: CENTRO DE MESA"
                            required
                            />
                        </div>

                        <div className="space-y-4 flex flex-col">
                            <label htmlFor="tamaño">Tamaño</label>
                            <input
                            name="tamaño"
                            value={formData.tamaño}
                            onChange={handleChange}
                            className="w-96 border border-green-300 focus:border-green-500 outline-none px-4 py-2  rounded"
                            placeholder="0"
                            />
                        </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="precio">Precio *</label>
                                <input
                                id="precio"
                                name="precio"
                                type="number"
                                value={formData.precio}
                                onChange={handleChange}
                                className="border border-green-300 focus:border-green-500 outline-none px-4 py-2  rounded"
                                placeholder="0"
                                min="0"
                                required
                                />
                            </div>

                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="cantidad">Cantidad</label>
                                <input
                                id="cantidad"
                                name="cantidad"
                                type="number"
                                value={formData.cantidad}
                                onChange={handleChange}
                                className="border border-green-300 focus:border-green-500 outline-none px-4 py-2  rounded"
                                min="1"
                                placeholder="1"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="categoria">Categoría</label>
                                <select
                                    
                                    id="categoria"
                                    name="categoria"
                                    className=" border border-green-300 focus:border-green-500 outline-none px-4 py-2 rounded"
                                    value={formData.categoria}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona una categoría</option>
                                    <option value="ZAPATILLA">ZAPATILLA</option>
                                    <option value="CALZADO">CALZADO</option>
                                    <option value="accesorios">Accesorios</option>
                                    {/* Agrega más opciones si lo deseas */}
                                </select>
                            </div>

                            {/* Input imagen estilizado */}
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Imagen:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                PNG, JPG o JPEG. Tamaño máximo recomendado: 5MB.
                            </p>
                            </div>
                       
                        
                            </div>
                            {previewImage && (
                            <div className="mb-4">
                                <p className="text-sm text-gray-700 mb-1">Vista previa:</p>
                                <img
                                src={previewImage}
                                alt="Vista previa"
                                className="w-48 h-auto rounded-lg border shadow"
                                />
                            </div>
                            )}

                    

                        <div className="space-y-2 flex flex-col">
                        <label htmlFor="descripcion">Descripción (separado por "-")</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                        className="flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                    disabled:cursor-not-allowed disabled:opacity-50 border-green-300 focus:border-green-500
                                    min-h-[100px] resize-y"
                            placeholder="Descripción detallada del producto..."
                        />
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="detalles">Detalles Adicionales</label>
                        <textarea
                            id="detalles"
                            name="detalles"
                            value={formData.detalles}
                            onChange={handleChange}
                            className="flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                    disabled:cursor-not-allowed disabled:opacity-50 border-green-300 focus:border-green-500
                                    min-h-[100px] resize-y"
                            placeholder="Términos y condiciones, detalles adicionales..."
                        />
                        </div>

                        <div className="flex gap-3 pt-4">
                        <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700"
                        
                        >
                        💾 Crear Producto
                        </button>
                        <button
                        type="button"
                        onClick={() => window.location.href = "#/Gestion"}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-red-300 "
                        >
                        ❌ Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={limpiarCampos}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-blue-100"
                        >
                            🔄 Limpiar
                        </button>
                    </div>
                </form>
            </div>


        </div>
    </div>
    </>
    )
    }