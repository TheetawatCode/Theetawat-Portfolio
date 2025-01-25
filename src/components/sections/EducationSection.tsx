// src/components/EducationSection.tsx
const education = [
    {
        title: "Faculty of Economics, Chiang Mai University (CMU)",
        major: "Major in Economics, Minor in Business Administration (Financial Management)",
        duration: "Aug 2015 - May 2019",
        description: [
            "GPA: 2.80",
            "Thesis : Risk and Return Analysis and Price Estimation of Energy Sector Stocks Using the Capital Asset Pricing Model (CAPM)",
        ]
    },
]

const EducationSection = () => {
    return (
        <section id="experiences" className="py-20 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900">Education</h2>
                <div className="mt-8 space-y-8">
                    {education.map((exp, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                            data-aos="fade-up"
                            data-aos-duration="2000">
                            <h3 className="text-xl font-semibold text-indigo-500">{exp.title}</h3>
                            <p className="text-gray-600 font-medium">{exp.major} | {exp.duration}</p>
                            {/* แสดง description เป็น Bullets */}
                            <ul className="mt-2 text-gray-700 list-disc list-inside">
                                {exp.description.map((desc, descIndex) => (
                                    <li key={descIndex}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;