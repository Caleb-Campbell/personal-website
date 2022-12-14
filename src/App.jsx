import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Overlay from './components/Overlay'
import ResumeModal from './components/ResumeModal'
import About from './components/About'
import Projects from './components/Projects'



function App() {

  console.log(window)

  useEffect(()=> {
    windowSize()
  },[])


  const [resumeModal, setResumeModal] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const windowSize = () => { setWindowWidth(window.innerWidth)
  windowWidth < 500 ? setMobileView(true) : setMobileView(false)
  }

  useEffect(()=> {
    window.addEventListener('resize', windowSize)

    return ()=> {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <div className="App">
      {resumeModal && (<ResumeModal resumeModal={resumeModal} setResumeModal={setResumeModal} />)}
    <Overlay />
    <NavBar mobileView={mobileView} resumeModal={resumeModal} setResumeModal={setResumeModal} />
    <TitlePage />
    <About />
    <Projects />
    </div>
  )
}

export default App
