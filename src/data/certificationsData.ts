// data/certificationsData.ts
export interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    link: string;
  }
  
  export const certificationsData: Certification[] = [
    {
      id: 1,
      title: "React Certification",
      issuer: "Coursera",
      date: "2023",
      link: "https://coursera.org/certificate/react",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      issuer: "Udemy",
      date: "2022",
      link: "https://udemy.com/certificate/javascript-advanced",
    },
    {
      id: 3,
      title: "Frontend Development Specialization",
      issuer: "edX",
      date: "2021",
      link: "https://edx.org/certificate/frontend",
    },
  ];