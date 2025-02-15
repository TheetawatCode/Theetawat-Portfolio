// src/components/ExperiencesSection.tsx
import { experiences } from '../../data/experiencesData';
const ExperiencesSection = () => {
    return (
        <section id="experiences" className="py-20 bg-gray-100">
            <div className="max-w-5xl px-4 mx-auto">
                <h2 className="text-3xl font-bold text-blue-900">./&nbsp; Experience</h2>
                <div className="mt-8 space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="2000">
                            <h3 className="text-xl font-semibold text-blue-900">{exp.title}</h3>
                            <p className="font-medium text-gray-600">{exp.company} &nbsp;|&nbsp; {exp.duration}</p>
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

export default ExperiencesSection;