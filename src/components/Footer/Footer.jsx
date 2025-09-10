import './Footer.css';
import logo from "../../../Img/raices-logo-navbar.png";
import Boton from "../Boton/Boton"; // reutilizamos el componente de botones
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img src={logo} alt="Raíces Dúo Logo" />
        <h3>La esencia del Auténtico Folklore</h3>
      </div>

      {/* Contenido principal: dos columnas */}
      <div className="footer-content">
        {/* Columna izquierda */}
        <div className="footer-col">
          <h4>Archivos descargables para Diseño Gráfico</h4>
          <ul>
            <li><a href="/downloads/resena-prensa.pdf" download>Reseña para Prensa</a></li>
            <li><a href="/downloads/archivos-diseno.zip" download>Archivos de Diseño</a></li>
            <li><a href="/downloads/rider-tecnico.pdf" download>Rider Técnico</a></li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="footer-col">
          <h4>Por Consultas y Contrataciones</h4>
          <p>Comunicate directamente a Nuestro Whatsapp o por Redes Sociales</p>
          <div className="footer-buttons">
            <Boton onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
              <FaWhatsapp /> Whatsapp
            </Boton>
            <Boton onClick={() => window.open("https://instagram.com/raicesduo", "_blank")}>
              <FaInstagram /> Instagram
            </Boton>
          </div>
        </div>
      </div>

      {/* Row final de derechos */}
      <div className="footer-bottom">
        <p>© 2025 Raíces Dúo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;