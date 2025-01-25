import React from 'react';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-950 shadow-lg">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex justify-between">
          <a
            href="/"
            aria-label="Portfolio"
            title="Theetawat Premsawat"
            className="inline-flex items-center"
          >
            <span className="text-xl font-bold tracking-wide text-gray-100 uppercase transition-colors duration-500 hover:text-gray-400">
              Theetawat Premsawat
            </span>
          </a>
          <ul className="items-center hidden space-x-12 lg:flex">
            <li>
              <a
                href="#about"
                aria-label="About"
                title="About"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
              >
                ./ About
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                aria-label="Experiences"
                title="Experiences"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
              >
                ./ Experiences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="Projects"
                title="Projects"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
              >
                ./ Projects
              </a>
            </li>
            {/* <li>
              <a
                href="#content"
                aria-label="Content"
                title="Content"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-500 hover:text-gray-400"
              >
                ./ Content
              </a>
            </li> */}
            <li>
              <a
                href="/src/assets/Theetawat_Resume.pdf"
                title="Download Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 text-md font-medium tracking-wide bg-blue-950 text-cyan-400 border border-cyan-400 hover:bg-white hover:text-blue-950 hover:border-blue-950 rounded-lg shadow-md hover:shadow-lg transition-colors duration-500"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded text-white hover:bg-gray-200 hover:text-blue-950 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Portfolio"
                          title="Theetawat Premsawat"
                          className="inline-flex items-center"
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-blue-900 uppercase">
                            Theetawat Premsawat
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-8 mt-10">
                        <li>
                          <a
                            href="#about"
                            aria-label="About"
                            title="About"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            ./ About
                          </a>
                        </li>
                        <li>
                          <a
                            href="#experiences"
                            aria-label="Experiences"
                            title="Experiences"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            ./ Experiences
                          </a>
                        </li>
                        <li>
                          <a
                            href="#projects"
                            aria-label="Projects"
                            title="Projects"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            ./ Projects
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="#content"
                            aria-label="Content"
                            title="Content"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            ./ Content
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;