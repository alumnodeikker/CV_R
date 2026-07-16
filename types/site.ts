import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type Profile = {
  name: string;
  fullName: string;
  brand: string;
  role: string;
  secondaryRole: string;
  headline: string[];
  about: string[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  cvUrl: string;
  siteUrl: string;
  portrait: {
    src: string;
    alt: string;
  };
  description: string;
  keywords: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  url: string;
  github: string;
  summary: string;
  problem: string;
  solution: string;
  process: string[];
  technologies: string[];
  result: string;
  highlights: string[];
  preview: {
    eyebrow: string;
    title: string;
    items: string[];
    image: string;
    imageAlt: string;
  };
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type Technology = {
  name: string;
  description: string;
  level: number;
  icon: IconComponent;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  meta: string;
  description: string;
};

export type EducationProgram = {
  title: string;
  subtitle: string;
  description: string[];
  highlights: string[];
  technologies: string[];
};

export type ProfessionalExperience = {
  heading: string;
  summary: string[];
  roles: Array<{
    title: string;
    period: string;
    location?: string;
    description: string;
    responsibilities?: string[];
    highlights?: string[];
    focus?: string[];
  }>;
};

export type Competency = {
  title: string;
  description: string;
};
