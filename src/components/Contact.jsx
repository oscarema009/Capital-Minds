import React from 'react'
import plano from "../assets/Contact/plano.png"

import ContactUs from './ContactUs'
import "./Contact.css"


export default function Contact() {
  return (
    <div className="contact">
      <div className="overlap">
        <div className="container">
          <div className="row">
            <div className="texto">
              <p className="titulo">Unlock the Potential of Your Capital Growth – Reach Out to Us Today</p>
              <p className="frase">
                At Capital Mind, we understand that every financial decision you make can have a lasting impact on your
                future. That&#39;s why we&#39;re here to provide you with the support and guidance you need to make the
                most of every growth opportunity so your investments thrive. Don&#39;t wait any longer to take the first
                step towards a stronger financial future. Contact us today and let&#39;s start this exciting journey
                together!
              </p>
            </div>
            <div className="imagen">
              <img className="pngwing" alt="Pngwing" src={plano} />
            </div>
          </div>
          <ContactUs/>
        </div>
      </div>
    </div>
  )
}
