import React from 'react'
import '../styles/overlay.css'

import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

export default function Overlay() {
  return (
    <div className='overlay'>
        <a href='https://www.linkedin.com/in/calebcampbell-/'><img src={linkedin} /></a>
        <a href='https://github.com/Caleb-Campbell'><img src={github} /></a>
        <a href='https://www.instagram.com/_caleb_campbell/'><img src={instagram} /></a>
    </div>
  )
}
