import React, {useState} from 'react'
import '../styles/projects.css'

import regolith from '../assets/regolith.png'
import nasa from '../assets/nasa.png'
import auth from '../assets/auth.png'
import pizza from '../assets/pizza.png'

const projects = [
    {
        name: 'Organizational App',
        description: `A scratch-built organization app I continue to develop. It's purpose is to allow users to create sticky notes and other widgets, save their information, and pull their saved notes and widgets from a database. I am currently looking at free hosting options for my database and server.`,
        img: regolith,
        link: `https://github.com/Caleb-Campbell/word-processor`,
        skills: ['HTML', 'CSS', 'React', 'Hooks', 'API', 'SQLite3','NodeJS', 'ExpressJS']
    },
    {
        name: 'Nasa Photo of the Day',
        description: `A scratch-built website displaying the NASA photo of the day from the official NASA API. This project shows proficiency in using API's and styling principles. One of the first projects I made.`,
        img: nasa,
        link: `https://github.com/Caleb-Campbell/nasa-photo-of-the-day`,
        skills: ['HTML', 'CSS', 'React', 'CRUD API', 'Axios']

    }, {
        name: 'Client Authentication Project',
        description: `A website scratch-built, with login-authentication features. This project demonstrates technical skills such as form management, API CRUD handling, React-Router, JWT storing, and fetching data from an API using authenticated headers.`,
        img: auth,
        link: `https://github.com/Caleb-Campbell/web-module-project-client-auth`,
        skills: ['HTML', 'CSS', 'React', 'SQLite3', 'KnexJS', 'NodeJS', 'ExpressJS', 'React-Router']

    },
    {
        name: `Mock Pizza Ordering Site`,
        description: `A Cypress-tested pizza website to show expertise in React, React Router, Form Management, API posting, and State. The Site was built from scratch, following a wireframe. All of the styles, JSX, and logic were created by Caleb Campbell for the purpose of the Class.`,
        img: pizza,
        link:  `https://github.com/Caleb-Campbell/web-sprint-challenge-single-page-applications`,
        skills: ['HTML', 'CSS', 'React', 'React-Router']

    }
]


export default function Projects() {

    const [data, setData] = useState(projects)

  return (
    <div className='projects'>
        <div className='project-wrapper'>
        {data.map(item => {
            return (
                <div className='project'>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                </div>
            )
        })}
        </div>


    </div>
  )
}
