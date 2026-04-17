import "../styles/video-section.css";

export default function VideoSection() {
  return (
    <section className="section">
      <div className="container video-wrap">
        <iframe
          src="https://www.youtube.com/embed/e0iZESmPcXU?rel=0"
          title="Sigma Design & Build video"
          allowFullScreen
        />
      </div>
    </section>
  );
}
