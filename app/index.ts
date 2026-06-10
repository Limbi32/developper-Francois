import { Project, Skill } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "safetravel",
    title: "SafeTravel",
    description: "Application mobile de témoignages permettant aux voyageurs de partager leurs expériences de sécurité par pays.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    category: "Mobile",
    link: "#",
  },
  {
    id: "napiland",
    title: "Napiland",
    description: "Solution mobile innovante d'analyse capillaire pour un suivi personnalisé des soins.",
    tech: ["Flutter", "Dart", "Cloud Functions"],
    category: "Mobile",
    link: "#",
  },
  {
    id: "psyia",
    title: "Psyia",
    description: "IA thérapeutique mobile offrant un accompagnement psychologique interactif et bienveillant.",
    tech: ["Flutter", "OpenAI", "Node.js"],
    category: "Mobile",
    link: "#",
  },
  {
    id: "toppo",
    title: "Toppo",
    description: "Webapp SaaS robuste dédiée à la gestion complète des entreprises et l'optimisation des flux.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    link: "#",
  },
];

export const SKILLS: Skill[] = [
  { name: "Flutter", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "React Native", level: "Avancé" },
  { name: "Node.js", level: "Avancé" },
  { name: "Firebase", level: "Expert" },
  { name: "AWS Amplify", level: "Avancé" },
  { name: "Git", level: "Expert" },
  { name: "GitHub", level: "Expert" },
];