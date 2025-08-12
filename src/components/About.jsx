import React, { useEffect } from 'react'
import { gsap } from 'gsap'
export default function About(){
  useEffect(()=>{ gsap.from('.about-box', {x:-80, opacity:0, duration:0.9}) },[])
  return (
    <div>
      <h3 className="section-title">Sobre <span className="neon-line"></span></h3>
      <div className="about-box p-4 border-purple">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis sapien sed felis dapibus tempor sed nec ante. Nulla sed mattis dui. Sed sit amet volutpat orci.</p>
      </div>
    </div>
  )
}
