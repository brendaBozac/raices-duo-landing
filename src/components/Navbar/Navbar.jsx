import './Navbar.css';
import logo from "../../../Img/raices-logo-navbar.png"; // importamos la imagen del logo

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Raíces Dúo Logo" />
      </div>
      <ul>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#galeria">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;