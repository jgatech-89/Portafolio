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
            mt: { xs: 4, md: 6 },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 280px)',
              sm: 'repeat(2, minmax(0, 240px))',
              md: 'repeat(3, minmax(0, 260px))',
            },
            justifyContent: 'center',
            gap: { xs: 2.5, md: 3 },
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
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.default',
                  transition: 'transform .35s ease, box-shadow .35s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px -24px rgba(10,10,10,0.28)',
                  },
                  '&:hover img': { transform: 'scale(1.04)' },
                }}
              >
                <Box sx={{ overflow: 'hidden', aspectRatio: '1 / 1', bgcolor: 'common.black' }}>
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

                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3" sx={{ fontSize: '1rem', lineHeight: 1.3 }}>
                    {person.name}
                  </Typography>
                  <Typography
                    sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.78rem', mt: 0.35 }}
                  >
                    {person.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mt: 1, fontSize: '0.8rem', lineHeight: 1.55 }}
                  >
                    {person.description}
                  </Typography>

                  <Stack direction="row" spacing={0.75} sx={{ mt: 1.75 }}>
                    <Tooltip title="LinkedIn">
                      <IconButton
                        component="a"
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${person.name}`}
                        size="small"
                        sx={{
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': { bgcolor: 'common.black', color: 'common.white' },
                        }}
                      >
                        <LinkedInIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Portafolio">
                      <IconButton
                        component="a"
                        href={person.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Portafolio de ${person.name}`}
                        size="small"
                        sx={{
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': { bgcolor: 'common.black', color: 'common.white' },
                        }}
                      >
                        <LaunchIcon sx={{ fontSize: 18 }} />
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
