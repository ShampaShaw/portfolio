import React from 'react'
import './project.css'
import shareme from '../../assests/shareme.png'
import creativity from '../../assests/creativity-odyssey.png'
import weather from '../../assests/weather.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__wrapper'>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <img src={shareme} alt='shareme' className='projects_container_img'/>
        </div>
        <div className='projects_container_right'>
          <h1>ShareMe</h1>
          <p>A social CRUD application allowing users to post, edit, delete, and update content and user authentication.</p>
          <li>Implemented Google authentication for secure login. Utilized Sanity as the backend CMS.</li>
          <li>Integrated commenting feature for users to engage with posts.</li>
          <p className='tech'>TechStack: ReactJS, Tailwind CSS, Google OAuth, Sanity Client</p>
          <div className='web_link'>
            <Link to='https://scjsm.netlify.app' className='web_link_item'>Website</Link>
            <Link to='https://github.com/ShampaShaw/sc' className='web_link_item'>Github</Link>
          </div>
        </div>
      </div>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <img src={creativity} alt='creativity' className='projects_container_img'/>
        </div>
        <div className='projects_container_right'>
          <h1>Creativity-Odyssey</h1>
          <p>A social CRUD application enabling the users to add posts and share their ideas.</p>
          <li>Built a modern blog website using Next.js (React framework) for the frontend, Node.js for the backend, and TypeScript for improved code quality and maintainability.</li>
          <li>Secured user access with Next.js Authentication for a safe and reliable login experience.</li>
          <p className='tech'>TechStack: NextJS, CSS, NodeJS, TypeScript, MongoDB, Auth.js</p>
          <div className='web_link'>
            <Link to='https://creativity-odyssey-x7x6.vercel.app/' className='web_link_item'>Website</Link>
            <Link to='https://github.com/ShampaShaw/creativity-odyssey' className='web_link_item'>Github</Link>
          </div>
        </div>
      </div>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <img src={weather} alt='weather' className='projects_container_img'/>
        </div>
        <div className='projects_container_right'>
          <h1>Weather App</h1>
          <p>Develop a live weather updates, search, and stay informed effortlessly.</p>
          <li>Crafted a responsive weather update website featuring live weather information and a search bar for location-based forecasts.</li>
          <li>Demonstrated frontend skills through intuitive design and user-friendly interface catering to various devices.</li>
          <p className='tech'>TechStack: ReactJS, CSS, OpenWeatherMap API</p>
          <div className='web_link'>
            <Link to='https://github.com/ShampaShaw/weatherapp_backend' className='web_link_item'>Github</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects