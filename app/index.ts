import { Project, Skill } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "psyia",
    title: "Psy IA",
    description: "Application mobile de soutien psychologique propulsée par l'IA, avec un agent conversationnel guidant l'utilisateur.",
    tech: ["React Native", "API OpenAI", "Supabase"],
    category: "Mobile",
    link: "#",
    image: "/projects/psyia-screenshot.jpeg",
    favicon: "/projects/psyia-logo.jpeg",
  },
  {
    id: "napiland",
    title: "Napiland",
    description: "Analyse capillaire par IA : diagnostic à partir d'une photo et routines de soin personnalisées.",
    tech: ["Flutter", "IA / Analyse d'image", "AWS Amplify"],
    category: "Mobile",
    link: "#",
    image: "/projects/napiland-screenshot.jpeg",
    favicon: "/projects/napiland-logo.png",
  },
  {
    id: "safetravel",
    title: "SafeTravel",
    description: "Application mobile de témoignages voyageurs : avis de sécurité par pays.",
    tech: ["React Native", "Firebase"],
    category: "Mobile",
    link: "#",
    image: "/projects/safetravel-screenshot.svg",
    favicon: "/projects/safeTravel-logo.png",
  },
  {
    id: "toppo",
    title: "SaaS de gestion RH",
    description: "Plateforme web de gestion des employés : suivi, administration et tableau de bord.",
    tech: ["Next.js", "Firebase"],
    category: "Web",
    link: "https://topppo.com/",
    image: "/topppo.PNG",
    favicon: "/projects/toppo-favicon.svg",
  },
  {
    id: "elmadagascar-tours",
    title: "El Madagascar Tours",
    description: "Site vitrine professionnel conçu et mis en production pour une agence de voyage.",
    tech: ["Next.js"],
    category: "Web",
    link: "https://elmadagascar-tours.com",
    image: "/elmada.PNG",
  },
  {
    id: "altigeo",
    title: "Altigeo",
    description: "Site vitrine professionnel conçu et mis en production.",
    tech: ["Next.js"],
    category: "Web",
    link: "https://altigeo.mg",
    image: "/alti.PNG",
  },
];

export const SKILLS: Skill[] = [
  { name: "Flutter", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "React Native", level: "Expert" },
  { name: "Expo", level: "Avancé" },
  { name: "Node.js", level: "Avancé" },
  { name: "API OpenAI", level: "Avancé" },
  { name: "Claude Code", level: "Avancé" },
  { name: "Firebase", level: "Expert" },
  { name: "Supabase", level: "Avancé" },
  { name: "AWS Amplify", level: "Avancé" },
  { name: "Git", level: "Expert" },
  { name: "GitHub", level: "Expert" },
];

// Grouped stacks for clearer presentation
export const FRONTEND_STACK: Skill[] = [
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "React Native", level: "Expert" },
  { name: "Expo", level: "Avancé" },
  { name: "Flutter", level: "Expert" },
];

export const BACKEND_STACK: Skill[] = [
  { name: "Node.js", level: "Avancé" },
];

export const AI_STACK: Skill[] = [
  { name: "API OpenAI", level: "Avancé" },
  { name: "Claude Code", level: "Avancé" },
];

export const DATABASE_CLOUD: Skill[] = [
  { name: "Firebase", level: "Expert" },
  { name: "Supabase", level: "Avancé" },
  { name: "AWS Amplify", level: "Avancé" },
];

export const TOOLS_STACK: Skill[] = [
  { name: "Git", level: "Expert" },
  { name: "GitHub", level: "Expert" },
];