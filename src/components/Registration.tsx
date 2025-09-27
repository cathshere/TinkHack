import { Users, Code, ExternalLink } from "lucide-react";

const Registration = () => {
  return (
    <section className="space-y-8">
      {/* Team Formation */}
      <div className="bg-[#23395d]/30 backdrop-blur-sm p-6 rounded-lg border border-[#3C0008]/20">
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-[#910f50]" size={24} />
          <h3 className="text-xl font-bold text-white">Team Formation</h3>
        </div>
        <p className="text-gray-300">
          Teams of 2-4 members. Don't have a team? We'll help you find the
          perfect teammates during the event.
        </p>
      </div>

      {/* What You'll Need */}
      <div className="bg-[#23395d]/30 backdrop-blur-sm p-6 rounded-lg border border-[#910f50]/20">
        <div className="flex items-center gap-3 mb-4">
          <Code className="text-[#910f50]" size={24} />
          <h3 className="text-xl font-bold text-white">What You'll Need</h3>
        </div>
        <ul className="text-gray-300 space-y-2">
          <li>• Laptop with development environment</li>
          <li>• Enthusiasm to learn and build</li>
          <li>• Creative problem-solving mindset</li>
          <li>• Your favorite snacks (we'll provide meals!)</li>
        </ul>
      </div>

      {/* External Registration */}
      <div className="bg-[#23395d]/30 backdrop-blur-sm p-6 rounded-lg border border-[#910f50]/20">
        <div className="flex items-center gap-3 mb-4">
          <ExternalLink className="text-[#910f50]" size={24} />
          <h3 className="text-xl font-bold text-white">External Registration</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Complete registration also available on our external platform
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#910f50] hover:text-[#fdfbd4] transition-colors duration-200"
        >
          Register on Platform
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Registration;
