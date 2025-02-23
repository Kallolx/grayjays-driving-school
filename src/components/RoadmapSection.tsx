import { GraduationCap, Car,Users} from 'lucide-react';
import { Link } from 'react-router-dom';



const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#2c3149 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Container */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
                alt="Driving Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149]/95 via-[#2c3149]/60 to-transparent" />

              {/* Minimal Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#2c3149] to-transparent">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-0.5 bg-yellow-500 mb-8" />
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">98%</div>
                      <div className="text-sm text-white/80 mt-1 font-medium">Pass Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">2000+</div>
                      <div className="text-sm text-white/80 mt-1 font-medium">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">15+</div>
                      <div className="text-sm text-white/80 mt-1 font-medium">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 text-[#2c3149] text-sm font-medium">
                Welcome to GraysJays
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#2c3149] leading-tight">
                Transform into a
                <span className="block mt-2">
                  <span className="text-yellow-500">Professional</span> Driver
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              At GraysJays, we're committed to transforming learners into confident, skilled drivers. 
              Our comprehensive training combines expert instruction with modern vehicles and flexible scheduling 
              to ensure your success on the road.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2c3149]">Professional Training</h3>
                  <p className="text-sm text-gray-600">MTO-approved curriculum</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2c3149]">Modern Vehicles</h3>
                  <p className="text-sm text-gray-600">Dual-control cars with safety features</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-full hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group text-lg font-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Start Learning
                <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#2c3149] text-[#2c3149] rounded-full hover:bg-[#2c3149] hover:text-white active:scale-[0.98] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group text-lg font-medium"
              >
                Contact Us
                <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;