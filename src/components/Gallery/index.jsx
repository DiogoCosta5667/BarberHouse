import { useState } from 'react'
import './styles.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Imagens placeholder - substituir pelos caminhos reais
  const images = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Corte 1' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Corte 2' },
    { id: 3, src: '/images/gallery3.jpg', alt: 'Corte 3' },
    { id: 4, src: '/images/gallery4.jpg', alt: 'Corte 4' },
    { id: 5, src: '/images/gallery5.jpg', alt: 'Corte 5' },
    { id: 6, src: '/images/gallery6.jpg', alt: 'Corte 6' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nosso Trabalho</h2>
          <p className="section-subtitle">Veja alguns dos nossos melhores trabalhos</p>
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
