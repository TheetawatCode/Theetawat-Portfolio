// data/blogData.ts
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    link: string;
  }
  
  export const blogData: BlogPost[] = [
    {
      id: 1,
      title: "How to Build a Portfolio with React",
      excerpt: "Learn how to create a stunning portfolio using React and TailwindCSS.",
      image: "/src/assets/images/blog/blog1.jpg",
      date: "Oct 10, 2023",
      link: "https://yourblog.com/how-to-build-portfolio",
    },
    {
      id: 2,
      title: "Mastering TypeScript for Frontend Development",
      excerpt: "A comprehensive guide to using TypeScript in modern frontend projects.",
      image: "/src/assets/images/blog/blog2.jpg",
      date: "Sep 15, 2023",
      link: "https://yourblog.com/mastering-typescript",
    },
    {
      id: 3,
      title: "Top 10 Tools for Frontend Developers in 2023",
      excerpt: "Discover the best tools and libraries for frontend development this year.",
      image: "/src/assets/images/blog/blog3.jpg",
      date: "Aug 20, 2023",
      link: "https://yourblog.com/top-10-tools-2023",
    },
  ];