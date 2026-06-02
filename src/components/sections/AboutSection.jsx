import { Box, Container, Typography } from '@mui/material';
import AnimatedContainer from '../common/AnimatedContainer';

export default function AboutSection() {
  return (
    <Box component="section" id="nosotros" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'background.default' }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Imagen — entra desde la izquierda */}
          <AnimatedContainer variant="fadeLeft" sx={{ position: 'relative' }}>
            <Box
              component="img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80"
              alt="Equipo de JGA TECH en una sesión de trabajo colaborativo y planificación de proyecto."
              sx={{
                width: '100%',
                height: { xs: 300, md: 520 },
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 40px 80px -36px rgba(10,10,10,0.3)',
              }}
            />
          </AnimatedContainer>

          {/* Texto — entra desde la derecha */}
          <AnimatedContainer variant="fadeRight">
            <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
              Nosotros
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, maxWidth: 520 }}
            >
              Socios estratégicos en transformación digital
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
              Más que proveedores tecnológicos, somos aliados en la evolución digital de nuestros
              clientes. Combinamos consultoría, arquitectura de software y desarrollo de soluciones
              personalizadas para ayudar a las organizaciones a tomar mejores decisiones, optimizar
              recursos y alcanzar sus objetivos de negocio.
            </Typography>
          </AnimatedContainer>
        </Box>
      </Container>
    </Box>
  );
}
