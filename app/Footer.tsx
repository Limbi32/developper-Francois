import { GithubIcon, LinkedinIcon } from "@/components/icons";

// Libellés de colonnes (Navigation, Contact...) : petits, espacés, avec un trait cyan
const labelClass =
  'mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] !text-cyan-400 before:h-px before:w-5 before:bg-cyan-400 before:content-[""]'

// Liens de texte : plus grands, plus épais, glissent légèrement au survol
const linkClass =
  'w-fit text-base font-medium !text-slate-100 transition duration-300 hover:translate-x-1 hover:!text-cyan-400'

// Pastilles d'icônes
const iconClass =
  'flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600 bg-slate-800 !text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:!text-cyan-400 [&_svg]:!fill-current [&_svg_*]:!fill-current'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-800 bg-slate-950 px-6 py-16'>
      <div className='mx-auto max-w-6xl'>

        <div className='grid gap-12 md:grid-cols-3'>

          {/* Marque */}
          <div className='flex flex-col gap-4'>
            <p className='text-3xl font-bold tracking-tight !text-slate-50'>
              François <span className='!text-cyan-400'>Dev</span>
            </p>
            <p className='max-w-xs text-base leading-relaxed !text-slate-300'>
              Je conçois des applications mobiles et web, avec de l&apos;IA intégrée.
            </p>
            <span className='flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium !text-emerald-300'>
              <span className='h-2 w-2 rounded-full bg-emerald-400' />
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Navigation */}
          <nav className='flex flex-col gap-3'>
            <p className={labelClass}>Navigation</p>
            <a href='#skills' className={linkClass}>Compétences</a>
            <a href='#experience' className={linkClass}>Expériences</a>
            <a href='#projects' className={linkClass}>Projets</a>
            <a href='/Contact' className={linkClass}>Contact</a>
          </nav>

          {/* Contact + réseaux */}
          <div className='flex flex-col gap-3'>
            <p className={labelClass}>Restons en contact</p>
            <a href='mailto:francoisdigitalworks@gmail.com' className={linkClass}>
              francoisdigitalworks@gmail.com
            </a>
            <div className='mt-2 flex gap-3'>
              <a
                href='https://github.com/Limbi32'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className={iconClass}
              >
                <GithubIcon size={22} />
              </a>
              <a
                href='https://linkedin.com/in/francoisdigitalworks'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className={iconClass}
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-14 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-sm !text-slate-400 sm:flex-row'>
          <p>&copy; {currentYear} François Dev. Tous droits réservés.</p>
          <p>Fait avec soin à Madagascar 🇲🇬</p>
        </div>

      </div>
    </footer>
  );
}