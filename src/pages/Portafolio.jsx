import PageWrapper from '../components/common/PageWrapper';
import PortfolioSection from '../components/sections/PortfolioSection';
import CTASection from '../components/sections/CTASection';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Portafolio() {
  useDocumentMeta({
    title: 'Portafolio | JGA TECH',
    description:
      'Proyectos destacados de JGA TECH: NOVA ACADEMIC, Lumet.beta y más soluciones digitales con impacto real.',
  });

  return (
    <PageWrapper>
      <PortfolioSection />
      <CTASection />
    </PageWrapper>
  );
}
