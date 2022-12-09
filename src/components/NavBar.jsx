import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo/transparent-black.png'

function NavBar({resumeModal, setResumeModal}) {

  const handleResumeClick = () => {
    setResumeModal(!resumeModal)
  }

  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} />
        </div>
        <div className='nav-buttons'>
            <div className='navigations'>
                <a href='#about'>About</a>
                <a>Experience</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
            <button onClick={handleResumeClick}>Resume</button>
        </div>
    </nav>
  )
}

export default NavBar