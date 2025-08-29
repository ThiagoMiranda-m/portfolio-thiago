import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  useEffect(() => {
    // Pulso do texto "Bem-vindo!"
    gsap.to('.hero-welcome', {
      opacity: 0.4, // não some totalmente
      duration: 1.7,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })

    // Brilho da foto
    gsap.to('.profile-photo', {
      filter: 'drop-shadow(0 0 20px rgba(127, 89, 204, 0.5))',
      duration: 1.7,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })

    // Entrada lateral
    gsap.from('.hero-left', { x: -100, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.hero-right', { x: 100, opacity: 0, duration: 1, ease: 'power3.out' })
  }, [])

  return (
    <div className="row align-items-center">
      <div className="col-md-7 hero-left">
        <h2
          className="hero-welcome"
          style={{ color: '#7948db', textShadow: '0 0 12px rgba(121,72,219,0.85)' }}
        >
          Bem-vindo!
        </h2>
        <p className="mt-3 hero-intro">
          Um homem movido ao amor à tecnologia, código e curiosidade.
        </p>
        <h4 className="mt-4 hero-title">
          Thiago André | Desenvolvedor Full-stack 💻
        </h4>
      </div>

      <div className="col-md-5 text-center hero-right">
        <div className="profile-glow d-inline-block p-3 rounded-circle">
          <img
            src="/profile.png"
            alt="profile"
            className="rounded-circle profile-photo"
            style={{
              width: 230,
              height: 230,
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Botão de Download do Currículo */}
        <div className="mt-4">
          <a 
            href="../CurriculoThiago.pdf" 
            download="CurriculoThiago.pdf"
            className="btn btn-purple"
          >
            📄 Baixar CV
          </a>
        </div>
      </div>
    </div>
  )
}
