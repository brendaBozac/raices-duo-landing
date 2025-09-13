import './Navbar.css';
import logo from "../../../Img/raices-logo-navbar.png"; 
import hamburg from "../../../Img/hamburg.png"; 

/* function Navbar() {
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
} */


import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [menuEstado, setMenuEstado] = useState(false);

  const cerrarMenu = () => {
    setMenuEstado(false);
  }

  return (
    <div className='navbar'>
     

        <div className= 'navbarContainer'>

          <div className="logo">
            <img src={logo} alt="Raíces Dúo Logo" className='logoCompleto'/>
          </div>

          {/* <FontAwesomeIcon icon={faBars} id='navbar-icon' onClick={() => setMenuEstado(!menuEstado)}/> */}
          <img src={hamburg} alt="hamburg" id='navbar-icon' className='hamburg' onClick={() => setMenuEstado(!menuEstado)} />  

          <ul className={`navlinks ${menuEstado ? 'showMenu' : ''}`}>
            <li><a href="#videos" className="linksMenu" onClick={cerrarMenu}>Videos</a></li>
            <li><a href="#galeria" className="linksMenu" onClick={cerrarMenu}>Galería</a></li>
            <li><a href="#galeria" className="linksMenu" onClick={cerrarMenu}>Nosotros</a></li>
            <li><a href="#contacto" className="linksMenu" onClick={cerrarMenu}>Contacto</a></li>
          </ul>


          
        </div>
       
      <div style={{ height: '75px' }} />
      
    </div>
  )

}


export default Navbar;