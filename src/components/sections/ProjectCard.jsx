import { Box, Button, CardActionArea, Chip, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSmartNav } from '../../hooks/useSmartNav';

export default function ProjectCard({ project, featured = false, onOpen }) {
  const { go } = useSmartNav();
  const hasDetail = Boolean(project.images?.length);

  const handleView = () => {
    if (hasDetail) {
      onOpen(project);
      return;
    }
    if (project.url && project.url.startsWith('#')) {
      go({ id: project.url.slice(1), path: '/contacto' });
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const gridSx = {
    display: 'grid',
    gridTemplateColumns: featured ? { xs: '1fr', md: '1.05fr 1fr' } : '1fr',
    height: '100%',
    textAlign: 'left',
  };

  const cardBody = (
    <>
      <Box
        sx={{
          overflow: 'hidden',
          minHeight: { xs: 200, md: featured ? 340 : 200 },
          bgcolor: 'brand.lightGray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 1.5, md: 2 },
        }}
      >
        <Box
          component="img"
          loading="lazy"
          src={project.image}
          alt={project.imageAlt}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: { xs: 200, md: featured ? 320 : 200 },
            objectFit: 'contain',
            display: 'block',
            transition: 'transform .55s ease',
          }}
        />
      </Box>

      <Box sx={{ p: { xs: 3, md: 4.5 }, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 1 }}>
          {project.category}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '1.6rem', md: '2rem' }, color: 'text.primary' }}
        >
          {project.name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
          {project.shortDescription || project.description}
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
          {hasDetail ? (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.75,
                py: 1.25,
                borderRadius: 999,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              Ver proyecto
              <ArrowForwardIcon fontSize="small" />
            </Box>
          ) : (
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleView}
              aria-label={`Ver proyecto ${project.name}`}
            >
              Ver proyecto
            </Button>
          )}
        </Box>
      </Box>
    </>
  );

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        overflow: 'hidden',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow .35s ease, transform .35s ease',
        '&:hover': { boxShadow: '0 40px 80px -38px rgba(10,10,10,0.35)', transform: 'translateY(-4px)' },
        '&:hover img': { transform: 'scale(1.02)' },
      }}
    >
      {hasDetail ? (
        <CardActionArea onClick={handleView} aria-label={`Ver detalle de ${project.name}`} sx={gridSx}>
          {cardBody}
        </CardActionArea>
      ) : (
        <Box sx={gridSx}>{cardBody}</Box>
      )}
    </Paper>
  );
}
