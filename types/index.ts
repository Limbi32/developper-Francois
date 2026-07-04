export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "Mobile" | "Web" | "Backend" | "Other";
  link: string;
  github?: string;
  image?: string;
  favicon?: string;
}

export interface Skill {
  name: string;
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Expert";
}