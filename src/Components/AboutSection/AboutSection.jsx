import React from 'react';
import Lottie from 'lottie-react';
import aboutAnimation from '../../assets/animation/about.json';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-col-text">
          <div className="about-block">
            <h3 className="side-head about-subhead">Who We Are</h3>
            <p className="para">
              AWS Cloud Club SRM is a student-run technology community at SRM Institute of Science and Technology, Kattankulathur. We are an official AWS Cloud Clubs chapter — part of a global network of student groups supported by Amazon Web Services.
            </p>
            <p className="para" style={{ marginTop: '12px' }}>
              Founded by passionate cloud enthusiasts, our club is open to all SRM students regardless of branch or year. We believe cloud computing is the backbone of the modern world, and we're here to make it accessible to everyone.
            </p>
          </div>

          <div className="about-block" style={{ marginTop: '32px' }}>
            <h3 className="side-head about-subhead">What We Do</h3>
            <p className="para">
              We organise hands-on workshops on AWS services, certification bootcamps for AWS Cloud Practitioner and beyond, industry speaker sessions, hackathons, and networking events — all designed to bridge the gap between academic learning and industry needs.
            </p>
            <div className="about-tags">
              {['Workshops', 'Hackathons', 'Speaker Sessions', 'Cert Bootcamps', 'Networking', 'Projects'].map((t, i) => (
                <span key={i} className="about-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-col-visual">
          <div className="about-lottie-wrapper">
            <Lottie animationData={aboutAnimation} loop={true} style={{ width: '100%', maxWidth: 380 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
