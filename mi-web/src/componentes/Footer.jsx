import React from "react";  


export default function Footer(){
    return(
            <footer class="footer1">
        <div class="div1">
            <div>
                <h3>Punto</h3>
                <h3>Digital</h3>
                <p>Tu tienda de confianza en tecnología, donde cada detalle cuenta...</p>


            </div>
            <div>
                <h3>contacto</h3>
                <p>📱 WhatsApp: +595 981 950 900</p>
                <p>📧 Email:</p>
                <p>miguelrivas65@hotmail.com</p>
                <p>📍 Ubicación: ypane, Paraguay</p>
            </div>
            <div>
                <h3>Enlaces Rápidos</h3>
                <button onclick="location.href='index.html'" class="footer-btn">Inicio</button>
                <br/>
                <button onclick="location.href='productos.html'" class="footer-btn">Productos</button>
                <br/>
                <button onclick="location.href='contacto.html'" class="footer-btn">Contacto</button>
            </div>

        </div>
        <br/>
        <br/><br/>
        <br/>
        <p>© 2025 Punto Digital. Todos los derechos reservados.</p>
    </footer>
    )
}