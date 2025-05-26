import { Phone, Image, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DialogClose, DialogOverlay } from "@radix-ui/react-dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import sedan1 from '../assets/sedan4.png'
import sedan2 from '../assets/sedan5.png'
import ertiga1 from '../assets/ertiga1.jpeg'
import ertiga2 from '../assets/ertiga2.jpeg'
import inner1 from '../assets/inner1.jpeg'
import inner2 from '../assets/inner2.jpeg'
import innova1 from '../assets/innova.webp'
import inner3 from '../assets/inner3.webp'
import amaze1 from '../assets/amaze1.jpeg'
import amaze2 from '../assets/amaze2.jpeg'
import amaze3 from '../assets/amaze3.jpeg'
import amaze4 from '../assets/amaze4.jpeg'
import verna1 from '../assets/verna1.png'
import verna2 from '../assets/verna2.png'
import verna3 from '../assets/verna3.png'
import city1 from '../assets/city1.png'
import city2 from '../assets/city2.png'
import city3 from '../assets/city3.png'
import crysta2 from '../assets/crysta2.png'
import crysta4 from '../assets/crysta4.png'
import ciaz1 from '../assets/ciaz1.png'
import ciaz2 from '../assets/ciaz2.png'
import ciaz3 from '../assets/ciaz3.png'
import tempo1 from '../assets/tempo1.png'
import tempo2 from '../assets/tempo2.png'
import tempo3 from '../assets/tempo3.png'




type CarService = {
  name: string;
  image: string;
  price: string;
  description: string;
  features: string[];
  images: string[];
};

