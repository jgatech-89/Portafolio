/**
 * Diccionario bilingüe (ES/EN) — todo el copy visible del portafolio vive
 * acá. `data/site.ts` es la fuente para lo que NO se traduce (contacto,
 * dominio) y para el `description` de los `<meta>` del servidor.
 *
 * Este sitio es SOLO el portafolio de proyectos de Scale Labs. No duplica
 * las secciones del landing (equipo, servicios, métricas, FAQ).
 */

export type Locale = "es" | "en";

export interface ProjectShot {
  /** Ruta pública a la captura (p. ej. "/projects/nova-academic/login.png"). */
  src: string;
  /** Texto alternativo accesible. */
  alt: string;
  /** Rótulo corto bajo la imagen en la galería. */
  caption: string;
}

export interface ProjectItem {
  /** Identificador estable (slug). */
  id: string;
  name: string;
  category: string;
  /** Una línea para la tarjeta del collage. */
  summary: string;
  /** Párrafo del perfil expandido. */
  description: string;
  /** Bullets de lo que hace / resuelve. */
  features: string[];
  /** Stack real usado en el proyecto. */
  tech: string[];
  /** Año o rango. */
  year: string;
  /** Imagen de portada de la tarjeta. */
  cover: string;
  coverAlt: string;
  /** Galería del detalle. */
  shots: ProjectShot[];
  /** Cliente con derechos reservados: se oculta demo/código y se marca. */
  rightsReserved: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Dictionary {
  nav: NavItem[];
  hero: {
    topLine: string;
    /** Palabra mega full-bleed (misma longitud en ambos idiomas). */
    mega: string;
    /** Palabra chica acentuada al lado (donde el landing pone "Labs"). */
    megaAccent: string;
    tagPhrase: string;
    capabilities: string[];
    accentTag: string;
    scroll: string;
  };
  work: {
    eyebrow: string;
    title: string;
    descriptionPre: string;
    descriptionHighlight: string;
    descriptionPost: string;
    tagline: string;
    /** Prefijo del aria-label de cada tarjeta. */
    viewProject: string;
    close: string;
    prevLabel: string;
    nextLabel: string;
    featuresLabel: string;
    techLabel: string;
    rightsReserved: string;
    projects: ProjectItem[];
  };
  approach: {
    eyebrow: string;
    title: string;
    /** Franja de tecnologías recurrentes en los proyectos. */
    stackLabel: string;
    stack: string[];
    steps: { title: string; description: string }[];
  };
  cta: {
    title: string;
    description: string;
  };
  footer: {
    tagline: string;
    backToSite: string;
    rights: string;
    builtBy: string;
  };
  contact: {
    whatsapp: string;
    call: string;
  };
  a11y: {
    openMenu: string;
    closeMenu: string;
    goNext: string;
  };
}

const projectsES: ProjectItem[] = [
  {
    id: "nova-academic",
    name: "NOVA ACADEMIC",
    category: "Plataforma educativa",
    year: "2025",
    summary:
      "Gestión académica con boletines, alertas tempranas y avisos automáticos a familias por WhatsApp.",
    description:
      "Plataforma web integral para la gestión académica de instituciones educativas. Centraliza estudiantes, docentes, cursos, notas, asistencias e informes, con alertas tempranas de riesgo y comunicación automática a padres de familia por WhatsApp.",
    features: [
      "Gestión académica centralizada: estudiantes, docentes, cursos y calificaciones.",
      "Informes y boletines académicos por curso o de forma individual.",
      "Alertas tempranas con niveles de riesgo, métricas y seguimiento de intervenciones.",
      "Notificaciones automáticas por WhatsApp: notas, ausencias, citaciones y felicitaciones.",
      "Biblioteca de logros institucionales reutilizables por área, materia y grado.",
      "Paneles analíticos para decisiones basadas en datos del periodo académico.",
      "Acceso por roles (administrador, docente) con inicio de sesión institucional.",
    ],
    tech: ["React", "Django", "PostgreSQL", "REST API", "WhatsApp Business API"],
    cover: "/projects/nova-academic/login.png",
    coverAlt: "Pantalla de inicio de sesión de NOVA ACADEMIC.",
    shots: [
      { src: "/projects/nova-academic/logo.png", alt: "Logotipo de NOVA ACADEMIC.", caption: "Identidad visual" },
      { src: "/projects/nova-academic/login.png", alt: "Pantalla de inicio de sesión de NOVA ACADEMIC.", caption: "Inicio de sesión" },
      { src: "/projects/nova-academic/informes.png", alt: "Módulo de informes y boletines académicos.", caption: "Informes académicos" },
      { src: "/projects/nova-academic/alertas-tempranas.png", alt: "Panel de alertas tempranas para estudiantes en riesgo.", caption: "Alertas tempranas" },
      { src: "/projects/nova-academic/alertas-whatsapp.png", alt: "Infografía de alertas automáticas enviadas a familias por WhatsApp.", caption: "Alertas por WhatsApp" },
      { src: "/projects/nova-academic/logros.png", alt: "Biblioteca de logros académicos institucionales.", caption: "Biblioteca de logros" },
    ],
    rightsReserved: true,
  },
  {
    id: "lumet",
    name: "Lumet.beta",
    category: "CRM para call center",
    year: "2024",
    summary:
      "CRM para call center con sistema de llamadas integrado y seguimiento comercial en tiempo real.",
    description:
      "CRM orientado a operaciones de call center. Organiza clientes, agentes y campañas en un solo lugar, con sistema integrado de llamadas, seguimiento de gestiones y paneles para optimizar el rendimiento del equipo comercial.",
    features: [
      "Gestión centralizada de clientes, leads y oportunidades comerciales.",
      "Sistema de llamadas integrado para agentes del call center.",
      "Panel de control con métricas y seguimiento de gestiones.",
      "Autenticación por correo electrónico institucional.",
      "Flujos de trabajo para organizar y escalar operaciones de ventas.",
      "Arquitectura dockerizada lista para despliegue en producción.",
    ],
    tech: ["TypeScript", "React", "Django", "PostgreSQL", "Docker"],
    cover: "/projects/lumet/login.png",
    coverAlt: "Pantalla de inicio de sesión de Lumet.beta.",
    shots: [
      { src: "/projects/lumet/login.png", alt: "Pantalla de bienvenida e inicio de sesión de Lumet.beta.", caption: "Inicio de sesión" },
    ],
    rightsReserved: true,
  },
];

const projectsEN: ProjectItem[] = [
  {
    id: "nova-academic",
    name: "NOVA ACADEMIC",
    category: "Education platform",
    year: "2025",
    summary:
      "Academic management with report cards, early-warning alerts and automatic WhatsApp updates to families.",
    description:
      "End-to-end web platform for the academic management of schools. It centralizes students, teachers, courses, grades, attendance and reports, with early risk-warning alerts and automatic communication to parents over WhatsApp.",
    features: [
      "Centralized academic management: students, teachers, courses and grades.",
      "Academic reports and report cards by course or per student.",
      "Early-warning alerts with risk levels, metrics and intervention tracking.",
      "Automatic WhatsApp notifications: grades, absences, meeting requests and commendations.",
      "Reusable library of institutional achievements by area, subject and grade.",
      "Analytics dashboards for data-driven decisions across the term.",
      "Role-based access (admin, teacher) with institutional sign-in.",
    ],
    tech: ["React", "Django", "PostgreSQL", "REST API", "WhatsApp Business API"],
    cover: "/projects/nova-academic/login.png",
    coverAlt: "NOVA ACADEMIC sign-in screen.",
    shots: [
      { src: "/projects/nova-academic/logo.png", alt: "NOVA ACADEMIC logo.", caption: "Visual identity" },
      { src: "/projects/nova-academic/login.png", alt: "NOVA ACADEMIC sign-in screen.", caption: "Sign in" },
      { src: "/projects/nova-academic/informes.png", alt: "Academic reports and report-card module.", caption: "Academic reports" },
      { src: "/projects/nova-academic/alertas-tempranas.png", alt: "Early-warning panel for at-risk students.", caption: "Early-warning alerts" },
      { src: "/projects/nova-academic/alertas-whatsapp.png", alt: "Infographic of automatic alerts sent to families over WhatsApp.", caption: "WhatsApp alerts" },
      { src: "/projects/nova-academic/logros.png", alt: "Library of institutional academic achievements.", caption: "Achievement library" },
    ],
    rightsReserved: true,
  },
  {
    id: "lumet",
    name: "Lumet.beta",
    category: "Call-center CRM",
    year: "2024",
    summary:
      "Call-center CRM with an integrated calling system and real-time sales tracking.",
    description:
      "CRM built for call-center operations. It organizes customers, agents and campaigns in one place, with an integrated calling system, activity tracking and dashboards to optimize the sales team's performance.",
    features: [
      "Centralized management of customers, leads and sales opportunities.",
      "Integrated calling system for call-center agents.",
      "Control panel with metrics and activity tracking.",
      "Institutional email authentication.",
      "Workflows to organize and scale sales operations.",
      "Dockerized architecture ready for production deployment.",
    ],
    tech: ["TypeScript", "React", "Django", "PostgreSQL", "Docker"],
    cover: "/projects/lumet/login.png",
    coverAlt: "Lumet.beta sign-in screen.",
    shots: [
      { src: "/projects/lumet/login.png", alt: "Lumet.beta welcome and sign-in screen.", caption: "Sign in" },
    ],
    rightsReserved: true,
  },
];

export const dictionary: Record<Locale, Dictionary> = {
  es: {
    nav: [
      { label: "Trabajo", href: "#trabajo" },
      { label: "Enfoque", href: "#enfoque" },
      { label: "Contacto", href: "#contacto" },
    ],
    hero: {
      topLine: "Scale Labs · Portafolio de proyectos",
      mega: "Casos",
      megaAccent: "reales",
      tagPhrase: "Producto, software y automatización llevados a producción.",
      capabilities: ["Plataformas", "CRM", "Integraciones", "IA"],
      accentTag: "Del diseño a producción, sin intermediarios",
      scroll: "Desliza",
    },
    work: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos que están en producción.",
      descriptionPre: "Una selección del software que hemos ",
      descriptionHighlight: "diseñado, construido y escalado",
      descriptionPost: " para clientes reales.",
      tagline: "Cada proyecto, de principio a fin.",
      viewProject: "Ver detalle de",
      close: "Cerrar detalle",
      prevLabel: "Proyecto anterior",
      nextLabel: "Proyecto siguiente",
      featuresLabel: "Qué resuelve",
      techLabel: "Stack",
      rightsReserved: "Proyecto con derechos reservados — demo y código no públicos.",
      projects: projectsES,
    },
    approach: {
      eyebrow: "Enfoque",
      title: "Cómo trabajamos cada proyecto.",
      stackLabel: "Tecnologías que se repiten en el trabajo",
      stack: [
        "React", "TypeScript", "Next.js", "Django", "PostgreSQL",
        "REST API", "Docker", "WhatsApp Business API",
      ],
      steps: [
        { title: "Producto", description: "UX/UI y arquitectura pensadas para que la herramienta tenga sentido para quien la usa." },
        { title: "Construcción", description: "Desarrollo a medida, integraciones y automatización — sin plantillas ni atajos." },
        { title: "Producción", description: "Despliegue dockerizado, datos y soporte para que el producto siga creciendo." },
      ],
    },
    cta: {
      title: "¿Tienes un proyecto parecido en mente?",
      description:
        "Cuéntanos qué necesitas construir. La primera llamada es para entender el problema, no para vender.",
    },
    footer: {
      tagline: "Portafolio de proyectos de Scale Labs.",
      backToSite: "Ir al sitio principal",
      rights: "Todos los derechos reservados.",
      builtBy: "Diseñado y construido por Scale Labs.",
    },
    contact: {
      whatsapp: "Escríbenos por WhatsApp",
      call: "Llamar",
    },
    a11y: {
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      goNext: "Ir a la siguiente sección",
    },
  },

