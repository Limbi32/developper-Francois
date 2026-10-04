'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {

  const router = useRouter()
  return (
    <div className=' flex  flex-wrap gap-5 p-6 bg-slate-900'>
      <div className='flex-1 justify-center items-center p-10'>
        <Image className=' rounded-full'
          src="/photo.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>

      <div className='flex-2 p-9  '>
        <div className='flex flex-col gap-5'>

          <h1 className='text-slate-50 text-4xl'>LIMBIARISAONA FRANCOIS</h1>
          <h3 className='text-slate-400'>Développeur Mobile Full Stack & IA </h3>
          <div className='flex flex-col gap-6 text-slate-300'>
            <div>Développeur mobile & web full-stack, j'accompagne startups, PME et porteurs de projets de l'idée jusqu'à la mise en production — sans intermédiaire.

              Je conçois des applications mobiles (React Native, Flutter) et des plateformes web (Next.js, React) performantes, avec une spécialité qui fait la différence : l'intégration de l'IA. J'ai déjà mis plusieurs applications en production sur l'App Store et le Google Play Store — diagnostic par IA vision, accompagnement conversationnel (personas, transcription vocale), plateformes communautaires.

              Ce que je vous apporte concrètement :
              • Une prise en charge complète : cadrage, architecture, développement, déploiement sur les stores et suivi.
              • Des back-ends solides et scalables (Firebase, Supabase, AWS serverless, Node) avec authentification, paiements et abonnements.
              • De l'IA sur mesure : OpenAI, Claude, RAG, agents, vision, voix.
              • Un interlocuteur unique, autonome et rigoureux, qui livre du code propre et documenté — en TypeScript de bout en bout.

              Je travaille avec le marché francophone (France, Europe) comme à l'international.

              Types de projets : MVP mobile, refonte d'application, plateforme SaaS, intégration d'IA dans un produit existant, développement de bout en bout.

              Parlons de votre projet..</div>
            <div className='flex h-12 gap-6 text-sm '>
              <button onClick={() => router.push('/Contact')} className='bg-cyan-400 hover:ring-1 hover:cursor-pointer text-slate-950 hover:bg-slate-900 hover:border-2 hover:text-slate-50 hover:border-cyan-300 rounded-xl p-2 px-4 shadow-slate-100'  >Contactez-moi</button>
              <a
                href="/CV_Francois.pdf"
                download="CV-Limbiarisaona-Francois.pdf"
                className='border-cyan-500 border-2 hover:cursor-pointer hover:ring-1 hover:text-slate-400 rounded-xl p-2 px-4 shadow-slate-100 flex items-center'
              >
                Telecharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}