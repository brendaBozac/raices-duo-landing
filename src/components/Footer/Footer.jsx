import './Footer.css';
// import logo from "../../../Img/raices-logo-navbar.png";
import Boton from "../Boton/Boton"; // reutilizamos el componente de botones
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { FaDownload } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

function Footer() {
  // ✅ Nuevas líneas agregadas: número, mensaje y link de WhatsApp
  const whatsappNumber = "5493585165655";
  const message = "Hola Raíces Dúo! Quisiera contratar su show.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="footer" id="contacto">
      {/* Logo */}
      <div className="footer-logo">
        {/* <img src={logo} alt="Raíces Dúo Logo" /> */}
        <h3>La esencia del Auténtico Folklore</h3>
      </div>

      {/* Contenido principal: dos columnas */}
      <div className="footer-content">
        {/* Columna derecha: contacto */}
        <div className="footer-col">
          <div className='icono-titulo'>
            <IoPeople className="icono-contacto" />
            <h4>Por Consultas y Contrataciones</h4>
          </div>
          
          <p>
            Comunicate directamente a Nuestro Whatsapp <br /> o por Redes Sociales
          </p>
          <div className="footer-buttons">
            {/* ✅ Botón de WhatsApp actualizado */}
            <Boton onClick={() => window.open(whatsappLink, "_blank")}>
              <FaWhatsapp /> Whatsapp
            </Boton>

            {/* ✅ Botón de Instagram funcionando */}
            <Boton onClick={() => window.open("https://www.instagram.com/cesar_maryta_raices24/", "_blank")}>
              <FaInstagram /> Instagram
            </Boton>
          </div>
        </div>

        {/* Columna izquierda: archivos descargables */}
        <div className="footer-col">
          <FaDownload className="icono-descarga-gral" />
          <h4>Archivos descargables para Diseño Gráfico</h4>
          <ul>
            <li>
              
              <a href="/downloads/ResenaRaices.pdf" download> <MdOutlineFileDownload className="icono-descarga" /> Reseña para Prensa</a></li>

            <li>
              
              <a href="/downloads/archivos-diseno.zip" download> <MdOutlineFileDownload className="icono-descarga" /> Archivos de Diseño</a></li>

            <li>
              
              <a href="/downloads/RiderTecnicoRaices.pdf" download> <MdOutlineFileDownload className="icono-descarga" /> Rider Técnico</a></li>
          </ul>
        </div>
      </div>

      {/* Row final de derechos */}
      <div className="footer-bottom"> 
        <hr className='hr-footer'/> 
        <p>Fotografía de Silvina Requelme - VinaLuz</p>

        <p>
          © 2025 - Diseño de Treno Digital <br />
          Raíces Dúo. <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;