import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BarberHouse</h3>
            <p>A melhor experiência em barbearia. Estilo, tradição e qualidade desde 2015.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Rua Principal, 123</p>
            <p>1000-000 Lisboa</p>
            <p>+351 912 345 678</p>
            <p>geral@barberhouse.pt</p>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} BarberHouse. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
