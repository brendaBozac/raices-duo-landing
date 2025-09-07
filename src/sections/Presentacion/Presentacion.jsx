import Boton from "../../components/Boton/Boton"; // gracias al index.js

function Presentacion() {
  return (
    <section id="presentacion">
      <div className="col-left">
        <h2>Presentación</h2>
        <h3>Música con raíces y alma</h3>
        <p>Un dúo que fusiona tradición y modernidad en cada show.</p>
        <Boton>Contratá el show</Boton>
      </div>
      <div className="col-right">
        <img src="/img/presentacion.png" alt="Presentación Raíces Dúo" />
      </div>
    </section>
  );
}

export default Presentacion;