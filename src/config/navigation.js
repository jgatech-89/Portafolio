// Definición única de la navegación del sitio.
// `id`   -> ancla de la sección dentro de la Home (smooth scroll).
// `path` -> ruta dedicada de React Router.
export const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio', path: '/' },
  { label: 'Servicios', id: 'servicios', path: '/servicios' },
  { label: 'Casos de Éxito', id: 'portafolio', path: '/portafolio' },
  { label: 'Nosotros', id: 'nosotros', path: '/nosotros' },
  { label: 'Contacto', id: 'contacto', path: '/contacto' },
];

// Sección/ancla del formulario de contacto, reutilizada por los CTA.
export const CONTACT_ANCHOR = { id: 'contacto', path: '/contacto' };
