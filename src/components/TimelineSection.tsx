
import React from 'react';
import { pastEvents } from '@/data/events';

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-club-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-club-orange mb-4">Event History</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A look back at our journey and memorable events
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline central line */}
          <div className="timeline-line"></div>
          
          {pastEvents.map((event, index) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              isLeft={index % 2 === 0}
              position={`top-${index * 350}px`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ event, isLeft, position }: { 
  event: any, 
  isLeft: boolean,
  position: string 
}) => {
  return (
    <div 
      className={`relative mb-24 flex ${isLeft ? 'justify-start' : 'justify-end'} animate-fade-in`}
      style={{ opacity: 0, animationDelay: `${0.2}s`, animationFillMode: 'forwards' }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot" style={{ top: '24px' }}></div>
      
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className="bg-[#1A1A1A] border border-club-orange/20 p-6 rounded-lg hover:shadow-lg hover:shadow-club-orange/10 transition-all duration-300">
          <h3 className="text-2xl font-bold text-club-orange mb-2">{event.title}</h3>
          <p className="text-amber-500 mb-4">{event.date}</p>
          <p className="text-gray-300 mb-3">{event.description}</p>
          <div className="text-sm text-gray-400">
            <p>Venue: {event.venue}</p>
            <p>Attendees: {event.attendees}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
