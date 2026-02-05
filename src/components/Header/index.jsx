import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="BarberHouse Logo" />
          </Link>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Início</Link>
            <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
            <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
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
