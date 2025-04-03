
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-club-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-club-orange mb-4">Welcome to VITKULT</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Where technology meets creativity and innovation flourishes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <InfoCard 
            title="Our Mission" 
            description="To foster a collaborative environment where students can explore cutting-edge technologies, develop practical skills, and build lasting connections." 
          />
          <InfoCard 
            title="Our Vision" 
            description="To become the leading technology club that bridges academic learning with industry-relevant experiences, preparing members for successful careers." 
          />
          <InfoCard 
            title="Our Values" 
            description="Innovation, inclusivity, teamwork, continuous learning, and making a positive impact through technology in our community and beyond." 
          />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, description }) => {
  return (
    <Card className="bg-[#1A1A1A] border-club-orange border-opacity-20 overflow-hidden hover:shadow-lg hover:shadow-club-orange/10 transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-club-orange mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
