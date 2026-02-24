import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/resources', label: 'Get Certified' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/join', label: 'Join' },
  ];

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-aws">AWS</span>
          <span className="brand-cc">Cloud Club</span>
          <span className="brand-srm">SRM</span>
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.meetup.com/aws-cloud-club-srm/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            onClick={closeMenu}
          >
            Grab Opportunity
          </a>
        </div>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;
