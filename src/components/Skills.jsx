import React, { useEffect } from 'react'
import { gsap } from 'gsap'
export default function Skills(){
  useEffect(()=>{ gsap.from('.skills-list', {x:80, opacity:0, duration:0.9}) },[])
  return (
    <div className="row">
      <div className="col-md-6">
        <h3 className="section-title">Skills <span className="neon-line"></span></h3>
        <div className="skills-list">
          <h5>Linguagens</h5>
          <div className="d-flex gap-3 mb-3 placeholder-logos"> {/*-- put your logos in public/skills/ and they'll show here --*/} </div>
          <h5>Frameworks</h5>
          <div className="d-flex gap-3 mb-3 placeholder-logos"></div>
          <h5>Banco de dados</h5>
          <div className="d-flex gap-3 mb-3 placeholder-logos"></div>
          <h5>Ferramentas</h5>
          <div className="d-flex gap-3 mb-3 placeholder-logos"></div>
        </div>
      </div>
      <div className="col-md-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis sapien sed felis dapibus tempor sed nec ante.</p>
      </div>
    </div>
  )
}
