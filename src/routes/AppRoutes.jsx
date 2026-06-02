import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Lazy loading de páginas para dividir el bundle.
const Home = lazy(() => import('../pages/Home'));
const Nosotros = lazy(() => import('../pages/Nosotros'));
const Servicios = lazy(() => import('../pages/Servicios'));
const Portafolio = lazy(() => import('../pages/Portafolio'));
const Contacto = lazy(() => import('../pages/Contacto'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Loader() {
  return (
    <Box sx={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }} role="status" aria-label="Cargando">
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
