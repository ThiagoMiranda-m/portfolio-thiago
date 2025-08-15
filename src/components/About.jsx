import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function About(){
  useEffect(()=>{
    gsap.from('.about-box', {x:-80, opacity:0, duration:0.9})
  },[])

  return (
    <div>
      <h3 className="section-title">Sobre <span className="neon-line"></span></h3>
      <div className="about-box p-4 border-purple">
        <p style={{ color: '#fff' }}>
          Sou <strong>Thiago André</strong>, um <strong>Desenvolvedor Full Stack</strong> movido pela paixão por tecnologia e pelo desafio de transformar ideias em soluções reais. 
          Desde o primeiro contato com o mundo da programação, encontrei na lógica e na criatividade um espaço para inovar e resolver problemas de maneira eficiente.
        </p>
        <p style={{ color: '#fff' }}>
          Minha jornada envolve um conjunto diversificado de tecnologias, incluindo <strong>Java, Python, C, JavaScript, Node.js, Spring e Angular</strong>. 
          Domino desde a criação de <strong>APIs REST robustas e seguras com Spring</strong>, até o desenvolvimento de 
          <strong> websites modernos integrados a soluções de Inteligência Artificial</strong> utilizando <strong>Node.js (Express)</strong>. 
          Essa versatilidade me permite atuar tanto no <strong>back-end</strong>, garantindo estabilidade e performance, quanto no <strong>front-end</strong>, 
          entregando interfaces intuitivas e responsivas.
        </p>
        <p style={{ color: '#fff' }}>
          Ao longo do meu trabalho, desenvolvi habilidades essenciais como <strong>comunicação clara</strong>, 
          <strong> resolução criativa de problemas</strong> e <strong>persistência diante de desafios complexos</strong>. 
          Acredito que o código não é apenas uma sequência de instruções, mas uma ferramenta poderosa para criar impacto positivo, 
          seja otimizando processos, melhorando a experiência do usuário ou possibilitando novas formas de interação digital.
        </p>
        <p style={{ color: '#fff' }}>
          Fora do ambiente técnico, sou <strong>músico</strong>, e vejo na música uma fonte constante de inspiração. 
          A harmonia, o ritmo e a sensibilidade artística que a música exige influenciam minha forma de programar — 
          buscando sempre equilíbrio entre funcionalidade, performance e beleza no que entrego.
        </p>
        <p style={{ color: '#fff' }}>
          Minha meta é continuar crescendo como desenvolvedor, explorando novas tecnologias e me envolvendo em projetos desafiadores 
          que unam <strong>inovação, qualidade e propósito</strong>.
        </p>
      </div>
    </div>
  )
}
