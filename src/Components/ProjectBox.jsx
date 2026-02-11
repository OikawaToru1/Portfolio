import React from 'react'


function ProjectBox({img,name, description,tools}) {

  return (
    
<div  className='group relative flex flex-col w-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
    onClick={()=>{

    }}>

  <div className='aspect-video w-full overflow-hidden'>
    <img 
      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' 
      src={img} 
      alt="project image" 
    />
  </div>


  <div className='flex flex-col p-5'>
    <h1 className='text-xl font-bold text-slate-900 tracking-tight'>
      {name}
    </h1>
    
    <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600'>
      {description}
    </p>


    <div className='mt-4 flex flex-wrap gap-2'>
      {tools.map((tool) => (
        <span key={tool} className='rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600'>
          {tool}
        </span>
      ))}
    </div>
  </div>
</div>
  )
}

export default ProjectBox
