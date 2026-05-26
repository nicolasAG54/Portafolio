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
  codeUrl: string;
  demoUrl?: string;
  impact: string;
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
}

export const profile = {
  name: 'Nicolás Alarcón Guzmán',
  role: 'Ingeniero de Sistemas | Frontend Developer',
  location: 'Colombia',
  email: 'ni-co123@hotmail.com',
  cvUrl: '/assets/cv/nicolas-alarcon-cv.pdf',
  headline: 'Frontend Developer especializado en Angular',
  summary:
    'Mi experiencia se centra en aplicaciones empresariales y bacanrias, con atención a la mantenibilidad, integración con APIs y pruebas automatizadas.',
  recruiterPitch:
    'Ingeniero de Sistemas con más de 4 años de experiencia creando y manteniendo aplicaciones web para entornos empresariales. Me enfoco en componentes reutilizables, flujos claros, integración con APIs y pruebas E2E que reducen regresiones.',
};

export const navItems: NavItem[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Sobre mí', fragment: 'sobre-mi' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Experiencia', fragment: 'experiencia' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Contacto', fragment: 'contacto' },
];

export const skillGroups: SkillGroup[] = [
  {
    area: 'Frontend',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwindcss', 'Bootstrap', 'Material'],
  },
  {
    area: 'Backend y Database',
    skills: ['Node.js', 'ASP.NET Core', 'Firebase', 'REST APIs','MySql', 'SQL Developer'],
  },  
  {
    area: 'Testing',
    skills: ['Playwright', 'Karate', 'Selenium', 'E2E Testing', 'Component Testing'],
  },  
];

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Qualita Corp',
    period: 'Mar 2026 - Actualidad',
    summary:
      'Desarrollo en ASP.NET MVC 5, .NET Framework 4.8 con OWIN, SignalR, EF6 y Oracle, para aplicativos de Uso Bancario.',
    achievements: [
      'Desarrollo y mantenimiento de aplicación web empresarial en ASP.NET MVC, C#, Razor.',
      'integración a servicios REST, consultas Oracle SQL y optimización de rendimiento.',
      'control de versiones en Azure Repos y análisis de calidad con SonarCloud.',
    ],
    stack: ['ASP.NET MVC / .NET Framework', 'Razor / .cshtml', 'jQuery', 'Bootstrap', 'Oracle Database'],
  },
  {
    role: 'Frontend Developer',
    company: 'Teleperformance',
    period: 'Jul 2021 - Ago 2025',
    summary:
      'Mantenimiento y evolucion de aplicaciones web internas para uso empresarial, con foco en estabilidad, escalabilidad y mejoras de UX.',
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
    name: 'Dashboard administrativo en Angular',
    description:
      'Panel para seguimiento de métricas, usuarios y estados operativos con filtros, tablas responsive y componentes reutilizables.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Signals', 'REST APIs'],
    codeUrl: 'https://github.com/editar/dashboard-angular',
    demoUrl: '',
    impact:
      'Pensado para equipos que necesitan lectura rapida de indicadores y acciones frecuentes.',
  },
  {
    name: 'Sistema de gestion empresarial',
    description:
      'Módulo empresarial para administrar procesos internos, permisos, formularios y reportes con rutas protegidas.',
    technologies: ['Angular', 'Reactive Forms', 'Guards', 'Interceptors', 'Playwright'],
    codeUrl: 'https://github.com/editar/gestion-empresarial',
    demoUrl: '',
    impact: 'Arquitectura preparada para crecer por dominios y mantener reglas de negocio claras.',
  },
  {
    name: 'Landing page responsive para negocio',
    description:
      'Sitio comercial optimizado para captación de clientes, SEO básico, rendimiento y experiencia mobile-first.',
    technologies: ['Angular', 'HTML5', 'SCSS', 'SEO', 'Responsive Design'],
    codeUrl: 'https://github.com/editar/landing-responsive',
    demoUrl: 'https://editar-demo.vercel.app',
    impact: 'Carga rapida, mensajes claros y estructura lista para integrarse con analytics.',
  },
  {
    name: 'Proyecto fullstack Angular + ASP.NET Core',
    description:
      'Aplicación con frontend Angular, API REST, autenticación y operaciones CRUD para gestionar información de negocio.',
    technologies: ['Angular', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'Playwright'],
    codeUrl: 'https://github.com/editar/angular-dotnet-fullstack',
    demoUrl: '',
    impact:
      'Demuestra criterio frontend con entendimiento del contrato backend y pruebas de flujo completo.',
  },
];

export const valuePoints = [
  'Enfoque en código limpio, mantenible y fácil de revisar.',
  'Experiencia real con aplicaciones empresariales y flujos internos.',
  'Capacidad para mejorar interfaces existentes sin romper procesos activos.',
  'Mentalidad de producto: entiendo al usuario, no solo la pantalla.',
  'Aprendizaje constante y criterio para adoptar buenas prácticas de Angular moderno.',
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nicolasalarconguzman',
    href: 'https://www.linkedin.com/in/nicolasalarconguzman/',
  },
  {
    label: 'GitHub',
    value: 'github.com/nicolasAG54',
    href: 'https://github.com/nicolasAG54',
  },
  {
    label: 'WhatsApp',
    value: '+57 310 208 4697',
    href: 'https://wa.me/573102084697',
  },
];
