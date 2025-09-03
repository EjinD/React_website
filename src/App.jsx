import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Showcase  from './components/Showcase'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container py-5">
        <Hero />
        <About />
        <Skills /> 
        <Projects />
        <Contact />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}
