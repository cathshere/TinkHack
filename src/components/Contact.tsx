import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c2e4a]/50 to-[#152238]/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help make your TinkHack experience amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#23395d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#3C0008]/30">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#910f50] p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">tinkhack@tinkerhubmec.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#910f50] p-3 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#910f50] p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Venue</h4>
                    <p className="text-gray-300">
                      Model Engineering College<br />
                      Thrikkakara, Kochi, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#23395d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#3C0008]/30">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-[#910f50] p-3 rounded-lg hover:bg-[#b8145f] transition-colors duration-200">
                  <Instagram className="text-white" size={20} />
                </a>
                <a href="#" className="bg-[#910f50] p-3 rounded-lg hover:bg-[#b8145f] transition-colors duration-200">
                  <Twitter className="text-white" size={20} />
                </a>
                <a href="#" className="bg-[#910f50] p-3 rounded-lg hover:bg-[#b8145f] transition-colors duration-200">
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#23395d]/50 backdrop-blur-sm p-8 rounded-lg border border-[#3C0008]/30">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#152238] border border-gray-600 rounded-lg text-white focus:border-[#910f50] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#152238] border border-gray-600 rounded-lg text-white focus:border-[#910f50] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#152238] border border-gray-600 rounded-lg text-white focus:border-[#910f50] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[#152238] border border-gray-600 rounded-lg text-white focus:border-[#910f50] focus:outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#910f50] hover:bg-[#b8145f] text-[#fdfbd4] py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;