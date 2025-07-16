// src/componentes/Header.jsx
import React from "react";
import Buscador from "../componentes/Buscador";
import { Link } from "react-router-dom";

export default function Header({ datos, onFiltrar }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">

      
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Punto Digital</h1>
            
          </div>
          
          <Buscador datos={datos} onFiltrar={onFiltrar} />

          <div className="contenedor-botones-header">

              <button
              data-lov-id="src/components/Header.tsx:34:12"
              data-lov-name="Button"
              data-component-path="src/components/Header.tsx"
              data-component-line="34"
              data-component-file="Header.tsx"
              data-component-name="Button"
              data-component-content="%7B%22className%22%3A%22relative%22%7D"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
              disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"
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
                className="lucide lucide-heart h-5 w-5"
                data-lov-id="src/components/Header.tsx:35:14"
                data-lov-name="Heart"
                data-component-path="src/components/Header.tsx"
                data-component-line="35"
                data-component-file="Header.tsx"
                data-component-name="Heart"
                data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </button>
            

            <button
              data-lov-id="src/components/Header.tsx:37:12"
              data-lov-name="Button"
              data-component-path="src/components/Header.tsx"
              data-component-line="37"
              data-component-file="Header.tsx"
              data-component-name="Button"
              data-component-content="%7B%7D"
              className="
              inline-flex items-center justify-center gap-2 
              whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors 
              focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 
              disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
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
                className="lucide lucide-user h-5 w-5"
                data-lov-id="src/components/Header.tsx:38:14"
                data-lov-name="User"
                data-component-path="src/components/Header.tsx"
                data-component-line="38"
                data-component-file="Header.tsx"
                data-component-name="User"
                data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>


            <button 
            data-lov-id="src/components/Header.tsx:40:12" 
            data-lov-name="Button" 
            data-component-path="src/components/Header.tsx" 
            data-component-line="40" 
            data-component-file="Header.tsx" 
            data-component-name="Button" 
            data-component-content="%7B%22className%22%3A%22relative%22%7D" 
            class="inline-flex items-center justify-center gap-2 
            whitespace-nowrap rounded-md text-sm font-medium ring-offset-background 
            transition-colors focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-6 [&amp;_svg]:shrink-0 
            hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"><svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="lucide lucide-shopping-bag h-5 w-5" 
            data-lov-id="src/components/Header.tsx:41:14" 
            data-lov-name="ShoppingBag" 
            data-component-path="src/components/Header.tsx" 
            data-component-line="41" 
            data-component-file="Header.tsx" 
            data-component-name="ShoppingBag" 
            data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18">
            </path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg><span data-lov-id="src/components/Header.tsx:42:14" 
            data-lov-name="span" data-component-path="src/components/Header.tsx" 
            data-component-line="42" data-component-file="Header.tsx" 
            data-component-name="span" 
            data-component-content="%7B%22text%22%3A%220%22%2C%22className%22%3A%22absolute%20-top-2%20-right-2%20bg-emerald-600%20text-white%20text-xs%20rounded-full%20h-5%20w-5%20flex%20items-center%20justify-center%22%7D" class="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span></button>







          </div>
         
        </div>

        {/* Navigation Menu */}
        <nav className="pb-4">
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Productos
            </Link>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Ofertas
            </a>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contacto
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
}