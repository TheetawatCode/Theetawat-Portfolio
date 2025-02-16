// data/skillsData.ts
export interface skill {
  frontendDev: string[];
  programmingLanguages: string[];
  backendDev: string[];
  database: string[];
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
      "TailwindCSS",
      "Material UI",
    ],
    programmingLanguages: ["JavaScript", "TypeScript"],
    backendDev: ["Node.js", "Express.js"],
    database: ["MongoDB", "MySQL"],
    versionControl: ["Git", "GitHub"],
    devOps: ["Docker (Learning)", "Postman"],
    others: ["Figma", "Wordpress"],
  },
];
