import CardSkills from "./CardSkills"

export default function Competences() {

    return (

        <div className="mt-10  bg-slate-900">
            <div className="flex justify-center items-center"><h1 className=" text-slate-400 text-3xl relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-sky-500 after:rounded-full">Competences</h1></div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-5 ">
                <CardSkills />
              


            </div>
        </div>
    )
}