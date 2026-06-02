import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Salto a contenido para accesibilidad por teclado */}
      <Box
        component="a"
        href="#contenido"
        sx={{
          position: 'absolute',
          left: -9999,
          top: 0,
          zIndex: 2000,
          p: 2,
          bgcolor: 'common.black',
          color: 'common.white',
          borderRadius: 1,
          '&:focus': { left: 16, top: 16 },
        }}
      >
        Saltar al contenido
      </Box>

      <ScrollToTop />
      <Navbar />

      <Box id="contenido" component="div" sx={{ flex: 1 }}>
        <AppRoutes />
      </Box>

      <Footer />
    </Box>
  );
}
