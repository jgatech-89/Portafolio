import {
  Alert,
  Box,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  const images = project.images || [];
  const singleImage = images.length === 1;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby="project-modal-title"
      PaperProps={{ sx: { borderRadius: 3, overflow: 'hidden' } }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 2,
          px: { xs: 2.5, sm: 3 },
          pt: 2.5,
          pb: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            {project.category}
          </Typography>
          <Typography
            id="project-modal-title"
            variant="h4"
            component="h2"
            sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '1.5rem', sm: '1.85rem' } }}
          >
            {project.name}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="Cerrar detalle del proyecto" sx={{ mt: 0.5 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: { xs: 2.5, sm: 3 }, py: 3 }}>
        <Stack spacing={3.5}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: singleImage ? '1fr' : '1fr 1fr' },
              gap: 2,
            }}
          >
            {images.map((img) => (
              <Box key={img.src} sx={{ gridColumn: singleImage ? '1 / -1' : undefined }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'brand.lightGray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1.5,
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: singleImage ? 420 : 280,
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </Box>
                {img.caption && (
                  <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.75, display: 'block' }}>
                    {img.caption}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.25 }}>
              Descripción
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
              {project.description}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.5 }}>
              Características
            </Typography>
            <Stack component="ul" spacing={1.25} sx={{ m: 0, pl: 0, listStyle: 'none' }}>
              {(project.features || []).map((feature) => (
                <Box
                  component="li"
                  key={feature}
                  sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}
                >
                  <CheckCircleOutlineIcon sx={{ fontSize: 20, mt: 0.2, color: 'text.primary', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{ borderRadius: 999, bgcolor: 'brand.lightGray', fontWeight: 500 }}
              />
            ))}
          </Stack>

          {project.rightsReserved && (
            <Alert
              severity="info"
              icon={<LockOutlinedIcon fontSize="inherit" />}
              sx={{ alignItems: 'center', '& .MuiAlert-message': { width: '100%' } }}
            >
              Los derechos de este proyecto se encuentran reservados. No está disponible código
              fuente ni demo público.
            </Alert>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
