"use client";
import Image from "next/image";
import { Project } from "../types/index";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      {project.image ? (
        <div className="-mx-6 mb-4 rounded-t-2xl overflow-hidden">
          <div className="relative h-40 w-full">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      ) : null}

      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.favicon ? (
            <div className="h-11 w-11 rounded-full overflow-hidden bg-white shadow-sm">
              <Image src={project.favicon} alt={`${project.title} favicon`} width={44} height={44} className="object-cover" />
            </div>
          ) : (
            <div className="rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
              {project.category === "Mobile" ? (
                <Smartphone className="h-6 w-6 text-blue-500" />
              ) : (
                <Globe className="h-6 w-6 text-emerald-500" />
              )}
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{project.category}</div>
          </div>
        </div>
        <ExternalLink className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-black dark:group-hover:text-white" />
      </div>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((t: string) => (
          <span key={t} className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
            {t}
          </span>
        ))}
      </div>

      {/* Hover actions overlay */}
      <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
        <div className="w-full flex justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white/90 dark:bg-zinc-800/80 px-3 py-2 rounded-md text-sm font-medium shadow"
          >
            Voir
          </a>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 dark:bg-zinc-800/80 px-3 py-2 rounded-md text-sm font-medium shadow"
            >
              Code
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}