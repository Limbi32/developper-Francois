"use client";
import { Skill } from "../types/index";
import { skillIconMap, DefaultSkillIcon } from "../components/icons";

const levelToValue: Record<string, number> = {
  Débutant: 25,
  Intermédiaire: 55,
  Avancé: 80,
  Expert: 100,
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const value = levelToValue[skill.level] ?? 50;
  const Icon = skillIconMap[skill.name] ?? DefaultSkillIcon;

  return (
    <div className="rounded-2xl p-4 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-white">{skill.name}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">{skill.level}</div>
        </div>

        <div className="ml-4 flex items-center">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-md">
            <Icon size={18} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-sky-400"
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="mt-2 text-[12px] text-zinc-500 dark:text-zinc-400 flex justify-between">
          <span>{value}%</span>
          <span>{skill.level}</span>
        </div>
      </div>
    </div>
  );
}
