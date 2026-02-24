import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import EventsSection from '../Components/EventsSection/EventsSection';
import Footer from '../Components/Footer/Footer';

const Events = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '70px' }}>
        <EventsSection />
      </div>
      <Footer />
    </>
  );
};

export default Events;
