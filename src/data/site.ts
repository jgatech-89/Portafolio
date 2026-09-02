/**
 * Datos globales que NO dependen del idioma (contacto, redes, dominio).
 * El copy visible y traducible vive en `src/i18n/dictionary.ts`.
 * Fuente de verdad del contacto: alineado con el landing de Scale Labs.
 */
export const site = {
  name: "Scale Labs",
  // Este sitio es el PORTAFOLIO de proyectos — no repite el pitch de empresa
  // del landing (equipo, servicios, FAQ). Solo el trabajo construido.
  tagline: "Portafolio de proyectos",
  description:
    "Proyectos construidos por Scale Labs: plataformas, CRMs y automatizaciones a medida, del diseño a producción.",
  url: "https://portafolio.scalelabs.example.com", // TODO: dominio real antes de publicar
  // Sitio principal de la empresa (el landing).
  mainSite: "https://scalelabs.com",
  email: "scalelabs.info@gmail.com",
  // Formato wa.me: solo dígitos con código de país, sin "+" ni espacios.
  whatsapp: "573023694545",
  whatsappMessage: "Hola, vi el portafolio de Scale Labs y quiero conversar sobre un proyecto.",
  phone: "+57 302 369 4545", // mismo número, formato legible para tel:
  social: {
    linkedin: "",
    instagram: "",
    github: "",
  },
} as const;
