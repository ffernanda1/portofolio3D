import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-green'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='bg-hero2-pattern bg-cover bg-no-repeat bg-center'>
          <About />
        </div>
        <div className='bg-hero3-pattern bg-cover bg-no-repeat bg-center'>
          <Experience />
        </div>
        <div className='bg-hero3-pattern bg-cover bg-no-repeat bg-center'>
          <Tech />
          <Works />
        </div>
        <div className='bg-hero3-pattern bg-cover bg-no-repeat bg-center'>
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App
