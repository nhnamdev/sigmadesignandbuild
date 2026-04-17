import "../styles/video-section.css";

export default function VideoSection() {
  return (
    <section className="section">
      <div className="container video-wrap">
        <video controls playsInline preload="metadata">
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
