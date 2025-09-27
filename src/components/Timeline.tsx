import React from 'react';
import { Clock, Code, Trophy, Coffee, Zap, Users, Star, Moon, Sun, Sunrise } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      time: "Day 1 - 4:00 PM",
      title: "Registrations Open",
      description: "Teams check in, grab their welcome kits, and settle down.",
      icon: <Clock className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 5:00 PM",
      title: "Opening Ceremony",
      description: "Welcome note, sponsor shoutouts, rules + hackathon theme reveal.",
      icon: <Star className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 6:00 PM",
      title: "Icebreaker Games / Speed Networking",
      description: "Fun short games like 'Two Truths and a Lie' or 5-minute team networking to make strangers feel like teammates.",
      icon: <Users className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 7:00 PM",
      title: "Dinner + Team Formation Time",
      description: "Relaxed dinner while teams finalize their members and brainstorm.",
      icon: <Coffee className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 8:00 PM",
      title: "Hackathon Begins 🚀",
      description: "Problem statements unlocked. Teams start working.",
      icon: <Code className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 10:00 PM",
      title: "Lightning Talk (15 min)",
      description: "A short, inspiring session from an industry mentor or alum.",
      icon: <Zap className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 1 - 11:00 PM",
      title: "Mini Challenge #1",
      description: "Side quest: 'Build the funniest 5-line script' or 'Meme creation contest' with small prizes.",
      icon: <Trophy className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 12:00 AM",
      title: "Midnight Snacks + Coffee Break ☕",
      description: "Music, chill vibe, snack distribution.",
      icon: <Moon className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 1:00 AM",
      title: "Mentor Rounds Begin",
      description: "Mentors roam around, talk to teams, provide guidance.",
      icon: <Users className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 2:00 AM",
      title: "Fun Activity: Midnight Quiz / Kahoot Trivia",
      description: "Tech + pop culture quiz to refresh everyone.",
      icon: <Star className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 3:00 AM",
      title: "Mini Challenge #2",
      description: "Pitch your hack in 60 seconds – but like a rap/song/sketch. Super fun, keeps energy high.",
      icon: <Trophy className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 4:00 AM",
      title: "Stretch & Chill Zone",
      description: "Quick yoga/stretch session + relaxation playlist for recharging.",
      icon: <Moon className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 6:00 AM",
      title: "Sunrise Walk / Photo Challenge",
      description: "Group outdoor walk (if safe) or 'best sunrise selfie with your team' challenge.",
      icon: <Sunrise className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 7:00 AM",
      title: "Breakfast 🍳",
      description: "Healthy breakfast + team bonding.",
      icon: <Coffee className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 9:00 AM",
      title: "Progress Checkpoint",
      description: "Teams give a short 2-min update to organizers/mentors.",
      icon: <Clock className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 11:00 AM",
      title: "Mini Challenge #3",
      description: "Design a logo for your project (quick Canva/Figma challenge).",
      icon: <Trophy className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 12:00 PM",
      title: "Lunch",
      description: "Midday meal and networking break.",
      icon: <Sun className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 1:00 PM",
      title: "Final Coding Sprint ⏳",
      description: "Push, test, debug - the final stretch.",
      icon: <Code className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 3:00 PM",
      title: "Submission Deadline",
      description: "Teams upload their projects.",
      icon: <Clock className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 3:30 PM",
      title: "Project Expo + Demos",
      description: "Teams present solutions in booths or short pitches.",
      icon: <Star className="text-[#910f50]" size={20} />
    },
    {
      time: "Day 2 - 5:00 PM",
      title: "Closing Ceremony + Prize Distribution 🎉",
      description: "Winners announced, sponsor awards, group photo.",
      icon: <Trophy className="text-[#910f50]" size={20} />
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="absolute inset-0 bg-[#203354]/20"></div>
      
      {/* Beautiful Moon */}
      <div className="absolute top-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#fdfbd4] to-[#fdfbd4]/70 shadow-2xl opacity-80">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#fdfbd4]/90 to-[#fdfbd4]/60">
          <div className="absolute top-6 left-8 w-3 h-3 rounded-full bg-[#203354]/20"></div>
          <div className="absolute top-12 right-10 w-2 h-2 rounded-full bg-[#203354]/15"></div>
          <div className="absolute bottom-8 left-6 w-4 h-4 rounded-full bg-[#203354]/10"></div>
          <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-[#203354]/20"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Timeline
          </h2>
          <p className="text-xl text-[#fdfbd4] max-w-3xl mx-auto">
            Your complete 48-hour journey from kickoff to celebration
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-[#910f50]"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-[#23395d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#910f50]/30 hover:border-[#910f50] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      {event.icon}
                      <span className="text-[#910f50] font-semibold">{event.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#fdfbd4] mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#910f50] rounded-full border-4 border-[#152238]"></div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;