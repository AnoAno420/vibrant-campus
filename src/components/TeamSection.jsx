
import React from 'react';
import { teamMembers } from '@/data/team';

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-club-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-club-orange mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our dedicated and passionate team is committed to making a difference. 
            Get to know the people behind VITKULT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-[#0D0D0D] border border-club-orange/10 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-club-orange/10 transition-transform duration-300 hover:-translate-y-2">
      <div className="p-4 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border-2 border-club-orange overflow-hidden mb-4">
          <div className="w-full h-full bg-club-orange rounded-full flex items-center justify-center text-white">
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </span>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-sm text-club-orange uppercase tracking-wider">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamSection;
