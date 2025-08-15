import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from "./components/Skills"
import linkedinIcon from "./icons/linkedin.png";
import emailIcon from "./icons/email.png";
import githubIcon from "./icons/github2.png";
import "./header.css"
import { gsap } from 'gsap'

export default function App() {
  useEffect(() => {
    gsap.from('.section', { duration: 1, x: -80, opacity: 0, stagger: 0.15, ease: 'power3.out' })
  }, [])

  return (
    <div className="app" style={{ background: '#08070b', color: 'white', minHeight: '100vh' }}>
      <header className="header-container">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:seuemail@exemplo.com">
          <img src={emailIcon} alt="Email" className="icon" />
        </a>
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
      </div>

      <nav className="menu">
        <a href="#sobre">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contate-me</a>
      </nav>
    </header>

      <main className="container">
        <section id="hero" className="section my-5">
          <Hero />
        </section>

        <section id="about" className="section my-5">
          <About />
        </section>

        {/* Skills Section - agora é só importar o componente */}
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
