import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { variantByName, staggerContainer } from './motionPresets';

/**
 * Contenedor animado reutilizable basado en Framer Motion.
 *
 * Props:
 * - variant: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'
 * - stagger: si es true, escalona la animación de sus hijos (usar con
 *   AnimatedItem en cada hijo).
 * - delay: retardo adicional en segundos.
 * - once: anima una sola vez al entrar en viewport (por defecto true).
 * - amount: fracción visible necesaria para disparar la animación.
 * - component: elemento HTML/MUI subyacente (por defecto 'div').
 */
export default function AnimatedContainer({
  variant = 'fadeUp',
  stagger = false,
  delay = 0,
  once = true,
  amount = 0.2,
  component = 'div',
  children,
  sx,
  ...rest
}) {
  const variants = stagger ? staggerContainer : variantByName[variant] || variantByName.fadeUp;

  return (
    <Box
      component={motion[component] || motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      sx={sx}
      {...rest}
    >
      {children}
    </Box>
  );
}
