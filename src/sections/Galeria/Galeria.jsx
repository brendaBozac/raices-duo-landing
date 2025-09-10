import './Galeria.css'


// Importar imágenes
import gal1 from "../../../Img/gal-1.jpg";
import gal2 from "../../../Img/gal-2.jpg";
import gal3 from "../../../Img/gal-3.jpg";
import gal4 from "../../../Img/gal-4.jpg";
import gal5 from "../../../Img/gal-5.jpg";
import gal6 from "../../../Img/gal-6.jpg";
import resenaFinal from "../../../Img/resena-final.jpg";

function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <h2>Galería de Fotos</h2>
      <h3>Descargá tu Favorita para Diseño de Flyers</h3>

      {/* Primer row */}
      <div className="galeria-row">
        {/* Columna izquierda: 2 fotos en columna */}
        <div className="galeria-col small">
          <img src={gal6} alt="Foto 6" />
          <img src={gal1} alt="Foto 1" />
        </div>
        {/* Columna derecha: 1 foto grande */}
        <div className="galeria-col large">
          <img src={gal5} alt="Foto 5" />
        </div>
      </div>

      {/* Segundo row reorganizado */}
      <div className="galeria-row">
        {/* Columna izquierda: 1 foto */}
        <div className="galeria-col single">
          <img src={gal4} alt="Foto 4" />
        </div>

        {/* Columna central: 1 foto */}
        <div className="galeria-col single">
          <img src={gal3} alt="Foto 3" />
        </div>

        {/* Columna derecha: 2 fotos en columna */}
        <div className="galeria-col double">
          <img src={gal2} alt="Foto 2" />
          <img src={resenaFinal} alt="Foto Resena Final" />
        </div>
      </div>


          {/* Botón CTA */}
      <div className="galeria-cta">
        <a href="/downloads/galeria.zip" download>
          <button>Descargar Pack</button>
        </a>
      </div>

    </section>
  );
}

export default Galeria;