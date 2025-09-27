import React from 'react';
import { Star, Award, Zap } from 'lucide-react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Partners",
      icon: <Award className="text-[#910f50]" size={32} />,
      sponsors: [
        { name: "TechCorp", description: "Leading technology solutions provider" },
        { name: "InnovateLab", description: "Innovation and research company" }
      ]
    },
    {
      tier: "Gold Sponsors",
      icon: <Star className="text-[#910f50]" size={28} />,
      sponsors: [
        { name: "StartupHub", description: "Startup incubation platform" },
        { name: "DevTools Pro", description: "Professional development tools" },
        { name: "CloudSpace", description: "Cloud computing solutions" }
      ]
    },
    {
      tier: "Community Partners",
      icon: <Zap className="text-[#910f50]" size={24} />,
      sponsors: [
        { name: "CodeCommunity", description: "Developer community platform" },
        { name: "TechMeetup", description: "Technology meetup organizer" },
        { name: "OpenSource Foundation", description: "Supporting open source projects" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 relative">
      <div className="absolute inset-0 bg-[#203354]/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Amazing partners making TinkHack possible
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                {tier.icon}
                <h3 className="text-2xl md:text-3xl font-bold text-white">{tier.tier}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="bg-[#23395d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#910f50]/30 hover:border-[#910f50] transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="h-20 bg-[#152238] rounded-lg flex items-center justify-center mb-4 border border-gray-600">
                      <span className="text-gray-400 font-semibold">{sponsor.name}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-300 text-sm">{sponsor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#23395d]/50 backdrop-blur-sm p-8 rounded-lg border border-[#910f50]/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-gray-300 mb-6">
              Partner with us to reach talented developers and support innovation in the tech community.
            </p>
            <a
              href="#contact"
              className="bg-[#910f50] hover:bg-[#b8145f] text-[#fdfbd4] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Sponsor TinkHack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;