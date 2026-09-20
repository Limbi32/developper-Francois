import CardProject from "./CardProject"

export default function Project(){

    return  (
        <div className=' flex flex-col justify-center items-center  w-ful bg-slate-900 '>

        <h1 className="uppercase text-slate-400
         text-3xl relative pb-3 after:content-[''] 
         after:absolute after:left-0 after:bottom-0 after:h-1
          after:w-12 after:bg-sky-500 after:rounded-full">projets</h1>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mt-10 bg-slate-900'>

            <CardProject />
            
        

        </div>
      </div>

    )
}