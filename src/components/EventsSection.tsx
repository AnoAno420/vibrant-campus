
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { upcomingEvents, Event } from '@/data/events';

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-club-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-club-orange mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for our exciting upcoming events and activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-club-orange/10 overflow-hidden hover:shadow-lg hover:shadow-club-orange/10 transition-transform duration-300 hover:-translate-y-2">
      <div className="h-40 bg-gradient-to-br from-club-orange-light to-club-orange relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">{event.title}</h3>
        </div>
      </div>
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center text-club-orange">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{event.date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-3">{event.description}</p>
        <div className="text-sm text-gray-400">
          <p>Venue: {event.venue}</p>
          <p>Expected Attendees: {event.attendees}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsSection;
