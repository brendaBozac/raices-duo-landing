import Boton from "../../components/Boton/Boton";

function Resena() {
  return (
    <section id="resena">
      <h2>Reseña</h2>
      <div className="resena-row">
        <div className="col-left">
          <img src="/img/resena.png" alt="Reseña" />
        </div>
        <div className="col-right">
          <p>
            Más allá de la experiencia individual, Raíces Dúo recorre escenarios
            con una propuesta auténtica y sensible.
          </p>
          <Boton>Quiero contactarme</Boton>
        </div>
      </div>
    </section>
  );
}

export default Resena;