import { useEffect, useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import ProjectCard from './ProjectCard';

const AUTOPLAY_MS = 6000;

export default function ProjectsCarousel({ onOpenProject, paused: pausedExternal = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pausedHover, setPausedHover] = useState(false);
  const paused = pausedExternal || pausedHover;
  const count = projects.length;

  const goTo = (index) => {
    setActiveIndex(((index % count) + count) % count);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (count <= 1 || paused) return undefined;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  const activeProject = projects[activeIndex];

  return (
    <Box
      onMouseEnter={() => setPausedHover(true)}
      onMouseLeave={() => setPausedHover(false)}
      onFocus={() => setPausedHover(true)}
      onBlur={() => setPausedHover(false)}
      sx={{ position: 'relative' }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={activeProject} featured onOpen={onOpenProject} />
          </motion.div>
        </AnimatePresence>
      </Box>

      {count > 1 && (
        <>
          <IconButton
            onClick={prev}
            aria-label="Proyecto anterior"
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 4, md: -20 },
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={next}
            aria-label="Proyecto siguiente"
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 4, md: -20 },
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mt: 3 }}
            role="tablist"
            aria-label="Proyectos del portafolio"
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                component="button"
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ver ${project.name}`}
                onClick={() => goTo(index)}
                sx={{
                  width: index === activeIndex ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  bgcolor: index === activeIndex ? 'common.black' : 'rgba(10,10,10,0.2)',
                  transition: 'width .3s ease, background-color .3s ease',
                }}
              />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
}
