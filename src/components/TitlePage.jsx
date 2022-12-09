import React from 'react'
import '../styles/title-page.css'

export default function TitlePage() {
  return (
    <div className='title-page'>
        <h3>Hi, my name is</h3>
        <h1>Caleb Campbell</h1>
        <h3>and I am a</h3>
        <h2>Full Stack Web Developer.</h2>
        <p> I am a developer with a passion for creating real-world applications to help real-world organizations. I'm a fast, effiecient learner with a no-nonsense mentality. I am most familiar with JavaScript, React, ExpressJS, and SQL, but I am always eager to learn new skills, especially when they meet YOUR needs. Lets get in touch!</p>
        <button className='contact-me'>Contact Me</button>
    </div>
  )
}
