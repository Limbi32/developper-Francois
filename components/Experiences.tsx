import CardExperiences from "./CardExperiences"

export default function Experiences() {
  return (
    <section id="experience" className='flex w-full flex-col items-center bg-slate-900 px-6 py-16'>

      <h2 className="relative pb-3 text-3xl uppercase text-slate-400 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:content-['']">
        Expériences
      </h2>

      <p className='mt-4 max-w-xl text-center text-sm text-slate-500'>
        Des projets conçus de A à Z, du cadrage à la mise en production.
      </p>

      <div className='mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2'>
        <CardExperiences />
      </div>

    </section>
  )
}