import React from 'react';
import './home.css';
import shampa from '../../assests/shampa.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const text = "A passionate full-stack developer with a knack for turning innovative ideas into robust and scalable software solutions. My journey in the world of programming began with a love for problem-solving, and it has since evolved into a diverse skill set covering both frontend and backend technologies.";

  return (
    <div className='home' id='home'>
      {/* Social Links on the Left */}
      <div className="contact__links vertical">
        <a href="mailto:shampashaw088@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/shampa-shaw-3865ab236/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ShampaShaw" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/Shaw_shampa088" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Content in the Center */}
      <motion.div
        className='home__center'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='home__title'>Hello, I'm Shampa</h1>
        <motion.div className='animated__text'>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.015,
                duration: 0.5,
                type: "spring",
              }}
              className="rainbow__letter"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Image on the Right */}
      <motion.div
        className='home__right'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={shampa}
          alt='home'
          className='home__img'
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
