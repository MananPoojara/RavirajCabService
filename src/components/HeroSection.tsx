
import { ChevronDown, Phone } from "lucide-react";
import cabvideo from '../assets/video.mp4'
import { TextRotate } from "@/components/ui/text-rotate";
import {
  AnimatePresence,
  AnimatePresenceProps,
  motion,
  MotionProps,
  Transition,
} from "framer-motion"
import { useEffect, useState } from "react";


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-cab-dark/90 via-cab-dark/60 to-cab-dark/80 z-10"></div>
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={cabvideo}
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-cab-accent">Raviraj</span>Cab
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-3xl mb-4 max-w-4xl"
        >
          <span className="opacity-90">Reliable Ride Partner </span>
          <TextRotate
            texts={["Anytime", "Anywhere"]}
            rotationInterval={3000}
            mainClassName="text-cab-accent font-bold inline-block"
            staggerDuration={0.05}
            staggerFrom="first"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl mb-8 opacity-90"
        >
          Just call us at{" "}
          <a 
            href="tel:+919265998801" 
            className="text-cab-accent font-semibold hover:text-yellow-300 transition-colors"
          >
            +91 9265998801
          </a>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.1,
            type: "spring",
            stiffness: 200 
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToServices}
            className="bg-cab-accent text-cab-dark font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-5px]"
          >
            Our Services <ChevronDown size={18} />
          </button>
          
          <a
            href="tel:+919265998801"
            className="bg-transparent border-2 border-cab-accent text-cab-accent font-semibold px-8 py-4 rounded-full hover:bg-cab-accent hover:text-cab-dark transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-5px]"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: [0, 10, 0],
          }}
          transition={{
            y: { 
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
            opacity: { duration: 1, delay: 1.5 }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="text-white/70 mb-2 text-sm">Explore Our Fleet</div>
          <button
            onClick={scrollToServices}
            className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
