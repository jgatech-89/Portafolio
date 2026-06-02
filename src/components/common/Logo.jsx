import { Box, Typography } from '@mui/material';

/**
 * Logotipo tipográfico de JGA TECH.
 * Props:
 * - light: usa color claro para fondos oscuros.
 * - size: 'sm' | 'md'
 */
export default function Logo({ light = false, size = 'md' }) {
  const color = light ? '#FFFFFF' : '#0A0A0A';
  const fontSize = size === 'sm' ? '1.15rem' : '1.4rem';

  return (
    <Box
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, userSelect: 'none' }}
      aria-label="JGA TECH"
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 34,
          height: 34,
          borderRadius: '10px',
          bgcolor: color,
          color: light ? '#0A0A0A' : '#FFFFFF',
          display: 'grid',
          placeItems: 'center',
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '-0.04em',
        }}
      >
        J
      </Box>
      <Typography
        component="span"
        sx={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: '0.04em',
          color,
          lineHeight: 1,
        }}
      >
        JGA{' '}
        <Box component="span" sx={{ fontWeight: 500, letterSpacing: '0.12em' }}>
          TECH
        </Box>
      </Typography>
    </Box>
  );
}
