import { useState } from 'react'
import './styles.css'

function OurSpace() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const images = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Espaço BarberHouse' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Interior da Barbearia' },
    { id: 3, src: '/images/gallery3.jpg', alt: 'Ambiente Acolhedor' },
    { id: 4, src: '/images/gallery4.jpg', alt: 'Instalações BarberHouse' },
    { id: 5, src: '/images/gallery5.jpg', alt: 'Detalhes do Espaço' },
    { id: 6, src: '/images/gallery6.jpg', alt: 'Ambiente Premium' },
  ]

  return (
    <section id="space" className="our-space">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nosso Espaço</h2>
          <p className="section-subtitle">Conheça o ambiente acolhedor da BarberHouse</p>
        </div>
        
        <div className="space-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="space-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="space-overlay">
                <span>Ver mais</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default OurSpace
