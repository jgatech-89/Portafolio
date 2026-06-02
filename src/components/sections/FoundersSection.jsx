import { Box, Container, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import AnimatedItem from '../common/AnimatedItem';
import { founders } from '../../data/founders';

export default function FoundersSection() {
  return (
    <Box component="section" id="fundadores" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'brand.lightGray' }}>
      <Container>
        <SectionTitle
          eyebrow="Equipo fundador"
          title="Nuestra experiencia, su ventaja competitiva"
          subtitle="Combinamos experiencia en desarrollo de software, arquitectura tecnológica y transformación digital para construir soluciones que generan resultados."
        />

        <AnimatedContainer
          variant="fadeUp"
          stagger
          sx={{
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 4 },
            maxWidth: { sm: 560, md: 'none' },
            mx: 'auto',
          }}
        >
          {founders.map((person) => (
            <AnimatedItem key={person.id} variant="fadeUp">
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.default',
                  transition: 'transform .35s ease, box-shadow .35s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 36px 70px -34px rgba(10,10,10,0.34)',
                  },
                  '&:hover img': { transform: 'scale(1.04)' },
                }}
              >
                <Box sx={{ overflow: 'hidden', aspectRatio: '4 / 5', bgcolor: 'common.black' }}>
                  <Box
                    component="img"
                    loading="lazy"
                    src={person.image}
                    alt={`Retrato de ${person.name}, ${person.role}.`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform .5s ease',
                    }}
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontSize: '1.15rem' }}>
                    {person.name}
                  </Typography>
                  <Typography
                    sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.85rem', mt: 0.5 }}
                  >
                    {person.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
                    {person.description}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
                    <Tooltip title="LinkedIn">
                      <IconButton
                        component="a"
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${person.name}`}
                        sx={{
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': { bgcolor: 'common.black', color: 'common.white' },
                        }}
                      >
                        <LinkedInIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Portafolio">
                      <IconButton
                        component="a"
                        href={person.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Portafolio de ${person.name}`}
                        sx={{
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': { bgcolor: 'common.black', color: 'common.white' },
                        }}
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              </Paper>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Container>
    </Box>
  );
}
