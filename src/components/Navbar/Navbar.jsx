import './Navbar.css';
import logo from "../../../Img/raices-logo-navbar.png";
import hamburg from "../../../Img/hamburg.png";
import { useState } from 'react';

const Navbar = () => {
  const [menuEstado, setMenuEstado] = useState(false);

  const cerrarMenu = () => setMenuEstado(false);

  // 👉 Función para volver al inicio cuando se toca el logo
  const irAlInicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuEstado(false);
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">

        {/* Logo clickeable */}
        <div className="logo" onClick={irAlInicio} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Raíces Dúo Logo" className="logoCompleto" />
        </div>

        {/* Ícono hamburguesa */}
        <img
          src={hamburg}
          alt="Menú"
          id="navbar-icon"
          className="hamburg"
          onClick={() => setMenuEstado(!menuEstado)}
        />

        {/* Links de navegación */}
        <ul className={`navlinks ${menuEstado ? 'showMenu' : ''}`}>
          <li>
            <a href="#videos" className="linksMenu" onClick={cerrarMenu}>
              Videos
            </a>
          </li>
          <li>
            <a href="#galeria" className="linksMenu" onClick={cerrarMenu}>
              Galería
            </a>
          </li>
          <li>
            <a href="#resena" className="linksMenu" onClick={cerrarMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="linksMenu" onClick={cerrarMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Espaciado para evitar que el contenido quede debajo del nav fijo */}
      <div style={{ height: '75px' }} />
    </div>
  );
};

export default Navbar;