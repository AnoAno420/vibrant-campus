
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin } from 'lucide-react';

const JoinSection = () => {
  return (
    <section id="join" className="py-24 bg-club-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-club-orange mb-4">Join The Community</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with us on social media to stay updated on events, workshops, and opportunities
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
          <SocialCard 
            platform="Instagram" 
            icon={<Instagram size={48} />}
            description="Follow us for event updates."
            link="https://instagram.com"
            color="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
          />
          <SocialCard 
            platform="LinkedIn" 
            icon={<Linkedin size={48} />}
            description="Connect with our community."
            link="https://linkedin.com"
            color="bg-blue-600"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Ready to be part of VITKULT?</h3>
          <Button 
            size="lg" 
            className="bg-club-orange hover:bg-club-orange-light text-white font-medium"
          >
            Join the Club
          </Button>
        </div>
      </div>
    </section>
  );
};

const SocialCard = ({ platform, icon, description, link, color }) => {
  return (
    <div className="flex-1 border border-club-orange/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-club-orange/10 transition-all duration-300 bg-[#1A1A1A]">
      <div className="p-8 flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-club-orange mb-2">{platform}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block"
        >
          <Button 
            variant={platform === "Instagram" ? "default" : "outline"}
            className={platform === "Instagram" 
              ? "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600" 
              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }
          >
            Join
          </Button>
        </a>
      </div>
    </div>
  );
};

export default JoinSection;
