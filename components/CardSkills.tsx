import Reveal from '@/components/Reveal'

export default function CardSkills() {
  const Skills = [
    {
      category: 'Langages',
      icon: '💻',
      items: ['TypeScript', 'JavaScript', 'Dart', 'SQL', 'HTML / CSS'],
    },
    {
      category: 'Frontend Web',
      icon: '🌐',
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Mobile',
      icon: '📱',
      items: ['React Native', 'Expo', 'Flutter'],
    },
    {
      category: 'Backend & Cloud',
      icon: '☁️',
      items: ['Node.js', 'Firebase', 'Supabase', 'AWS serverless', 'Prisma', 'PostgreSQL'],
    },
    {
      category: 'IA',
      icon: '🤖',
      items: ['OpenAI', 'Claude', 'Gemini API', 'RAG', 'Agents', 'Vision', 'Voix'],
    },
    {
      category: 'Outils & DevOps',
      icon: '🛠️',
      items: ['Git / GitHub', 'GitHub Actions (CI/CD)', 'Stripe', 'VPS (PM2)'],
    },
  ]

  return (
    <>
      {Skills.map((skill, i) => (
        // Reveal est l'élément le plus externe : la key est ici.
        // delay (i % 3) : sur 3 colonnes, chaque ligne apparaît de gauche à droite.
        <Reveal key={skill.category} delay={(i % 3) * 0.1} className='h-full'>
          <article
            className='group flex h-full flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10'
          >
            {/* En-tête : pastille d'icône + titre */}
            <div className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl'>
                {skill.icon}
              </div>
              <h3 className='text-lg font-semibold text-slate-50'>
                {skill.category}
              </h3>
            </div>

            {/* Séparateur */}
            <div className='h-px w-full bg-slate-800' />

            {/* Technologies */}
            <div className='flex flex-wrap gap-2'>
              {skill.items.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/30'
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </>
  )
}