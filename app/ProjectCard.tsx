"use client";
import { Project } from "../types/index";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
          {project.category === "Mobile" ? (
            <Smartphone className="h-5 w-5 text-blue-500" />
          ) : (
            <Globe className="h-5 w-5 text-emerald-500" />
          )}
        </div>
        <ExternalLink className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-black dark:group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t: string) => (
          <span key={t} className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}