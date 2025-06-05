
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../assets/logo2322.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-14 px-4 md:px-6">
      <a href="#" className="flex items-center font-bold">
          <span className="text-3xl transition-colors duration-100 text-white">
            <span className="text-cab-accent">RishirajCab</span>
          </span>
      </a>

        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-6">
            <a href="#services" className={`transition-colors duration-300 ${scrolled ? "text-cab-DEFAULT" : "text-white"} hover:text-cab-accent font-medium`}>Services</a>
            <a href="#about" className={`transition-colors duration-300 ${scrolled ? "text-cab-DEFAULT" : "text-white"} hover:text-cab-accent font-medium`}>About</a>
            <a href="#contact" className={`transition-colors duration-300 ${scrolled ? "text-cab-DEFAULT" : "text-white"} hover:text-cab-accent font-medium`}>Contact</a>
          </div>
          
          <a 
            href="tel:+919265998801" 
            className={`flex items-center gap-2 ${
              scrolled 
                ? "bg-cab-accent text-cab-dark hover:bg-yellow-400" 
                : "bg-cab-accent text-cab-dark hover:bg-yellow-400"
            } font-semibold px-4 py-2 rounded-full transition-colors duration-300 shadow-md`}
          >
            <Phone size={18} className="animate-pulse" />
            <span className="hidden sm:inline">+91 9265998801</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
