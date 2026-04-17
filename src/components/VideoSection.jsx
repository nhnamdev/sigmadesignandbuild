import { useEffect, useRef } from "react";
import "../styles/video-section.css";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          return;
        }

        video.pause();
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container video-wrap">
        <video ref={videoRef} controls muted playsInline preload="metadata">
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