  en: {
    nav: [
      { label: "Work", href: "#trabajo" },
      { label: "Approach", href: "#enfoque" },
      { label: "Contact", href: "#contacto" },
    ],
    hero: {
      topLine: "Scale Labs · Project portfolio",
      mega: "Cases",
      megaAccent: "real",
      tagPhrase: "Product, software and automation taken to production.",
      capabilities: ["Platforms", "CRM", "Integrations", "AI"],
      accentTag: "From design to production, no middlemen",
      scroll: "Scroll",
    },
    work: {
      eyebrow: "Selected work",
      title: "Projects that are live in production.",
      descriptionPre: "A selection of the software we have ",
      descriptionHighlight: "designed, built and scaled",
      descriptionPost: " for real clients.",
      tagline: "Every project, end to end.",
      viewProject: "View details of",
      close: "Close details",
      prevLabel: "Previous project",
      nextLabel: "Next project",
      featuresLabel: "What it solves",
      techLabel: "Stack",
      rightsReserved: "Rights-reserved project — demo and code are not public.",
      projects: projectsEN,
    },
    approach: {
      eyebrow: "Approach",
      title: "How we run every project.",
      stackLabel: "Technologies that recur across the work",
      stack: [
        "React", "TypeScript", "Next.js", "Django", "PostgreSQL",
        "REST API", "Docker", "WhatsApp Business API",
      ],
      steps: [
        { title: "Product", description: "UX/UI and architecture designed so the tool makes sense for whoever uses it." },
        { title: "Build", description: "Custom development, integrations and automation — no templates, no shortcuts." },
        { title: "Production", description: "Dockerized deployment, data and support so the product keeps growing." },
      ],
    },
    cta: {
      title: "Have a similar project in mind?",
      description:
        "Tell us what you need to build. The first call is to understand the problem, not to sell.",
    },
    footer: {
      tagline: "Scale Labs project portfolio.",
      backToSite: "Go to the main site",
      rights: "All rights reserved.",
      builtBy: "Designed and built by Scale Labs.",
    },
    contact: {
      whatsapp: "Message us on WhatsApp",
      call: "Call",
    },
    a11y: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      goNext: "Go to next section",
    },
  },
};
