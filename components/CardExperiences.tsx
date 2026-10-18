export default function CardExperiences() {
const Experiences = [
    {
    company: 'SafeTravel',
    role: 'Développeur Mobile — React Native',
    sector: 'Voyage / Communauté',
    period: 'à compléter',                       // ← ajoute les dates
    location: 'Antsirabe, Madagascar',
    description:
      "App mobile React Native de témoignages de voyage : les voyageurs partagent leurs expériences par destination. Fil communautaire, médias et modération. En production sur Google Play (soumission App Store en cours).",
    tech: ['React Native', 'TypeScript', 'Firebase'], // ← ajuste le back-end si besoin
  },
  {
    company: 'Topppo',
    role: 'Développeur Full Stack Web — Next.js & SaaS',
    sector: 'SaaS / Suivi de présence',
    period: 'juil. 2026 – sept. 2026 · 2 mois',
    location: 'Antsirabe, Madagascar',
    description:
      "Conception et développement de Topppo, plateforme SaaS de suivi de présence (pointage) pour les effectifs de terrain (nettoyage, services) : pointage mobile, dashboard admin, assistant d'onboarding et abonnements Stripe. Auth Firebase, déploiement VPS (PM2) et CI/CD via GitHub Actions. Prise en charge complète, du cadrage à la mise en production.",
    tech: ['Next.js', 'React.js', 'Firebase', 'Stripe', 'TypeScript'],
  },
  {
    company: 'Napiland',
    role: 'Développeur Mobile Full Stack — Flutter & IA',
    sector: 'Santé & bien-être',
    period: 'janv. 2026 – aujourd’hui · 9 mois',
    location: 'Antsirabe, Madagascar',
    description:
      "Conception et développement de A à Z de Napiland, app mobile Flutter d'analyse capillaire par photo. IA vision (API Gemini) délivrant un diagnostic personnalisé — hydratation, porosité, brillance — et des recommandations sur-mesure. Back-end serverless AWS, auth OAuth (Google/Apple) et abonnements, jusqu'à la mise en production iOS et Android.",
    tech: ['Flutter', 'GraphQL', 'AWS', 'Gemini API', 'Intégration IA'],
  },
  {
    company: 'PsyIA',
    role: 'Développeur Mobile Full Stack — IA',
    sector: 'Santé & bien-être',
    period: 'août 2025 – aujourd’hui · 1 an et 2 mois',
    location: 'Antsirabe, Madagascar',
    description:
      "Conception et développement de PsyIA, app mobile de bien-être mental en freemium : 3 personas de thérapeutes IA, saisie vocale, détection de crise et disponibilité en 6 langues. Back-end Supabase, proxy IA et abonnements, en production sur iOS et Android.",
    tech: ['React Native', 'TypeScript', 'OpenAI', 'Supabase'],
  },
]
   return (
  <>
    {Experiences.map((exp) => {
      // Badge "En cours" si la période contient "aujourd'hui"
      const enCours = exp.period.includes('aujourd')

      return (
        <article
          key={exp.company}
          className='group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10'
        >
          {/* Barre verticale cyan à gauche, visible au survol */}
          <div className='absolute inset-y-0 left-0 w-1 bg-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100' />

          {/* En-tête : entreprise + rôle  |  badge */}
          <div className='flex items-start justify-between gap-4'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-semibold text-slate-50'>{exp.company}</h3>
              <p className='text-sm font-medium text-cyan-400'>{exp.role}</p>
            </div>

            {enCours && (
              <span className='flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300'>
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                En cours
              </span>
            )}
          </div>

          {/* Méta : secteur · période · lieu */}
          <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400'>
            <span>🏷️ {exp.sector}</span>
            {exp.period !== 'à compléter' && <span>📅 {exp.period}</span>}
            <span>📍 {exp.location}</span>
          </div>

          {/* Description (flex-1 aligne le bas des cartes) */}
          <p className='flex-1 text-sm leading-relaxed text-slate-300'>
            {exp.description}
          </p>

          {/* Séparateur */}
          <div className='h-px w-full bg-slate-700' />

          {/* Technologies */}
          <div className='flex flex-wrap gap-2'>
            {exp.tech.map((t) => (
              <span
                key={t}
                className='rounded-full border border-slate-600 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/40'
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      )
    })}
  </>
)
}