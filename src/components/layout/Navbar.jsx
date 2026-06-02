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

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: 'space-between', gap: 2 }}>
            <Box
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
              aria-label="Ir al inicio — JGA TECH"
              sx={{ display: 'inline-flex', borderRadius: 1, flexShrink: 0 }}
            >
              <Logo />
            </Box>

            <Box
              component="nav"
              aria-label="Navegación principal"
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 0.25,
                flex: 1,
                justifyContent: 'center',
              }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={`${link.id}-${link.label}`}
                  onClick={() => handleNav(link)}
                  sx={{
                    color: 'text.primary',
                    px: 1.25,
                    py: 0.75,
                    minWidth: 0,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    borderRadius: 999,
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)', transform: 'none' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNav(CONTACT_ANCHOR)}
              sx={{ display: { xs: 'none', md: 'inline-flex' }, flexShrink: 0, ml: 1 }}
            >
              Agendar Reunión
            </Button>

            <IconButton
              edge="end"
              aria-label="Abrir menú de navegación"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: 'min(88vw, 360px)' },
            bgcolor: 'background.paper',
            px: 1,
            py: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}>
          <Logo size="sm" />
          <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Navegación móvil">
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={`${link.id}-${link.label}`} disablePadding>
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
            Agendar Reunión
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
