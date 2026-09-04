export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string[];
};

export type Project = {
  id: number;
  title: string;
  status: "Active" | "In Progress" | "Coming Soon";
  description: string;
  image?: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
  featured?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Theetawat Premsawat",
  nickname: "Theetawat",
  role: "Full-stack Developer",
  email: "theetawat.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/theetawat-premsawat/",
  github: "https://github.com/TheetawatCode",
  resume: "/pdf/Theetawat_Resume.pdf",
  introduction: [
    "I'm a Full-stack Developer who transitioned from an administrative career to follow my passion for coding.",
    "Currently, I'm seeking opportunities to collaborate with innovative teams and contribute to impactful projects.",
  ],
  about: [
    "As a self-taught Full-stack Developer, I combine my organizational skills from an administrative background with a passion for coding to create impactful digital experiences. After completing a 4-month Full-stack Bootcamp, I've been actively building projects and refining my skills in modern tools like React, Next.js, TailwindCSS, and TypeScript.",
    "I'm committed to continuous growth and staying up-to-date with the latest trends in Full-stack development. I'm passionate about crafting projects that enhance user experience and drive business success.",
    "Currently, I'm seeking a Full-stack Developer role where I can apply my technical skills, contribute to Open Source projects, and collaborate with a team of passionate developers.",
  ],
} as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    title: "UI & Product",
    items: ["React Native", "DaisyUI", "Ant Design", "shadcn/ui", "Aceternity UI", "Figma", "WordPress"],
  },
  {
    title: "Data & Delivery",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "Docker", "Postman", "VSCode", "Cursor", "Google Antigravity"],
  },
  {
    title: "Currently Learning",
    items: ["Vue.js", "Nuxt.js", "Golang", "PostgreSQL", "OrbStack"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Development Bootcamp Participant",
    company: "Borntodev Academy",
    duration: "Jun 2024 – Sep 2024",
    description: [
      "Designed and developed a fully responsive web application as a Capstone Project, implementing best practices in UI/UX and leveraging tools like Tailwind CSS and React.",
      "Gained hands-on experience in debugging, performance optimization, and version control using Git, simulating real-world development workflows.",
      "Integrated third-party APIs to extend the functionality of web applications and enhance user engagement.",
      "Acquired proficiency in building reusable and scalable components following modern development practices.",
    ],
  },
  {
    title: "Backend Development Bootcamp Participant",
    company: "Borntodev Academy",
    duration: "Jun 2024 – Sep 2024",
    description: [
      "Completed an intensive program focused on backend fundamentals, including Node.js, Express.js, and RESTful API development.",
      "Built and deployed scalable backend applications integrating both SQL and NoSQL databases such as MySQL and MongoDB.",
      "Gained hands-on experience in authentication, authorization, and secure data management using JSON Web Tokens (JWT).",
      "Developed and tested APIs to ensure functionality, performance, and reliability across multiple endpoints.",
      "Applied best practices in backend architecture, code organization, and version control using Git and GitHub.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    duration: "Dec 2022 – Apr 2024",
    description: [
      "Designed and developed a landing page using WordPress for a Thai restaurant client in New Jersey, USA.",
      "Collaborated with the client to understand business needs and deliver solutions that align with their goals.",
      "Conducted website maintenance and updates to ensure ongoing functionality and security.",
      "Optimized website performance and user experience through responsive design and SEO best practices.",
    ],
  },
  {
    title: "Administrative Assistant",
    company: "Malaysia Hair Import Export Co Ltd.",
    duration: "Nov 2019 – Jun 2020",
    description: [
      "Supported daily operations across multiple departments to ensure smooth business functions.",
      "Managed and organized company documents, ensuring accurate filing and retrieval processes.",
      "Managed a diverse range of administrative tasks, including correspondence, data entry, and inventory control.",
      "Provided exceptional customer service, resolving inquiries promptly and professionally.",
      "Collaborated closely with colleagues across departments to ensure smooth operations and achieve company objectives.",
      "Facilitated effective communication and information sharing within the team.",
      "Contributed to a positive and supportive work environment through teamwork and collaboration.",
      "Proficient in using various computer software and applications for administrative tasks.",
      "Adapted quickly to new technologies and processes.",
    ],
  },
  {
    title: "Marketing Internship",
    company: "Advanced Info Services Plc. (AIS)",
    duration: "Jun 2018 – Jul 2018",
    description: [
      "Collaborated with the marketing team to develop and execute innovative marketing campaigns.",
      "Conducted in-depth analysis of competitive strategies and customer behavior to inform marketing initiatives.",
      "Led a team of 10 trainees from various universities to enhance the AIS Project, emphasizing collaboration and teamwork for successful outcomes.",
      "Developed a new application prototype for demonstration purposes, showcasing innovative solutions to meet project objectives.",
      "Prepared detailed reports and presentations to communicate project progress and outcomes to senior management.",
      "Demonstrated strong communication and interpersonal skills in a fast-paced corporate environment.",
      "Proficient in using various computer software and applications for marketing tasks.",
      "Contributed to a positive and supportive work environment through teamwork and collaboration.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    status: "Active",
    description: "A personal portfolio rebuilt with Next.js, TypeScript, Tailwind CSS v4, and pnpm.",
    image: "/images/projects/portfolio-next.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "pnpm"],
    githubLink: "https://github.com/TheetawatCode/Theetawat-Portfolio",
    liveDemo: "https://theetawat-portfolio.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Landing Page",
    status: "Active",
    description: "A landing page built with Next.js, TypeScript, JavaScript and Tailwind CSS.",
    image: "/images/projects/landing-page.png",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Preline UI"],
    githubLink: "https://github.com/TheetawatCode/My-Project/tree/main/2-LandingPage",
    liveDemo: "https://theetawat-landing-page.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    status: "Active",
    description: "A personal portfolio rebuilt with Next.js, TypeScript, Tailwind CSS v4, and pnpm.",
    image: "/images/projects/portfolio-next.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "pnpm"],
    githubLink: "https://github.com/TheetawatCode/Theetawat-Portfolio",
    liveDemo: "https://theetawat-portfolio.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Tour Reservation Website",
    status: "In Progress",
    description: "A tour reservation website built with Next.js, TypeScript, JavaScript and Tailwind CSS v4.0.",
    image: "/images/projects/tour-reservation.png",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/TheetawatCode/My-Project/tree/main/4-TourReservation",
    liveDemo: "https://theetawat-tour-reservation.vercel.app/",
  },
  {
    id: 5,
    title: "Blog",
    status: "In Progress",
    description: "A developer-focused publishing platform for articles, curated topics, reading lists, and a distraction-free reading experience.",
    image: "/images/projects/blog-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
  },
  {
    id: 6,
    title: "E-Learning Platform",
    status: "Coming Soon",
    description: "An e-learning platform built with Next.js, TypeScript, JavaScript and Tailwind CSS v4.0.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    status: "Coming Soon",
    description: "An e-commerce platform built with Next.js, TypeScript, JavaScript and Tailwind CSS v4.0.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Finance Flow",
    status: "Active",
    description: "A personal finance dashboard concept for tracking spending, balances, and monthly progress.",
    image: "/images/projects/finance-dashboard-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
  },
  {
    id: 8,
    title: "Team Workspace",
    status: "Active",
    description: "A collaborative task workspace concept with clear project status and focused team workflows.",
    image: "/images/projects/team-workspace-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    id: 9,
    title: "Table Notes",
    status: "In Progress",
    description: "A restaurant discovery and reservation experience designed around thoughtful local recommendations.",
    image: "/images/projects/restaurant-booking-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Design"],
  },
  {
    id: 10,
    title: "Habit Loop",
    status: "In Progress",
    description: "A calm habit-tracking interface that makes daily routines and long-term consistency visible.",
    image: "/images/projects/habit-tracker-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
  },
  {
    id: 11,
    title: "Event Atlas",
    status: "Coming Soon",
    description: "A community event platform concept that brings schedules, attendance, and event insights together.",
    image: "/images/projects/event-platform-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Product Strategy"],
  },
  {
    id: 12,
    title: "Learn Lab",
    status: "Coming Soon",
    description: "A developer learning platform concept with focused lessons, progress insights, and practical pathways.",
    image: "/images/projects/learning-platform-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Learning UX"],
  },
];

export const education = {
  title: "Bachelor of Economics, Chiang Mai University (CMU)",
  major: "Major in Economics, Minor in Business Administration (Financial Management)",
  duration: "Aug 2015 – May 2019",
  description: "Thesis: Risk and Return Analysis and Price Estimation of Energy Sector Stocks Using the Capital Asset Pricing Model (CAPM)",
} as const;
