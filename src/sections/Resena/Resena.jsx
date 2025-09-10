import './Resena.css';
import Boton from "../../components/Boton/Boton";

// Importar imágenes
import waveImg from "../../../Img/wave-nosotros.svg";
import nosotrosImg from "../../../Img/nosotros.jpg";
import guardapampaImg from "../../../Img/guardapampaOscuro.png";

function Resena() {
  return (
    <section className="resena" id="resena">
      {/* Imagen decorativa superior */}
      <img src={waveImg} alt="Decoración waves" className="resena-wave-top" />

      {/* Row principal */}
      <div className="resena-row">
        {/* Columna izquierda: texto y botón */}
        <div className="col-left">
          <h2>Un poco más Sobre Nosotros</h2>
          <p>
            Hemos recorrido distintas provincias llevando nuestro folklore a bares, festivales,
            diversos escenarios y programas de radio. 
            Mayormente nos presentamos en formato de dúo, pero en ocasiones nos acompañan músicos amigos.
            Cada show es nuestra celebración de las canciones que nos inspiran.
          </p>
          <Boton>Quiero Contactarme</Boton>
        </div>

        {/* Columna derecha: imagen */}
        <div className="col-right">
          <img src={nosotrosImg} alt="Sobre Nosotros" className="resena-img" />
        </div>
      </div>

      {/* Imagen decorativa inferior */}
      <img src={guardapampaImg} alt="Detalle decorativo" className="resena-guardapampa" />
    </section>
  );
}

export default Resena;