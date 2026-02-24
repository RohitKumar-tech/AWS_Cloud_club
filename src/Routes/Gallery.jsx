import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import GallerySection from '../Components/GallerySection/GallerySection';
import Footer from '../Components/Footer/Footer';

const Gallery = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '70px' }}>
        <GallerySection />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
