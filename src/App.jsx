import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Galeria } from './components/Galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Galeria />
      <Footer />
    </>
  )
}

export default App
