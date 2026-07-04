"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X, Home, FolderGit2, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "#projects", label: "Projets", icon: FolderGit2 },
  { href: "#skills", label: "Compétences", icon: Sparkles },
  { href: "#experience", label: "Expérience", icon: Briefcase },
  { href: "#formation", label: "Formation", icon: GraduationCap },
];

const panelVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.08 },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.15 } },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo ou Nom du site */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-white"
        >
          <Image src="/icon-francois-cercle.svg" alt="Logo François" width={36} height={36} className="rounded-full" />
          François Dev
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Liens sociaux / Actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Limbi32" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 duration-200">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 duration-200">
            <LinkedinIcon size={20} />
          </a>
          {/* Un bouton pour le mode sombre/clair pourrait être ajouté ici */}
        </div>

        {/* Bouton menu burger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Panneau menu mobile */}
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden relative z-40 overflow-hidden rounded-b-3xl border-t border-zinc-200 bg-white/95 backdrop-blur-md shadow-2xl dark:border-zinc-800 dark:bg-zinc-950/95"
            >
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />

              <nav className="flex flex-col gap-1 px-4 py-5">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-700 transition-all hover:translate-x-1 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-sky-400/10 text-blue-500">
                        <link.icon size={18} />
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 border-t border-zinc-200 px-6 py-5 dark:border-zinc-800"
              >
                <a href="https://github.com/Limbi32" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition-all hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com/in/francoisdigitalworks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition-all hover:scale-110 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
                  <LinkedinIcon size={20} />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
