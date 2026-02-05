import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/contacto" className="btn btn-primary">Marcar Horário</Link>
            <Link to="/servicos" className="btn btn-secondary">Ver Serviços</Link>
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
