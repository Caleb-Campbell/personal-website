import React, { useState } from 'react'
import wedding from '../assets/wedding.jpg'
import bloom from '../assets/bloom.png'
import iceland from '../assets/iceland.jpg'



export default function AboutMenu() {

  const data = {
    about: {
      text: `Hey there! It's important to know who you'll be working with. First and foremost, I learned a long time ago that few things bring more satisfaction in life than doing a job well. I found an immense amount of this feeling while learning to code. I distinctly remember the first webpage, server, database I made, and the pride I felt in creating these things. `,
      img: iceland
    },
    life: {
      text: `I grew up and attended high school in Spokane, Washington. After Highschool, I volunteered to be a full-time Missionary for the Church of Jesus`,
      img: bloom
    },
    education: {
      text: `I began my post-highschool education at BYU-Idaho. I enrolled as a Web Development and Design major. I immediately loved the classes that taught me about the web and taught me programming skills. However, these classes were all isolated, and very slow. I never got to see the full picture, just tiny snippits. So in addition to my schoolwork and job, I began taking free courses online in HTML, CSS, and JavaScript. I began learning much more in my dorm than in the classroom, and decided I would go for a less-traditional means of education with the hope of learning more at a pace suited better for myself. I completed the 2 week free trial offered by BloomTech, and was immediately hooked. I felt in control of my learning pace and got the depth I wanted. I learned best practices for the industry, as well as how to contribute to projects and keep a timeline. `,
      img: bloom
    },
    experience: {
      text: `I have a lot of menial labor jobs, which doesn't look awesome, but hey I can work.`,
      img: bloom
    },
    skills: {
      text: `I use React, Express, and SQL to create projects that make me really happy.`,
      img: bloom
    },
  }
  const [textToUse, setTextToUse] = useState('about')

  const setMenu = (e) => {
    console.log(e.target.id)
    setTextToUse(e.target.id)
  }


  return (
    <div className='about-menu'>
      <div className='about-menu-navigation'>
        <ul>
          <li onClick={setMenu} id='about'>About</li>
          <li onClick={setMenu} id='education'>Education</li>
          <li onClick={setMenu} id='experience'>Experience</li>
          <li onClick={setMenu} id='skills'>Skills</li>
          <li onClick={setMenu} id='life'>Life</li>
        </ul>
      </div>
      <div className='about-menu-slide'>
        <p className='about-menu-slide-p'>{data[textToUse].text}</p>
      </div>
    </div>
  )
}


{/* <p></p>
</div>
<div className='about-img-wrap'>
  <img src={wedding} />
</div>
</section>
<section className='about-section-one'>
  <div className='about-word-wrap'>
    <h4>Education</h4>
    <p></p>
  </div>
  <div className='about-img-wrap'>
    <img src={bloom} /> */}