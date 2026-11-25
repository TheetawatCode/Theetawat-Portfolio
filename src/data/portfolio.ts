export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SkillGroup = {
  title: string;
  items: string[];
  /** Everyday tools in this group, shown with stronger emphasis. */
  core?: string[];
};

export type Experience = {
  /** "work" and "training" render as timeline cards; "operations" renders as a featured current-role card; "earlier" renders as a compact list. */
  kind: "work" | "training" | "operations" | "earlier";
  title: string;
  company: string;
  duration: string;
  description: string[];
};

export type Project = {
  id: string;
  title: string;
  status: "Live" | "Prototype" | "In Progress";
  description: string;
  image?: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
  caseStudy?: string;
  featured?: boolean;
  projectType?: string;
  /** Short project-type label shown on cards, e.g. "Frontend showcase". Falls back to projectType. */
  typeLabel?: string;
  /** One line of concrete engineering evidence (security, testing, or architecture). */
  proof?: string;
  role?: string;
  period?: string;
  highlight?: string;
  nextMilestone?: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  selected?: boolean;
  credentialId?: string;
  expires?: string;
  skills?: string[];
  credentialUrl?: string;
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "About", href: "#about" },
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
    "I build full-stack web applications with Next.js, TypeScript, Node.js, and PostgreSQL — from the interface to the API and the database. With a background in economics and finance, I analyze before I build: requirements, data, and risk. I’m looking for a team where I can ship reliable, well-tested features and keep learning.",
  ],
  about: [
    "I studied economics with a focus on finance at Chiang Mai University. My thesis used the Capital Asset Pricing Model to analyze the risk and return of energy-sector stocks, which taught me to work carefully with data and question assumptions.",
    "Administrative work taught me to organize information and communicate clearly. After a full-stack bootcamp, I kept building through hands-on projects, with the same habits: understand the business need first, plan the structure, test before shipping, and keep money and data calculations exact. I especially enjoy turning complex workflows into approachable interfaces.",
    "Next, I’m learning web application security, including authentication, access control, and data protection, and applying it step by step in my projects.",
  ],
} as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS", "Responsive Design", "Zustand"],
    core: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "REST APIs", "SQL", "PostgreSQL", "Prisma", "MySQL", "MongoDB"],
    core: ["Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Testing & Quality",
    items: ["Vitest", "Playwright", "Postman", "GitHub Actions (CI)", "ESLint"],
    core: ["Vitest", "Playwright"],
  },
  {
    title: "Tools & Delivery",
    items: ["Git", "GitHub", "Vercel", "Docker", "Figma", "OpenAI Codex", "Claude Code"],
    core: ["Git", "GitHub", "Vercel"],
  },
];

export const currentlyLearningSkills = ["React Native (Expo)", "AI Agents & Multi-Agent Systems", "AWS Cloud Fundamentals", "Web Application Security"];

