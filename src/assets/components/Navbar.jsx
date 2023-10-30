import React ,{useState} from 'react'
import img1 from '../iconlibrary/icons8-fb-48.png'
import img2 from '../iconlibrary/icons8-twitter-48.png'
import img3 from '../iconlibrary/icons8-whatsapp-48.png'
import img4 from '../iconlibrary/icons8-menu-50 (1).png'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


function Navbar() {
    
    const [slidein,setslidein]=useState(false);
    const allow=()=>{
        console.log(slidein);
        setslidein((prev)=>(!prev));
    }
       


       


  return (
    <>
    <div className='w-full h-[10vh] z-50 fixed top-0 border-b-[1px] border-black bg-slate-300 '>
        <div className='w-[80%] mx-auto h-full  p-2 flex justify-between items-center max-lg:w-[98%] relative'>
            <div className='text-black text-4xl tracking-widest font-mono  font-extrabold'>Back<span className='text-blue-400 text-4xl tracking-widest font-mono  font-extrabold '>Roads</span></div>
            <div className='w-[27%]  h-full flex gap-5  mr-[105px] pt-1 justify-center items-center max-md:hidden'>

               
            <BrowserRouter>
                <HashLink to="/#hero" className='text-lg hover:underline hover:text-slate-800 tracking-widest'>Home</HashLink>
                <HashLink to="/#about" className='text-lg hover:underline hover:text-slate-800 tracking-widest'>About</HashLink>
                <HashLink to="/#services" className='text-lg hover:underline hover:text-slate-800 tracking-widest'>Services</HashLink>
                <HashLink to="/#tours" className='text-lg hover:underline hover:text-slate-800 tracking-widest'>Tours</HashLink>
               
            </BrowserRouter>
                
               
               

            </div>
            <div className='h-full  flex gap-2 items-center max-md:hidden'>
            <a href="https://www.facebook.com/"><img src={img1}  className='w-7 h-7' alt="" /></a> 
            <a href="https://twitter.com/"><img src={img2} className='w-7 h-7' alt="" /></a>
            <a href="https://www.whatsapp.com/"> <img src={img3} className='w-7 h-7' alt="" /></a>
            </div>
            <button className='md:hidden visible w-7 h-7' onClick={allow}>
                <img src={img4} alt="" className='w-full h-full' />
            </button>
           <div className={`absolute bg-white opacity-80 text-2xl w-[90vw] rounded-lg h-[60vh] border-2 border-black  top-[76px] z-10 right-0 ${slidein?'visible':'hidden'} flex flex-col`}>
            <BrowserRouter>
            <HashLink to="/#hero" className='w-full hover:underline  h-20 border-b-2 border-black flex justify-center items-center'>Home</HashLink>
            <HashLink to="/#about" className='w-full hover:underline h-20 border-b-2 border-black flex justify-center items-center'>About</HashLink>
            <HashLink to="/#services" className='w-full hover:underline h-20 border-b-2 border-black flex justify-center items-center'>Services</HashLink>
            <HashLink to="/#tours" className='w-full hover:underline h-20 border-b-2 border-black flex justify-center items-center'>Tours</HashLink>
            </BrowserRouter>
            
            <div className='w-full h-24  border-black flex justify-center gap-10 items-center'>
            <a href="https://www.facebook.com/"><img src={img1}  className='w-7 h-7' alt="" /></a> 
            <a href="https://twitter.com/"><img src={img2} className='w-7 h-7' alt="" /></a>
            <a href="https://www.whatsapp.com/"> <img src={img3} className='w-7 h-7' alt="" /></a>
            </div>
           </div>
           
        </div>

    </div>
    </>
  )
 
}

export default Navbar