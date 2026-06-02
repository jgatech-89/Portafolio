import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link as MuiLink,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import SendIcon from '@mui/icons-material/Send';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import { COMPANY, whatsappLink, whatsappDisplay } from '../../config/company';

const PROJECT_TYPES = [
  'Software a medida',
  'Aplicación móvil',
  'Arquitectura Cloud',
  'DevOps',
  'Automatización',
  'Inteligencia Artificial',
  'Integraciones',
  'Consultoría Tecnológica',
  'Otro',
];

const INITIAL = { name: '', email: '', company: '', phone: '', projectType: '', message: '' };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s().-]{6,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Ingresa tu nombre completo.';
  if (!values.email.trim()) errors.email = 'Ingresa tu correo electrónico.';
  else if (!emailRegex.test(values.email)) errors.email = 'Correo electrónico no válido.';
  if (values.phone && !phoneRegex.test(values.phone)) errors.phone = 'Teléfono no válido.';
  if (!values.projectType) errors.projectType = 'Selecciona un tipo de proyecto.';
  if (!values.message.trim()) errors.message = 'Cuéntanos sobre tu proyecto.';
  else if (values.message.trim().length < 10) errors.message = 'El mensaje es demasiado corto.';
  return errors;
}

const contactItems = [
  {
    icon: EmailIcon,
    label: 'Correo',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: whatsappDisplay(),
    href: whatsappLink(),
    external: true,
  },
  {
    icon: PlaceIcon,
    label: 'Ubicación',
    value: COMPANY.city,
    href: null,
  },
];

export default function ContactSection() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Integración futura: aquí se enviaría `values` a un backend / CRM / email API.
    // Por ahora abrimos WhatsApp con el resumen para no perder el contacto.
    const resumen = `Hola JGA TECH, soy ${values.name}.%0A` +
      `Empresa: ${values.company || 'N/D'}%0A` +
      `Tipo de proyecto: ${values.projectType}%0A` +
      `Mensaje: ${values.message}`;
    window.open(whatsappLink(decodeURIComponent(resumen)), '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setValues(INITIAL);
  };

  return (
    <Box component="section" id="contacto" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos de tu proyecto"
          subtitle="Cuéntanos qué quieres lograr y nuestro equipo te responderá para definir el mejor camino."
        />

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mt: { xs: 1, md: 3 } }}>
          {/* Información de contacto */}
          <Grid item xs={12} md={5}>
            <AnimatedContainer variant="fadeLeft">
              <Typography variant="h5" component="h3" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
                Información de contacto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                Estamos disponibles para resolver tus dudas y acompañarte desde el primer día.
              </Typography>

              <Stack spacing={2.5}>
                {contactItems.map(({ icon: Icon, label, value, href, external }) => {
                  const content = (
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        aria-hidden="true"
                        sx={{
                          width: 48,
                          height: 48,
                          flexShrink: 0,
                          borderRadius: 2.5,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'common.black',
                          color: 'common.white',
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          {label}
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>{value}</Typography>
                      </Box>
                    </Stack>
                  );

                  return href ? (
                    <MuiLink
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      sx={{ color: 'inherit', borderRadius: 2, '&:hover': { opacity: 0.85 } }}
                    >
                      {content}
                    </MuiLink>
                  ) : (
                    <Box key={label}>{content}</Box>
                  );
                })}
              </Stack>
            </AnimatedContainer>
          </Grid>

          {/* Formulario */}
          <Grid item xs={12} md={7}>
            <AnimatedContainer variant="fadeRight">
              <Paper
                component="form"
                noValidate
                onSubmit={handleSubmit}
                elevation={0}
                sx={{ p: { xs: 3, md: 4.5 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
              >
                {submitted && (
                  <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }} onClose={() => setSubmitted(false)}>
                    ¡Gracias! Hemos preparado tu mensaje. Te contactaremos muy pronto.
                  </Alert>
                )}

                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Nombre completo"
                      value={values.name}
                      onChange={handleChange('name')}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Correo electrónico"
                      value={values.email}
                      onChange={handleChange('email')}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Empresa"
                      value={values.company}
                      onChange={handleChange('company')}
                      autoComplete="organization"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="tel"
                      label="Teléfono"
                      value={values.phone}
                      onChange={handleChange('phone')}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone}
                      autoComplete="tel"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      required
                      label="Tipo de proyecto"
                      value={values.projectType}
                      onChange={handleChange('projectType')}
                      error={Boolean(errors.projectType)}
                      helperText={errors.projectType}
                    >
                      {PROJECT_TYPES.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      minRows={4}
                      label="Mensaje"
                      value={values.message}
                      onChange={handleChange('message')}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
                      Enviar mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </AnimatedContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
