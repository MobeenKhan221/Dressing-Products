/* eslint-disable import/extensions */
// Init
import React from 'react';

// Importing Components
import Header from '../components/common/Header';
import HeroSection from '../components/Home/Hero-sections';
import ProductSlider from '../components/Home/Product-slider';
import SocialLink from '../components/Home/Social-links';
import CardsSaction from '../components/Home/Cards-section';
import Footer from '../components/common/Footer';

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductSlider />
      <SocialLink />
      <CardsSaction />
      <Footer />
    </div>
  );
}
