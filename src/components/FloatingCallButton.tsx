
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-400 opacity-30"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.a
            href="tel:+919265998801"
            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-cab-accent text-cab-dark rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call for booking"
          >
            <Phone size={28} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>

  );
};

export default FloatingCallButton;
