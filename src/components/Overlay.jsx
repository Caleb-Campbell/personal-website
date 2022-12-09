import React from 'react'
import '../styles/overlay.css'

import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

export default function Overlay() {
  return (
    <div className='overlay'>
        <a><img src={linkedin} /></a>
        <a><img src={github} /></a>
        <a><img src={instagram} /></a>
    </div>
  )
}
