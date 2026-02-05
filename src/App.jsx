import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import OurSpacePage from './pages/OurSpacePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import './styles/App.css'

function App() {
  return (
    <Router>
      <LoadingScreen />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/nosso-espaco" element={<OurSpacePage />} />
          <Route path="/trabalhos" element={<GalleryPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
