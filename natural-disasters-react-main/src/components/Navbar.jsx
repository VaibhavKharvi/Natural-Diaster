import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Map pin shape */}
              <path d="M18 0C8.06 0 0 8.06 0 18C0 31.5 18 42 18 42C18 42 36 31.5 36 18C36 8.06 27.94 0 18 0Z" fill="#1a3c2e"/>
              {/* Shield shape */}
              <path d="M18 6L9 10V18C9 23.1 13.1 27.9 18 29C22.9 27.9 27 23.1 27 18V10L18 6Z" fill="#2d6a4f"/>
              <path d="M18 8L11 11.5V18C11 22.2 14.1 26.2 18 27.2C21.9 26.2 25 22.2 25 18V11.5L18 8Z" fill="#52b788"/>
              {/* Warning triangle */}
              <path d="M18 12L12.5 21H23.5L18 12Z" fill="white"/>
              <rect x="17.2" y="15.5" width="1.6" height="3.5" rx="0.8" fill="#1a3c2e"/>
              <circle cx="18" cy="20.2" r="0.9" fill="#1a3c2e"/>
            </svg>
            <span className="brand-text">
              <span className="brand-dark">Disaster</span><span className="brand-green">Ready</span>
            </span>
          </Link>
        </div>
        <div className={`nav-menu${isOpen ? ' nav-menu-open' : ''}`}>
          <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/disasters" className={`nav-link${location.pathname === '/disasters' ? ' active' : ''}`} onClick={closeMenu}>Disasters</Link>
          <Link to="/preparedness" className={`nav-link${location.pathname === '/preparedness' ? ' active' : ''}`} onClick={closeMenu}>Preparedness</Link>
          <Link to="/quiz" className={`nav-link${location.pathname === '/quiz' ? ' active' : ''}`} onClick={closeMenu}>Quiz</Link>
          <Link to="/resources" className={`nav-link${location.pathname === '/resources' ? ' active' : ''}`} onClick={closeMenu}>Resources</Link>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
