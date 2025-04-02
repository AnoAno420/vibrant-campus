
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-club-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-club-dark via-club-dark to-club-dark-accent opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-club-orange">VIT</span>KULT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Empowering students through technology, innovation, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-club-orange hover:bg-club-orange-light text-white font-medium"
            >
              Join Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-club-orange text-club-orange hover:bg-club-orange hover:text-white font-medium"
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-club-orange animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
