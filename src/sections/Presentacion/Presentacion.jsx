import './Presentacion.css';
import Boton from "../../components/Boton/Boton";
import guardapampaImg from "../../../Img/guardapampaClaro.png";
import presentacionImg from "../../../Img/presentacion.jpg";
import wavesImg from "../../../Img/wave-presentacion.svg";

function Presentacion() {
  return (
    <section id='presentacion'>
      {/* Imagen decorativa arriba */}
      <img
        src={guardapampaImg}
        alt="Detalle decorativo"
        className="guardapampa"
      />

      {/* Row principal */}
      <div className="presentacion-row">
        <div className="col-left">
          <h2>La Esencia del Auténtico Folklore</h2>
          <h3>
            Shows en vivo para Festivales, <br />
            Bares, y Eventos Privados
          </h3>
          <p>
            Somos Maryta Villalón y César Degiovanni, músicos de Río Cuarto, amantes del folklore y su sonido raíz. 
            Trabajamos llevando nuestro Show a distintos tipos de eventos y escenarios y rendimos homenaje 
            a poetas y cantores que dieron vida a nuestro cancionero, argentino y popular.
          </p>
          <Boton>Contratá el Show</Boton>
        </div>

        <div className="col-right">
          <img
            src={presentacionImg}
            alt="Presentación Raíces Dúo"
            className="presentacion-img"
          />
        </div>
      </div>

      {/* wave-presentacion */}


      <img src={wavesImg} alt="Decoración waves" className="waves-one" />
    </section>
  );
}

export default Presentacion;