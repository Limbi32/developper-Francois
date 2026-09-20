export default function CardSkills(){

    const Skills = [
  {
    category: 'Langages',
    items: ['TypeScript', 'JavaScript', 'Dart', 'SQL', 'HTML / CSS'],
  },
  {
    category: 'Frontend Web',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Node.js', 'Firebase', 'Supabase', 'AWS serverless', 'Prisma', 'PostgreSQL'],
  },
  {
    category: 'IA',
    items: ['OpenAI', 'Claude', 'Gemini API', 'RAG', 'Agents', 'Vision', 'Voix'],
  },
  {
    category: 'Outils & DevOps',
    items: ['Git / GitHub', 'GitHub Actions (CI/CD)', 'Stripe', 'VPS (PM2)'],
  },
]

    return (
        <>
        {Skills.map((skill)=>(
            <div key={skill.category} className="flex flex-col w-full  gap-3 px-2 py-6 border-slate-700 justify-center items-center  hover:bg-slate-700 shadow-2xl  bg-slate-800 rounded-lg  " >
                    <h1 className="text-slate-50">{skill.category}</h1>
                    <div className="flex gap-2 flex-wrap ">
                        {skill.items.map((item)=>(
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