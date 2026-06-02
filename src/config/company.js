// Datos de la empresa centralizados. Se alimentan de variables de entorno
// (Vite expone únicamente las que empiezan por VITE_) con valores por defecto
// seguros para desarrollo. Listo para integración futura con backend/CRM.

export const COMPANY = {
  name: 'JGA TECH',
  email: import.meta.env.VITE_EMAIL_EMPRESA || 'contacto@jgatech.dev',
  whatsapp: import.meta.env.VITE_WHATSAPP_EMPRESA || '573000000000',
  city: import.meta.env.VITE_CIUDAD_EMPRESA || 'Barranquilla, Colombia',
  social: {
    linkedin: 'https://www.linkedin.com/company/jga-tech',
    github: 'https://github.com/jga-tech',
    instagram: 'https://www.instagram.com/jga.tech',
  },
};

// Enlace de WhatsApp con mensaje precargado.
export const whatsappLink = (
  message = 'Hola JGA TECH, me gustaría hablar sobre un proyecto.'
) => `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

// Número de WhatsApp formateado para mostrar (+57 300 000 0000).
export const whatsappDisplay = () => {
  const n = COMPANY.whatsapp.replace(/\D/g, '');
  if (n.length < 7) return COMPANY.whatsapp;
  const country = n.slice(0, n.length - 10) || '';
  const rest = n.slice(-10);
  return `+${country} ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`.trim();
};
