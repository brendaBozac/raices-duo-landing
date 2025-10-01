import './Presentacion.css';
import { useEffect, useState } from "react";
import Boton from "../../components/Boton/Boton";
import guardapampaImg from "../../../Img/guardapampaClaro.png";
import presentacionImg from "../../../Img/presentacion.JPG";
import wavesImg from "../../../Img/wave-presentacion.svg";

function Presentacion() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  useEffect(() => {
    const floating = document.querySelector(".floating");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          floating.classList.add("visible");
          floating.setAttribute("data-dir", scrollDir);
        } else {
          floating.classList.remove("visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(floating);
    return () => observer.disconnect();
  }, [scrollDir]);

  return (
    <section id='presentacion'>
      <img src={guardapampaImg} alt="Detalle decorativo" className="guardapampa" />
      <div className="presentacion-row">
        <div className="col-left">
          <div className='floating'>
            <h2>La Esencia del Auténtico Folklore</h2>
            <h3>
              Shows en vivo para Festivales, <br />
              Bares y Eventos Privados
            </h3>
            <p>
              Somos Maryta Villalón y César Degiovanni, músicos de Río Cuarto, amantes del folklore y su sonido raíz. 
              Trabajamos llevando nuestro Show a distintos tipos de eventos y escenarios. Rendimos homenaje 
              a poetas y cantores que dieron vida a nuestro cancionero, argentino y popular.
            </p>
            <Boton>Contratá el Show</Boton>
          </div>
        </div>
        <div className="col-right">
          <img src={presentacionImg} alt="Presentación Raíces Dúo" className="presentacion-img" />
        </div>
      </div>
      <img src={wavesImg} alt="Decoración waves" className="waves-one" />
    </section>
  );
}

export default Presentacion;