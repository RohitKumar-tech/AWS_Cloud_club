import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <div className="cta-container">
        <div className="cta-badge">We are Open!</div>
        <h2 className="cta-title">Ready to Dive into the Cloud?</h2>
        <p className="cta-desc">
          Join AWS Cloud Club SRM today and unlock a world of cloud opportunities. Membership is free for all SRM students.
        </p>
        <div className="cta-actions">
          <NavLink to="/join" className="cta-btn-primary">
            Join Now <FaArrowRight />
          </NavLink>
          <a
            href="https://www.meetup.com/aws-cloud-club-srm/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-secondary"
          >
            Find us on Meetup
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
