import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSkillsSection from "@/components/StatsSkillsSection";
import ContactSection from "@/components/ContactSection";
import DecorativeVisual from "@/components/DecorativeVisual";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <StatsSkillsSection />
      <ContactSection />
      <DecorativeVisual />
      <Footer />
    </main>
  );
}
