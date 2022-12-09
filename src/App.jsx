import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Overlay from './components/Overlay'

function App() {

  return (
    <div className="App">
    <Overlay />
    <NavBar />
    <TitlePage />
    </div>
  )
}

export default App
