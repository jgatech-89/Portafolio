// Definición única de la navegación del sitio.
// `id`   -> ancla de la sección dentro de la Home (smooth scroll).
// `path` -> ruta dedicada de React Router.
export const NAV_LINKS = [
  { label: 'Nosotros', id: 'nosotros', path: '/nosotros' },
  { label: 'Servicios', id: 'servicios', path: '/servicios' },
  { label: 'Portafolio', id: 'portafolio', path: '/portafolio' },
  { label: 'Contacto', id: 'contacto', path: '/contacto' },
];

// Sección/ancla del formulario de contacto, reutilizada por los CTA.
export const CONTACT_ANCHOR = { id: 'contacto', path: '/contacto' };
