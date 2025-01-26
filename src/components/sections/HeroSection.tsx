import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {

    const words = ["perform", "adapt", "scale"];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [typedWord, setTypedWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 200; // ความเร็วในการพิมพ์หรือลบ
        const timeout = setTimeout(() => {
            if (!isDeleting && typedWord === currentWord) {
                // ถ้าพิมพ์ครบคำแล้ว ให้เริ่มลบ
                setTimeout(() => setIsDeleting(true), 1000); // รอ 1 วินาทีก่อนลบ
            } else if (isDeleting && typedWord === '') {
                // ถ้าลบครบแล้ว ให้เปลี่ยนคำและเริ่มพิมพ์ใหม่
                setIsDeleting(false);
                setIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % words.length;
                    setCurrentWord(words[newIndex]);
                    return newIndex;
                });
            } else {
                // พิมพ์หรือลบตัวอักษรทีละตัว
                setTypedWord((prev) =>
                    isDeleting
                        ? prev.slice(0, -1) // ลบตัวอักษร
                        : currentWord.slice(0, prev.length + 1) // เพิ่มตัวอักษร
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [typedWord, currentWord, isDeleting, words, index]);

    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
                data-aos="fade-left"
                data-aos-duration="3000"
            >
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full pointer-events-none select-none draggable-false"
                    src="/images/developer.jpg"
                    alt="Developer"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="mb-3 inline-block px-3 py-px text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-50 rounded-full"
                        data-aos="fade-left"
                        data-aos-duration="3000">
                        Hello, I'm
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-semibold tracking-tight text-blue-950 uppercase xs:text-4xl sm:text-4xl sm:leading-none md:text-6xl lg:mb-6"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        Theetawat Premsawat
                    </h2>
                    <h2 className="mb-8 text-2xl font-bold text-indigo-400 md:text-3xl"
                        data-aos="fade-left"
                        data-aos-duration="3000">
                        I build websites that{' '}
                        <span className="typing-effect">{typedWord}</span>
                        <span className="cursor">|</span> {/* เพิ่ม Cursor */}
                    </h2>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            I'm a Frontend Developer who transitioned from an administrative career to follow my passion for coding.
                        </p>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Currently, I'm seeking opportunities to collaborate with innovative teams and contribute to impactful projects.
                        </p>
                        <p className="pr-5 mb-8 text-base font-semibold text-gray-700 md:text-lg transition-colors duration-300 hover:text-gray-200">
                            Let’s collaborate and create solutions that matter!
                        </p>
                    </div>
                    <div className="flex items-center"
                        data-aos="fade-up"
                        data-aos-duration="3000">
                        <a
                            href="https://www.linkedin.com/in/theetawat-premsawat/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 text-lg font-medium tracking-wide bg-white text-gray-800 border border-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-500 rounded-full shadow-md hover:shadow-lg transition-colors duration-400"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="/pdf/Theetawat_Resume.pdf"
                            title="Download Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 text-lg font-medium tracking-wide bg-gray-100 text-gray-800 border border-gray-100 hover:bg-white  hover:border-gray-100 rounded-full shadow-md hover:shadow-lg transition-colors duration-400"
                        >
                            Resume
                        </a>
                        <a
                            href="https://github.com/TheetawatCode"
                            title="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 text-lg font-medium tracking-wide bg-gray-950 text-white border border-gray-950 hover:bg-gray-700  hover:border-gray-700 rounded-full shadow-md hover:shadow-lg transition-colors duration-400"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;