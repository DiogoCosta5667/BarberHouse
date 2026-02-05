import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './styles.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Adicionar lógica de envio aqui
    alert('Mensagem enviada! Entraremos em contacto em breve.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contacto</h2>
          <p className="section-subtitle">Estamos prontos para cuidar do seu visual</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Localização</h3>
              <p>Rua Principal, 123<br />1000-000 Lisboa</p>
            </div>
            
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Telefone</h3>
              <p>+351 912 345 678</p>
            </div>
            
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>geral@barberhouse.pt</p>
            </div>
            
            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>Horário</h3>
              <p>Segunda a Sábado<br />09:00 - 20:00</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um Serviço</option>
                <option value="corte">Corte de Cabelo</option>
                <option value="barba">Barba & Bigode</option>
                <option value="lavagem">Lavagem Completa</option>
                <option value="tratamento">Tratamentos</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensagem (opcional)"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
