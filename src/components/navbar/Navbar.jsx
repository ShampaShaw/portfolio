import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import dark from '../../assests/nightmode.png'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='navbar__left'>Logo</div>
      <div className='navbar__right'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/projects' className='link'>Projects</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
        <img src={dark} alt='darkmode' className='imgmode'/>
    </div>

    </div>
  )
}

export default Navbar