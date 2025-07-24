import './estilos/Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  // logout.js
  function logout() {
    // Llama a la API del backend para borrar la cookie "logged_in"
    fetch("https://api.puntodigitalpy.online/logout", {
      method: "GET",
      credentials: "include", // Importante para enviar cookies al backend
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.mensaje); // "Sesión cerrada"
      
      // Luego borra el token del frontend (si existe)
      localStorage.removeItem("token");

      // Redirige al login
      window.location.href = "#/login";
    })
    .catch(error => {
      console.error("Error al cerrar sesión:", error);
      // Incluso si falla el fetch, limpiamos localmente
      localStorage.removeItem("token");
      window.location.href = "#/login";
    });
  }
 
  return (
    <>
    <div className='contenedor-principal'>

        <h1 className='text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>Sistema Gestion De Productos</h1>
        
        <div className='h-full flex flex-row p-6 gap-4 bg-[#F9FAFB]'>
            <Link to="/crear">
                <button className='bg-[#a7f3db] px-4 py-2 rounded-xl text-2xl'>+ Crear Producto</button>   
            </Link>

            <Link to="/actualizar">
              <button className='bg-[#a7f3db] px-4 py-2 rounded-xl text-2xl'>Actualizar Productos</button>   
            </Link>
              <button className='bg-[#a7f3db] px-4 py-2 rounded-xl text-2xl self-start' onClick={logout}>cerrar sesion</button>

          


          

        </div>
         

       

    </div>
    
    </>


);
}
