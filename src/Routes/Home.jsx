import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader/Loader';
import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/Hero/Hero';
import IntroSection from '../Components/IntroSection/IntroSection';
import StatsSection from '../Components/StatsSection/StatsSection';
import ContributeSection from '../Components/ContributeSection/ContributeSection';
import Benefits from '../Components/Benefits/Benefits';
import CtaSection from '../Components/CtaSection/CtaSection';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <NavBar />
      <Hero />
      <IntroSection />
      <StatsSection />
      <ContributeSection />
      <Benefits />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Home;
