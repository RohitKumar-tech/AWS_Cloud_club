import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import ResoursesSection from '../Components/ResoursesSection/ResoursesSection';
import Footer from '../Components/Footer/Footer';

const Resources = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '70px' }}>
        <ResoursesSection />
      </div>
      <Footer />
    </>
  );
};

export default Resources;
