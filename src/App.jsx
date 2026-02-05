import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import OurSpace from './components/OurSpace'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './styles/App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <LoadingScreen />
      <div className={`app ${isVisible ? 'visible' : ''}`}>
        <Header />
        <Hero />
        <About />
        <Services />
        <OurSpace />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
