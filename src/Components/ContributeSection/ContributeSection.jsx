import React from 'react';
import { FaChalkboardTeacher, FaMicrophone } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader';
import BlurCard from '../BlurCard/BlurCard';
import './ContributeSection.css';

const ways = [
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: 'Host an Event',
    desc: 'Have an idea for a workshop, hackathon, or study group? Bring it to life with our club resources and community backing.',
    cta: 'Propose an Event',
    link: 'mailto:awsccsrm@gmail.com',
  },
  {
    icon: <FaMicrophone size={32} />,
    title: 'Present a Topic',
    desc: 'Learned something cool on AWS? Share your knowledge with the community as a lightning talk or full session.',
    cta: 'Become a Speaker',
    link: 'mailto:awsccsrm@gmail.com',
  },
];

const ContributeSection = () => {
  return (
    <section className="contribute-section">
      <div className="contribute-container">
        <SectionHeader
          title="Contribute"
          subtitle="Share your knowledge and help the community grow"
        />
        <div className="contribute-grid">
          {ways.map((way, i) => (
            <BlurCard key={i} className="contribute-card">
              <div className="contribute-icon">{way.icon}</div>
              <h3 className="contribute-title">{way.title}</h3>
              <p className="para">{way.desc}</p>
              <a href={way.link} className="contribute-btn">
                {way.cta}
              </a>
            </BlurCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
