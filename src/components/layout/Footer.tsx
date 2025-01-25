// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} <a href="#" className="hover:text-gray-300">Theetawat Premsawat</a>. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/theetawat-premsawat/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/TheetawatCode" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;