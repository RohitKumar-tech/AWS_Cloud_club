import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background particles */}
      <div className="hero-bg-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Powered by AWS Cloud Clubs
        </div>

        <h1 className="hero-title">
          <span className="hero-title-aws">AWS</span>{' '}
          <span className="hero-title-cloud">Cloud Club</span>
          <br />
          <span className="hero-title-srm">SRM</span>
          <span className="hero-title-sub"> - Kattankulathur</span>
        </h1>

        <p className="hero-tagline">
          Build. Learn. Certify. Innovate.<br />
          Your gateway to cloud computing excellence at SRM.
        </p>

        <div className="hero-actions">
          <NavLink to="/join" className="hero-btn-primary">
            Join the Club <FaArrowRight />
          </NavLink>
          <NavLink to="/events" className="hero-btn-secondary">
            Explore Events
          </NavLink>
        </div>

        <div className="hero-stats-row">
          <div className="hero-stat">
            <span className="hero-stat-num">200+</span>
            <span className="hero-stat-label">Members</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-label">Events</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">50+</span>
            <span className="hero-stat-label">Certified</span>
          </div>
        </div>
      </div>

      <div className="hero-illustration">
        <div className="hero-cloud-graphic">
          <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C5AED" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C5AED" stopOpacity="0" />
                <stop offset="50%" stopColor="#7C5AED" stopOpacity="1" />
                <stop offset="100%" stopColor="#7C5AED" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Main cloud */}
            <ellipse cx="200" cy="120" rx="80" ry="55" fill="url(#cloudGrad)" />
            <ellipse cx="150" cy="138" rx="55" ry="40" fill="url(#cloudGrad)" />
            <ellipse cx="250" cy="138" rx="55" ry="40" fill="url(#cloudGrad)" />

            {/* Connection lines */}
            <line x1="200" y1="175" x2="100" y2="230" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="200" y1="175" x2="200" y2="240" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="200" y1="175" x2="300" y2="230" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Server nodes */}
            <rect x="76" y="220" width="48" height="32" rx="6" fill="rgba(124,90,237,0.3)" stroke="#7C5AED" strokeWidth="1.5" />
            <rect x="176" y="230" width="48" height="32" rx="6" fill="rgba(124,90,237,0.3)" stroke="#7C5AED" strokeWidth="1.5" />
            <rect x="276" y="220" width="48" height="32" rx="6" fill="rgba(124,90,237,0.3)" stroke="#7C5AED" strokeWidth="1.5" />

            {/* Labels */}
            <text x="100" y="241" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">EC2</text>
            <text x="200" y="251" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">S3</text>
            <text x="300" y="241" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">Lambda</text>

            {/* AWS logo text in cloud */}
            <text x="200" y="115" textAnchor="middle" fill="#FF9900" fontSize="18" fontWeight="bold" fontFamily="Arial">AWS</text>
            <text x="200" y="135" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">Cloud Club SRM</text>

            {/* Orbiting dots */}
            <circle cx="130" cy="85" r="4" fill="#7C5AED" opacity="0.7" />
            <circle cx="270" cy="90" r="3" fill="#a78bfa" opacity="0.5" />
            <circle cx="155" cy="60" r="2.5" fill="#7C5AED" opacity="0.6" />
            <circle cx="240" cy="55" r="3.5" fill="#a78bfa" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
