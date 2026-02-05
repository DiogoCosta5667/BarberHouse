import { useState } from 'react'
import './styles.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Fotos dos cortes - adicionar imagens aqui
  const images = [
    // Exemplo: { id: 1, src: '/images/corte1.jpg', alt: 'Corte Moderno' },
    // Adiciona as tuas fotos de cortes aqui
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Trabalhos</h2>
          <p className="section-subtitle">Veja alguns dos nossos melhores cortes</p>
        </div>
        
        {images.length > 0 ? (
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
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ color: '#aaa', fontSize: '1.2rem' }}>
              Em breve adicionaremos fotos dos nossos trabalhos!
            </p>
          </div>
        )}
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
