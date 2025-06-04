
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cab-dark text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              <span className="text-cab-accent">Rishiraj</span>Cab
            </h2>
            <p className="text-sm">Your reliable ride partner - anytime, anywhere</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} RavirajCab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
