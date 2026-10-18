'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <section className='bg-slate-900 px-6 py-10 md:py-16'>
      <div className='mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:gap-12'>

        {/* Colonne texte : centrée sur mobile, à gauche sur desktop */}
        <div className='flex w-full flex-col md:flex-1'>
          <div className='flex flex-col items-center gap-5 text-center md:items-start md:text-left'>

            {/* Badge */}
            <span className='w-fit rounded border border-slate-700 bg-slate-800 px-3 py-1 text-xs uppercase tracking-widest text-violet-300'>
              Développeur Mobile & Web
            </span>

            {/* Titre */}
            <h1 className='text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl'>
              Salut, je suis <span className='text-cyan-400'>François</span>
              <br />
              <span className='text-xl sm:text-2xl lg:text-4xl'>
                Je crée des apps mobiles & web.
              </span>
            </h1>

            {/* Phrase courte */}
            <p className='max-w-md text-sm text-slate-400 sm:text-base'>
              Full stack & IA : des applications modernes, rapides et utiles.
            </p>

            {/* Boutons : empilés sur mobile, côte à côte dès sm */}
            <div className='flex w-full flex-col gap-3 text-sm sm:w-auto sm:flex-row sm:gap-5'>
              <button
                onClick={() => router.push('/Contact')}
                className='rounded-xl bg-cyan-400 px-5 py-3 text-center font-medium text-slate-950 transition hover:cursor-pointer hover:bg-cyan-300'
              >
                Contactez-moi
              </button>
 <a
  href='/CV_Francois.pdf'
  download='CV-Limbiarisaona-Francois.pdf'
  style={{ color: '#f8fafc' }}
  className='flex items-center justify-center rounded-xl border-2 border-cyan-500 bg-slate-800 px-5 py-3 font-medium transition hover:cursor-pointer hover:bg-cyan-500'
>
  <span style={{ color: 'inherit' }}>Télécharger mon CV</span>
</a>
            </div>

            {/* Technologies */}
            <div className='flex flex-col items-center gap-4 md:items-start'>
              <span className='text-xs uppercase tracking-widest text-slate-400'>
                Technologies que j&apos;utilise
              </span>
              <div className='flex flex-wrap justify-center gap-2 text-xs md:justify-start'>
                {['React Native', 'Next.js', 'Flutter', 'Supabase', 'TypeScript', 'IA'].map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-slate-600 px-3 py-1 text-slate-300'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Colonne photo : en haut sur mobile, à droite sur desktop */}
        <div className='flex shrink-0 justify-center md:w-1/3'>
          <Image
            className='h-48 w-48 rounded-full border-2 border-slate-500 object-cover shadow-2xl sm:h-56 sm:w-56 md:h-72 md:w-72'
            src='/photo.jpg'
            width={300}
            height={300}
            alt='Photo de François'
            priority
          />
        </div>

      </div>
    </section>
  )
}