// data/skillsData.ts
export interface skill {
  frontendDev: string[];
  uiFrameworks: string[];
  programmingLanguages: string[];
  backendDev: string[];
  database: string[];
  editors: string[];
  versionControl: string[];
  devOps: string[];
  others: string[];
}

export const skillsData: skill[] = [
  {
    frontendDev: [
      "React",
      "Next.js",
      "Vue.js (Learning)",
      "Nuxt.js (Learning)",
    ],
    uiFrameworks: ["TailwindCSS", "Material UI", "HeroUI (Previously NextUI)", "Shadcn UI"],
    programmingLanguages: ["JavaScript", "TypeScript"],
    backendDev: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL", "PostgreSQL (Learning)"], 
    editors: ["VSCode", "Cursor"],
    versionControl: ["Git", "GitHub"],
    devOps: ["Docker", "OrbStack (Learning)", "Postman"],
    others: ["Figma", "Wordpress"],
  },
];
