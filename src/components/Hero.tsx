import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
        <div className="stars5"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#23395d]/30 to-[#152238]/50"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-[#910f50]">Tink</span>Hack
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          The Flagship Hackathon Event of TinkerHub MEC
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Join us for an incredible 48-hour journey of innovation, creativity, and problem-solving. 
          Build amazing projects, learn new technologies, and connect with fellow developers.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="text-[#910f50]" size={20} />
            <span>March 15-17, 2024</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="text-[#910f50]" size={20} />
            <span>MEC Campus, Kochi</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Users className="text-[#910f50]" size={20} />
            <span>500+ Participants</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registration"
            className="bg-[#910f50] hover:bg-[#b8145f] text-[#fdfbd4] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Register Now
          </a>
          <a
            href="#timeline"
            className="border-2 border-[#910f50] text-[#fdfbd4] hover:bg-[#910f50] px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;