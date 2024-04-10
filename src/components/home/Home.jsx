import React from 'react'
import './home.css'
import shampa from '../../assests/shampa.jpg'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__left'>
        <h1 className='home__title'>Hello, I'm Shampa</h1>
        <p className='home__desc'>A passionate full-stack developer with a knack for turning innovative ideas into robust and scalable software solutions. My journey in the world of programming began with a love for problem-solving, and it has since evolved into a diverse skill set covering both frontend and backend technologies.</p>
      </div>
      <div className='home__right'>
        <img src={shampa} alt='home' className='home__img'/>
      </div>
    </div>
  )
}

export default Home