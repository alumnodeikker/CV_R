import { Code2, Github, Layers3, Linkedin, Mail, Sparkles, Workflow } from "lucide-react";

import type { NavItem, Project, Skill, SocialLink, TimelineItem } from "@/types/site";

export const siteConfig = {
  name: "Cruz Reinaldo",
  brand: "CRUZ REINALDO",
  url: "https://cruzreinaldo.com",
  description:
    "Portfolio profesional de Cruz Reinaldo, construido como una experiencia web premium, minimalista y preparada para escalar.",
  locale: "es_ES",
  creator: "Cruz Reinaldo",
  keywords: ["Cruz Reinaldo", "portfolio", "frontend", "software engineer", "UI UX", "Next.js"]
} as const;

export const navItems: NavItem[] = [
  { label: "Sobre mi", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Tecnologias", href: "#skills" },
  { label: "Formacion", href: "#timeline" },
  { label: "Contacto", href: "#contact" }
];

export const projectPlaceholders: Project[] = [
  {
    title: "Proyecto destacado",
    description:
      "Espacio preparado para presentar casos de estudio con contexto, impacto y decision tecnica.",
    category: "Case Study",
    year: "Pronto"
  },
  {
    title: "Producto digital",
    description:
      "Estructura lista para ampliar con metricas, imagenes optimizadas y enlaces externos.",
    category: "Product",
    year: "Pronto"
  }
];

export const skills: Skill[] = [
  {
    title: "Frontend Architecture",
    description: "Componentes reutilizables, tipado estricto y superficies preparadas para crecer.",
    icon: Layers3
  },
  {
    title: "Product UI",
    description:
      "Interfaces sobrias, rapidas y pensadas para transmitir criterio desde el primer segundo.",
    icon: Sparkles
  },
  {
    title: "Engineering Systems",
    description: "Calidad automatizada, convenciones claras y una base facil de mantener.",
    icon: Workflow
  },
  {
    title: "Modern Stack",
    description: "Next.js, React, TypeScript, Tailwind, Motion y librerias de bajo coste.",
    icon: Code2
  }
];

export const timelinePlaceholders: TimelineItem[] = [
  {
    period: "Actualidad",
    title: "Base profesional",
    description:
      "Sistema preparado para incorporar formacion, experiencia y milestones con una API de datos clara."
  }
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@cruzreinaldo.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin }
];
