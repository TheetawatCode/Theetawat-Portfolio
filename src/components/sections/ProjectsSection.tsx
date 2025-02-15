// components/Projects.tsx
import { projectsData } from '../../data/projectsData';

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="max-w-6xl px-4 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-white">./&nbsp; Projects</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <div key={project.id} className="p-6 transition-transform duration-500 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-48 transition-opacity duration-500 rounded-t-lg select-none draggable-false hover:opacity-80"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                            <p className="mt-2 text-sm font-semibold text-yellow-700 transition-colors duration-500 hover:text-gray-600">{project.status}</p>
                            <p className="mt-2 text-gray-700">{project.description}</p>
                            {/* แสดง technologies เป็น Bullets */}
                            <ul className="grid grid-cols-2 mt-2 text-gray-700 list-disc list-inside">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                            <div className="flex justify-center mt-6">
                                <a
                                    href={project.githubLink}
                                    title='GitHub'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 font-semibold text-white transition-colors border rounded-full bg-gray-950 border-gray-950 hover:bg-gray-700 hover:border-gray-700 hover:text-white duration-400"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.liveDemo}
                                    title='Live Demo'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 ml-4 font-semibold text-blue-900 transition-colors bg-white border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white duration-400"
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