import React from 'react'
import img from '../images/about.jpeg'
function Aboutus() {
  return (
    <>
    <div className='w-[80%]  flex flex-col justify-center items-center mx-auto gap-6 mb-10 ' id='about'>
        <h1 className='text-black text-4xl tracking-widest font-bold mt-10'>ABOUT <span className='text-blue-600 text-4xl font-bold'> US</span></h1>
        <div className="w-full h-[60%]  flex flex-wrap  justify-center items-center gap-16 max-md:gap-0">
            <div className='w-[450px] h-[380px]  relative'>
                <div className='absolute w-[400px] h-[320px] z-[1] border-[7px] top-3 left-0 border-violet-800 max-md:h-[230px] max-md:w-[300px]'></div>
                <img src={img} alt="" className='absolute top-10 left-6 z-[2]' />
            </div>
            <div className='w-[450px] h-[380px]  flex flex-col justify-around'>
                <h1 className='text-3xl font-bold font-mono tracking-widest'>Explore The Difference</h1>
                <p className='font-light text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vitae repellat cumque pariatur.quibusdam delectus tempore non.</p>
                <p className='font-light text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis vel distinctio veritatis quidem deserunt rem, labore deleniti recusandae cumque.</p>
                <button className=' bg-blue-500 text-white w-[150px] h-[45px] tracking-widest'>READ MORE</button>
            </div>

        </div>



    </div>
    </>
  )
}

export default Aboutus
