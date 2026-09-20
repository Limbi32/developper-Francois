'use client'

import Competences from "@/components/Competences"
import Experiences from "@/components/Experiences"
import Hero from "@/components/Hero"
import Project from "@/components/Projet"


export default function Home() {
  return (
    <div className='flex  flex-col justify-center items-center bg-slate-900  '>
        <Hero />
      
        <Project />
        <Competences />
        <Experiences />
      
    </div>
  )
}