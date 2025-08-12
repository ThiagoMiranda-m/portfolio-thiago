import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { gsap } from 'gsap'

export default function App(){
  useEffect(()=>{
    // global entrance: slide from sides for sections
    gsap.from('.section', { duration: 1, x: -80, opacity: 0, stagger: 0.15, ease: 'power3.out' })
  },[])

  return (
    <div className="app" style={{background:'#08070b', color:'white', minHeight:'100vh'}}>
      <header className="p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <a href="https://www.linkedin.com.br/tanm-dev" className="header-icon" id="lnk-linkedin">[linkedin]</a>
          <a href="#" className="header-icon" id="lnk-email">[email]</a>
          <a href="#" className="header-icon" id="lnk-github">[github]</a>
        </div>
        <nav>
          <a href="#about" className="me-3">Sobre</a>
          <a href="#skills" className="me-3">Skills</a>
          <a href="#projects" className="me-3">Projetos</a>
          <a href="#contact">Contate-me</a>
        </nav>
      </header>

      <main className="container">
        <section id="hero" className="section my-5">
          <Hero />
        </section>

        <section id="about" className="section my-5">
          <About />
        </section>

        <section id="skills" className="section my-5">
          <Skills />
        </section>

        <section id="projects" className="section my-5">
          <Projects />
        </section>

        <section id="contact" className="section my-5">
          <Contact />
        </section>
      </main>

      <footer className="p-4 text-center">
        <small>© {new Date().getFullYear()} Thiago André</small>
      </footer>
    </div>
  )
}
