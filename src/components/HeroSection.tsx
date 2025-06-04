
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
 {/* Video Background with Enhanced Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            className="object-cover w-full h-full"
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
        </motion.div>
      </div>

            {/* Dynamic Light Trails */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {/* Horizontal light streaks */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cab-accent/60 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              width: "200px",
            }}
            animate={{
              x: ["-200px", "calc(100vw + 200px)"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical particle streams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cab-accent/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: "-80px",
            }}
            animate={{
              y: ["0vh", "120vh"],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 6 + i * 1,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}

        {/* Diagonal accent lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              linear-gradient(45deg, transparent 0%, rgba(255, 193, 7, 0.03) 25%, transparent 50%),
              linear-gradient(-45deg, transparent 50%, rgba(255, 193, 7, 0.03) 75%, transparent 100%)
            `,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          />
      </div>



      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-cab-accent">Rishiraj</span>Cab
        </motion.h1>
        
<motion.div
          initial={{ opacity: 0, y: 30 }}
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
            href="tel:+916356104847" 
            className="text-cab-accent font-semibold hover:text-yellow-300 transition-colors"
          >
            +91 6356104847
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
          <div className="text-white/70 mb-2 text-sm -ml-12">Explore Our Fleet</div>
          <button
            onClick={scrollToServices}
            className="p-3 bg-white bg-opacity-20 -ml-12 rounded-full backdrop-blur-sm"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
