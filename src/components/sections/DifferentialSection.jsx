import { Box, Container, Paper, Typography } from '@mui/material';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import AnimatedItem from '../common/AnimatedItem';

const CARDS = [
  {
    icon: TrackChangesOutlinedIcon,
    title: 'Desarrollo orientado al negocio',
    text: 'Cada solución responde a objetivos estratégicos y métricas reales.',
  },
  {
    icon: AccountTreeOutlinedIcon,
    title: 'Arquitectura escalable',
    text: 'Diseñamos plataformas preparadas para crecer junto con nuestros clientes.',
  },
  {
    icon: RocketLaunchOutlinedIcon,
    title: 'Innovación continua',
    text: 'Aplicamos tecnologías modernas para maximizar competitividad y eficiencia.',
  },
  {
    icon: HandshakeOutlinedIcon,
    title: 'Acompañamiento estratégico',
    text: 'Participamos como aliados tecnológicos durante todo el ciclo del proyecto.',
  },
];

export default function DifferentialSection() {
  return (
    <Box component="section" id="diferencial" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle
          eyebrow="Nuestra diferencia"
          title="Construimos tecnología con propósito"
          subtitle="No entregamos únicamente software. Diseñamos soluciones alineadas con objetivos de negocio, escalabilidad y crecimiento sostenible."
        />

        <AnimatedContainer
          variant="fadeUp"
          stagger
          sx={{
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 3.5 },
          }}
        >
          {CARDS.map(({ icon: Icon, title, text }) => (
            <AnimatedItem key={title} variant="fadeUp">
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'common.black',
                    boxShadow: '0 28px 56px -32px rgba(10,10,10,0.3)',
                  },
                }}
              >
                <Box aria-hidden="true" sx={{ color: 'common.black', mb: 2 }}>
                  <Icon sx={{ fontSize: 36 }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.1rem' }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {text}
                </Typography>
              </Paper>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Container>
    </Box>
  );
}
