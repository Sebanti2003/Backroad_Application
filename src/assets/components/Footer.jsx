import React from 'react'
import img1 from '../iconlibrary/icons8-fb-48.png'
import img2 from '../iconlibrary/icons8-twitter-48.png'
import img3 from '../iconlibrary/icons8-whatsapp-48.png'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-5 w-full h-40 max-h-screen bg-blue-950'>
        <div className="w-[69%] h-full mx-auto  flex flex-col justify-center items-center text-white">
        <div className='w-[27%]  h- flex gap-3  justify-center items-center '>
            <BrowserRouter>
            <HashLink to="/#hero" className='text-lg hover:underline tracking-widest'>Home</HashLink>
                <HashLink to="/#about" className='text-lg hover:underline tracking-widest'>About</HashLink>
                <HashLink to="/#services" className='text-lg hover:underline tracking-widest'>Services</HashLink>
                <HashLink to="/#tours" className='text-lg hover:underline tracking-widest'>Tours</HashLink>
            </BrowserRouter>
               

            </div>
            <div className='  flex gap-2 items-center '>
            <a href="https://www.facebook.com/"><img src={img1}  className='w-7 h-7' alt="" /></a> 
            <a href="https://twitter.com/"><img src={img2} className='w-7 h-7' alt="" /></a>
            <a href="https://www.whatsapp.com/"> <img src={img3} className='w-7 h-7' alt="" /></a>
            </div>
            <p className='mt-2 text-sm text-center'>Copyright &#169; Backroads Travel Tour Company 2023 All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
