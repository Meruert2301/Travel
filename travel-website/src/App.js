import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations'; 
import Guides from './components/Guides/Guides';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Destinations />
      <Guides />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;