import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#152238] min-h-screen relative overflow-hidden">
      {/* Global starry background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
        <div className="stars5"></div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <Timeline />
      <Registration />
      <Sponsors />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;