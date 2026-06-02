import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { CONTACT_ANCHOR } from '../../config/navigation';
import { HERO_HEADLINE, HERO_SUBHEADLINE } from '../../config/hero';
import { useSmartNav } from '../../hooks/useSmartNav';
import { staggerContainer, fadeUp } from '../common/motionPresets';
import HeroBadge from '../hero/HeroBadge';
import HeroSocialProof from '../hero/HeroSocialProof';
import HeroDashboard from '../hero/HeroDashboard';

export default function HeroSection() {
  const { go } = useSmartNav();

  return (
    <Box
      component="section"
      id="inicio"
      aria-label="Presentación principal"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'min(92vh, 900px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
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
          <Box component={motion.div} variants={staggerContainer} initial="hidden" animate="visible">
            <HeroBadge />

            <Typography
              component={motion.h1}
              variants={fadeUp}
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.75rem' },
                maxWidth: 640,
              }}
            >
              {HERO_HEADLINE}
            </Typography>

            <Typography
              component={motion.p}
              variants={fadeUp}
              variant="subtitle1"
              sx={{
                mt: 3,
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                maxWidth: 560,
                lineHeight: 1.7,
              }}
            >
              {HERO_SUBHEADLINE}
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
                Agendar Consultoría
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => go({ id: 'portafolio', path: '/portafolio' })}
              >
                Ver Casos de Éxito
              </Button>
            </Stack>

            <HeroSocialProof />
          </Box>

          <HeroDashboard />
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
          <Box
            sx={{
              borderRadius: 4,
              bgcolor: 'common.black',
              color: 'common.white',
              p: 2.5,
              boxShadow: '0 40px 80px -32px rgba(10,10,10,0.35)',
            }}
          >
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.55)' }}>
              Plataforma JGA
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '1rem', mt: 0.5 }}>
              Software · IA · Automatización
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, mt: 2 }}>
              {[
                { l: 'KPIs', v: '24.8%' },
                { l: 'APIs', v: '99.9%' },
                { l: 'IA', v: 'ON' },
              ].map((k) => (
                <Box
                  key={k.l}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    p: 1.25,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>{k.l}</Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, mt: 0.25 }}>{k.v}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
