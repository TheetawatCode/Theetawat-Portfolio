// data/projectsData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveDemo: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, TypeScript, JavaScript and TailwindCSS.",
    image:
      "/images/projects/project1.jpg",
    technologies: ["React", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/TheetawatCode/Theetawat-Portfolio",
    liveDemo: "https://theetawat-portfolio.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "E-commerce Platform",
  //   description:
  //     "A fully functional e-commerce platform with user authentication and payment integration.",
  //   image: "/images/projects/project2.jpg",
  //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  //   githubLink: "https://github.com/yourusername/ecommerce",
  //   liveDemo: "/",
  // },
  // {
  //   id: 3,
  //   title: "Task Management App",
  //   description:
  //     "A task management application with drag-and-drop functionality and real-time updates.",
  //   image: "/images/projects/project3.jpg",
  //   technologies: ["React", "Firebase", "TailwindCSS"],
  //   githubLink: "https://github.com/yourusername/taskmanager",
  //   liveDemo: "/",
  // },

  // Add more projects here
];
