import CardProject from "./CardProject"
import Reveal from '@/components/Reveal'

export default function Project() {
  return (
    <section id="projects" className='flex w-full flex-col items-center bg-slate-900 px-6 py-16'>

      {/* Titre + phrase : apparaissent ensemble */}
      <Reveal className='flex flex-col items-center'>
        <h2 className="relative pb-3 text-3xl uppercase text-slate-100 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:content-['']">
          projets
        </h2>

        <p className='mt-4 max-w-xl text-center text-sm text-slate-400'>
          Quelques applications que j&apos;ai conçues et mises en production.
        </p>
      </Reveal>

      <div className='mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
        <CardProject />
      </div>

    </section>
  )
}