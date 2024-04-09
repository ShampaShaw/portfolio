import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__left'>
        <h1 className='home__title'>Hello, I'm Shampa</h1>
        <p className='home__desc'>A passionate full-stack developer with a knack for turning innovative ideas into robust and scalable software solutions. My journey in the world of programming began with a love for problem-solving, and it has since evolved into a diverse skill set covering both frontend and backend technologies.</p>
      </div>
      <div className='home__right'>
        <img src="https://camo.githubusercontent.com/55bf1c5bb8719075846b61ce1df1cf69528f02d1c23d6a32728a41f1479710c3/68747470733a2f2f737465616d75736572696d616765732d612e616b616d616968642e6e65742f7567632f313633313934373634383936343738353437342f383143424131353137383436364444343731393541323339323332323032453738393837423731342f3f696d773d36333726696d683d33353826696d613d66697426696d706f6c6963793d4c6574746572626f7826696d636f6c6f723d253233303030303030266c6574746572626f783d74727565" alt='home' className='home__img'/>
      </div>
    </div>
  )
}

export default Home