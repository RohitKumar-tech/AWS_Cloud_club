import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiMeetup } from 'react-icons/si';
import SectionHeader from '../SectionHeader/SectionHeader';
import './JoinGuide.css';

const steps = [
  {
    step: '01',
    icon: <FaWhatsapp size={36} />,
    title: 'Join WhatsApp Community',
    desc: 'Get instant updates, announcements, and connect with fellow cloud enthusiasts by joining our WhatsApp community group.',
    cta: 'Join WhatsApp',
    link: 'https://wa.me/910000000000',
    color: '#25D366',
  },
  {
    step: '02',
    icon: <SiMeetup size={36} />,
    title: 'Follow on Meetup',
    desc: 'Stay informed about upcoming events, workshops, and bootcamps by following our chapter on Meetup.',
    cta: 'Join on Meetup',
    link: 'https://www.meetup.com/aws-cloud-club-srm/',
    color: '#ED1C40',
  },
  {
    step: '03',
    icon: <FaInstagram size={36} />,
    title: 'Follow Our Socials',
    desc: 'Follow us on Instagram and LinkedIn for event highlights, learning resources, and community stories.',
    cta: 'Follow on Instagram',
    link: 'https://instagram.com/awsccsrm',
    color: '#E1306C',
  },
];

const JoinGuide = () => {
  return (
    <section className="join-section">
      <div className="join-container">
        <SectionHeader
          title="Join AWS Cloud Club SRM"
          subtitle="3 simple steps to become a member"
        />

        <div className="join-steps">
          {steps.map((step, i) => (
            <div key={i} className="join-step-card">
              <div className="join-step-number">{step.step}</div>
              <div className="join-step-icon" style={{ color: step.color }}>
                {step.icon}
              </div>
              <h3 className="join-step-title">{step.title}</h3>
              <p className="para join-step-desc">{step.desc}</p>
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="join-step-btn"
                style={{ '--btn-color': step.color }}
              >
                {step.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="join-note">
          <p>
            Membership is <strong>free</strong> for all SRM students. No registration fees, no application — just show up and learn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinGuide;
