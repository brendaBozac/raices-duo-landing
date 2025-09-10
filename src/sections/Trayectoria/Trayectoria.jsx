import './Trayectoria.css'
import guardapampaOscuro from "../../../Img/guardapampaOscuro.png";
import resenaFinal from "../../../Img/resena-final.jpg";

function Trayectoria() {
  return (
    <section className="trayectoria">
      {/* Imagen decorativa superior */}
      <img src={guardapampaOscuro} alt="Detalle decorativo" className="wave-top" />

      {/* Título de la sección */}
      <h2>Nuestra Trayectoria</h2>

      {/* Row principal */}
      <div className="trayectoria-row">
        {/* Columna izquierda: imagen */}
        <div className="col-left">
          <img src={resenaFinal} alt="Trayectoria Raíces Dúo" className="trayectoria-img" />
        </div>

        {/* Columna derecha: texto */}
        <div className="col-right">
          <p>
            Más allá de la experiencia individual que cada uno traía antes de conformar este proyecto como dúo, juntos hemos recorrido distintos escenarios de nuestro país, compartiendo giras y encuentros musicales. En Río Cuarto nos presentamos en espacios como Opus Costanera, Teatrino Trapalanda, el Teatro Municipal y la sala Leonardo Favio. Y por supuesto, nada se compara con la energía de las peñas y festivales al aire libre, que siempre ocupan un lugar especial en nuestro camino.
          </p>
        </div>
      </div>

      {/* Imagen decorativa inferior */}
      <img src={guardapampaOscuro} alt="Detalle decorativo" className="wave-bottom" />
    </section>
  );
}

export default Trayectoria;