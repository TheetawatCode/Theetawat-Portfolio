// data/projectsData.ts

export interface Project {
  id: number;
  title: string;
  status?: string;
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
    status: "Active",
    description:
      "A personal portfolio website built with React, TypeScript, JavaScript and TailwindCSS v4.0",
    image:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/TheetawatCode/Theetawat-Portfolio",
    liveDemo: "https://theetawat-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Page",
    status: "Active",
    description:
      "A landing page built with Next.js, TypeScript, JavaScript and TailwindCSS v4.0",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/TheetawatCode/My-Project/tree/main/2-LandingPage",
    liveDemo: "https://theetawat-landing-page.vercel.app/",
  },
  // https://images.unsplash.com/photo-1509725100077-6109f44ea148?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  {
    id: 3,
    title: "Blog",
    status: "Coming Soon",
    description:
      "A personal blog website built with Next.js, TypeScript, JavaScript and TailwindCSS v4.0",
    image: "https://images.unsplash.com/photo-1581357825453-2ca9d6fbaa3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "/",
    liveDemo: "/",
  },
  {
    id: 4,
    title: "Tour Reservation Website",
    status: "Coming Soon",
    description:
      "A tour reservation website built with Next.js, TypeScript, JavaScript and TailwindCSS v4.0",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "/",
    liveDemo: "/",
  },
  {
    id: 5,
    title: "E-Learning Platform",
    status: "Coming Soon",
    description:
      "An e-learning platform built with Next.js, TypeScript, JavaScript and TailwindCSS v4.0",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "/",
    liveDemo: "/",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    status: "Coming Soon",
    description:
      "An e-commerce platform built with Next.js, TypeScript, JavaScript and TailwindCSS v4.0",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "/",
    liveDemo: "/",
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
