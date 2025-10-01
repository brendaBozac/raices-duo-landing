import './Videos.css';
import { useEffect, useRef } from "react";

function Videos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".fade-up");
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="videos" id="videos" ref={sectionRef}>
      <div className='titulos-videos'>
        <h2 className="fade-up">Presentaciones en vivo</h2>
        <h3 className="fade-up">Conocé nuestra Música</h3>
      </div>

      <div className="videos-row">
        {/* Video 1 */}
        <div className="video-col fade-up">
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
        <div className="video-col fade-up">
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