import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../common/motionPresets';
import { HERO_SOCIAL_PROOF } from '../../config/hero';

export default function HeroSocialProof() {
  return (
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
        gap: { xs: 2, sm: 0 },
        mt: { xs: 5, md: 6 },
        pt: { xs: 3, md: 4 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      {HERO_SOCIAL_PROOF.map((item, index) => (
        <Box
          key={item.label}
          sx={{
            px: { sm: index > 0 ? 3 : 0 },
            borderLeft: {
              sm: index > 0 ? '1px solid' : 'none',
            },
            borderColor: { sm: 'divider' },
            gridColumn: { xs: index === 2 ? '1 / -1' : 'auto', sm: 'auto' },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2rem' },
              lineHeight: 1,
              color: 'text.primary',
            }}
          >
            {item.value}
          </Typography>
          <Typography
            sx={{
              mt: 0.75,
              fontSize: '0.875rem',
              color: 'text.secondary',
              lineHeight: 1.4,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
