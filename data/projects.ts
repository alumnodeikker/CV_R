import type { Project } from "@/types/site";

export const projects: Project[] = [
  {
    title: "FLEX",
    subtitle: "Sistema Integral de Gestión para Bares y Restaurantes",
    url: "https://flex-reynaldo.vercel.app/",
    github: "TODO",
    summary: "Sistema Integral de Gestión para Bares y Restaurantes",
    problem:
      "Muchos negocios de hostelería gestionan menús, reservas, salas y clientes con procesos desconectados que ralentizan la operativa diaria.",
    solution:
      "FLEX centraliza la gestión de cartas digitales, reservas, salas y clientes en una experiencia web clara, responsive y orientada a uso diario.",
    process: [
      "Definición de flujos principales para hostelería: carta, reservas, espacios y clientes.",
      "Diseño de una interfaz responsive centrada en rapidez, claridad y baja fricción.",
      "Construcción de pantallas modulares para permitir evolucionar la plataforma por áreas."
    ],
    technologies: [
      "Interfaz web",
      "Diseño responsive",
      "Experiencia de usuario",
      "Gestión de menús",
      "Reservas",
      "Salas"
    ],
    result:
      "Una base funcional para optimizar tareas de gestión y presentar una experiencia digital profesional para restaurantes y bares.",
    highlights: [
      "Interfaz web",
      "Diseño responsive",
      "Experiencia de usuario",
      "Gestión de menús",
      "Reservas",
      "Salas"
    ],
    preview: {
      eyebrow: "Gestión gastronómica",
      title: "FLEX",
      items: ["Menús", "Reservas", "Salas", "Clientes"],
      image: "/images/projects/flex.png",
      imageAlt: "Captura de pantalla de la aplicación FLEX"
    }
  },
  {
    title: "Amazon Warehouse Training",
    subtitle: "Presentación Interactiva para Formación Logística",
    url: "https://alumnodeikker.github.io/proyecto_Amazon/",
    github: "TODO",
    summary: "Presentación Interactiva para Formación Logística",
    problem:
      "Los procesos logísticos pueden ser difíciles de explicar cuando se presentan solo como texto o documentación estática.",
    solution:
      "La aplicación transforma áreas operativas, procesos y flujo de trabajo en una experiencia visual e interactiva.",
    process: [
      "Organización del contenido por áreas y procesos para facilitar la comprensión.",
      "Construcción de una presentación interactiva con foco en claridad visual.",
      "Adaptación responsive para mantener la experiencia en distintos dispositivos."
    ],
    technologies: [
      "Experiencia de usuario",
      "Contenido visual",
      "Diseño responsive",
      "Presentación interactiva"
    ],
    result:
      "Un recurso formativo más claro y accesible para explicar operaciones logísticas mediante una experiencia web.",
    highlights: [
      "Experiencia de usuario",
      "Presentación interactiva",
      "Diseño responsive",
      "Contenido visual"
    ],
    preview: {
      eyebrow: "Formación logística",
      title: "Flujo logístico",
      items: ["Recepción", "Clasificación", "Picking", "Salida"],
      image: "/images/projects/amazon-training.png",
      imageAlt: "Captura de pantalla de Amazon Warehouse Training"
    }
  }
];
