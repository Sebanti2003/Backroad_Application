import React from 'react'

function Service(props) {
  return (
    <>
    
     <div className='flex  mx-2 w-[310px] h-[100px] justify-center items-center gap-1 max-lg:mt-5 '>
        <img src={props.img} alt="" className='w-[20%] h-full'/>
        <div className='flex flex-col w-[80%] h-full '>
            <h1 className='tracking-widest font-mono font-bold'>{props.title}</h1>
            <p className='text-slate-500'>{props.desc}</p>
        </div>
    </div>
    </>
   
  )
}

export default Service
