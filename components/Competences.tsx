import CardSkills from "./CardSkills"

export default function Competences() {
  return (
    <section id="skills" className='flex w-full flex-col items-center bg-slate-950 px-6 py-16'>

      <h2 className="relative pb-3 text-3xl uppercase text-slate-400 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:content-['']">
        Compétences
      </h2>

      <p className='mt-4 max-w-xl text-center text-sm text-slate-500'>
        Les technologies que j&apos;utilise au quotidien pour concevoir, développer et déployer.
      </p>

      <div className='mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <CardSkills />
      </div>

    </section>
  )
}