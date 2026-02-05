import { FaCut, FaShower, FaPaintBrush, FaSpa } from 'react-icons/fa'
import './styles.css'

function Services() {
  const services = [
    {
      icon: <FaCut />,
      title: 'Corte de Cabelo',
      description: 'Cortes modernos e clássicos com técnicas profissionais',
      price: 'Desde 15€'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Barba & Bigode',
      description: 'Aparar, modelar e cuidados especiais para a barba',
      price: 'Desde 10€'
    },
    {
      icon: <FaShower />,
      title: 'Lavagem Completa',
      description: 'Lavagem profissional com produtos premium',
      price: 'Desde 8€'
    },
    {
      icon: <FaSpa />,
      title: 'Tratamentos',
      description: 'Tratamentos capilares e faciais personalizados',
      price: 'Desde 20€'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Qualidade e profissionalismo em cada detalhe</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
