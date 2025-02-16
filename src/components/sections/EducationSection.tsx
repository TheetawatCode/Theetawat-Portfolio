// src/components/EducationSection.tsx
import { education } from '../../data/educationData';
const EducationSection = () => {
    return (
        <section id="education" className="py-20 bg-gray-100">
            <div className="max-w-5xl px-4 mx-auto">
                <h2 className="text-3xl font-bold text-blue-900">./&nbsp; Education</h2>
                <div className="mt-8 space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="2000">
                            <h3 className="text-xl font-semibold text-indigo-400">{edu.title}</h3>
                            <p className="font-medium text-gray-600">{edu.major} &nbsp;|&nbsp; {edu.duration}</p>
                            {/* แสดง description เป็น Bullets */}
                            <ul className="mt-2 text-gray-700 list-disc list-inside">
                                {edu.description.map((desc, descIndex) => (
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