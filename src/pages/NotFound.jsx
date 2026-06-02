import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/common/PageWrapper';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function NotFound() {
  const navigate = useNavigate();
  useDocumentMeta({ title: 'Página no encontrada | JGA TECH' });

  return (
    <PageWrapper>
      <Container sx={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', py: 10 }}>
        <Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '6rem' } }}>
            404
          </Typography>
          <Typography variant="h5" component="p" sx={{ mt: 1, color: 'text.secondary' }}>
            La página que buscas no existe o fue movida.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }} onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </Box>
      </Container>
    </PageWrapper>
  );
}
