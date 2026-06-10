import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-zinc-200 py-8 text-center text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-6">
        <p>&copy; {currentYear} François Dev. Tous droits réservés.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}