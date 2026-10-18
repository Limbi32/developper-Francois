export default function CardProject() {
  const Projects = [
    {
      name: 'SafeTravel',
      role: 'App mobile de témoignages de voyage',
      description:
        'App React Native de témoignages de voyage : les voyageurs partagent leurs expériences par destination. Fil communautaire, médias, modération. En production sur Google Play.',
      tech: ['React Native', 'TypeScript', 'Firebase'],
    },
    {
      name: 'Topppo',
      role: 'SaaS de suivi de présence — Full Stack Web',
      description:
        'Plateforme SaaS de pointage pour effectifs de terrain (nettoyage, services) : pointage mobile, dashboard admin, onboarding et abonnements Stripe. Auth Firebase, déploiement VPS (PM2) et CI/CD via GitHub Actions.',
      tech: ['Next.js', 'React.js', 'Firebase', 'Stripe', 'TypeScript'],
    },
    {
      name: 'Napiland',
      role: 'App mobile Full Stack — Flutter & IA',
      description:
        "App mobile Flutter d'analyse capillaire par photo. IA vision (API Gemini) pour un diagnostic personnalisé — hydratation, porosité, brillance — et des recommandations sur-mesure. Back-end serverless AWS, auth OAuth (Google/Apple) et abonnements.",
      tech: ['Flutter', 'GraphQL', 'AWS', 'Gemini API'],
    },
    {
      name: 'PsyIA',
      role: 'App mobile Full Stack — IA',
      description:
        'App de bien-être mental freemium : 3 personas de thérapeutes IA, saisie vocale, détection de crise, disponible en 6 langues.',
      tech: ['React Native', 'TypeScript', 'OpenAI', 'Supabase'],
    },
  ]

  return (
    <>
      {Projects.map((project, i) => (
        <article
          key={project.name}
          className='group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10'
        >
          {/* Liseré cyan qui apparaît au survol */}
          <div className='absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100' />

          {/* En-tête : nom + rôle + numéro */}
          <div className='flex items-start justify-between gap-4'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-semibold text-slate-50'>
                {project.name}
              </h3>
              <p className='text-sm text-cyan-400'>{project.role}</p>
            </div>
            <span className='text-sm font-medium text-slate-500'>
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Description (flex-1 aligne le bas des cartes entre elles) */}
          <p className='flex-1 text-sm leading-relaxed text-slate-300'>
            {project.description}
          </p>

          {/* Séparateur */}
          <div className='h-px w-full bg-slate-700' />

          {/* Technologies */}
          <div className='flex flex-wrap gap-2'>
            {project.tech.map((t) => (
              <span
                key={t}
                className='rounded-full border border-slate-600 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/40'
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </>
  )
}