import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SeenOn from "./components/SeenOn";
import VideoSection from "./components/VideoSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";
import FaqSection from "./components/FaqSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <SeenOn />
        <VideoSection />
        <ServicesSection />
        <AboutSection />
        <AreasSection />
        <FaqSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
