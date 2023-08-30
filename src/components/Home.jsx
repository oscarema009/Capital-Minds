import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import logopersblanco from "../assets/Home/logopersblanco.svg"
import logoperstransp from "../assets/Home/logoperstransp.svg"
import logocapminds from "../assets/Home/logocapminds.png"
//import fondo from "../assets/Home/fondo.png"
//import 'tailwindcss/tailwind.css';

export default function Home() {

  return (
    
    <div className="home">
      <div className="overlap-group">
        <div className="container">
          <div className="subtitulo">
            <div className="col-md">
              <p className="h">Discover Opportunities and Conquer the Markets</p>
              <div className="cta">
                <div className="button-btn-primary">
                <Link to="/contact" className="btn-text">Start a Conversation</Link>
                </div>
                <div className="btn-text-wrapper">
                <Link to="/about" className="btn-text">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="caracteristicas">
            <div className="element">
              <div className="card-item">
                <img className="icn-resize-icn-md" alt="Icn resize icn md" src={logopersblanco} />
                <p className="feature-title">
                  Preparing Your Financial
                  <br />
                  Future: Retirement Fund
                </p>
              </div>
            </div>
            <div className="card-item-wrapper">
              <div className="div">
                <img className="icn-resize-icn-md" alt="Icn resize icn md" src={logopersblanco} />
                <div className="h-feature-title">
                  Investment and Trading <br />
                  Opportunities
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="card-item-2">
                <img className="icn-resize-icn-md" alt="Icn resize icn md" src={logoperstransp} />
                <div className="text-wrapper">
                  Exploring Financial <br />
                  Analysis
                </div>
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="logo-capital-minds" alt="Logo capital minds" src={logocapminds} />
          </div>
        </div>
      </div>
    </div>
  )
}
