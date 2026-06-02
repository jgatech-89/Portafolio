import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import MissionVisionValuesSection from '../components/sections/MissionVisionValuesSection';
import DifferentialSection from '../components/sections/DifferentialSection';
import FoundersSection from '../components/sections/FoundersSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVisionValuesSection />
      <DifferentialSection />
      <FoundersSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
