import Link from 'next/link'

// Données des statistiques : modifie-les facilement ici
const stats = [
  { icon: '📅', value: '5+', label: 'Années d\'expérience' },
  { icon: '📱', value: '3', label: 'Apps en production' },
  { icon: '🎓', value: 'Master', label: 'en Informatique' },
  { icon: '🌍', value: '2', label: 'Marchés : Madagascar & international' },
]

export default function About() {
  return (
    <section className='bg-slate-950 px-6 py-16 w-full'>
      <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>

        {/* ===== Colonne gauche : texte ===== */}
        <div className='flex flex-col gap-5'>

          {/* Badge */}
          <span className='w-fit rounded border border-slate-700 bg-slate-800 px-3 py-1 text-xs uppercase tracking-widest text-violet-300'>
            À propos
          </span>

          {/* Titre */}
          <h2 className='text-3xl font-semibold leading-tight text-slate-50'>
            Je crée des solutions <span className='text-cyan-400'>digitales</span> utiles
          </h2>

          {/* Paragraphe court */}
          <p className='max-w-md text-slate-400'>
            Développeur freelance depuis 2021, j&apos;aide les entreprises et les
            particuliers à transformer leurs idées en applications mobiles et web
            propres, rapides et faciles à utiliser.
          </p>

         {/* Bouton : fond plein cyan, impossible à rater */}
<Link
  href='/about'
  className='inline-flex w-fit items-center rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300'
>
  En savoir plus →
</Link>
        </div>

        {/* ===== Colonne droite : cartes statistiques ===== */}
        <div className='grid grid-cols-2 gap-4'>
          {stats.map((s) => (
            <div
              key={s.label}
              className='flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50'
            >
              {/* Pastille d'icône */}
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl'>
                {s.icon}
              </div>

              <div>
                <p className='text-2xl font-semibold text-slate-50'>{s.value}</p>
                <p className='text-sm text-slate-400'>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}