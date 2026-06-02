import { useState } from 'react';
import { Box, Container } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import ProjectsCarousel from './ProjectsCarousel';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Box component="section" id="portafolio" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'brand.lightGray' }}>
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos que generan impacto"
          subtitle="Una muestra de las soluciones que hemos diseñado y construido junto a nuestros clientes."
        />

        <AnimatedContainer variant="fadeUp" sx={{ mt: { xs: 5, md: 8 }, px: { md: 3 } }}>
          <ProjectsCarousel
            paused={Boolean(selectedProject)}
            onOpenProject={setSelectedProject}
          />
        </AnimatedContainer>
      </Container>

      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
}
