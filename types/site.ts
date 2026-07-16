import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  year: string;
  href?: string;
};

export type Skill = {
  title: string;
  description: string;
  icon: IconComponent;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};
