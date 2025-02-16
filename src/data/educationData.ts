// data/educationData.ts
export interface Education {
    title: string;
    major: string;
    duration: string;
    description: string[];
  }
  
  export const education: Education [] = [
    {
      title: "Bachelor of Economics, Chiang Mai University (CMU)",
      major: "Major in Economics, Minor in Business Administration (Financial Management)",
      duration: "Aug 2015 - May 2019",
      description: [
          "Thesis : Risk and Return Analysis and Price Estimation of Energy Sector Stocks Using the Capital Asset Pricing Model (CAPM)",
      ]
  },
  ];