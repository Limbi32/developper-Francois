export default function CardProject(){
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
      "Plateforme SaaS de pointage pour effectifs de terrain (nettoyage, services) : pointage mobile, dashboard admin, onboarding et abonnements Stripe. Auth Firebase, déploiement VPS (PM2) et CI/CD via GitHub Actions.",
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
         {Projects.map((project)=>(
           <div key={project.name} className=' flex flex-col gap-7 bg-slate-800 border-slate-700 hover:bg-slate-700 shadowlg rounded-lg p-5 mb-3'>
            <h1 className="text-slate-50">{project.name}</h1>
            <div className="text-slate-300">{project.description}</div>
            <div className='flex gap-3 flex-wrap'>
              {project.tech.map((t)=>(
                <div key={t} className='bg-slate-900/60 px-2 py-3 rounded-lg text-slate-400'>
                  {t}
              </div>
              ))}
                  
              
              
            </div>
          </div>
         ))}
         </>
    )
}