import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { HERO_TYPING_SPEED } from '../config'

function TypeWriter({text, startDelay=0}){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    el.textContent = ''
    let i = 0
    const speed = HERO_TYPING_SPEED
    const timer = setTimeout(function run(){
      if(i < text.length){
        el.textContent += text.charAt(i)
        i++
        setTimeout(run, speed)
      }
    }, startDelay)
    return ()=> clearTimeout(timer)
  },[text, startDelay])
  return <div ref={ref} className="hero-typed" />
}

export default function Hero(){
  const profileRef = useRef()
  useEffect(()=>{
    // pulsing glow behind profile
    gsap.to('.profile-glow', {boxShadow: '0 0 40px 12px rgba(121,72,219,0.16)', duration:1.2, yoyo:true, repeat:-1, ease:'sine.inOut'})
    // slide in left/right for hero parts
    gsap.from('.hero-left', {x:-100, opacity:0, duration:1, ease:'power3.out'})
    gsap.from('.hero-right', {x:100, opacity:0, duration:1, ease:'power3.out'})
  },[])

  return (
    <div className="row align-items-center">
      <div className="col-md-7 hero-left">
        <h2 style={{color:'#7948db', textShadow:'0 0 12px rgba(121,72,219,0.85)'}}> <TypeWriter text={'Bem-vindo!'} startDelay={0} /> </h2>
        <p className="mt-3 hero-intro"><TypeWriter text={'Um homem movido ao amor à tecnologia, código e curiosidade.'} startDelay={400} /></p>
        <h4 className="mt-4 hero-title"><TypeWriter text={'Thiago André | Desenvolvedor Full-stack'} startDelay={900} /></h4>
      </div>
      <div className="col-md-5 text-center hero-right">
        <div className="profile-glow d-inline-block p-3 rounded-circle">
          <img src="/profile.png" alt="profile" className="rounded-circle profile-photo" style={{width:160, height:160, objectFit:'cover'}} />
        </div>
      </div>
    </div>
  )
}
