import './Header.css';
import { useEffect } from "react";
import ellosImg from '../../../Img/ellos.webp';
import logoHeader from '../../../Img/raices-logo-header.png';

function Header() {

  useEffect(() => {
    const left = document.querySelector(".header-left");
    const right = document.querySelector(".header-right");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          left.classList.add("visible");
          right.classList.add("visible");
        } else {
          left.classList.remove("visible");
          right.classList.remove("visible"); // opcional
        }
      },
      { threshold: 0.1 } // se activa cuando el 10% del header es visible
    );

    observer.observe(document.querySelector("header"));

    return () => observer.disconnect();
  }, []);


  return (
    <header>
      <div className='header-left'>
        <img src={ellosImg} alt="Maryta Villalón y César Degiovanni" className="header-img" />
      </div>

      <div className='header-right'>
        {/* Logo visible */}
        <img src={logoHeader} alt="Raíces Dúo Logo" className="header-logo" />
        {/* H1 oculto para SEO */}
        <h1 className="visually-hidden">Raíces Dúo</h1>
        <h2>La Esencia del Auténtico Folklore</h2>
      </div>
    </header>
  );
}

export default Header;
