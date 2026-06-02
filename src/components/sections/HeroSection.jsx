import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { CONTACT_ANCHOR } from '../../config/navigation';
import { useSmartNav } from '../../hooks/useSmartNav';
import { staggerContainer, fadeUp, fadeIn, scaleIn } from '../common/motionPresets';

export default function HeroSection() {
  const { go } = useSmartNav();

  return (
    <Box
      component="section"
      id="inicio"
      aria-label="Presentación principal"
      sx={{
        position: 'relative',
        minHeight: { xs: '92vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Capa decorativa de fondo (sutil, premium) */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 80% at 85% 15%, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0) 55%), linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 5, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Columna de texto */}
          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Typography
              component={motion.p}
              variants={fadeUp}
              variant="overline"
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Desarrollo de software · Consultoría · Innovación
            </Typography>

            <Typography
              component={motion.h1}
              variants={fadeUp}
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.1rem' },
                maxWidth: 640,
              }}
            >
              Convertimos ideas en soluciones digitales
            </Typography>

            <Typography
              component={motion.p}
              variants={fadeUp}
              variant="subtitle1"
              sx={{
                mt: 3,
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                maxWidth: 560,
              }}
            >
              Desarrollo de software, consultoría tecnológica e innovación para empresas que buscan
              crecer y evolucionar.
            </Typography>

            <Stack
              component={motion.div}
              variants={fadeUp}
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4.5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => go(CONTACT_ANCHOR)}
              >
                Hablemos de tu proyecto
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => go({ id: 'servicios', path: '/servicios' })}
              >
                Explorar soluciones
              </Button>
            </Stack>
          </Box>

          {/* Columna visual */}
          <Box
            component={motion.div}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}
          >
            <Box
              component="img"
              loading="eager"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=80"
              alt="Equipo de ingeniería de software colaborando frente a múltiples pantallas de código."
              sx={{
                width: '100%',
                height: { md: 520 },
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 40px 80px -32px rgba(10,10,10,0.35)',
              }}
            />
            {/* Tarjeta flotante de credibilidad */}
            <Box
              component={motion.div}
              variants={fadeIn}
              sx={{
                position: 'absolute',
                bottom: -28,
                left: -28,
                bgcolor: 'common.black',
                color: 'common.white',
                borderRadius: 3,
                px: 3,
                py: 2.2,
                boxShadow: '0 24px 48px -20px rgba(10,10,10,0.5)',
              }}
            >
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>
                100%
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', mt: 0.5 }}>
                soluciones a medida
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
