// components/AboutSection.tsx
const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="max-w-5xl px-4 mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-14">./&nbsp;  About Me</h2>
                <div className="grid grid-cols-1 gap-8 p-8 transition-shadow bg-white rounded-lg shadow-md md:grid-cols-2 hover:shadow-xl">
                    <div className="order-2 text-base text-gray-700" data-aos="fade-up" data-aos-duration="3000">
                        <p className="mb-6">
                            As a self-taught Frontend Developer, I combine my organizational skills from an administrative background with a passion for coding to create impactful digital experiences. After completing a 4-month Frontend Bootcamp, I've been actively building projects and refining my skills in modern tools like React, Next.js, TailwindCSS, and TypeScript.
                        </p>
                        <p className="mb-6">
                            I'm committed to continuous growth and staying up-to-date with the latest trends in Full-stack development.
                            I'm passionate about crafting projects that enhance user experience and drive business success.
                        </p>
                        <p className="mb-6">
                            Currently, I'm seeking a Frontend Developer role where I can apply my technical skills, contribute to Open Source projects, and collaborate with a team of passionate developers.
                        </p>
                        <p className="mb-6">
                            if you have any questions or would like to work together, feel free to reach out to me at {' '}
                            <a href="mailto:KpE1t@example.com" className="text-blue-900 hover:underline">theetawat.work@gmail.com</a>
                        </p>
                        <div className="flex items-center justify-center mt-8 space-x-4">
                            <a
                                href="/pdf/Theetawat_Resume.pdf"
                                title="Download Resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex px-6 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-gray-100 rounded-full shadow-md hover:bg-blue-900 hover:border-blue-900 hover:text-white hover:shadow-lg"
                            >
                                Resume
                            </a>
                        </div>

                    </div>
                    <div className="flex items-center justify-center order-1"
                        data-aos="flip-right"
                        data-aos-duration="1000"
                    >
                        <img
                            src="/images/profile.PNG"
                            alt="Profile"
                            title="Theetawat Premsawat (James)"
                            className="object-cover w-64 h-64 my-10 transition-transform duration-300 rounded-full shadow-2xl pointer-events-none select-none hover:scale-110 draggable-false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;