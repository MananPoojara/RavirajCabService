
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <a
        href="tel:+919265998801"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-cab-accent text-cab-dark rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Call for booking"
      >
        {/* Pulse effect */}
        <span className="animate-pulse-ring absolute inset-0 border-4 border-yellow-400 rounded-full"></span>
        <Phone size={28} strokeWidth={2.5} />
      </a>
    </div>
  );
};

export default FloatingCallButton;
