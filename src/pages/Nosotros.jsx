import PageWrapper from '../components/common/PageWrapper';
import AboutSection from '../components/sections/AboutSection';
import MissionVisionValuesSection from '../components/sections/MissionVisionValuesSection';
import DifferentialSection from '../components/sections/DifferentialSection';
import FoundersSection from '../components/sections/FoundersSection';
import CTASection from '../components/sections/CTASection';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Nosotros() {
  useDocumentMeta({
    title: 'Nosotros | JGA TECH',
    description:
      'Conoce a JGA TECH: socios estratégicos en transformación digital. Misión, visión, valores y equipo fundador.',
  });

  return (
    <PageWrapper>
      <AboutSection />
      <MissionVisionValuesSection />
      <DifferentialSection />
      <FoundersSection />
      <CTASection />
    </PageWrapper>
  );
}
