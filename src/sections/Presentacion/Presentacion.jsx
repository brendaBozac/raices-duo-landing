import './Presentacion.css';
import { useEffect, useState } from "react";
import Boton from "../../components/Boton/Boton";
import guardapampaImg from "../../../Img/guardapampaClaro.png";
import presentacionImg from "../../../Img/presentacion.webp";
import wavesImg from "../../../Img/wave-presentacion.svg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

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

  // ✅ Nuevas líneas con el mismo formato que los otros componentes
  const whatsappNumber = "5492964455088";
  const message = "Hola Raíces Dúo! Quisiera contratar su show.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id='presentacion'>
      <img src={guardapampaImg} alt="Detalle decorativo" className="guardapampa" />
      <div className="presentacion-row">
        <div className="col-left">
          <div className='floating'>
            <h2>
              Shows en vivo para Festivales, 
              Bares y Eventos Privados
            </h2>
            <p>
              Somos Maryta Villalón y César Degiovanni, músicos de Río Cuarto, amantes del folklore y su sonido raíz. 
              Trabajamos llevando nuestro Show a distintos tipos de eventos y escenarios. Rendimos homenaje 
              a poetas y cantores que dieron vida a nuestro cancionero, argentino y popular.
            </p>

            {/* ✅ Botón actualizado con enlace de WhatsApp unificado */}
            <Boton
              className='floating-boton'
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Contratá el Show <FaWhatsapp />
            </Boton>
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