import React from 'react'
import '../styles/about.css'
import wedding from '../assets/wedding.jpg'
import bloom from '../assets/bloom.png'

export default function About() {
  return (
    <div id='about' className='about'>
      <section className='about-section-one'>

      <div className='about-word-wrap'>

        <h4>About Me</h4>
        <p>Hey there! It's important to know who you'll be working with. First and foremost, I learned a long time ago that few things bring more satisfaction in life than doing a job well. I found an immense amount of this feeling while learning to code. I distinctly remember the first webpage, server, database I made, and the pride I felt in creating these things.</p>
      </div>
      <div className='about-img-wrap'>
        <img src={wedding} />
      </div>
      </section>
      <section className='about-section-one'>
        <div className='about-word-wrap'>
          <h4>Education</h4>
          <p>I began my post-highschool education at BYU-Idaho. I enrolled as a Web Development and Design major. I immediately loved the classes that taught me about the web and taught me programming skills. However, these classes were all isolated, and very slow. I never got to see the full picture, just tiny snippits. So in addition to my schoolwork and job, I began taking free courses online in HTML, CSS, and JavaScript. I began learning much more in my dorm than in the classroom, and decided I would go for a less-traditional means of education with the hope of learning more at a pace suited better for myself. I completed the 2 week free trial offered by BloomTech, and was immediately hooked. I felt in control of my learning pace and got the depth I wanted. I learned best practices for the industry, as well as how to contribute to projects and keep a timeline. </p>
        </div>
        <div className='about-img-wrap'>
          <img src={bloom} />
        </div>
      </section>
    </div>
  )
}
