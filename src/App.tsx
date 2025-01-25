import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFoundPage from './pages/NotFoundPage';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const App: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของ animation
      once: true, // ให้ animation ทำงานแค่ครั้งเดียว
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* หน้าแรก */}
          <Route path="/blog" element={<Blog />} /> 
          <Route path="*" element={<NotFoundPage />} /> {/* 404 - Page Not Found */}
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;