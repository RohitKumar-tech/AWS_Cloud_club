import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Credits from '../Credits/Credits';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Branding + Contact */}
          <div className="footer-col">
            <div className="footer-brand">
              <span className="footer-aws">AWS</span>
              <span className="footer-cc"> Cloud Club </span>
              <span className="footer-srm">SRM</span>
            </div>
            <p className="footer-tagline">
              Empowering students at SRM Institute of Science and Technology, Kattankulathur, to learn, build, and innovate on the cloud.
            </p>
            <div className="footer-contact">
              <a href="mailto:awsccsrm@gmail.com" className="footer-contact-item">
                <FaEnvelope /> awsccsrm@gmail.com
              </a>
              <a href="tel:+91-000-000-0000" className="footer-contact-item">
                <FaPhone /> +91 000 000 0000
              </a>
            </div>
          </div>

          {/* Column 2: Community */}
          <div className="footer-col">
            <h4 className="footer-col-title">Community</h4>
            <div className="footer-links">
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="/about" className="footer-link">About</NavLink>
              <NavLink to="/events" className="footer-link">Events</NavLink>
              <NavLink to="/resources" className="footer-link">Get Certified</NavLink>
              <NavLink to="/gallery" className="footer-link">Gallery</NavLink>
              <NavLink to="/join" className="footer-link">Join Us</NavLink>
            </div>
          </div>

          {/* Column 3: Contribute */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get Involved</h4>
            <div className="footer-links">
              <a href="https://www.meetup.com/aws-cloud-club-srm/" target="_blank" rel="noopener noreferrer" className="footer-link">Join Meetup</a>
              <a href="mailto:awsccsrm@gmail.com" className="footer-link">Host an Event</a>
              <a href="mailto:awsccsrm@gmail.com" className="footer-link">Present a Topic</a>
              <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="footer-link">AWS Training</a>
              <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener noreferrer" className="footer-link">AWS Certification</a>
            </div>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/aws-cloud-club-srm" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/aws-cloud-club-srm" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://instagram.com/awsccsrm" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} AWS Cloud Club SRM &mdash; Kattankulathur. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            AWS Cloud Club SRM is an independent student community. Not affiliated with Amazon Web Services.
          </p>
        </div>
      </div>
      <Credits />
    </footer>
  );
};

export default Footer;
