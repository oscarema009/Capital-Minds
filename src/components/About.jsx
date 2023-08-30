import React from 'react'
import logopersblanco from "../assets/Home/logopersblanco.svg"
import image9 from "../assets/About/image9.png"
import TrendingInvestments from './TrendingInvestments'
import "./About.css"

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="overlap">
          <div className="overlap-group">
            <div className="contenido">
              <div className="row">
                <div className="col-md">
                  <div className="card-item">
                    <div className="flex-row">
                      <img className="icn-resize-icn-xl" alt="Icn resize icn xl" src={logopersblanco} />
                      <div className="div">
                        <div className="feature-title">About Capital Mind</div>
                      </div>
                    </div>
                    <p className="paragraph">
                      At Capital Mind, we are dedicated to empowering you in the world of finance. Our core
                      values—integrity, experience, and <br />
                      innovation—drive our commitment to your financial journey.
                    </p>
                  </div>
                </div>
                <div className="card-item-wrapper">
                  <div className="card-item-2">
                    <div className="flex-row">
                      <img className="icn-resize-icn-xl" alt="Icn resize icn xl" src={logopersblanco} />
                      <div className="div">
                        <div className="feature-title">Invest in your future</div>
                      </div>
                    </div>
                    <p className="text-wrapper">
                      We understand that your retirement fund is the culmination of hard work. Our experts ensure that
                      your funds grow over <br />
                      time.
                    </p>
                  </div>
                </div>
                <div className="card-item-wrapper">
                  <div className="card-item-2">
                    <div className="flex-row">
                      <img className="icn-resize-icn-xl" alt="Icn resize icn xl" src={logopersblanco} />
                      <div className="div">
                        <p className="feature-title">Taking Advantage of Financial Opportunities</p>
                      </div>
                    </div>
                    <p className="p">
                      In the realm of finance, opportunities for growth abound. Join us at Capital Mind and let&#39;s
                      pave the path to financial success <br />
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="titulo">
              <div className="main-content-wrapper">
                <div className="main-content">
                  <p className="feature-section">
                    Boost your Investments with <br />
                    Capital Mind
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="metricas">
            <img className="image" alt="Image" src={image9} />
          </div>
        </div>
      </div>
    </div>
  )
}
