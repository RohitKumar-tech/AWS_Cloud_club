import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import JoinGuide from '../Components/JoinGuide/JoinGuide';
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';

const Join = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '70px' }}>
        <JoinGuide />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Join;
