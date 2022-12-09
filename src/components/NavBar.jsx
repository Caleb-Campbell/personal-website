import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo/transparent-black.png'

function NavBar(props) {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} />
        </div>
        <div className='nav-buttons'>
            <div className='navigations'>
                <a>About</a>
                <a>Experience</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
            <button>Resume</button>
        </div>
    </nav>
  )
}

export default NavBar