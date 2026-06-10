import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo ou Nom du site */}
        <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
          François Dev
        </Link>

        {/* Navigation (pourrait être un menu hamburger sur mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Projets
          </Link>
          <Link href="#skills" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            Compétences
          </Link>
          {/* Ajoute d'autres liens de navigation si nécessaire */}
        </nav>

        {/* Liens sociaux / Actions */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
          {/* Un bouton pour le mode sombre/clair pourrait être ajouté ici */}
        </div>
      </div>
    </header>
  );
}