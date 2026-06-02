import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { NAV_LINKS, CONTACT_ANCHOR } from '../../config/navigation';
import { useSmartNav } from '../../hooks/useSmartNav';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { go } = useSmartNav();

  // Cambio visual al hacer scroll.
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

  // Bloquea scroll del fondo cuando el drawer está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (link) => {
    go(link, { onNavigate: () => setOpen(false) });
  };

  const goHome = () => {
    navigate('/');
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="header"
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.0)',
          backdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'blur(2px)',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'blur(2px)',
          borderBottom: scrolled ? '1px solid rgba(10,10,10,0.07)' : '1px solid transparent',
          transition: 'background-color .35s ease, border-color .35s ease, backdrop-filter .35s ease',
          color: 'text.primary',
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ minHeight: { xs: 64, md: 76 }, justifyContent: 'space-between' }}
          >
            <Box
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
              aria-label="Ir al inicio — JGA TECH"
              sx={{ display: 'inline-flex', borderRadius: 1 }}
            >
              <Logo />
            </Box>

            {/* Navegación de escritorio */}
            <Box
              component="nav"
              aria-label="Navegación principal"
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => handleNav(link)}
                  sx={{
                    color: 'text.primary',
                    px: 1.8,
                    fontWeight: 500,
                    borderRadius: 999,
                    '&:hover': { backgroundColor: 'rgba(10,10,10,0.05)', transform: 'none' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNav(CONTACT_ANCHOR)}
                sx={{ ml: 1.5 }}
              >
                Iniciar Proyecto
              </Button>
            </Box>

            {/* Botón hamburguesa (móvil) */}
            <IconButton
              edge="end"
              aria-label="Abrir menú de navegación"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: { xs: '82%', sm: 340 }, bgcolor: 'background.default', px: 1, py: 2 },
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}
        >
          <Logo size="sm" />
          <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Navegación móvil">
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton onClick={() => handleNav(link)} sx={{ borderRadius: 2, py: 1.4 }}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontSize: '1.05rem', fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ px: 2, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleNav(CONTACT_ANCHOR)}
          >
            Iniciar Proyecto
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
