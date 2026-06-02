// Equipo fundador de JGA TECH.
// Las imágenes son placeholders temporales (servicio ui-avatars) y pueden
// reemplazarse por fotografías reales en /public sin cambiar el resto del código.

const placeholder = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=480&background=0A0A0A&color=FFFFFF&font-size=0.33&bold=true`;

export const founders = [
  {
    id: 'alexandra-pena',
    name: 'Alexandra Isabel Peña Cera',
    role: 'Desarrollador Frontend & Co-Founder',
    description:
      'Especialista en diseño UX/UI y acompañamiento estratégico al cliente, transformando ideas y requerimientos en experiencias digitales efectivas.',
    image: placeholder('Alexandra Pena'),
    linkedin: 'https://www.linkedin.com/in/alexandra-isabel-pe%C3%B1a-cera-45a00a245',
    portfolio: 'https://portafoliojga.netlify.app/',
  },
  {
    id: 'gabriela-castro',
    name: 'Gabriela Castro Hernández',
    role: 'DevOps & Backend · Co-Founder',
    description:
      'Especialista en arquitectura backend, infraestructura cloud y automatización. Diseña soluciones escalables que conectan desarrollo, operación y rendimiento en un solo ecosistema tecnológico.',
    image: placeholder('Gabriela Castro'),
    linkedin: 'https://www.linkedin.com/in/gabriela-castro-hernandez-gch/',
    portfolio: 'https://portfoliogch.netlify.app/',
  },
  {
    id: 'jose-ochoa',
    name: 'José Ochoa Cairoza',
    role: 'Desarrollador Full Stack & Co-Founder',
    description:
      'Desarrolla productos digitales de extremo a extremo, combinando interfaces modernas, lógica de negocio eficiente e integraciones tecnológicas de alto rendimiento.',
    image: placeholder('Jose Ochoa'),
    linkedin: 'https://www.linkedin.com/in/jose-ochoa-cairoza-8b7003244',
    portfolio: 'https://jdoc492.github.io/Portafolio/',
  },
];
