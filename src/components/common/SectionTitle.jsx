import { Box, Typography } from '@mui/material';
import AnimatedContainer from './AnimatedContainer';

/**
 * Encabezado de sección reutilizable: eyebrow opcional, título y subtítulo.
 *
 * Props:
 * - eyebrow: texto pequeño superior (overline)
 * - title: título principal (renderizado como h2 visual por defecto)
 * - subtitle: párrafo descriptivo
 * - align: 'left' | 'center'
 * - light: variante para fondos oscuros
 * - maxWidth: ancho máximo del bloque de texto
 * - component: nivel semántico del título (h1..h6)
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  maxWidth = 720,
  component = 'h2',
  sx,
}) {
  const isCenter = align === 'center';

  return (
    <AnimatedContainer
      variant="fadeUp"
      sx={{
        maxWidth,
        mx: isCenter ? 'auto' : 0,
        textAlign: align,
        ...sx,
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          component="p"
          sx={{
            color: light ? 'brand.mediumGray' : 'text.secondary',
            mb: 1.5,
            display: 'block',
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        variant="h3"
        component={component}
        sx={{
          color: light ? 'common.white' : 'text.primary',
          fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.7rem' },
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2.5,
            color: light ? 'rgba(255,255,255,0.78)' : 'text.secondary',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth,
            mx: isCenter ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {isCenter && (
        <Box
          sx={{
            width: 56,
            height: 3,
            borderRadius: 2,
            mx: 'auto',
            mt: 3.5,
            bgcolor: light ? 'common.white' : 'common.black',
            opacity: 0.85,
          }}
        />
      )}
    </AnimatedContainer>
  );
}
