
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";


const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-yellow-300 text-cab-DEFAULT text-sm font-medium mb-3"
          >
            GET IN TOUCH
        </motion.span>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cab-dark mb-4">Contact Us</h2>
          <p className="text-cab-muted max-w-2xl mx-auto">
            Have questions or need to book a ride? Contact us directly using the information below.
          </p>
        </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cab-dark">Reach Out to Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cab-accent p-3 rounded-full">
                  <MapPin className="text-cab-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-cab-dark">Our Office</h4>
                  <p className="text-cab-muted">
                  Akashwani chowk <br />
                    Rajkot, Gujrat 360005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cab-accent p-3 rounded-full">
                  <Phone className="text-cab-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-cab-dark">Phone Numbers</h4>
                  <p className="text-cab-muted">
                    Booking: <a href="tel:+919265998801" className="text-cab-DEFAULT hover:underline">+91 9265998801</a><br />
                    Customer Support: <a href="tel:+919265998801" className="text-cab-DEFAULT hover:underline">+91 9265998801</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cab-accent p-3 rounded-full">
                  <Mail className="text-cab-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-cab-dark">Email</h4>
                  <p className="text-cab-muted">
                    <a href="mailto:bookings@ravirajcab.com" className="text-cab-DEFAULT hover:underline">bookings@ravirajcab.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cab-accent p-3 rounded-full">
                  <Clock className="text-cab-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-cab-dark">Operating Hours</h4>
                  <p className="text-cab-muted">
                    Available 24 hours, 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.6588333284535!2d70.76045559388417!3d22.28603487604931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbd2176fdf89%3A0x8e7a16b97d7a7952!2sAkashwani%20Chowk%2C%20Bhawani%20Nagar%2C%20Rajkot%2C%20Gujarat%20360005!5e1!3m2!1sen!2sin!4v1747479726113!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
