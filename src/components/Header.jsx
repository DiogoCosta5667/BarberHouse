import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="BarberHouse Logo" />
          </div>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a onClick={() => scrollToSection('hero')}>Início</a>
            <a onClick={() => scrollToSection('services')}>Serviços</a>
            <a onClick={() => scrollToSection('gallery')}>Galeria</a>
            <a onClick={() => scrollToSection('about')}>Sobre</a>
            <a onClick={() => scrollToSection('contact')}>Contacto</a>
          </nav>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
