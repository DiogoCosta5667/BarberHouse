import { useEffect, useState } from 'react'
import './styles.css'

function Hero() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className={`hero-content ${animate ? 'animate' : ''}`}>
          <h1 className="hero-title">
            <span className="subtitle">Bem-vindo à</span>
            BarberHouse
          </h1>
          <p className="hero-description">
            Estilo, Tradição e Excelência em cada Corte
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Marcar Horário</a>
            <a href="#services" className="btn btn-secondary">Ver Serviços</a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
