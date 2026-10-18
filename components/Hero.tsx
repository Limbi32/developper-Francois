'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {

  const router = useRouter()
  return (
    <div className=' flex  flex-wrap gap-5 p-6 bg-slate-900'>
      <div className='flex-1 justify-center items-center p-10 '>
        <Image className=' rounded-full border-2 border-slate-500 shadow-2xl'
          src="/photo.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>

      <div className='flex-2 p-9  '>
        <div className='flex flex-col gap-5'>

  {/* Badge */}
  <span className='w-fit text-xs tracking-widest uppercase text-violet-300 bg-slate-800 border border-slate-700 rounded px-3 py-1'>
    Développeur Mobile & Web
  </span>

  {/* Titre */}
  <h1 className='text-slate-50 text-5xl font-semibold leading-tight'>
    Salut, je suis <span className='text-cyan-400'>François</span>
    <br />
    <span className='text-4xl'>Je crée des apps mobiles & web.</span>
  </h1>

  {/* Phrase courte */}
  <p className='max-w-md text-slate-400'>
    Full stack & IA : des applications modernes, rapides et utiles.
  </p>

  {/* Boutons */}
  <div className='flex h-12 gap-6 text-sm text-white'>
    <button onClick={() => router.push('/Contact')} className='bg-cyan-400 hover:ring-1 hover:cursor-pointer text-slate-950 hover:bg-slate-900 hover:border-2 hover:text-slate-50 hover:border-cyan-300 rounded-xl p-2 px-4 shadow-slate-100'>
      Contactez-moi
    </button>
    <a
      href="/CV_Francois.pdf"
      download="CV-Limbiarisaona-Francois.pdf"
      className='text-slate-300 border-cyan-500 border-2 hover:cursor-pointer hover:ring-1 hover:text-slate-400 rounded-xl p-2 px-4 shadow-slate-100 flex items-center'
    >
      Télécharger mon CV
    </a>
  </div>

  {/* Technologies */}
  <div className='flex flex-col gap-5'>
    <span className='text-xs tracking-widest uppercase text-slate-500'>
      Technologies que j&apos;utilise
    </span>
    <div className='flex flex-wrap gap-2 text-xs'>
      {['React Native', 'Next.js', 'Flutter', 'Supabase', 'TypeScript', 'IA'].map((t) => (
        <span key={t} className='border border-slate-600 text-slate-300 rounded-full px-3 py-1'>
          {t}
        </span>
      ))}
    </div>
  </div>

</div>
      </div>

    </div>

  )
}