export const certificates: Certificate[] = [
  {
    id: "openai-apply-ai-at-work-pathway",
    title: "Apply AI at Work Pathway Completion",
    issuer: "OpenAI Academy",
    issued: "Oct 4, 2026",
    expires: "Apr 4, 2027",
    credentialId: "196204879",
    skills: ["Applied AI", "OpenAI Codex", "Agent-assisted Workflows"],
    credentialUrl: "https://oaiacademy.credential.net/b3f799ef-b9dd-4de0-8ec6-d2ff2a9c8394",
  },
  {
    id: "openai-codex-pathway",
    selected: true,
    title: "Build with AI - Codex Pathway Completion",
    issuer: "OpenAI Academy",
    issued: "Sep 29, 2026",
    expires: "Mar 29, 2027",
    credentialId: "195502732",
    skills: ["OpenAI Codex"],
    credentialUrl: "https://oaiacademy.credential.net/61f016fd-c487-4629-a39f-a5e99a9857d6",
  },
  {
    id: "claude-code-in-action",
    selected: true,
    title: "Claude Code in Action",
    issuer: "Claude Academy",
    issued: "Oct 20, 2026",
    credentialId: "f06ce88664bf328ece69cff900720bcd",
    skills: ["Claude Code"],
    credentialUrl: "https://academy.claude.com/verify/f06ce88664bf328ece69cff900720bcd",
  },
  {
    id: "claude-human-agent-teams",
    title: "Building effective human-agent teams (beta)",
    issuer: "Claude Academy",
    issued: "Nov 5, 2026",
    credentialId: "c9b8490b716d4b117ee0aee53be2a3b1",
    skills: ["Human-Agent Collaboration"],
    credentialUrl: "https://academy.claude.com/verify/c9b8490b716d4b117ee0aee53be2a3b1",
  },
  {
    id: "claude-ai-fluency-creative-work",
    title: "AI Fluency for creative work",
    issuer: "Claude Academy",
    issued: "Nov 3, 2026",
    credentialId: "3375ecabf00288b847b1ec937322f292",
    skills: ["AI Fluency"],
    credentialUrl: "https://academy.claude.com/verify/3375ecabf00288b847b1ec937322f292",
  },
  {
    id: "claude-ai-fluency-small-businesses",
    title: "AI Fluency for small businesses",
    issuer: "Claude Academy",
    issued: "Nov 2, 2026",
    credentialId: "9a58a939fd838d359d8134ef3476f138",
    skills: ["AI Fluency"],
    credentialUrl: "https://academy.claude.com/verify/9a58a939fd838d359d8134ef3476f138",
  },
  {
    id: "claude-ai-fluency-foundations",
    title: "AI Fluency: Framework and foundations",
    issuer: "Claude Academy",
    issued: "Oct 26, 2026",
    credentialId: "5bc674eeeec069ba8b63a5cc5eb27670",
    skills: ["AI Fluency"],
    credentialUrl: "https://academy.claude.com/verify/5bc674eeeec069ba8b63a5cc5eb27670",
  },
  {
    id: "claude-building-with-api",
    selected: true,
    title: "Building with the Claude API",
    issuer: "Claude Academy",
    issued: "Oct 25, 2026",
    credentialId: "9ad828beae4c7166449d995da77a75bf",
    skills: ["Claude API"],
    credentialUrl: "https://academy.claude.com/verify/9ad828beae4c7166449d995da77a75bf",
  },
  {
    id: "claude-introduction-to-claude-cowork",
    title: "Introduction to Claude Cowork",
    issuer: "Claude Academy",
    issued: "Oct 15, 2026",
    credentialId: "429770a0092f5aaa2af600bdd5b1a572",
    skills: ["Claude Cowork"],
    credentialUrl: "https://academy.claude.com/verify/429770a0092f5aaa2af600bdd5b1a572",
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Claude Academy",
    issued: "Oct 12, 2026",
    credentialId: "6945ac558eb7b16371a70f41fa7d88fa",
    skills: ["Claude Code"],
    credentialUrl: "https://academy.claude.com/verify/6945ac558eb7b16371a70f41fa7d88fa",
  },
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Claude Academy",
    issued: "Oct 9, 2026",
    credentialId: "a437de728f6d9961253ef018c869be52",
    skills: ["Claude Skills"],
    credentialUrl: "https://academy.claude.com/verify/a437de728f6d9961253ef018c869be52",
  },
  {
    id: "data-analyst-manifesto",
    title: "Data Analyst Manifesto",
    issuer: "DataRockie | The School of Generalist",
    issued: "Dec 2024",
    credentialId: "VfWMraH2R0m8zR4-9tpk-w",
    skills: ["Data Analysis"],
    credentialUrl: "https://badges.parchment.com/public/assertions/VfWMraH2R0m8zR4-9tpk-w",
  },
  {
    id: "accelerated-intro-to-cs",
    title: "Accelerated Intro to CS Course",
    issuer: "CodeAI",
    issued: "May 2024",
  },
  {
    id: "sql-crash-course",
    title: "SQL Crash Course",
    issuer: "DataRockie | The School of Generalist",
    issued: "Feb 2024",
    skills: ["SQL"],
  },
  {
    id: "github-for-developer",
    title: "GitHub for Developer",
    issuer: "BorntoDev",
    issued: "May 2024",
    skills: ["GitHub"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Independent Full-Stack Projects",
    kind: "work",
    company: "Self-directed",
    duration: "Sep 2024 – Present",
    description: [
      "Built ServiceOps Desk, a role-aware service operations workspace with server-enforced role-based access, tested state transitions and SLA tracking, using Next.js, TypeScript, PostgreSQL and Prisma.",
      "Built Saan Market, a Thai home-goods storefront with product search, a validated persistent cart and simulated checkout, covered by 30+ Vitest tests in CI.",
      "Built Boreal Route, a northern-lights travel demo with weather-aware discovery and capacity-safe booking, covered by 25+ Vitest tests in CI.",
    ],
  },
  {
    title: "Frontend Development Bootcamp Participant",
    kind: "training",
    company: "Borntodev Academy",
    duration: "Jun 2024 – Sep 2024",
    description: [
      "Designed and developed a fully responsive web application as a Capstone Project, implementing best practices in UI/UX and leveraging tools like Tailwind CSS and React.",
      "Gained hands-on experience in debugging, performance optimization, and version control using Git, simulating real-world development workflows.",
      "Integrated third-party APIs to extend the functionality of web applications and enhance user engagement.",
      "Acquired proficiency in building reusable and scalable components following modern development practices.",
    ],
  },  {
    title: "Backend Development Bootcamp Participant",
    kind: "training",
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
    kind: "work",
    company: "Self-Employed",
    duration: "Dec 2022 – Apr 2024",
    description: [
      "Designed and developed a landing page for a Thai restaurant client in New Jersey, USA.",
      "Collaborated with the client to understand business needs and deliver solutions that align with their goals.",
      "Conducted website maintenance and updates to ensure ongoing functionality and security.",
      "Optimized website performance and user experience through responsive design and SEO best practices.",
    ],
  },
  {
    title: "Operations Manager",
    kind: "operations",
    company: "Local Service Business",
    duration: "Jan 2022 – Present",
    description: [
      "Run day-to-day operations of a customer-facing service business serving roughly 20\u2060–\u206030 customers on weekdays and about double on weekends and public holidays.",
      "Control consumables and utility costs; order from suppliers, manage stock levels, and supervise staff.",
      "Maintain daily income and expense records, prepare monthly expense reports, and handle staff payroll.",
      "Advise the owner on pricing and promotions, using customer behavior in each area to time offers by day and hour.",
      "Coach staff on service quality and use customer feedback to improve day-to-day service.",
      "Report in English to an international owner with broad decision-making authority, and support 3 additional locations owned by other operators.",
    ],
  },
  {
    title: "Administrative Assistant",
    kind: "earlier",
    company: "Malaysia Hair Import Export Co Ltd.",
    duration: "Nov 2019 – Jun 2020",
    description: [
      "Supported daily operations across multiple departments to ensure smooth business functions.",
      "Managed a diverse range of administrative tasks, including correspondence, data entry, and inventory control.",
      "Provided exceptional customer service, resolving inquiries promptly and professionally.",
      "Managed and organized company documents, ensuring accurate filing and retrieval processes.",
      "Collaborated closely with colleagues across departments to ensure smooth operations and achieve company objectives.",
      "Facilitated effective communication and information sharing within the team.",
      "Proficient in using various computer software and applications for administrative tasks.",
      "Adapted quickly to new technologies and processes.",
    ],
  },
  {
    title: "Marketing Internship",
    kind: "earlier",
    company: "Advanced Info Services Plc. (AIS)",
    duration: "Jun 2018 – Jul 2018",
    description: [
      "Led a team of 10 trainees from various universities to enhance the AIS Project, emphasizing collaboration and teamwork for successful outcomes.",
      "Developed a new application prototype for demonstration purposes, showcasing innovative solutions to meet project objectives.",
      "Prepared detailed reports and presentations to communicate project progress and outcomes to senior management.",
      "Collaborated with the marketing team to develop and execute innovative marketing campaigns.",
      "Conducted in-depth analysis of competitive strategies and customer behavior to inform marketing initiatives.",
      "Demonstrated strong communication and interpersonal skills in a fast-paced corporate environment.",
      "Proficient in using various computer software and applications for marketing tasks.",
      "Contributed to a positive and supportive work environment through teamwork and collaboration.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "serviceops-desk",
    title: "ServiceOps Desk",
    status: "Live",
    description: "A role-aware service operations workspace for submitting, assigning, and closing internal support jobs with clear SLA visibility.",
    image: "/images/projects/serviceops-desk-mockup.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    githubLink: "https://github.com/TheetawatCode/serviceops-desk",
    liveDemo: "https://serviceops-desk.vercel.app/",
    caseStudy: "/projects/serviceops-desk",
    featured: true,
    projectType: "Full-stack application",
    typeLabel: "Full-stack app",
    proof: "Role permissions and state transitions validated on the server; Vitest and Playwright cover the core job flow.",
    role: "Full-stack Developer",
    period: "2026",
    highlight: "Role-based access enforced on the server, with tested state transitions and SLA tracking.",
  },
  {
    id: "saan-market",
    title: "Saan Market",
    status: "Live",
    description: "A Thai home-goods storefront with editorial browsing, product search, a persistent cart, and simulated checkout.",
    image: "/images/projects/saan-market-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    githubLink: "https://github.com/TheetawatCode/saan-market",
    liveDemo: "https://saan-market.vercel.app/",
    caseStudy: "/projects/saan-market",
    featured: true,
    projectType: "E-commerce storefront",
    typeLabel: "Frontend showcase · simulated checkout",
    proof: "Prices are stored as integer satang to avoid rounding errors; persisted cart data is validated on load; 30+ Vitest tests run in CI.",
    role: "Frontend Developer",
    period: "2026",
    highlight: "Editorial product discovery with accessible interactions and a persistent client-side cart.",
  },
  {
    id: "boreal-route",
    title: "Boreal Route",
    status: "Live",
    description: "A northern-lights expedition demo with route discovery, weather-aware readiness, and simulated booking.",
    image: "/images/projects/boreal-route-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
    githubLink: "https://github.com/TheetawatCode/boreal-route",
    liveDemo: "https://boreal-route.vercel.app/",
    featured: true,
    projectType: "Travel experience platform",
    typeLabel: "Frontend showcase · simulated booking",
    proof: "Capacity-safe booking simulation with weather-aware readiness; 25+ Vitest tests cover booking and operations flows in CI.",
    role: "Frontend Developer",
    period: "2026",
    highlight: "Weather-aware discovery, capacity-safe booking simulation, and departure readiness coordination.",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    status: "Live",
    description: "A personal portfolio rebuilt with Next.js, TypeScript, Tailwind CSS v4, and pnpm.",
    image: "/images/projects/portfolio-next.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "pnpm"],
    githubLink: "https://github.com/TheetawatCode/Theetawat-Portfolio",
    liveDemo: "https://theetawat-portfolio.vercel.app/",
    projectType: "Developer portfolio",
    role: "Designer & Developer",
    period: "2026",
    highlight: "A content-driven portfolio designed to evolve with new work.",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    status: "Live",
    description: "A landing page built with Next.js, TypeScript, JavaScript and Tailwind CSS.",
    image: "/images/projects/landing-page.png",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Preline UI"],
    githubLink: "https://github.com/TheetawatCode/My-Project/tree/main/2-LandingPage",
    liveDemo: "https://theetawat-landing-page.vercel.app/",
    projectType: "Frontend website",
    role: "Frontend Developer",
  },
  {
    id: "tour-reservation",
    title: "Tour Reservation Website",
    status: "In Progress",
    description: "A tour reservation website built with Next.js, TypeScript, JavaScript and Tailwind CSS v4.0.",
    image: "/images/projects/tour-reservation.png",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/TheetawatCode/My-Project/tree/main/4-TourReservation",
    liveDemo: "https://theetawat-tour-reservation.vercel.app/",
    nextMilestone: "Refining the reservation flow and API integration.",
  },
  {
    id: "finance-flow",
    title: "Finance Flow",
    status: "Prototype",
    description: "A personal finance dashboard concept for tracking spending, balances, and monthly progress.",
    image: "/images/projects/finance-dashboard-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Charts"],
    projectType: "Product concept",
    highlight: "A focused exploration of financial clarity and progress tracking.",
  },
  {
    id: "team-workspace",
    title: "Team Workspace",
    status: "Prototype",
    description: "A collaborative task workspace concept with clear project status and focused team workflows.",
    image: "/images/projects/team-workspace-mockup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    projectType: "Product concept",
    highlight: "A focused exploration of collaborative work and team visibility.",
  },
];

export const education = {
  degree: "Bachelor of Economics",
  university: "Chiang Mai University (CMU)",
  major: "Economics",
  minor: "Financial Management",
  minorDiscipline: "Business Administration",
  duration: "Aug 2015 – May 2019",
  thesis: "Risk and Return Analysis and Price Estimation of Energy Sector Stocks Using the Capital Asset Pricing Model (CAPM)",
} as const;
