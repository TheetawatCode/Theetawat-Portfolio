// src/components/SkillsSection.tsx
const skills = [
    "React", "Next.js", "TailwindCSS", "Material UI", "TypeScript", "JavaScript", "HTML", "CSS", "Git",
    "GitHub", "Node.js", "Express.js", "MySQL", "MongoDB", "Docker", "Figma", "Wordpress", "AI Prompt",
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white">./&nbsp; Skills</h2>
                <div className="mt-8 flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white text-sm font-medium px-4 py-2 rounded-full text-blue-900 border border-blue-900 hover:bg-blue-700 hover:text-white transition-colors duration-500 hover:shadow-lg"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;