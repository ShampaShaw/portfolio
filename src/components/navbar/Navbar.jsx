import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menu from '../../assests/menu.png';

const link = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: 'Projects',
    path: '/projects'
  },
  {
    id: 3,
    title: 'About',
    path: '/about'
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact'
  }
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__left'>Logo</div>
      <div className='navbar__right'>
        <div className='link'>
          {link.map(item => (
            <Link
              to={item.path}
              key={item.id}
              className='navbar__right-item'
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <img
          src={menu}
          alt='menu'
          className='menu'
          onClick={() => setShowLinks(!showLinks)}
        />
      {showLinks && (
        <div className='navbar__right-mobile'>
          {link.map(item => (
            <Link
              to={item.path}
              key={item.id}
              className='navbar__right-item'
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
