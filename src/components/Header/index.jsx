import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import './styles.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
      document.body.classList.add('light-mode')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('light-mode')
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

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
            <a onClick={() => scrollToSection('about')}>Sobre</a>
            <a onClick={() => scrollToSection('services')}>Serviços</a>
            <a onClick={() => scrollToSection('space')}>Nosso Espaço</a>
            <a onClick={() => scrollToSection('gallery')}>Trabalhos</a>
            <a onClick={() => scrollToSection('contact')}>Contacto</a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
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
