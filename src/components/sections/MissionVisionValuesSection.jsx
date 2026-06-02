import { Box, Container, Paper, Typography } from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AnimatedContainer from '../common/AnimatedContainer';
import AnimatedItem from '../common/AnimatedItem';

const VALUES = [
  { name: 'Innovación', text: 'Buscamos constantemente nuevas tecnologías y mejores formas de resolver problemas.' },
  { name: 'Compromiso', text: 'Trabajamos con responsabilidad y dedicación para cumplir los objetivos de nuestros clientes.' },
  { name: 'Excelencia', text: 'Mantenemos altos estándares de calidad en cada proyecto y servicio que ofrecemos.' },
  { name: 'Integridad', text: 'Actuamos con transparencia, ética y honestidad en todas nuestras relaciones y decisiones.' },
];

const CARDS = [
  {
    icon: FlagOutlinedIcon,
    title: 'Misión',
    body: (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Impulsar el crecimiento de empresas y organizaciones mediante soluciones tecnológicas
        innovadoras, desarrollo de software a medida y consultoría especializada, generando valor a
        través de la eficiencia, la transformación digital y la mejora continua.
      </Typography>
    ),
  },
  {
    icon: VisibilityOutlinedIcon,
    title: 'Visión',
    body: (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Ser una empresa líder en desarrollo de software y consultoría tecnológica, reconocida por la
        calidad de nuestras soluciones, la confianza de nuestros clientes y nuestra capacidad para
        transformar desafíos empresariales en oportunidades de innovación y crecimiento.
      </Typography>
    ),
  },
  {
    icon: DiamondOutlinedIcon,
    title: 'Valores',
    body: (
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1.4 }}>
        {VALUES.map((v) => (
          <Box component="li" key={v.name}>
            <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
              {v.name}.{' '}
            </Typography>
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
              {v.text}
            </Typography>
          </Box>
        ))}
      </Box>
    ),
  },
];

export default function MissionVisionValuesSection() {
  return (
    <Box component="section" id="proposito" sx={{ py: { xs: 9, md: 13 }, bgcolor: 'brand.lightGray' }}>
      <Container>
        <AnimatedContainer
          variant="fadeUp"
          stagger
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {CARDS.map(({ icon: Icon, title, body }) => (
            <AnimatedItem key={title} variant="fadeUp">
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: { xs: 3.5, md: 4 },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.default',
                  transition: 'transform .3s ease, box-shadow .3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 30px 60px -32px rgba(10,10,10,0.28)',
                  },
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'common.black',
                    color: 'common.white',
                    mb: 2.5,
                  }}
                >
                  <Icon />
                </Box>
                <Typography variant="h5" component="h3" sx={{ fontFamily: "'Playfair Display', serif", mb: 1.5 }}>
                  {title}
                </Typography>
                {body}
              </Paper>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Container>
    </Box>
  );
}
