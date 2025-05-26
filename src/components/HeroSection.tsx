
import { ChevronDown } from "lucide-react";
import cabvideo from '../assets/video.mp4'

const HeroSection = () => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-cab-dark/80 via-cab-dark/70 to-cab-dark/80 z-10"></div>
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
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="text-cab-accent">Raviraj</span>Cab
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
          Your Reliable Ride Partner - Anytime, Anywhere
        </p>
        <button
          onClick={scrollToServices}
          className="bg-cab-accent text-cab-dark font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          Our Services <ChevronDown size={18} />
        </button>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-white/70 mb-2 text-sm">Explore Our Fleet</div>
          <button
            onClick={scrollToServices}
            className="animate-bounce p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
