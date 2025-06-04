
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackForm from "@/components/FeedbackForm";


const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <AnimatePresence>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50"
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
      <FeedbackForm />
    </motion.div>
  </AnimatePresence>
    
  );
};

export default Index;
