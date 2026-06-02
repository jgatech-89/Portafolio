// Equipo fundador de JGA TECH.
// Las imágenes son placeholders temporales (servicio ui-avatars) y pueden
// reemplazarse por fotografías reales en /public sin cambiar el resto del código.

const placeholder = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=480&background=0A0A0A&color=FFFFFF&font-size=0.33&bold=true`;

export const founders = [
  {
    id: 'alexandra-pena',
    name: 'Alexandra Isabel Peña Cera',
    role: 'Full Stack Engineer & Co-Founder',
    description:
      'Especialista en desarrollo de software y soluciones digitales orientadas al crecimiento empresarial.',
    image: placeholder('Alexandra Pena'),
    linkedin: 'https://www.linkedin.com/in/alexandra-pena',
    portfolio: 'https://portfolio.alexandrapena.dev',
  },
  {
    id: 'gabriela-castro',
    name: 'Gabriela Castro Hernández',
    role: 'Full Stack Engineer & Co-Founder',
    description:
      'Desarrolladora enfocada en la creación de experiencias digitales modernas y plataformas escalables.',
    image: placeholder('Gabriela Castro'),
    linkedin: 'https://www.linkedin.com/in/gabriela-castro',
    portfolio: 'https://portfolio.gabrielacastro.dev',
  },
  {
    id: 'jose-ochoa',
    name: 'José Ochoa Cairoza',
    role: 'Full Stack Engineer & Co-Founder',
    description:
      'Especialista en arquitectura de software e integración de sistemas para entornos empresariales.',
    image: placeholder('Jose Ochoa'),
    linkedin: 'https://www.linkedin.com/in/jose-ochoa',
    portfolio: 'https://portfolio.joseocha.dev',
  },
];
