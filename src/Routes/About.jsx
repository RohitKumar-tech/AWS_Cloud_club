import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import AboutSection from '../Components/AboutSection/AboutSection';
import GlobalPresence from '../Components/GlobalPresence/GlobalPresence';
import TeamSection from '../Components/TeamSection/TeamSection';
import Footer from '../Components/Footer/Footer';

const About = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '70px' }}>
        <AboutSection />
        <GlobalPresence />
        <TeamSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
