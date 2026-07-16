import { Linkedin, Mail, Phone } from "lucide-react";

import type { Competency, NavItem, Profile, SocialLink } from "@/types/site";

export const profile: Profile = {
  name: "Cruz Reynaldo",
  fullName: "CRUZ REYNALDO FIGUERA ARIAS",
  brand: "@reyfiguera",
  role: "Desarrollador de Aplicaciones Web",
  secondaryRole: "Frontend & Full Stack Developer",
  headline: [
    "Construyo aplicaciones web modernas,",
    "rápidas,",
    "escalables",
    "y centradas en la experiencia del usuario."
  ],
  about: [
    "Durante más de veinte años he trabajado creando experiencias visuales y proyectos digitales para empresas e instituciones de Latinoamérica. Esa trayectoria me ha permitido integrar creatividad, comunicación y tecnología en una misma forma de entender cada proyecto.",
    "Hoy aplico ese conocimiento para construir productos digitales funcionales, accesibles y bien estructurados, donde cada decisión busca ofrecer una mejor experiencia para las personas que los utilizan."
  ],
  location: "España",
  phone: "611663753",
  email: "figuerareynaldo@gmail.com",
  linkedin: "https://www.linkedin.com/in/reynaldo-figuera/",
  github: "TODO",
  instagram: "https://www.instagram.com/reyfiguera/",
  cvUrl: "/cv-cruz-reynaldo-figuera-arias.pdf",
  siteUrl: "https://cruzreinaldo.com",
  portrait: {
    src: "/images/profile/cruz-reinaldo.png",
    alt: "Retrato profesional de Cruz Reynaldo Figuera Arias"
  },
  description:
    "Portfolio profesional de Cruz Reynaldo Figuera Arias, desarrollador de aplicaciones web especializado en frontend, full stack y experiencias digitales modernas.",
  keywords: [
    "Cruz Reynaldo Figuera Arias",
    "Desarrollador de Aplicaciones Web",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio"
  ]
};

export const navItems: NavItem[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Formación", href: "#education" },
  { label: "Contacto", href: "#contact" }
];

export const contactLinks: SocialLink[] = [
  { label: "Teléfono", href: `tel:${profile.phone}`, icon: Phone },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }
];

export const competencies: Competency[] = [
  {
    title: "Resolución de problemas",
    description:
      "Análisis de requisitos y búsqueda de soluciones simples, mantenibles y orientadas a producto."
  },
  {
    title: "Aprendizaje continuo",
    description:
      "Actualización constante mediante proyectos reales, documentación técnica y buenas prácticas."
  },
  {
    title: "Trabajo en equipo",
    description:
      "Colaboración clara, comunicación efectiva y criterio para integrarse en flujos profesionales."
  },
  {
    title: "Pensamiento analítico",
    description:
      "Capacidad para descomponer problemas, evaluar riesgos y tomar decisiones técnicas razonadas."
  },
  {
    title: "Comunicación",
    description: "Explicación clara de decisiones, avances, bloqueos y necesidades del proyecto."
  },
  {
    title: "Adaptabilidad",
    description: "Flexibilidad para trabajar con nuevas herramientas, contextos y prioridades."
  },
  {
    title: "Orientación al detalle",
    description:
      "Cuidado por accesibilidad, rendimiento, responsive, estados de interfaz y acabado visual."
  },
  {
    title: "Buenas prácticas",
    description: "Código tipado, componentizado, versionado y preparado para mantenimiento."
  }
];
