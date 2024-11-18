import { useState } from 'react'
import { Nav } from './components/Nav/Nav'
import './app.css'
import { Front } from './components/FrontPage/Front'
import { Program } from './components/Program/Program'
import { Title } from './components/Title/Title'
import { About } from './components/About/About'
import { Gallery } from './components/Gallery/Gallery'
import { Opinions } from './components/Opinions/Opinions'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'




function App() {

  return (
    <>
      <Nav />
      <Front />
      <div className="container">
        <Title title='What We are Offering' />
        <Program />
        <div>
        <Title title='About Us'/>
        <About />
        </div>
        <div>
          <Title title='Campus Life and Activities'/>
          <Gallery />
        </div>
        <div>
          <Title title='Insights On Our Offerings'/>
          <Opinions />
        </div>
        <Title title='Make Contact'/>
        <Contact />
        <div>
        <Footer />
        </div>
        
        
        
      </div>

    </>
  )
}

export default App
