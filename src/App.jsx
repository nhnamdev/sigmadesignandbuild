import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import VideoSection from "./components/VideoSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <VideoSection />
        <ServicesSection />
        <AboutSection />
        <AreasSection />
        <FaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
