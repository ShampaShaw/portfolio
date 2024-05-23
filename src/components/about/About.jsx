import React from 'react'
import './about.css'
import linux from '../../assests/icons8-linux-48.png'
import tailwind from '../../assests/icons8-tailwind-css-48.png'
import postman from '../../assests/icons8-postman-api-64.png'

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__title'>About Me</h1>
      <div className='about__content'>
        <div className='aboutTech'>
          <h1>Tech Stack</h1>
          <div className='programming'>
            <h2>Programming Languages</h2>
            <div className='prog_img'>
              <img src='https://img.icons8.com/color/48/000000/javascript.png' alt='javascript' className='img_program'/>
              <p>JavaScript</p>
            </div>
            <div className='prog_img'>
              <img src='https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' alt='c++' className='img_program'/>
              <p>C++</p>  
            </div>
            <div className='prog_img'>
              <img src={linux} alt='python' className='img_program'/>
              <p>Linux Command Line</p>
              </div>
            </div>
            <div className='development'>
              <div className='frontend'>
                <h2>Frontend</h2>
                <div className='frontend_img'>
                  <img src='https://img.icons8.com/color/48/000000/html-5.png' alt='html' className='img_program'/>
                  <p>HTML</p>
                </div>
                <div className='frontend_img'>
                  <img src='https://img.icons8.com/color/48/000000/css3.png' alt='css' className='img_program'/>
                  <p>CSS</p>
                </div>
                <div className='frontend_img'>
                  <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' className='img_program'/>
                  <p>React</p>
                </div>
                <div className='frontend_img'>
                  <img src='https://img.icons8.com/color/48/000000/nextjs.png' alt='next' className='img_program'/> 
                  <p>Next.Js</p>
                </div>
                <div className='frontend_img'>
                  <img src='https://img.icons8.com/color/48/000000/typescript.png' alt='typescript' className='img_program'/>
                  <p>Type Script</p>
                </div>
                <div className='frontend_img'>
                  <img src={tailwind} alt='tailwind-css' className='img_program'/>
                  <p>Tailwind CSS</p>
                </div>
              </div>
              <div className='backend'>
                <h2>Backend</h2>
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='node' className='img_program'/>
                  <p>Node.js</p>
                </div>
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='mongo' className='img_program'/>
                  <p>MongoDB</p>
                </div>
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/express-js.png' alt='fexpress-js' className='img_program'/>
                  <p>Express.js</p>
                </div>
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/mysql.png' alt='mysql' className='img_program'/>
                  <p>MySQL</p>
                </div>
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/git.png' alt='git' className='img_program'/>
                 <p>Git</p>
                </div> 
                <div className='backend_img'>
                  <img src='https://img.icons8.com/color/48/000000/github.png' alt='github' className='img_program'/>
                  <p>GitHub</p>
                </div>
                <div className='backend_img'>
                  <img src={postman} alt='postgresql' className='img_program'/>
                  <p>Postman</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About