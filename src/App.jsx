import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Founders from './components/Founders';
import WhyChooseUs from './components/WhyChooseUs';
import LocationMap from './components/LocationMap';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Gallery />
        <WhyChooseUs />
        <Founders />
      </main>
      <LocationMap />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
