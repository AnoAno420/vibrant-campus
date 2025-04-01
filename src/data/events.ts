
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  venue?: string;
  attendees?: number;
  image?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Hackathon 2024",
    date: "March 15, 2024",
    description: "A 24-hour coding marathon where participants solve real-world problems.",
    venue: "Main Auditorium",
    attendees: 200,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Tech Talk on AI",
    date: "April 10, 2024",
    description: "An expert-led discussion on the latest advancements in artificial intelligence.",
    venue: "Seminar Hall",
    attendees: 150,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Web Dev Bootcamp",
    date: "May 5, 2024",
    description: "A hands-on workshop to learn full-stack web development from scratch.",
    venue: "Computer Lab",
    attendees: 100,
    image: "/placeholder.svg"
  }
];

export const pastEvents: Event[] = [
  {
    id: 4,
    title: "Design Thinking Workshop",
    date: "February 20, 2024",
    description: "A workshop focused on design thinking methodologies for product development.",
    venue: "Design Studio",
    attendees: 75,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Annual Tech Symposium",
    date: "January 12, 2024",
    description: "Our annual technology showcase featuring student projects and industry speakers.",
    venue: "College Grounds",
    attendees: 500,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Intro to Blockchain",
    date: "December 5, 2023",
    description: "A beginner-friendly introduction to blockchain technology and its applications.",
    venue: "Seminar Hall",
    attendees: 120,
    image: "/placeholder.svg"
  }
];
