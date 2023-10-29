import React from 'react'

function Service(props) {
    const {img,title,desc}=props;
  return (
    <>
    
     <div className='flex w-[300px] h-[100px] justify-center items-center gap-1 max-md:mt-14 '>
        <img src={img} alt="" className='w-[20%] h-full'/>
        <div className='flex flex-col w-[80%] h-full '>
            <h1 className='tracking-widest font-mono font-bold'>{title}</h1>
            <p className='text-slate-500'>{desc}</p>
        </div>
      
    </div>
    </>
   
  )
}

export default Service
