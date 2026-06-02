import { Box, Chip, Typography } from '@mui/material';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { motion } from 'framer-motion';
import { fadeRight, scaleIn } from '../common/motionPresets';

const glassDark = {
  bgcolor: 'rgba(10,10,10,0.94)',
  border: '1px solid rgba(255,255,255,0.1)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: 3,
  boxShadow: '0 40px 80px -32px rgba(10,10,10,0.45)',
};

const floatAnim = (delay = 0) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay },
  },
});

const BARS = [42, 68, 55, 82, 64, 91, 73];

function MiniChart() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.6, height: 56, mt: 1.5 }}>
      {BARS.map((h, i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: `${h}%`,
            borderRadius: 1,
            bgcolor: i === BARS.length - 1 ? '#FFFFFF' : 'rgba(255,255,255,0.28)',
          }}
        />
      ))}
    </Box>
  );
}

function KpiCard({ label, value, delta }) {
  return (
    <Box sx={{ ...glassDark, p: 1.75, minWidth: 0, boxShadow: 'none' }}>
      <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', mt: 0.5, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', mt: 0.5, fontWeight: 500 }}>
        {delta}
      </Typography>
    </Box>
  );
}

export default function HeroDashboard() {
  return (
    <Box
      component={motion.div}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 360, md: 500 },
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '8%',
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,10,10,0.06) 0%, transparent 70%)',
        }}
      />

      <Box
        component={motion.div}
        {...floatAnim(0)}
        sx={{
          position: 'relative',
          zIndex: 2,
          ...glassDark,
          p: 2.5,
          borderRadius: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              JGA Command Center
            </Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#fff', mt: 0.25 }}>
              Analytics en tiempo real
            </Typography>
          </Box>
          <Chip
            size="small"
            label="Live"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.7rem',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.25, mb: 2 }}>
          <KpiCard label="Conversión" value="24.8%" delta="+12.4%" />
          <KpiCard label="Automatización" value="186" delta="+34 flujos" />
          <KpiCard label="API Uptime" value="99.9%" delta="Estable" />
        </Box>

        <Box sx={{ bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 2, p: 1.5, border: '1px solid rgba(255,255,255,0.08)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <AutoGraphOutlinedIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.85)' }} />
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              Rendimiento mensual
            </Typography>
          </Box>
          <MiniChart />
        </Box>
      </Box>

      <Box
        component={motion.div}
        {...floatAnim(0.8)}
        sx={{
          position: 'absolute',
          top: -12,
          right: -8,
          zIndex: 3,
          ...glassDark,
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.1)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <SmartToyOutlinedIcon sx={{ fontSize: 20, color: '#fff' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)' }}>Motor IA</Typography>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Predicción activa</Typography>
        </Box>
      </Box>

      <Box
        component={motion.div}
        {...floatAnim(1.4)}
        sx={{
          position: 'absolute',
          bottom: 48,
          left: -24,
          zIndex: 3,
          ...glassDark,
          px: 2,
          py: 1.75,
          borderRadius: 3,
          maxWidth: 200,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <HubOutlinedIcon sx={{ fontSize: 18, color: '#fff' }} />
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>Integraciones API</Typography>
        </Box>
        {['CRM', 'ERP', 'WhatsApp'].map((api) => (
          <Box key={api} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 0.4 }}>
            <Typography sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)' }}>{api}</Typography>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.75)' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
