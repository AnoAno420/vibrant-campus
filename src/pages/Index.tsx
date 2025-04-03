
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import TimelineSection from '../components/TimelineSection';
import TeamSection from '../components/TeamSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-club-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TimelineSection />
      <TeamSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
