import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t bg-zinc-800 border-slate-500 py-8 text-center text-zinc-600  dark:text-zinc-400  dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto max-w-6xl px-6">
        <p>&copy; {currentYear} François Dev. Tous droits réservés.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/Limbi32" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
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