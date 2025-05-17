
import { Phone, Image } from "lucide-react";
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
import sedan1 from '../assets/shedan1.jpeg'
import sedan2 from '../assets/shedan2.jpeg'
import ertiga1 from '../assets/ertiga1.jpeg'
import ertiga2 from '../assets/ertiga2.jpeg'
import inner1 from '../assets/inner1.jpeg'
import inner2 from '../assets/inner2.jpeg'
import innova1 from '../assets/innova.webp'
import inner3 from '../assets/inner3.webp'





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
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cab-dark mb-4">Our Cars</h2>
          <p className="text-cab-muted max-w-2xl mx-auto">
            Choose the perfect ride for your journey with our well-maintained vehicles and experienced drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((car, index) => (
            <div 
              key={index}
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
                
                <a
                  href="tel:+919265998801"
                  className="flex items-center justify-center gap-2 bg-cab-DEFAULT text-cab-dark font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone size={18} />
                  Book Now
                </a>
              </div>
            </div>
          ))}
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
