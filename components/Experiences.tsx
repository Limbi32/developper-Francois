import CardExperiences from "./CardExperiences";

export default function Experiences() {

    return (
        <div className="mt-10  bg-slate-900 ">
            <div className="flex justify-center items-center">
                <h1 className=" text-slate-400
                     text-3xl relative pb-3 after:content-['']
                      after:absolute after:left-0 after:bottom-0 
                      after:h-1 after:w-12 after:bg-sky-500
                      after:rounded-full bg-slate-900">Expériences</h1>

            </div>
           <div className="flex justify-center items-center ml-3">
             <div className="grid  grid-cols-1 md:grid-rows-2 lg:grid-cols-2  gap-10 mt-7 mx-5 py-7 justify-between items-center bg-slate-900 ">

                <CardExperiences />
                
            </div>
           </div>
        </div>
    )
}