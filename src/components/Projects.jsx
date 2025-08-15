import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(()=>{
    gsap.from('.project-card', {y:30, opacity:0, stagger:0.12, duration:0.7})

    fetch('https://api.github.com/users/ThiagoMiranda-m/repos')
      .then(r=>r.json())
      .then(data=>{
        if (Array.isArray(data)) {
          // Filtrar repositórios que você NÃO quer mostrar
          const filtered = data
            .filter(repo => repo.name !== 'ThiagoMiranda-m') // exclui pelo nome
            .slice(0, 8) // pega só os primeiros 8
          setRepos(filtered)
        }
      })
      .catch(()=>{})
  },[])

  return (
    <div>
      <h3 className="section-title">Projetos <span className="neon-line"></span></h3>
      <div className="d-flex gap-3 flex-wrap mt-4">
        
        {/* Placeholder Cards */}
        {repos.length === 0 && Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="project-card p-4 rounded d-flex flex-column"
            style={{
              width: 220,
              minHeight: 260,
              background: '#1d1920'
            }}
          >
            <h6>(Nome do projeto)</h6>
            <p style={{ fontSize: 13, flexGrow: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="github-button mt-auto">Ver no GitHub</a>
          </div>
        ))}

        {/* Real Cards */}
        {repos.map(r => (
          <div
            key={r.id}
            className="project-card p-4 rounded d-flex flex-column"
            style={{
              width: 220,
              minHeight: 260,
              background: '#1d1920'
            }}
          >
            <h6>{r.name}</h6>
            <p style={{ fontSize: 13, flexGrow: 1 }}>
              {r.description || 'Sem descrição disponível.'}
            </p>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="github-button mt-auto"
            >
              Ver no GitHub
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}
