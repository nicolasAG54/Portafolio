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
  url: string;
  sourceUrl?: string;
  image: string;
  imageAlt: string;
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
    'Desarrollo aplicaciones empresariales con Angular y TypeScript. Integro APIs, automatizo pruebas con Playwright y simplifico procesos documentales con Python.',
  recruiterPitch:
    'Soy Ingeniero de Sistemas con más de cuatro años desarrollando aplicaciones web empresariales. He integrado servicios en Angular y .NET, automatizado pruebas con Playwright y creado herramientas en Python para generar documentos a partir de datos.',
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
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'Material',
    ],
  },
  {
    area: 'Backend & Data',
    skills: ['Node.js', 'ASP.NET Core', 'Firebase', 'REST APIs', 'MySQL', 'Oracle SQL'],
  },
  {
    area: 'Quality & Automation',
    skills: ['Playwright', 'Karate', 'Selenium', 'E2E Testing', 'Python', 'OpenAI API', 'Excel'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Prestación de servicios en automatización',
    company: 'Corpoyarumos',
    period: 'Abr 2026 — Actualidad',
    summary:
      'Automaticé etapas de un proceso documental que debía entregar a tiempo diagnósticos y planes de fortalecimiento.',
    achievements: [
      'Automaticé con Python y la API de OpenAI la generación de diagnósticos. El tiempo pasó de unos 30 a 2 minutos por diagnóstico y el equipo entregó 548 en el plazo acordado.',
      'Extendí la automatización a los 548 planes derivados de esos diagnósticos y al diseño curricular de cada plan aprobado.',
    ],
    stack: ['Python', 'OpenAI API', 'Excel'],
  },
  {
    role: 'Desarrollador de software',
    company: 'Qualita Corp',
    period: 'Mar 2026 — Oct 2026',
    summary:
      'Desarrollo y evolución de aplicaciones bancarias sobre ASP.NET MVC 5 y .NET Framework 4.8, integradas con servicios REST y Oracle.',
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
    period: 'Jul 2021 — Oct 2025',
    summary:
      'Desarrollo y mantenimiento de aplicaciones internas para operaciones empresariales, priorizando estabilidad, escalabilidad y experiencia de usuario.',
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
    name: 'Girardot Express',
    description:
      'Sitio de lanzamiento para un centro comercial, enfocado en presentar el proyecto, atraer marcas y comunicar su próxima apertura.',
    technologies: ['JavaScript', 'Leaflet', 'Responsive', 'SEO'],
    impact:
      'Integra cuenta regresiva, galería, información comercial, cambio de idioma y ubicación en una experiencia inmersiva.',
    type: 'Experiencia comercial',
    url: 'https://girardotexpress.netlify.app/',
    sourceUrl: 'https://github.com/nicolasAG54/girardot-express-angular',
    image: '/assets/images/projects/girardot-express.webp',
    imageAlt: 'Página principal de Girardot Express con visual arquitectónico del centro comercial',
  },
  {
    name: 'Tu Clínica Veterinaria',
    description:
      'Plantilla web profesional para clínicas veterinarias, con una ruta clara desde la presentación de servicios hasta el contacto.',
    technologies: ['Astro', 'Responsive', 'Accesibilidad', 'SEO'],
    impact:
      'Organiza servicios, equipo, instalaciones, guías y atención prioritaria para facilitar la decisión de cada familia.',
    type: 'Plantilla sectorial',
    url: 'https://veterinariaplantilla.netlify.app/',
    image: '/assets/images/projects/clinica-veterinaria.webp',
    imageAlt:
      'Página principal de una plantilla para clínica veterinaria con equipo médico y un perro',
  },
  {
    name: 'Corporación los Yarumos',
    description:
      'Plataforma institucional para comunicar trayectoria, proyectos de desarrollo rural, territorios y conocimiento aplicado.',
    technologies: ['Angular', 'TypeScript', 'Cartografía', 'Accesibilidad'],
    impact:
      'Conecta evidencia institucional, expedientes de proyecto, publicaciones y navegación territorial en una sola experiencia.',
    type: 'Plataforma institucional',
    url: 'https://corpoyarumos.netlify.app/',
    image: '/assets/images/projects/corpoyarumos.webp',
    imageAlt: 'Página principal de Corporación los Yarumos sobre desarrollo rural y territorio',
  },
  {
    name: 'Plantilla para centros comerciales',
    description:
      'Plantilla web para centros comerciales, diseñada para presentar locales, eventos, gastronomía, entretenimiento y servicios.',
    technologies: ['Angular', 'TypeScript', 'Directorio', 'Responsive'],
    impact:
      'Integra directorio con filtros, agenda, experiencias, información de visita y rutas dentro de una estructura personalizable.',
    type: 'Plantilla comercial',
    url: 'https://plantillacentrocomercial.netlify.app/',
    image: '/assets/images/projects/centro-comercial.webp',
    imageAlt: 'Vista demostrativa de una plantilla web para centros comerciales',
  },
  {
    name: 'Plantilla para agencias de viajes',
    description:
      'Plantilla web para agencias de viajes que permite presentar destinos, fechas de salida y paquetes nacionales e internacionales.',
    technologies: ['Astro', 'Responsive', 'SEO', 'WhatsApp'],
    impact:
      'Organiza la oferta turística con una dirección visual reconocible y acceso directo a cotización por WhatsApp.',
    type: 'Plantilla turística',
    url: 'https://turismogirardot.netlify.app/',
    image: '/assets/images/projects/agencia-viajes.webp',
    imageAlt:
      'Vista demostrativa de una plantilla para agencias de viajes sobre el Caribe colombiano',
  },
  {
    name: 'CozyPaws',
    description:
      'Concepto de tienda digital para mascotas con una interfaz cálida, visual y centrada en descubrir productos.',
    technologies: ['Angular', 'TypeScript', 'E-commerce', 'UI Motion'],
    impact:
      'Explora una experiencia de catálogo con búsqueda, favoritos, carrito y una composición editorial orientada al producto.',
    type: 'Concepto e-commerce',
    url: 'https://tiendaveterinariabogota.netlify.app/',
    image: '/assets/images/projects/cozypaws.webp',
    imageAlt: 'Página principal de CozyPaws con perros, un gato y productos para mascotas',
  },
  {
    name: 'Mesa Demo',
    description:
      'Plantilla gastronómica que convierte una carta de restaurante en una experiencia digital visual y personalizable.',
    technologies: ['JavaScript', 'Responsive', 'Carta digital', 'SEO'],
    impact:
      'Organiza categorías, platos, precios y espacios de conversión con una presentación cuidada para abrir el apetito.',
    type: 'Plantilla gastronómica',
    url: 'https://restauranteplantilla.netlify.app/',
    image: '/assets/images/projects/mesa-demo.webp',
    imageAlt: 'Página principal de Mesa Demo con un plato de carne, vegetales y precio destacado',
  },
];

export const valuePoints = [
  'Código claro que otro desarrollador puede continuar.',
  'Experiencia real en productos empresariales y flujos internos.',
  'Mejoras de interfaz sin romper procesos existentes.',
  'Decisiones guiadas por el usuario y el contexto del negocio.',
  'Calidad automatizada con pruebas E2E.',
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
