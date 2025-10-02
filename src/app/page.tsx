import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ScrollToTop from './components/ui/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <EducationSection />

      <ProjectsSection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />

      <ScrollToTop />
    </main>
  );
}
