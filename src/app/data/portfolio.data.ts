export interface NavItem {
  label: string;
  fragment: string;
}

export interface SkillGroup {
  area: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  impact: string;
  type: string;
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
}

export const profile = {
  name: 'Nicolás Alarcón Guzmán',
  shortName: 'Nicolás',
  role: 'Frontend Developer · Angular',
  location: 'Colombia',
  email: 'ni-co123@hotmail.com',
  cvUrl: '/assets/cv/nicolas-alarcon-cv.pdf',
  headline: 'Frontend Developer especializado en Angular',
  summary:
    'Construyo y evoluciono aplicaciones empresariales con Angular, TypeScript y una atención constante a la experiencia de usuario, la mantenibilidad y la calidad.',
  recruiterPitch:
    'Ingeniero de Sistemas con más de cuatro años de experiencia creando y manteniendo aplicaciones web para entornos empresariales. Me enfoco en componentes reutilizables, flujos claros, integración con APIs y pruebas E2E que ayudan a reducir regresiones.',
};

export const navItems: NavItem[] = [
  { label: 'Sobre mí', fragment: 'sobre-mi' },
  { label: 'Experiencia', fragment: 'experiencia' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Contacto', fragment: 'contacto' },
];

export const skillGroups: SkillGroup[] = [
  {
    area: 'Frontend',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'Material'],
  },
  {
    area: 'Backend & Data',
    skills: ['Node.js', 'ASP.NET Core', 'Firebase', 'REST APIs', 'MySQL', 'Oracle SQL'],
  },
  {
    area: 'Quality',
    skills: ['Playwright', 'Karate', 'Selenium', 'E2E Testing', 'Component Testing'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Qualita Corp',
    period: 'Mar 2026 — Actualidad',
    summary:
      'Desarrollo de aplicaciones bancarias con ASP.NET MVC 5, .NET Framework 4.8, OWIN, SignalR, EF6 y Oracle.',
    achievements: [
      'Desarrollo y mantenimiento de una aplicación web empresarial con ASP.NET MVC, C# y Razor.',
      'Integración de servicios REST, consultas Oracle SQL y optimización de rendimiento.',
      'Control de versiones en Azure Repos y análisis de calidad con SonarCloud.',
    ],
    stack: ['ASP.NET MVC', '.NET Framework', 'Razor', 'jQuery', 'Bootstrap', 'Oracle'],
  },
  {
    role: 'Frontend Developer',
    company: 'Teleperformance',
    period: 'Jul 2021 — Ago 2025',
    summary:
      'Mantenimiento y evolución de aplicaciones web internas, con foco en estabilidad, escalabilidad y mejoras de experiencia de usuario.',
    achievements: [
      'Desarrollo y mantenimiento de más de 30 módulos con Angular, Vue y React.',
      'Integración con servicios Node.js y .NET para operaciones de negocio.',
      'Optimización de formularios, tablas y flujos administrativos usados por equipos internos.',
    ],
    stack: ['Angular', 'Vue', 'React', 'Node.js', '.NET', 'MySQL'],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'Dashboard administrativo',
    description:
      'Panel para seguimiento de métricas, usuarios y estados operativos con filtros, tablas responsive y componentes reutilizables.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Signals', 'REST APIs'],
    impact:
      'Arquitectura pensada para que los equipos encuentren indicadores y acciones frecuentes con rapidez.',
    type: 'Caso de estudio · Frontend',
  },
  {
    name: 'Gestión empresarial',
    description:
      'Módulo para administrar procesos internos, permisos, formularios y reportes mediante rutas protegidas y flujos claros.',
    technologies: ['Angular', 'Reactive Forms', 'Guards', 'Interceptors', 'Playwright'],
    impact: 'Estructura preparada para crecer por dominios y mantener reglas de negocio comprensibles.',
    type: 'Caso de estudio · Producto',
  },
  {
    name: 'Angular + ASP.NET Core',
    description:
      'Aplicación fullstack con frontend Angular, API REST, autenticación y operaciones CRUD para información de negocio.',
    technologies: ['Angular', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'Playwright'],
    impact:
      'Una muestra de criterio frontend con comprensión del contrato backend y pruebas de flujo completo.',
    type: 'Caso de estudio · Fullstack',
  },
];

export const valuePoints = [
  'Código limpio, mantenible y fácil de revisar.',
  'Experiencia real con aplicaciones empresariales y flujos internos.',
  'Capacidad para mejorar interfaces existentes sin romper procesos activos.',
  'Mentalidad de producto: entender al usuario, no solo la pantalla.',
  'Criterio para adoptar buenas prácticas de Angular moderno.',
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nicolasalarconguzman',
    href: 'https://www.linkedin.com/in/nicolasalarconguzman/',
  },
  { label: 'GitHub', value: 'github.com/nicolasAG54', href: 'https://github.com/nicolasAG54' },
  { label: 'WhatsApp', value: '+57 310 208 4697', href: 'https://wa.me/573102084697' },
];
