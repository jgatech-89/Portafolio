import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AnimatedContainer from '../common/AnimatedContainer';
import { CONTACT_ANCHOR } from '../../config/navigation';
import { useSmartNav } from '../../hooks/useSmartNav';

export default function CTASection() {
  const { go } = useSmartNav();

  return (
    <Box component="section" id="cta" sx={{ py: { xs: 9, md: 13 }, bgcolor: 'background.default' }}>
      <Container>
        <AnimatedContainer
          variant="scaleIn"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: { xs: 4, md: 6 },
            bgcolor: 'common.black',
            color: 'common.white',
            px: { xs: 3.5, md: 9 },
            py: { xs: 6, md: 9 },
            textAlign: 'center',
          }}
        >
          {/* Brillo decorativo */}
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(80% 120% at 50% -10%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
            }}
          />
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: '1.8rem', md: '2.7rem' }, maxWidth: 760, mx: 'auto' }}
            >
              ¿Listo para impulsar la transformación digital de tu empresa?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mt: 2.5, color: 'rgba(255,255,255,0.78)', maxWidth: 620, mx: 'auto' }}
            >
              Agenda una reunión con nuestro equipo y descubre cómo podemos convertir tus desafíos en
              oportunidades de crecimiento.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => go(CONTACT_ANCHOR)}
              sx={{
                mt: 4,
                bgcolor: 'common.white',
                color: 'common.black',
                '&:hover': { bgcolor: 'brand.lightGray' },
              }}
            >
              Agendar consulta
            </Button>
          </Box>
        </AnimatedContainer>
      </Container>
    </Box>
  );
}
