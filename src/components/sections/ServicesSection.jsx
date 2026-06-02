import { Box, Container, Paper, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import InsightsIcon from '@mui/icons-material/Insights';
import SectionTitle from '../common/SectionTitle';
import AnimatedContainer from '../common/AnimatedContainer';
import AnimatedItem from '../common/AnimatedItem';
import { services } from '../../data/services';

// Mapa nombre -> componente de icono (mantiene data/services.js sin React).
const ICONS = {
  Code: CodeIcon,
  PhoneIphone: PhoneIphoneIcon,
  CloudQueue: CloudQueueIcon,
  AllInclusive: AllInclusiveIcon,
  AutoFixHigh: AutoFixHighIcon,
  Psychology: PsychologyIcon,
  Hub: HubIcon,
  Insights: InsightsIcon,
};

export default function ServicesSection() {
  return (
    <Box component="section" id="servicios" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'background.default' }}>
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          title="Soluciones tecnológicas de extremo a extremo"
          subtitle="Acompañamos cada etapa del ciclo de vida del software, desde la estrategia hasta la operación continua."
        />

        <AnimatedContainer
          variant="fadeUp"
          stagger
          sx={{
            mt: { xs: 5, md: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon] || CodeIcon;
            return (
              <AnimatedItem key={service.id} variant="fadeUp">
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform .3s ease, box-shadow .3s ease, background-color .3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      bgcolor: 'common.black',
                      boxShadow: '0 30px 60px -32px rgba(10,10,10,0.4)',
                    },
                    '&:hover .svc-icon': { bgcolor: 'common.white', color: 'common.black' },
                    '&:hover .svc-title, &:hover .svc-text': { color: 'common.white' },
                  }}
                >
                  <Box
                    className="svc-icon"
                    aria-hidden="true"
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'brand.lightGray',
                      color: 'common.black',
                      mb: 2.5,
                      transition: 'background-color .3s ease, color .3s ease',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography
                    className="svc-title"
                    variant="h6"
                    component="h3"
                    sx={{ fontSize: '1.1rem', mb: 1, transition: 'color .3s ease' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    className="svc-text"
                    variant="body2"
                    sx={{ color: 'text.secondary', transition: 'color .3s ease' }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Container>
    </Box>
  );
}
