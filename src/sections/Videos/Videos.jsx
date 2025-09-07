function Videos() {
  return (
    <section id="videos">
      <h2>Videos</h2>
      <h3>Presentaciones en vivo</h3>
      <div className="videos-row">
        <iframe src="https://www.youtube.com/embed/VIDEO1" title="Video 1"></iframe>
        <iframe src="https://www.youtube.com/embed/VIDEO2" title="Video 2"></iframe>
      </div>
    </section>
  );
}

export default Videos;