import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <Benefits />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;