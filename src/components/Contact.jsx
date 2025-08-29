import React from 'react'
import { FORM_SPRE_ENDPOINT } from '../config'
export default function Contact(){
  return (
    <div>
      <h3 className="section-title">Contate-me <span className="neon-line"></span></h3>
      <form action={FORM_SPRE_ENDPOINT} method="POST" className="mt-3">
        <div className="mb-3">
          <label>Nome</label>
          <input name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Mensagem</label>
          <textarea name="message" className="form-control" rows="6"></textarea>
        </div>
        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-purple">Enviar</button>
          <a className="btn btn-outline-light" href="mailto:thiagoanm75@gmail.com">Via email</a>
        </div>
      </form>
    </div>
  )
}
