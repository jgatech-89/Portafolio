// Proyectos destacados del portafolio.
// `images` alimenta el modal de detalle. `rightsReserved: true` oculta demo y código.

export const projects = [
  {
    id: 'nova-academic',
    name: 'NOVA ACADEMIC',
    category: 'Plataforma educativa',
    description:
      'Plataforma web integral para la gestión académica de instituciones educativas. Centraliza estudiantes, docentes, cursos, notas, asistencias e informes, con alertas tempranas y comunicación automática a padres de familia vía WhatsApp.',
    shortDescription:
      'Gestión académica inteligente con boletines, alertas tempranas y notificaciones automáticas para padres de familia.',
    features: [
      'Gestión académica centralizada: estudiantes, docentes, cursos y calificaciones.',
      'Generación de informes y boletines académicos por curso o de forma individual.',
      'Alertas tempranas con niveles de riesgo, métricas y seguimiento de intervenciones.',
      'Notificaciones automáticas por WhatsApp: notas, ausencias, citaciones y felicitaciones.',
      'Biblioteca de logros institucionales reutilizables por área, materia y grado.',
      'Paneles analíticos para decisiones basadas en datos del periodo académico.',
      'Acceso seguro por roles (administrador, docente) con inicio de sesión institucional.',
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'REST API', 'WhatsApp Business API'],
    image: '/projects/nova-academic/login.png',
    imageAlt: 'Pantalla de inicio de sesión de NOVA ACADEMIC, plataforma de gestión educativa.',
    images: [
      {
        src: '/projects/nova-academic/logo.png',
        alt: 'Logotipo de NOVA ACADEMIC.',
        caption: 'Identidad visual',
      },
      {
        src: '/projects/nova-academic/login.png',
        alt: 'Pantalla de inicio de sesión de NOVA ACADEMIC.',
        caption: 'Inicio de sesión',
      },
      {
        src: '/projects/nova-academic/informes.png',
        alt: 'Módulo de informes y boletines académicos de NOVA ACADEMIC.',
        caption: 'Informes académicos',
      },
      {
        src: '/projects/nova-academic/alertas-tempranas.png',
        alt: 'Panel de alertas tempranas para estudiantes en riesgo académico.',
        caption: 'Alertas tempranas',
      },
      {
        src: '/projects/nova-academic/alertas-whatsapp.png',
        alt: 'Infografía de alertas automáticas enviadas a padres por WhatsApp.',
        caption: 'Alertas por WhatsApp',
      },
      {
        src: '/projects/nova-academic/logros.png',
        alt: 'Biblioteca de logros académicos institucionales.',
        caption: 'Biblioteca de logros',
      },
    ],
    rightsReserved: true,
  },
  {
    id: 'lumet',
    name: 'Lumet.beta',
    category: 'CRM para call center',
    description:
      'CRM completo orientado a operaciones de call center. Permite organizar clientes, agentes y campañas en un solo lugar, con sistema integrado de llamadas, seguimiento de gestiones y paneles para optimizar el rendimiento del equipo comercial.',
    shortDescription:
      'CRM para call center con sistema de llamadas integrado, gestión de clientes y seguimiento comercial en tiempo real.',
    features: [
      'Gestión centralizada de clientes, leads y oportunidades comerciales.',
      'Sistema de llamadas integrado para agentes del call center.',
      'Panel de control con métricas y seguimiento de gestiones.',
      'Autenticación segura por correo electrónico institucional.',
      'Flujos de trabajo para organizar y escalar operaciones de ventas.',
      'Arquitectura dockerizada lista para despliegue en entornos productivos.',
    ],
    technologies: ['TypeScript', 'React', 'Django', 'PostgreSQL', 'Docker'],
    image: '/projects/lumet/login.png',
    imageAlt: 'Pantalla de inicio de sesión de Lumet.beta, CRM para call center.',
    images: [
      {
        src: '/projects/lumet/login.png',
        alt: 'Pantalla de bienvenida e inicio de sesión de Lumet.beta.',
        caption: 'Inicio de sesión',
      },
    ],
    rightsReserved: true,
  },
];
