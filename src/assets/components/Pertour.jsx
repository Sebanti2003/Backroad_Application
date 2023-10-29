import React from 'react'

function Pertour(props) {
  return (
    <>
     <div className='w-[270px] h-[340px] bg-slate-200 overflow-hidden rounded-md m-3 relative border-[1px] border-black' >
        <div className='h-[50%] w-full border-b-2 border-black relative'>
            <img src={props.img} className='w-full h-full object-cover absolute z-[3] top-0 right-0 left-0 bottom-0' alt="" />
            <div className='absolute z-[4] bg-orange-500 rounded-lg text-white bottom-0 right-0'>{props.date}</div>


        </div>
        <div className='h-[50%] w-full p-2 flex flex-col items-center justify-between'>
            <h1 className='text-green-900'>{props.title}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ersp ehenderit numquam reiciendis tempora!</p>
            <hr />
            <div className='w-full h-4 flex items-center justify-between text-red-600'>
                <p>{props.country}</p>
                <p><span className='text-teal-500'>$</span>{props.money}</p>
                <p>{props.days} days</p>
            </div>
        </div>
      
      </div>
    </>
   
  )
}

export default Pertour
