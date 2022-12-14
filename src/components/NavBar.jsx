import React, {useState} from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo/transparent-black.png'
import hamburger from '../assets/hamburger.png'

function NavBar({resumeModal, setResumeModal, mobileView}) {

  const [openMenu, setOpenMenu] = useState(false)

  const handleResumeClick = () => {
    setResumeModal(!resumeModal)
  }

    const toggleMenu = () => {
      setOpenMenu(!openMenu)
    }

  return (
    <nav>
        <div className='nav-logo'>
            <img  src={logo} />
        </div>
        {
          mobileView && (
            <div className='mobile-menu'>
              <img onClick={toggleMenu} className='hamburger' src={hamburger} />
            </div>
          )
        }
        {
          openMenu && 
            (
            <div className="mobile-navigations">
                <a href='#about'>About</a>
                <a>Experience</a>
                <a>Work</a>
                <a>Contact</a>
                <button onClick={toggleMenu} className='close-mobile'>Close</button>
            </div>
            )
          
        }
        {
        !mobileView && (
        <div className='nav-buttons'>
            <div className='navigations'>
                <a href='#about'>About</a>
                <a>Experience</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
            <button onClick={handleResumeClick}>Resume</button>
        </div>
        )
        }
    </nav>
  )
}

export default NavBar