const ServicesSection = () => {
  const [selectedCar, setSelectedCar] = useState<CarService | null>(null);
  const [showMore, setShowMore] = useState(false);
  
  const services: CarService[] = [
    {
      name: "Sedan Dzire",
      image: sedan1,
      price: "11 Rs/km",
      description: "Comfortable sedan perfect for city travel and small groups.",
      features: ["Air Conditioning", "4 Seater", "Luggage Space", "Music System"],
      images: [
        inner1,
        sedan2,
      ]
    },
    {
      name: "Maruti Ertiga",
      image: ertiga2,
      price: "13 Rs/km",
      description: "Spacious SUV that comfortably seats up to 6 passengers.",
      features: ["Air Conditioning", "6 Seater", "Large Luggage Space", "Music System", "USB Charging"],
      images: [
        ertiga1,
        inner2
      ]
    },
    {
      name: "Toyota Innova",
      image: innova1,
      price: "18 Rs/km",
      description: "Premium vehicle with extra comfort for long journeys and large groups.",
      features: ["Air Conditioning", "7 Seater", "Extra Large Luggage Space", "Premium Music System", "USB Charging", "Comfortable Seating"],
      images: [
        inner3,
      ] 
    },
    {
      name: "Honda Amaze",
      image: amaze4,
      price: "11 Rs/km",
      description: "Stylish Amaze with premium features for Amazing driving experience.",
      features: ["Air Conditioning", "5 Seater", "Premium Interior", "Music System", "USB Charging"],
      images: [
        amaze4,
        amaze3,
        amaze2,
        amaze1,
      ]
    },
    {
      name: "Hyundai Verna",
      image: verna1,
      price: "15 Rs/km",
      description: "Modern Verna with advanced features and spacious cabin.",
      features: ["Air Conditioning", "4 Seater", "Sunroof", "Premium Sound System", "USB Charging", "GPS Navigation"],
      images: [
        verna2,
        verna3,
        verna1
      ]
    },
    {
      name: "Honda City",
      image: city1,
      price: "Call For Price",
      description: "Compact and smooth sedan with robust build and excellent safety features.",
      features: ["Air Conditioning", "4 Seater", "Safety Features", "Music System", "USB Charging", "All Weather Tyres"],
      images: [
        city2,
        city3
      ]
    },
    {
      name: "Toyota Innova Crysta",
      image: innova1,
      price: "Call For Price",
      description: "Compact SUV with modern design and excellent fuel efficiency.",
      features: ["Air Conditioning", "7 Seater", "Digital Display", "Music System", "USB Charging"],
      images: [
        inner3,
        crysta2,
        crysta4
      ]
    },
    {
      name: "Ciaz",
      image: ciaz1,
      price: "Call For Price",
      description: "Premium SUV with advanced technology and luxurious interiors.",
      features: ["Air Conditioning", "5 Seater", "Leather Seats", "Premium Sound", "USB Charging", "GPS Connectivity"],
      images: [
        ciaz2,
        ciaz3
      ]
    },
    {
      name: "Tempo Traveller",
      image: tempo1,
      price: "Call For Price",
      description: "Compact hatchback with European engineering and build quality.",
      features: ["Air Conditioning", "Max 14 Seater", "Premium Build", "Music System", "Safety Features"],
      images: [
        tempo2,
        tempo3
      ]
    }
  ];

  const initialCars = services.slice(0, 6);
  const additionalCars = services.slice(6);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-xs font-medium border-cab-accent text-cab-dark">
            PREMIUM FLEET
          </Badge>
          <h2 className="text-4xl font-bold text-black mb-3">
            Choose Your Perfect Ride
          </h2>
          <div className="w-20 h-1 mx-auto bg-cab-accent rounded-full mb-4"></div>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Experience comfort and reliability with our well-maintained vehicles and professional drivers.
          </p>
        </div>

        <div className="space-y-8">
          {/* Initial 6 cars - always visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialCars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-cab-accent cursor-pointer"
                onClick={() => setSelectedCar(car)}
              >
                <div className="h-56 overflow-hidden relative group">
                  <img 
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white flex items-center gap-2">
                      <Image size={20} /> View Gallery
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-cab-dark">{car.name}</h3>
                    <span className="bg-cab-accent text-cab-dark font-bold py-1 px-3 rounded-full">
                      {car.price}
                    </span>
                  </div>
                  
                  <p className="text-cab-muted mb-6">{car.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {car.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check size={14} className="text-green-500" />
                        <span className="text-sm text-cab-dark">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="tel:+919265998801"
                    className="flex items-center justify-center gap-2 bg-cab-DEFAULT text-cab-dark font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={18} />
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional cars with slide animation */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  opacity: { duration: 0.4, delay: showMore ? 0.2 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {additionalCars.map((car, index) => (
                    <motion.div
                      key={index + 6}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut"
                      }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-cab-accent cursor-pointer"
                      onClick={() => setSelectedCar(car)}
                    >
                      <div className="h-56 overflow-hidden relative group">
                        <img 
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-white flex items-center gap-2">
                            <Image size={20} /> View Gallery
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-semibold text-cab-dark">{car.name}</h3>
                          <span className="bg-cab-accent text-cab-dark font-bold py-1 px-3 rounded-full">
                            {car.price}
                          </span>
                        </div>
                        
                        <p className="text-cab-muted mb-6">{car.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-5">
                          {car.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <Check size={14} className="text-green-500" />
                              <span className="text-sm text-cab-dark">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a
                          href="tel:+919265998801"
                          className="flex items-center justify-center gap-2 bg-cab-DEFAULT text-cab-dark font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone size={18} />
                          Book Now
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Show More/Less Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cab-DEFAULT to-cab-dark text-black rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {showMore ? (
                <>
                  <ChevronUp size={24} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={24} />
                  Show More 
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Car Details Dialog */}
      <Dialog open={!!selectedCar} onOpenChange={(open) => !open && setSelectedCar(null)}>
        <DialogOverlay className="bg-black/10 backdrop-blur-sm fixed inset-0 z-40" />
        <DialogContent className="max-w-[90vw] sm:max-w-3xl p-0 overflow-y-auto rounded-xl max-h-[80vh]">
          <div className="relative">
            {selectedCar && (
              <div>
                {/* Car Images Carousel */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedCar.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="h-72 md:h-96 w-full overflow-hidden">
                            <img 
                              src={img} 
                              alt={`${selectedCar.name} view ${i+1}`} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                      <CarouselPrevious className="static transform-none mx-0 bg-white/70 text-cab-DEFAULT hover:bg-white hover:text-cab-dark" />
                      <CarouselNext className="static transform-none mx-0 bg-white/70 text-cab-DEFAULT hover:bg-white hover:text-cab-dark" />
                    </div>
                  </Carousel>
                </div>
                
                {/* Car Details Content */}
                <div className="p-6">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="flex justify-between items-center text-2xl">
                      <span className="font-bold text-cab-dark">{selectedCar.name}</span>
                      <span className="bg-cab-accent text-cab-dark font-bold py-1 px-4 rounded-full text-lg">
                        {selectedCar.price}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <p className="text-cab-muted text-lg">{selectedCar.description}</p>
                    
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-semibold mb-3 text-lg text-cab-dark">Features:</h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {selectedCar.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-cab-accent"></span>
                            <span className="text-cab-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-5 text-center rounded-lg border-2 border-cab-accent">
                      <h4 className="font-semibold text-xl text-cab-dark mb-3">Book This Car Now!</h4>
                      <a
                        href="tel:+919265998801"
                        className="flex items-center justify-center gap-2 bg-cab-DEFAULT text-black font-medium py-4 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 w-full text-lg"
                      >
                        <Phone size={24} />
                        +91 9876543210
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
