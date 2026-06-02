import PageWrapper from '../components/common/PageWrapper';
import ContactSection from '../components/sections/ContactSection';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function Contacto() {
  useDocumentMeta({
    title: 'Contacto | JGA TECH',
    description:
      'Hablemos de tu proyecto. Escríbenos por correo o WhatsApp y empieza tu transformación digital con JGA TECH.',
  });

  return (
    <PageWrapper>
      <ContactSection />
    </PageWrapper>
  );
}
