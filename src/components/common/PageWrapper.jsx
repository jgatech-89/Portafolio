import { Box } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Envoltura de página con transición de entrada/salida suave entre rutas
 * y compensación del navbar fijo. Mantiene una altura mínima para evitar
 * saltos de layout en páginas cortas.
 */
export default function PageWrapper({ children, offsetTop = true, sx }) {
  return (
    <Box
      component={motion.main}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        minHeight: '60vh',
        pt: offsetTop ? { xs: 11, md: 13 } : 0,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
