import { Box, Button, Chip, Container, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import AnimatedItem from '../common/AnimatedItem';
import { projects } from '../../data/portfolio';
import { useSmartNav } from '../../hooks/useSmartNav';

function ProjectCard({ project, featured }) {
  const { go } = useSmartNav();

  const handleView = () => {
    if (project.url && project.url.startsWith('#')) {
      go({ id: project.url.slice(1), path: '/contacto' });
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        overflow: 'hidden',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        display: 'grid',
        gridTemplateColumns: featured ? { xs: '1fr', md: '1.05fr 1fr' } : '1fr',
        transition: 'box-shadow .35s ease, transform .35s ease',
        '&:hover': { boxShadow: '0 40px 80px -38px rgba(10,10,10,0.35)', transform: 'translateY(-4px)' },
        '&:hover img': { transform: 'scale(1.05)' },
      }}
    >
      <Box sx={{ overflow: 'hidden', minHeight: { xs: 220, md: featured ? 380 : 220 }, bgcolor: 'common.black' }}>
        <Box
          component="img"
          loading="lazy"
          src={project.image}
          alt={project.imageAlt}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .55s ease' }}
        />
      </Box>

      <Box sx={{ p: { xs: 3, md: 4.5 }, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 1 }}>
          {project.category}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          {project.name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
          {project.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 3 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: 999,
                bgcolor: 'brand.lightGray',
                color: 'text.primary',
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', pt: 3.5 }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={handleView}
            aria-label={`Ver proyecto ${project.name}`}
          >
            Ver proyecto
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default function PortfolioSection() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Box component="section" id="portafolio" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'brand.lightGray' }}>
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos que generan impacto"
          subtitle="Una muestra de las soluciones que hemos diseñado y construido junto a nuestros clientes."
        />

        <AnimatedContainer variant="fadeUp" sx={{ mt: { xs: 5, md: 8 } }}>
          {featured && <ProjectCard project={featured} featured />}
        </AnimatedContainer>

        {rest.length > 0 && (
          <AnimatedContainer
            variant="fadeUp"
            stagger
            sx={{
              mt: 4,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            {rest.map((project) => (
              <AnimatedItem key={project.id} variant="fadeUp">
                <ProjectCard project={project} />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        )}
      </Container>
    </Box>
  );
}
