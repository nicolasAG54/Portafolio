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
  caseStudyUrl?: string;
}

interface ProjectPreview {
  url: string;
  image: string;
  imageAlt: string;
}

interface ProjectVersion extends ProjectPreview {
  label: string;
  summary: string;
}

interface ProjectStage {
  name: string;
  detail: string;
}

export type ProjectItem = {
  name: string;
  description: string;
  technologies: string[];
  impact?: string;
  type: string;
} & (
  | ({ kind: 'website' } & ProjectPreview)
  | { kind: 'versions'; versions: [ProjectVersion, ProjectVersion] }
  | { kind: 'workflow'; url: string; stages: ProjectStage[] }
);

export interface SocialLink {
  label: string;
  value: string;
  href: string;
}

export const profile = {
  name: 'Nicolás Alarcón Guzmán',
  shortName: 'Nicolás',
  role: 'Desarrollador Full-Stack',
  location: 'Colombia',
  email: 'ni-co123@hotmail.com',
  cvUrl: '/assets/cv/nicolas-alarcon-cv.pdf',
  headline: 'Next.js · React · Angular · Node.js · .NET',
  pageTitle: {
    en: 'Full-Stack Developer | Nicolás Alarcón Guzmán',
    es: 'Desarrollador Full-Stack | Nicolás Alarcón Guzmán',
  },
  pageDescription:
    'Full-stack developer building business web applications, REST APIs, and automation with Angular, React, Next.js, Node.js, .NET, and Python.',
  summary:
    'Desarrollo aplicaciones web y APIs, y automatizo pruebas y procesos con Playwright y Python.',
  recruiterPitch:
    'Soy ingeniero de sistemas con más de cuatro años desarrollando aplicaciones web empresariales. He usado React y Next.js en proyectos internos y también trabajo con Angular, Node.js y .NET. Actualmente estudio Magento Open Source y Adobe Commerce, con foco en tiendas headless e integraciones GraphQL.',
};

export const navItems: NavItem[] = [
  { label: 'Experiencia', fragment: 'experiencia' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Contacto', fragment: 'contacto' },
  { label: 'Sobre mí', fragment: 'sobre-mi' },
];

export const skillGroups: SkillGroup[] = [
  {
    area: 'Frontend',
    skills: [
      'Next.js',
      'React',
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
    area: 'Backend y datos',
    skills: [
      'Node.js',
      'C#',
      'ASP.NET Core',
      'Python',
      'APIs REST',
      'MySQL',
      'Oracle SQL',
      'Firebase',
    ],
  },
  {
    area: 'Nube, seguridad y pruebas',
    skills: [
      'AWS',
      'Azure DevOps',
      'Playwright',
      'JWT',
      'SonarCloud',
      'Selenium',
      'Karate',
      'Pruebas E2E',
      'Pruebas de componentes',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Prestación de servicios en automatización',
    company: 'Corpoyarumos',
    period: 'Abr 2026 — Actualidad',
    summary:
      'Automaticé un flujo documental con Python y la API de OpenAI a partir de datos de Excel.',
    achievements: [
      'Reduje el tiempo de elaboración de cada diagnóstico de unos 30 a 2 minutos. El equipo entregó 548 diagnósticos en el plazo acordado.',
      'Generé borradores para los 548 planes asociados con Python y la API de OpenAI, y automaticé el diseño curricular de cada plan aprobado.',
    ],
    stack: ['Python', 'OpenAI API', 'Excel'],
    caseStudyUrl: 'https://github.com/nicolasAG54/corpoyarumos-automation-demo',
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
      'Revisión de código y validación de cambios con pruebas unitarias y de regresión, Azure Pipelines y SonarCloud.',
    ],
    stack: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'Oracle', 'Azure DevOps', 'SonarCloud'],
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
      'Automatización de pruebas E2E con Playwright para validar los flujos antes de cada entrega.',
      'Optimización de formularios, tablas y flujos administrativos usados por equipos internos.',
    ],
    stack: ['Angular', 'Vue', 'React', 'Node.js', '.NET', 'MySQL', 'Playwright'],
  },
];

export const projects: ProjectItem[] = [
  {
    kind: 'workflow',
    name: 'Corpoyarumos',
    type: 'Automatización documental',
    description:
      'Un mismo encargo, tres documentos. Analicé datos de Excel y conecté tres procesos: el diagnóstico alimentaba el plan y la aprobación del plan habilitaba el diseño curricular.',
    impact:
      'El equipo entregó los 548 diagnósticos a tiempo y ayudó a mantener vigente un contrato público multimillonario en pesos colombianos.',
    technologies: ['Python', 'Excel', 'OpenAI API'],
    url: 'https://github.com/nicolasAG54/corpoyarumos-automation-demo',
    stages: [
      {
        name: 'Generador de diagnósticos',
        detail:
          'Python procesó los registros de Excel y la API de OpenAI redactó los textos. El tiempo por diagnóstico bajó de unos 30 a 2 minutos.',
      },
      {
        name: 'Generador de planes de formación',
        detail:
          'Python usó los hallazgos de cada diagnóstico para estructurar su plan. La API de OpenAI redactó los textos de los 548 planes asociados.',
      },
      {
        name: 'Generador de diseños curriculares',
        detail:
          'A partir de cada plan aprobado, automaticé el documento de diseño curricular para trasladar los objetivos y contenidos al programa de formación.',
      },
    ],
  },
  {
    kind: 'versions',
    name: 'Girardot Express',
    description:
      'Dos versiones del sitio de un centro comercial. La primera presentó el lanzamiento y la segunda amplió la información para visitantes y marcas.',
    technologies: ['JavaScript', 'Angular', 'Leaflet', 'Netlify'],
    type: 'Experiencia comercial',
    versions: [
      {
        label: 'V1 · Sitio de lanzamiento',
        summary: 'Landing bilingüe con cuenta regresiva, galería y captación de marcas.',
        url: 'https://girardotexpress.netlify.app/',
        image: '/assets/images/projects/girardot-express.webp',
        imageAlt: 'Página principal de Girardot Express con visual arquitectónico del centro comercial',
      },
      {
        label: 'V2 · Sitio actual en Angular',
        summary: 'Dominio oficial con páginas de proyecto y preguntas frecuentes, y formularios de contacto.',
        url: 'https://girardotexpress.com.co/',
        image: '/assets/images/projects/girardot-express-v2.webp',
        imageAlt: 'Página de inicio de Girardot Express V2 con el mensaje Todo lo que necesitas, más cerca.',
      },
    ],
  },
  {
    kind: 'website',
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
    kind: 'website',
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
    kind: 'website',
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
    kind: 'website',
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
    kind: 'website',
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
    kind: 'website',
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
