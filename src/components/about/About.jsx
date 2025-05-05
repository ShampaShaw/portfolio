import React from 'react';
import './about.css';
import linux from '../../assests/icons8-linux-48.png';
import tailwind from '../../assests/icons8-tailwind-css-48.png';
import postman from '../../assests/icons8-postman-api-64.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => {
  return (
    <div className='about'>
      <h1 className='about__title'>About Me</h1>
      <div className='about__content'>
        <div className='aboutTech'>
          <h2 className='section__title'>Tech Stack</h2>

          <div className='tech__section'>
            <h3 className='tech__subtitle'>Programming Languages</h3>
            <div className='tech__grid'>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/javascript.png' alt='JavaScript'/>
                <p>JavaScript</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' alt='C++'/>
                <p>C++</p>
              </div>
              <div className='tech__item'>
                <img src={linux} alt='Linux'/>
                <p>Linux CLI</p>
              </div>
            </div>
          </div>

          <div className='tech__section'>
            <h3 className='tech__subtitle'>Frontend</h3>
            <div className='tech__grid'>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/html-5.png' alt='HTML'/>
                <p>HTML</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/css3.png' alt='CSS'/>
                <p>CSS</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='React'/>
                <p>React</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/nextjs.png' alt='Next.js'/>
                <p>Next.js</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/typescript.png' alt='TypeScript'/>
                <p>TypeScript</p>
              </div>
              <div className='tech__item'>
                <img src={tailwind} alt='Tailwind CSS'/>
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className='tech__section'>
            <h3 className='tech__subtitle'>Backend & Tools</h3>
            <div className='tech__grid'>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='Node.js'/>
                <p>Node.js</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='MongoDB'/>
                <p>MongoDB</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/express-js.png' alt='Express.js'/>
                <p>Express.js</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/mysql.png' alt='MySQL'/>
                <p>MySQL</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/git.png' alt='Git'/>
                <p>Git</p>
              </div>
              <div className='tech__item'>
                <img src='https://img.icons8.com/color/48/000000/github.png' alt='GitHub'/>
                <p>GitHub</p>
              </div>
              <div className='tech__item'>
                <img src={postman} alt='Postman'/>
                <p>Postman</p>
              </div>
            </div>
          </div>

          <div className="coding__profiles">
            <h2 className="section__title">Coding Profiles</h2>

            <div className="profiles__grid">
              {/* LeetCode */}
              <div className="profile__item">
                <a 
                  href="https://leetcode.com/u/Shampa_18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
                    alt="LeetCode"
                  />
                  <p>LeetCode</p>
                </a>
              </div>

              {/* Codeforces */}
              <div className="profile__item">
                <a 
                  href="https://codeforces.com/profile/your_codeforces_username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <img 
                    src="https://sta.codeforces.com/s/28040/images/codeforces-sponsored-by-ton.png" 
                    alt="Codeforces"
                  />
                  <p>Codeforces</p>
                </a>
              </div>
            </div>
          </div>

          <div className="education">
            <h2 className="section__title">Educational Background</h2>
            <div className="education__grid">
              <div className="education__item">
                <i className="fas fa-graduation-cap education__icon"></i>
                <h3>Jadavpur University, Kolkata, India</h3>
                <p>Bachelor of Engineering</p>
                <p>2021–2025</p>
                <p>SGPA: 7.96</p>
              </div>
              <div className="education__item">
                <i className="fas fa-school education__icon"></i>
                <h3>Andrew's High School, Kolkata, India</h3>
                <p>WBBHSE (Class XII)</p>
                <p>2019–2020</p>
                <p>Score: 88.6%</p>
              </div>
              <div className="education__item">
                <i className="fas fa-book-open education__icon"></i>
                <h3>MMUV, Kolkata, India</h3>
                <p>WBBSE (Class X)</p>
                <p>2017–2018</p>
                <p>Score: 81.85%</p>
              </div>
            </div>
          </div>






        </div>
      </div>
    </div>
  );
};

export default About;