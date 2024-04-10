import React from 'react'
import './project.css'
import shareme from '../../assests/shareme.png'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects-containers'>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <img src={shareme} alt='shareme' className='projects_container_img'/>
        </div>
        <div className='projects_container_right'>Desc</div>
      </div>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <h2>Projects2</h2>
        </div>
        <div className='projects_container_right'>Desc</div>
      </div>
      <div className='projects_container'>
        <div className='projects_container_left'>
          <h2>Projects3</h2>
        </div>
        <div className='projects_container_right'>Desc</div>
      </div>
      </div>
    </div>
  )
}

export default Projects