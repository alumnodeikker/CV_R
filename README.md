# Cruz Reynaldo Portfolio

Portfolio profesional one page para **Cruz Reynaldo Figuera Arias**, construido como una marca personal técnica para búsqueda de empleo como Desarrollador de Aplicaciones Web.

No es un CV tradicional. Es una base de producto: rápida, minimalista, accesible y preparada para crecer con nuevos proyectos, experiencia, formación y secciones sin rehacer la arquitectura.

## Stack

- Next.js 15 con App Router
- React 19
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui style components
- Lucide React
- next/image
- next/font
- ESLint
- Prettier
- Husky
- lint-staged

## Instalación

```bash
npm install
npm run dev
```

Aplicación local:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Arquitectura

```txt
app/                  App Router, metadata, robots, sitemap, manifest
components/           Secciones y componentes reutilizables
components/ui/        Primitivas UI estilo shadcn
data/                 Fuente única de contenido del portfolio
hooks/                Hooks reutilizables
lib/                  Utilidades y animaciones
types/                Contratos TypeScript compartidos
styles/               Tokens globales complementarios
public/               Assets públicos
```

## Modelo de datos

Todo el contenido editable vive en archivos de datos:

- `data/profile.ts`
- `data/projects.ts`
- `data/skills.ts`
- `data/experience.ts`
- `data/education.ts`

Los componentes no contienen información personal inventada ni contenido acoplado. Para añadir un proyecto, se agrega un objeto nuevo en `data/projects.ts`. Para completar contacto, CV, GitHub o LinkedIn, se actualiza `data/profile.ts`.

## Secciones

- Hero
- Sobre mí
- Tecnologías
- Proyectos como case studies
- Experiencia
- Formación
- Competencias
- Contacto
- Footer

## SEO y Accesibilidad

Incluye metadata, OpenGraph, Twitter Card, canonical, robots, sitemap, manifest y Schema.org Person. La interfaz está planteada para dark mode, contraste AA, navegación por teclado, foco visible y estructura HTML semántica.

## Deploy en Vercel

El proyecto está preparado para despliegue directo en Vercel.

Build command:

```bash
npm run build
```

Install command:

```bash
npm install
```

Output:

```txt
Next.js default
```
