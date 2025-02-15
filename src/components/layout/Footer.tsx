// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="py-8 text-white bg-blue-950">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()}&nbsp;
          <a href="#"
            className="hover:text-gray-300"
            title="Theetawat Premsawat"
          >Theetawat Premsawat</a>. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#about"
            className="hover:text-gray-300"
            title="About"
            rel="noopener noreferrer"
          >./&nbsp; About</a>
          <a href="#experiences"
            className="hover:text-gray-300"
            title="Experiences"
            rel="noopener noreferrer"
          >./&nbsp; Experiences</a>
          <a href="#projects"
            className="hover:text-gray-300"
            title="Projects"
            rel="noopener noreferrer"
          >./&nbsp; Projects</a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/theetawat-premsawat/"
            className="hover:text-gray-300"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a>
          <a href="https://github.com/TheetawatCode"
            className="hover:text-gray-300"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;