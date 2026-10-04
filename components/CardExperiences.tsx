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
       {Experiences.map((experiences)=>(

         <div key={experiences.company} className=" bg-slate-800 border-slate-700 hover:bg-slate-700 rounded-lg px-10 py-6  flex flex-col  w-full  h-full gap-5">
            <h1 className="text-slate-50">{experiences.company}</h1>

            <div>
                <div className="font-bold text-xs text-cyan-300">
                   {experiences.role}
                </div>
                <div className="text-slate-400">
                    {experiences.sector}
                </div>
            </div>

            <div className="text-xs text-slate-50">

                <div>
                    {experiences.period}
                </div>

                <div>{experiences.location}</div>

            </div>

            <div className="text-slate-300">
                {experiences.description}
            </div>
             <div className="flex gap-2 flex-wrap ">
                        {experiences.tech.map((item)=>(
                        <div key={item} className="bg-slate-900/60 px-2 py-3 rounded-lg text-slate-400">
                            <div>{item}</div>
                        </div>
                    ))}
                    </div>

        </div>
       ))}
       </>
    )
}