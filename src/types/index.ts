export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectCard {
  id: number;
  title: string;
  description: string;
  tag: string;
  gradient: string;
  technologies: string[];
  githubUrl?: string;
  image?: string;
  video?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillItem {
  name: string;
  percent: number;
}

export type ScrollDirection = "up" | "down" | null;
