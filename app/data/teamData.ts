export interface TeamMember {
  id: number;
  image: string;
  name: string;
  designation: string;
  startYear: number;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    image: "/team/bon-sakala.JPEG",
    name: "Bon Sakala",
    designation: "FMC Manager",
    startYear: 2023,
    socials: {
      linkedin: "",
    },
  },
  {
    id: 2,
    image: "/team/caleb-namvula.png",
    name: "Caleb Namvula",
    designation: "Software Engineer, System Designer, Project Manager",
    startYear: 2023,
    socials: {
      github: "github.com/caleb",
      linkedin: "linkedin.com/cal",
      website: "caleb.com",
    },
  },
  {
    id: 3,
    image: "/team/chifuniro-mtambalika.jpeg",
    name: "Chifuniro Mtambalika",
    designation: "Web Developer",
    startYear: 2023,
    socials: {
      github: "",
      linkedin: "",
    },
  },
];
