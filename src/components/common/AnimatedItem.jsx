import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { variantByName } from './motionPresets';

/**
 * Hijo animado para usar dentro de un AnimatedContainer con stagger.
 * Hereda el estado de animación del contenedor padre (no define initial/animate).
 */
export default function AnimatedItem({
  variant = 'fadeUp',
  component = 'div',
  children,
  sx,
  ...rest
}) {
  const variants = variantByName[variant] || variantByName.fadeUp;

  return (
    <Box component={motion[component] || motion.div} variants={variants} sx={sx} {...rest}>
      {children}
    </Box>
  );
}
