import { useState } from 'react'
import './styles.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Fotos do estabelecimento BarberHouse
  const images = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Espaço BarberHouse' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Interior da Barbearia' },
    { id: 3, src: '/images/gallery3.jpg', alt: 'Ambiente Acolhedor' },
    { id: 4, src: '/images/gallery4.jpg', alt: 'Instalações BarberHouse' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nosso Espaço</h2>
          <p className="section-subtitle">Conheça o ambiente acolhedor da BarberHouse</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
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

export default Gallery
