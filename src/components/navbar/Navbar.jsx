import React, { useState } from 'react';
import './navbar.css';
import menu from '../../assests/menu.png';

const links = [
  { id: 1, title: 'Home', href: '#home' },
  { id: 2, title: 'Projects', href: '#projects' },
  { id: 3, title: 'About', href: '#about' },
  { id: 4, title: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <div className='logo'>
          <h1 className="logo-text">Welcome</h1>
        </div>
      </div>
      <div className='navbar__right'>
        <div className='link'>
          {links.map(item => (
            <a
              href={item.href}
              key={item.id}
              className='navbar__right-item'
              onClick={() => setShowLinks(false)} // close mobile menu on click
            >
              {item.title}
            </a>
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
        <div className='navbar__links-mobile'>
          {links.map(item => (
            <a
              href={item.href}
              key={item.id}
              className='navbar__right-item'
              onClick={() => setShowLinks(false)} // close menu
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
