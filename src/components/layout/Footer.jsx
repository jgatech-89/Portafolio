import { Box, Container, Grid, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../common/Logo';
import { NAV_LINKS } from '../../config/navigation';
import { services } from '../../data/services';
import { COMPANY } from '../../config/company';
import { useSmartNav } from '../../hooks/useSmartNav';

const linkSx = {
  color: 'rgba(255,255,255,0.7)',
  cursor: 'pointer',
  fontSize: '0.95rem',
  transition: 'color .2s ease',
  '&:hover': { color: '#fff' },
  textAlign: 'left',
  background: 'none',
  border: 'none',
  p: 0,
  font: 'inherit',
};

export default function Footer() {
  const { go } = useSmartNav();

  return (
    <Box component="footer" sx={{ bgcolor: 'common.black', color: 'common.white', pt: { xs: 7, md: 9 }, pb: 4 }}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Marca */}
          <Grid item xs={12} md={4}>
            <Logo light />
            <Typography sx={{ mt: 2.5, color: 'rgba(255,255,255,0.7)', maxWidth: 320, lineHeight: 1.7 }}>
              Convertimos ideas en soluciones digitales. Desarrollo de software, arquitectura
              tecnológica y consultoría para empresas que buscan crecer y evolucionar.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton
                component="a"
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de JGA TECH"
                sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href={COMPANY.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de JGA TECH"
                sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff' } }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de JGA TECH"
                sx={{ color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff' } }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Menú rápido */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.55)' }}>
              Navegación
            </Typography>
            <Stack spacing={1.4} sx={{ mt: 2 }} component="nav" aria-label="Enlaces del pie de página">
              {NAV_LINKS.map((link) => (
                <Box component="button" key={link.id} type="button" sx={linkSx} onClick={() => go(link)}>
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Servicios */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.55)' }}>
              Servicios
            </Typography>
            <Stack spacing={1.4} sx={{ mt: 2 }}>
              {services.slice(0, 6).map((s) => (
                <Box
                  component="button"
                  key={s.id}
                  type="button"
                  sx={linkSx}
                  onClick={() => go({ id: 'servicios', path: '/servicios' })}
                >
                  {s.title}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.55)' }}>
              Contacto
            </Typography>
            <Stack spacing={1.6} sx={{ mt: 2 }}>
              <MuiLink
                href={`mailto:${COMPANY.email}`}
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.8)', '&:hover': { color: '#fff' } }}
              >
                <EmailIcon fontSize="small" /> {COMPANY.email}
              </MuiLink>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>{COMPANY.city}</Typography>
              <Box component="button" type="button" sx={linkSx} onClick={() => go({ id: 'contacto', path: '/contacto' })}>
                Iniciar un proyecto →
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            © 2026 JGA TECH. Todos los derechos reservados.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
            Diseñado y desarrollado con propósito.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
