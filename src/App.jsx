import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Herosection from './assets/components/Herosection'
import Aboutus from './assets/components/Aboutus'
import Services from './assets/components/Services'
import Tours from './assets/components/Tours'
import Footer from './assets/components/Footer'
import {BrowserRouter}from 'react-router-dom'

function App() {
  return (
    <>
    
    <div className='w-screen'>
      <Navbar/>
      <Herosection/>
      <Aboutus/>
      <Services/>
      <Tours/>
      <Footer/>


    </div>
   
    
    </>
  )
}

export default App
