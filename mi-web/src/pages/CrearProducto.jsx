import React, { useState, useEffect } from "react";
import { href } from "react-router-dom";
import './estilos/CrearProducto.css';


export default function Crear(){
    const [formData, setFormData] = useState({
        nombre: "",
        tamaño: "",
        precio: 0,
        cantidad: 1,
        categoria: "",
        imagen: "",
        descripcion: "",
        detalles: "",
    });


    const handleChange = (e) => {
    const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: name === "precio" || name === "cantidad" ? parseFloat(value) : value,
        }));
    };

return(
    <>
    <div className="flex flex-col bg-green-50 justify-center items-center">

        <div className="rounded-xls  bg-transparent">

            <div className="flex gap-8 py-6 pl-4 bg-transparent w-[896px]" >

                <button onClick={() => window.location.href = "#/Gestion"} className="flex items-center bg-[#a7f3db]  px-4 py-0 rounded-xl text-1xl border gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>Volver</button>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Crear Nuevo Producto</h1>
                
                
            </div>
            <div  className="flex flex-col gap-8 py-6 pl-16 bg-transparent  w-[896px]"> 
                <p className="text-lg">Completa la información para agregar un nuevo producto</p>
            </div>


        </div>
        
        <div className="flex flex-col gap-8 py-6  bg-green-50 items-center">
            

            <div className="bg-white p-4 w-[896px] h-[722px] border rounded-xl">
                <form onSubmit="None" className="space-y-6">
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
                            onChange="None"
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
                                type="number"
                                value="{formData.tamaño}"
                                onChange=""
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
                                type="number"
                                value={formData.tamaño}
                                onChange=""
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
                                >
                                    <option value="">Selecciona una categoría</option>
                                    <option value="ropa">Ropa</option>
                                    <option value="calzado">Calzado</option>
                                    <option value="accesorios">Accesorios</option>
                                    {/* Agrega más opciones si lo deseas */}
                                </select>
                            </div>
                       
                        
                        </div>

                    

                        <div className="space-y-2 flex flex-col">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            id="descripcion"
                            value={formData.tamaño}
                            onChange=""
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
                            value={formData.tamaño}
                            onChange=""
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
                            className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                        >
                            <save className="w-4 h-4 mr-2" />
                            Crear Producto
                        </button>
                        <button
                            type="button"
                            variant="outline"
                            onClick="None"
                            className="border-gray-300 hover:bg-gray-50"
                        >
                            <x className="w-4 h-4 mr-2" />
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>


        </div>
    </div>
    </>
    )
    }