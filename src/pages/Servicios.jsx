import PageWrapper from '../components/common/PageWrapper';
import ServicesSection from '../components/sections/ServicesSection';
import DifferentialSection from '../components/sections/DifferentialSection';
import CTASection from '../components/sections/CTASection';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Servicios() {
  useDocumentMeta({
    title: 'Servicios | JGA TECH',
    description:
      'Software a medida, apps móviles, arquitectura cloud, DevOps, automatización, IA, integraciones y consultoría tecnológica.',
  });

  return (
    <PageWrapper>
      <ServicesSection />
      <DifferentialSection />
      <CTASection />
    </PageWrapper>
  );
}
