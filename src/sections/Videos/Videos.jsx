import './Videos.css';

function Videos() {
  return (
    <section className="videos" id="videos">
      <h2>Presentaciones en vivo</h2>
      <h3>Conocé nuestra Música</h3>

      <div className="videos-row">
        {/* Video 1 */}
        <div className="video-col">
          <h4>Fábulas de Amor</h4>
          <iframe
            src="https://www.youtube.com/embed/fng-MoLTKPo"
            title="Fábulas de Amor"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="video-col">
          <h4>Semillas de Chacarera</h4>
          <iframe
            src="https://www.youtube.com/embed/KVzBaYRLDiE"
            title="Semillas de Chacarera"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Videos;