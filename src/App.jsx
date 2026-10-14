import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import ServiceDetailView from "./components/ServiceDetailView";
import { serviceDetails } from "./data/siteData";

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#service-")) {
      const id = hash.replace("#service-", "");
      if (serviceDetails[id]) return id;
    }
    return null;
  });

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#service-")) {
        const id = hash.replace("#service-", "");
        if (serviceDetails[id]) {
          setActiveServiceId(id);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
      if (!hash.startsWith("#service-")) {
        setActiveServiceId(null);
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function handleSelectService(serviceId) {
    setActiveServiceId(serviceId);
    window.location.hash = `service-${serviceId}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBackToHome() {
    setActiveServiceId(null);
    window.location.hash = "services";
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  }

  function handleNavigateHome(href) {
    if (activeServiceId) {
      setActiveServiceId(null);
      setTimeout(() => {
        if (href && href.startsWith("#")) {
          const targetId = href.replace("#", "");
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else if (targetId === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
      }, 60);
    }
  }

  return (
    <>
      <TopBar />
      <Header onNavigateHome={handleNavigateHome} />
      <main>
        {activeServiceId ? (
          <ServiceDetailView
            serviceId={activeServiceId}
            onBack={handleBackToHome}
            onSelectService={handleSelectService}
          />
        ) : (
          <>
            <Hero />
            <StatsSection />
            <ServicesSection onSelectService={handleSelectService} />
            <AboutSection />
            <AreasSection />
            <FaqSection />
            <TestimonialsSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
