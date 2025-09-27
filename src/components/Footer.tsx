import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#152238] border-t border-[#3C0008]/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-[#910f50]">Tink</span>Hack
            </div>
            <p className="text-gray-400">
              The flagship hackathon event of TinkerHub MEC, bringing together innovative minds to solve real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#overview" className="block text-gray-400 hover:text-[#910f50] transition-colors">Overview</a>
              <a href="#timeline" className="block text-gray-400 hover:text-[#910f50] transition-colors">Timeline</a>
              <a href="#registration" className="block text-gray-400 hover:text-[#910f50] transition-colors">Register</a>
              <a href="#sponsors" className="block text-gray-400 hover:text-[#910f50] transition-colors">Sponsors</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">TinkerHub MEC</h3>
            <p className="text-gray-400">
              A community of makers, builders, and innovators at Model Engineering College.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-[#910f50]" size={16} /> and <Code className="text-[#910f50]" size={16} /> by TinkerHub MEC
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 TinkHack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;