// components/Projects.tsx
import { projectsData } from '../../data/projectsData';

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8">./ Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                            {/* แสดง technologies เป็น Bullets */}
                            <ul className="mt-2 text-gray-700 list-disc list-inside">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                            <div className="mt-6 flex justify-center ">
                                <a
                                    href={project.githubLink}
                                    title='GitHub'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white font-semibold px-4 py-2 rounded-full text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.liveDemo}
                                    title='Live Demo'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4 bg-white font-semibold px-4 py-2 rounded-full text-blue-900 border border-blue-900 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;