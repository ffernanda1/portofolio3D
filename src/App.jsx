import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works, StarsCanvas } from './components'
import './index.css'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      </div>
      <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
}

export default App
