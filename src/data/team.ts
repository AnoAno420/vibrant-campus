
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Saravana Kumar S",
    role: "PRESIDENT",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Aditya Patil",
    role: "VICE PRESIDENT",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Sushanth",
    role: "TREASURER",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Vijay Prajwal",
    role: "SECRETARY",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Nithin N",
    role: "TECHNICAL LEAD",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Bharath N",
    role: "TECHNICAL CO LEAD",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    name: "Sanjana",
    role: "NON-TECHNICAL CO LEAD",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Tamanna Singh Chandel",
    role: "DANCE LEAD",
    image: "/placeholder.svg"
  }
];
