function Galeria() {
  return (
    <section id="galeria">
      <h2>Galería</h2>
      <div className="galeria-row">
        <div className="col">
          <img src="/img/gal1.jpg" alt="Galería 1" />
          <img src="/img/gal2.jpg" alt="Galería 2" />
          <img src="/img/gal3.jpg" alt="Galería 3" />
        </div>
        <div className="col">
          <img src="/img/gal4.jpg" alt="Galería 4" />
          <img src="/img/gal5.jpg" alt="Galería 5" />
          <img src="/img/gal6.jpg" alt="Galería 6" />
        </div>
      </div>
    </section>
  );
}

export default Galeria;