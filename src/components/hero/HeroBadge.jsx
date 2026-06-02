import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../common/motionPresets';
import { HERO_BADGE_TAGS } from '../../config/hero';

export default function HeroBadge() {
  return (
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 0.75,
        px: 1.5,
        py: 0.85,
        borderRadius: 999,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        mb: 2.5,
      }}
    >
      {HERO_BADGE_TAGS.map((tag, index) => (
        <Box key={tag} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
          {index > 0 && (
            <Typography
              component="span"
              aria-hidden="true"
              sx={{ color: 'text.secondary', fontSize: '0.55rem', lineHeight: 1, userSelect: 'none' }}
            >
              •
            </Typography>
          )}
          <Typography
            component="span"
            variant="overline"
            sx={{
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              color: 'text.secondary',
              lineHeight: 1.2,
            }}
          >
            {tag}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
