// src/components/SkillsSection.tsx
const skills = [
    "React", "Next.js", "TailwindCSS", "Material UI", "TypeScript", "JavaScript", "HTML", "CSS", "Git",
    "GitHub", "Node.js", "Express.js", "MySQL", "MongoDB", "Docker", "Figma", "Wordpress", "AI Prompt",
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-5xl px-4 mx-auto">
                <h2 className="text-3xl font-bold text-white">./&nbsp; Skills</h2>
                <div className="flex flex-wrap gap-4 mt-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
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