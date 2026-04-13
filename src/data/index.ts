import type {
  SkillCategory,
  Experience,
  Education,
  Certification,
  Project,
  NavItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const PERSON = {
  name: 'Antonis Benardis',
  role: 'Cloud Engineer',
  tagline: 'Building resilient cloud infrastructure — one Terraform plan at a time.',
  location: 'Athens, Greece',
  email: 'antonis.benardis@gmail.com',
  phone: '+30 6984188284',
  summary:
    'Cloud Engineer with hands-on experience in Azure and Google Cloud, focused on cloud infrastructure, containerization, and Infrastructure as Code. Also experienced in front-end development, enabling seamless collaboration across engineering and product teams.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Cloud & DevOps',
    icon: '☁',
    color: 'cyan',
    skills: ['Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD (Azure DevOps)'],
  },
  {
    label: 'Programming',
    icon: '</>', 
    color: 'emerald',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    icon: '⬡',
    color: 'violet',
    skills: ['React', 'Tailwind CSS'],
  },
  {
    label: 'Testing & Tools',
    icon: '⚙',
    color: 'amber',
    skills: ['Jest', 'Vitest', 'Puppeteer', 'Postman', 'GitHub'],
  },
  {
    label: 'AI / ML',
    icon: '◈',
    color: 'rose',
    skills: ['Azure AI', 'Machine Learning Fundamentals'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Deloitte Greece',
    role: 'Cloud Engineer',
    dates: 'Sep 2023 – Aug 2025',
    location: 'Athens, Greece',
    responsibilities: [
      'Migrated Excel datasets to Google BigQuery, improving performance and scalability',
      'Built interactive dashboards with Looker Studio for business intelligence reporting',
      'Configured data retention policies and automated backup processes',
      'Used Azure DevOps Boards for task tracking and CI/CD pipeline alignment',
      'Integrated REST APIs into React applications for dynamic data consumption',
      'Developed responsive React applications with modern frontend practices',
      'Collaborated in cross-functional teams bridging cloud and product engineering',
    ],
    tags: ['Azure', 'Google Cloud', 'BigQuery', 'React', 'CI/CD', 'Looker Studio'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Applied Informatics',
    institution: 'University of Macedonia',
    dates: '2020 – 2024',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Azure Administrator',
    shortName: 'AZ-104',
    issuer: 'Microsoft',
    color: '#0078d4',
    icon: '🔷',
  },
  {
    name: 'Cloud Digital Leader',
    shortName: 'GCP CDL',
    issuer: 'Google Cloud',
    color: '#4285f4',
    icon: '🔵',
  },
  {
    name: 'Associate Cloud Engineer',
    shortName: 'GCP ACE',
    issuer: 'Google Cloud',
    color: '#34a853',
    icon: '🟢',
  },
  {
    name: 'Professional Cloud Architect',
    shortName: 'GCP PCA',
    issuer: 'Google Cloud',
    color: '#ea4335',
    icon: '🔴',
  },
  {
    name: 'Terraform Associate',
    shortName: 'TF-003',
    issuer: 'HashiCorp',
    color: '#7b42bc',
    icon: '🟣',
  },
  {
    name: 'Azure AI Engineer',
    shortName: 'AI-102',
    issuer: 'Microsoft',
    color: '#0078d4',
    icon: '🔷',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Cloud Infrastructure Automation',
    description:
      'Terraform modules for provisioning multi-environment Azure infrastructure including VNets, AKS clusters, and managed databases with state management via Azure Storage.',
    tags: ['Terraform', 'Azure', 'AKS', 'IaC'],
    status: 'live',
  },
  {
    title: 'BigQuery Data Pipeline',
    description:
      'ETL pipeline migrating legacy Excel-based reporting to Google BigQuery with automated ingestion, transformation, and Looker Studio visualization layer.',
    tags: ['BigQuery', 'Google Cloud', 'ETL', 'Looker Studio'],
    status: 'live',
  },
  {
    title: 'Kubernetes Helm Charts',
    description:
      'Reusable Helm chart templates for deploying containerized microservices to AKS with configurable autoscaling, ingress, and monitoring integrations.',
    tags: ['Kubernetes', 'Helm', 'Docker', 'AKS'],
    status: 'wip',
  },
  {
    title: 'Azure AI Document Processor',
    description:
      'Document intelligence solution using Azure AI Services to extract, classify, and structure data from unstructured PDF and image inputs.',
    tags: ['Azure AI', 'Python', 'React', 'REST API'],
    status: 'concept',
  },
];
