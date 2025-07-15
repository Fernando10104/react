import './estilos/Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className='contenedor-principal'>

        <h1 className='titulo'>Sistema Gestion De Productos</h1>
        <p>Administra y actualiza tu catálogo de productos de manera eficiente y moderna</p>

         <Link to="/productos">
              <button className='botones'>Gestionar Productos </button>   
          </Link>
          <Link to="/crear">
              <button className='botones'>+ Crear Producto</button>   
          </Link>

       

    </div>
    
    </>


);
}
