import { useEffect, useState } from 'react'
import './styles.css'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="barber-pole">
          <div className="pole-stripe"></div>
          <div className="pole-stripe"></div>
          <div className="pole-stripe"></div>
        </div>
        <div className="scissors-animation">
          <div className="scissors">✂️</div>
        </div>
        <h1 className="loading-title">BarberHouse</h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
