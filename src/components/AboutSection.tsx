
import { Shield, Car, Award, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cab-DEFAULT text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About rishirajCab</h2>
          <p className="max-w-2xl mx-auto text-black">
            Trusted and reliable cab service with years of experience serving our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cab-accent rounded-full mb-6">
              <Shield className="text-cab-dark" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety First</h3>
            <p className="text-black">
              Well-maintained vehicles with regular safety inspections and trained drivers.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cab-accent rounded-full mb-6">
              <Car className="text-cab-dark" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
            <p className="text-black">
              Clean and comfortable vehicles with professional drivers for a pleasant journey.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cab-accent rounded-full mb-6">
              <ThumbsUp className="text-cab-dark" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
            <p className="text-black">
              Punctual pickups and reliable transportation you can count on, every time.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cab-accent rounded-full mb-6">
              <Award className="text-cab-dark" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
            <p className="text-black">
              Years of experience with professional drivers who know the best routes.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Story</h3>
          <p className="text-black max-w-4xl mx-auto">
            rishirajCab started as a small local service with just two cars in 2005. Today, we've grown to become one of the most trusted cab services in the region. Our commitment to safety, reliability, and customer satisfaction has earned us a loyal customer base. We take pride in providing comfortable transportation solutions at affordable rates, making travel accessible for everyone. Whether you need a ride for daily commuting, airport transfers, or special occasions, rishirajCab is your reliable partner on the road.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
