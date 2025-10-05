import './Galeria.css';
import { useEffect, useRef, useState } from "react";

// Importar imágenes
import gal1 from "../../../Img/gal-1.webp";
import gal2 from "../../../Img/gal-2.webp";
import gal3 from "../../../Img/gal-3.webp";
import gal4 from "../../../Img/gal-4.webp";
import gal5 from "../../../Img/gal-5.webp";
import gal6 from "../../../Img/gal-6.webp";
import resenaFinal from "../../../Img/resena-final.webp";

function Galeria() {
  const refs = useRef([]);
  const [visibleIndex, setVisibleIndex] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        setVisibleIndex(prev => {
          const alreadyVisible = prev.includes(i);
          if (inView && !alreadyVisible) return [...prev, i];
          if (!inView && alreadyVisible) return prev.filter(idx => idx !== i);
          return prev;
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // primera llamada

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="galeria" id="galeria">
      <h2
        ref={el => (refs.current[0] = el)}
        className={`fade-in ${visibleIndex.includes(0) ? "visible" : ""}`}
      >
        Galería de Fotos
      </h2>

      <h3
        ref={el => (refs.current[1] = el)}
        className={`fade-in ${visibleIndex.includes(1) ? "visible" : ""}`}
      >
        Descargá fotos para contenido gráfico y flyers.
        
      </h3>

      {/* Primer row */}
      <div
        className={`galeria-row fade-in ${visibleIndex.includes(2) ? "visible" : ""}`}
        ref={el => (refs.current[2] = el)}
      >
        <div className="galeria-col small">
          <img src={gal6} alt="Foto 6" />
          <img src={gal1} alt="Foto 1" />
        </div>
        <div className="galeria-col large">
          <img src={gal5} alt="Foto 5" />
        </div>
      </div>

      {/* Segundo row */}
      <div
        className={`galeria-row fade-in ${visibleIndex.includes(3) ? "visible" : ""}`}
        ref={el => (refs.current[3] = el)}
      >
        <div className="galeria-col single">
          <img src={gal4} alt="Foto 4" />
        </div>
        <div className="galeria-col single">
          <img src={gal3} alt="Foto 3" />
        </div>
        <div className="galeria-col double">
          <img src={gal2} alt="Foto 2" />
          <img src={resenaFinal} alt="Foto Resena Final" />
        </div>
      </div>

      {/* Botón CTA */}
      <div
        className={`galeria-cta fade-in ${visibleIndex.includes(4) ? "visible" : ""}`}
        ref={el => (refs.current[4] = el)}
      >
        <a href="/downloads/galeria.zip" download>
          <button>Descargar Fotos</button>
        </a>
      </div>
    </section>
  );
}

export default Galeria;