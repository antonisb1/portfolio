export interface SkillCategory {
  label: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  responsibilities: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
}

export interface Certification {
  name: string;
  shortName: string;
  issuer: string;
  color: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'live' | 'wip' | 'concept';
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
