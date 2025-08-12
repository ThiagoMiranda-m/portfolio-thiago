import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
export default function Projects(){
  const [repos, setRepos] = useState([])
  useEffect(()=>{
    gsap.from('.project-card', {y:30, opacity:0, stagger:0.12, duration:0.7})
    // fetch public repos from your GitHub (replace 'your-username' or configure)
    fetch('https://api.github.com/users/ThiagoMiranda-m/repos')
      .then(r=>r.json())
      .then(data=>{
        setRepos(Array.isArray(data)?data.slice(0,8):[])
      }).catch(()=>{})
  },[])
  return (
    <div>
      <h3 className="section-title">Projetos <span className="neon-line"></span></h3>
      <div className="d-flex gap-3 flex-wrap mt-4">
        {repos.length===0 && Array.from({length:4}).map((_,i)=>(<div key={i} className="project-card p-4 rounded" style={{width:220, background:'#1d1920'}}> 
          <h6>(Nome do projeto)</h6>
          <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="small">Ver no GitHub</a>
        </div>))}
        {repos.map(r=>(
          <div key={r.id} className="project-card p-4 rounded" style={{width:220, background:'#1d1920'}}>
            <h6>{r.name}</h6>
            <p style={{fontSize:13}}>{r.description}</p>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="small">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </div>
  )
}
