"use client";

import Image from "next/image";
import { PROJECTS, FRONTEND_STACK, BACKEND_STACK, AI_STACK, DATABASE_CLOUD, TOOLS_STACK } from "./index";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { Mail, Sparkles, Target, Repeat2, Brain, Rocket } from "lucide-react";
import { Skill, Project } from "../types/index";

// Icons (inchangés)
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.18h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.765v2.316h3.587l-.467 3.525h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
  </svg>
);

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.768.967-.942 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.672-1.611-.921-2.207-.242-.579-.487-.5-.672-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.411h-.001C6.31 21.793 2.2 17.684 2.2 12.025 2.2 6.371 6.345 2.2 12 2.2c5.657 0 9.8 4.188 9.8 9.825 0 5.63-4.146 9.76-9.749 9.773m8.413-16.332C18.95 2.642 15.81.8 12 .8 5.39.8.8 5.39.8 12c0 2.052.606 3.944 1.657 5.556L.8 23.2l5.954-1.566C8.05 22.9 9.995 23.8 12 23.8c6.61 0 11.2-4.59 11.2-11.2 0-3.048-1.195-5.896-3.315-8.157" />
  </svg>
);

const WORK_METHOD = [
  {
    icon: Target,
    title: "Cadrage du besoin",
    description: "Analyse des objectifs du client et définition d'une solution technique adaptée.",
  },
  {
    icon: Repeat2,
    title: "Développement Agile",
    description: "Itérations courtes et livraisons fonctionnelles à chaque étape.",
  },
  {
    icon: Brain,
    title: "Intégration IA à forte valeur",
    description: "Agents conversationnels, analyse d'image, recommandations personnalisées.",
  },
  {
    icon: Rocket,
    title: "Déploiement & suivi",
    description: "Mise en production et accompagnement du client après le lancement.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white dark:from-black dark:via-zinc-950 dark:to-black px-6">

      {/* HERO */}
      <section className="max-w-6xl mx-auto pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-14"
        >
          {/* TEXT */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6">
              <Sparkles size={14} className="text-sky-500" />
              Disponible pour missions freelance
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Développeur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                Full Stack
              </span>{" "}
              & Ingénieur IA
            </h1>

            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              Développeur full stack orienté produit, je conçois et déploie des
              applications web et mobiles de bout en bout. Ces deux dernières
              années, je me suis spécialisé dans l&apos;intégration de l&apos;IA (
              <span className="font-semibold text-emerald-500">API OpenAI</span>,{" "}
              <span className="font-semibold text-orange-500">Claude Code</span>) au
              sein d&apos;applications concrètes — santé, bien-être, voyage. J&apos;aime
              passer rapidement d&apos;une idée à un produit fonctionnel, aussi bien
              en autonomie qu&apos;en équipe Agile.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">
              {[
                { href: "https://github.com/Limbi32", icon: <GithubIcon /> },
                { href: "https://www.linkedin.com/in/fran%C3%A7ois-d-assise-limbiarissaona-1078b43a5/", icon: <LinkedinIcon /> },
                { href: "https://web.facebook.com/profile.php?id=61579901736604", icon: <FacebookIcon /> },
                { href: "mailto:francoisdigitalworks@gmail.com", icon: <Mail /> },
                { href: "https://api.whatsapp.com/send?phone=0261324325888", icon: <WhatsAppIcon /> },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800
                  hover:scale-110 hover:shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-900
                  transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">WhatsApp : <span className="font-medium text-zinc-900 dark:text-white">0261324325888</span></p>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-200"
              >
                Contactez-moi
              </a>

              <a
                href="/files/CV_Francois.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all duration-200"
              >
                Télécharger mon CV
              </a>

              <a href="#projects" className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">
                Voir mes projets
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 blur-3xl opacity-40"></div>

            <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-sky-400 to-emerald-400 shadow-2xl shadow-blue-500/20 transition-transform duration-500 hover:scale-105">
              <div className="h-full w-full rounded-full overflow-hidden ring-4 ring-white dark:ring-black bg-white dark:bg-black">
                <Image
                  src="/photo.jpg"
                  alt="François"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <span className="absolute bottom-3 right-3 flex h-5 w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-black"></span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Compétences</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">Technologies et outils classés par catégorie.</p>

        <div className="grid grid-cols-1 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FRONTEND_STACK.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {BACKEND_STACK.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Intelligence Artificielle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {AI_STACK.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bases de données & Cloud</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {DATABASE_CLOUD.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Outils</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TOOLS_STACK.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12">
          Mes Réalisations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Expérience</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
          Plus de 4 ans à concevoir et déployer des produits numériques pour des
          secteurs variés : santé, bien-être, voyage et gestion RH.
        </p>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-semibold">Développeur Full Stack indépendant — Freelance</h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">2021 – présent</span>
          </div>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Accompagnement de clients variés, du cadrage du besoin jusqu&apos;au déploiement en
            production, avec une attention particulière portée à l&apos;intégration de l&apos;IA
            dans des cas d&apos;usage concrets.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
            <li>
              Conception et développement d&apos;applications mobiles et web pour différents
              clients, du cadrage au déploiement (Psy IA, Napiland, SafeTravel, SaaS RH).
            </li>
            <li>
              Intégration de l&apos;IA (API OpenAI, Claude Code) pour des fonctionnalités à forte
              valeur : agents conversationnels, analyse d&apos;image, recommandations personnalisées.
            </li>
            <li>
              Réalisation et mise en production de sites vitrines professionnels
              (elmadagascar-tours.com, altigeo.mg).
            </li>
            <li>
              Pilotage de projets en autonomie complète : cadrage du besoin, choix
              techniques, développement, tests et déploiement.
            </li>
            <li>
              Collaboration en équipe Agile : points réguliers, itérations courtes et
              livraisons fonctionnelles à chaque sprint.
            </li>
            <li>
              Veille technologique continue sur les frameworks mobiles (Flutter, React
              Native, Expo) et les outils d&apos;IA générative.
            </li>
          </ul>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-zinc-200 dark:border-zinc-800 pt-6">
            {WORK_METHOD.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="rounded-lg bg-zinc-100 p-2 text-blue-500 dark:bg-zinc-800">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" className="max-w-6xl mx-auto py-20">
        <h2 className="text-2xl font-bold mb-8">Formation</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Master en Informatique", place: "École Normale", year: "2021" },
            { title: "Licence en Informatique", place: "École Normale", year: "2017" },
            { title: "Baccalauréat, Série D", place: "Lycée Mixte Nosy Be", year: "2014" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="text-sm text-zinc-500 dark:text-zinc-400">{item.year}</div>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.place}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}