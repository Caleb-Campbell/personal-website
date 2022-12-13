import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Overlay from './components/Overlay'
import ResumeModal from './components/ResumeModal'
import About from './components/About'



function App() {

  console.log(window)

  const [resumeModal, setResumeModal] = useState(false)
  const [mobileView, setMobileView] = useState(false)


  return (
    <div className="App">
      {resumeModal && (<ResumeModal resumeModal={resumeModal} setResumeModal={setResumeModal} />)}
    <Overlay />
    <NavBar resumeModal={resumeModal} setResumeModal={setResumeModal} />
    <TitlePage />
    <About />
    </div>
  )
}

export default App
