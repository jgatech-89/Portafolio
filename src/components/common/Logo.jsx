import { Box } from '@mui/material';

/**
 * Logotipo oficial de JGA TECH (`/public/logo.png`).
 * Props:
 * - size: 'sm' | 'md'
 * - light: versión clara para fondos oscuros (footer).
 */
export default function Logo({ size = 'md', light = false }) {
  const height = size === 'sm' ? 44 : 54;

  return (
    <Box
      component="img"
      src="/logo.png?v=2"
      alt="JGA TECH — desarrollo de software y consultoría tecnológica"
      sx={{
        height,
        width: 'auto',
        display: 'block',
        userSelect: 'none',
        ...(light && { filter: 'brightness(0) invert(1)' }),
      }}
    />
  );
}
