import {
  Accessibility,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layout,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  Server,
  ShieldCheck,
  TestTube2,
  Waypoints
} from "lucide-react";

import type { SkillCategory, Technology } from "@/types/site";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Construcción de interfaces accesibles, responsive y orientadas a experiencia de usuario.",
    items: [
      "HTML5 semántico",
      "CSS3 y sistemas visuales",
      "Responsive Design",
      "JavaScript moderno",
      "DOM y eventos",
      "AJAX",
      "Accesibilidad",
      "Usabilidad",
      "Diseño Web"
    ]
  },
  {
    title: "Backend",
    description:
      "Fundamentos para aplicaciones web con separación de responsabilidades y seguridad.",
    items: [
      "Arquitectura Cliente/Servidor",
      "Programación Orientada a Objetos",
      "Arquitectura MVC",
      "Servicios REST",
      "Gestión de sesiones",
      "Autenticación",
      "Autorización",
      "Seguridad Web",
      "Gestión de errores",
      "Documentación técnica"
    ]
  },
  {
    title: "Bases de Datos",
    description: "Modelado, consulta y consistencia de datos para productos web mantenibles.",
    items: [
      "SQL",
      "Modelado relacional",
      "Consultas avanzadas",
      "Joins y vistas",
      "Normalización",
      "Integridad de datos",
      "Transacciones",
      "Optimización de consultas",
      "XML"
    ]
  },
  {
    title: "Arquitectura Software",
    description: "Criterio para documentar, probar y mantener software con calidad profesional.",
    items: [
      "Análisis y diseño",
      "Ciclo de vida",
      "UML",
      "Testing funcional",
      "Integración y validación",
      "Documentación",
      "Calidad Software"
    ]
  },
  {
    title: "Control de Versiones",
    description: "Flujos de trabajo con Git para colaborar, versionar y desplegar con confianza.",
    items: ["Git", "Repositorios", "Branching", "Merging", "Deploy"]
  },
  {
    title: "Internet y Sistemas",
    description: "Comprensión de la infraestructura base sobre la que viven las aplicaciones web.",
    items: ["Servidores Web", "Servidores de aplicaciones", "Cloud Computing", "HTTP", "TCP/IP"]
  }
];

export const technologies: Technology[] = [
  {
    name: "HTML5",
    description: "Estructura semántica, accesible y preparada para SEO.",
    level: 88,
    icon: Layout
  },
  {
    name: "CSS3",
    description: "Responsive, layouts modernos, estados y sistemas visuales.",
    level: 84,
    icon: PanelsTopLeft
  },
  {
    name: "JavaScript",
    description: "Interactividad, DOM, asincronía y lógica de aplicación.",
    level: 80,
    icon: Braces
  },
  {
    name: "React",
    description: "Componentes, estado, composición y experiencias dinámicas.",
    level: 78,
    icon: Code2
  },
  {
    name: "Next.js",
    description: "App Router, SEO, rendimiento y despliegue moderno.",
    level: 76,
    icon: Globe2
  },
  {
    name: "TypeScript",
    description: "Tipado, contratos de datos y mantenimiento seguro.",
    level: 74,
    icon: ShieldCheck
  },
  {
    name: "REST",
    description: "Consumo y diseño de servicios para arquitecturas web.",
    level: 72,
    icon: Network
  },
  {
    name: "SQL",
    description: "Modelado relacional, consultas e integridad de datos.",
    level: 70,
    icon: Database
  },
  {
    name: "Git",
    description: "Versionado, ramas, merges y colaboración profesional.",
    level: 82,
    icon: GitBranch
  },
  {
    name: "Accesibilidad",
    description: "Semántica, teclado, contraste y experiencias inclusivas.",
    level: 76,
    icon: Accessibility
  },
  {
    name: "Testing",
    description: "Validación funcional, calidad y reducción de regresiones.",
    level: 66,
    icon: TestTube2
  },
  {
    name: "Cloud",
    description: "Fundamentos de servidores web, deploy y entornos cloud.",
    level: 68,
    icon: Cloud
  },
  {
    name: "Seguridad Web",
    description: "Autenticación, autorización, sesiones y buenas prácticas.",
    level: 70,
    icon: LockKeyhole
  },
  {
    name: "MVC",
    description: "Separación de responsabilidades y organización de aplicaciones.",
    level: 72,
    icon: Waypoints
  },
  {
    name: "Servidores Web",
    description: "Comprensión de infraestructura, HTTP y despliegue.",
    level: 68,
    icon: Server
  }
];
