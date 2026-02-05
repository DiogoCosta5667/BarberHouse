import { FaAward, FaClock, FaUsers } from 'react-icons/fa'
import './styles.css'

function About() {
  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Clientes Satisfeitos' },
    { icon: <FaClock />, value: '10+', label: 'Anos de Experiência' },
    { icon: <FaAward />, value: '100%', label: 'Dedicação' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nós</h2>
            <p className="about-description">
              A <strong>BarberHouse</strong> é mais do que uma barbearia - é um espaço onde tradição 
              encontra modernidade. Com anos de experiência e uma equipa dedicada de profissionais, 
              oferecemos serviços de excelência para o homem contemporâneo que valoriza estilo e qualidade.
            </p>
            <p className="about-description">
              Utilizamos apenas produtos premium e técnicas atualizadas para garantir que cada cliente 
              saia satisfeito e com um visual impecável. O seu estilo é a nossa paixão.
            </p>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
