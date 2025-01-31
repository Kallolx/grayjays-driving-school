import { Link } from 'react-router-dom';
import { GraduationCap, Clock3, CarFront, CheckCircle2, ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="font-poppins pt-20 pb-20">
      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2c3149] mb-6">
          Our Driving Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of driving services designed to meet your needs and help you become a confident driver.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* BDE Service Card */}
          <div className="group">
            <div className="h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500 flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#2c3149] rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">
                  Beginners Driver Education (BDE)
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete MTO-approved beginner driver education program with comprehensive training.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">40 hours of comprehensive training</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">10 hours in-car instruction</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Insurance discount certificate</p>
                </div>
              </div>

              <Link
                to="/learn-to-drive/bde"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all group-hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hourly Service Card */}
          <div className="group">
            <div className="h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500 flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Clock3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">
                  Hourly Lessons
                </h3>
                <p className="text-gray-600 mb-6">
                  Flexible hourly driving lessons tailored to your schedule and needs.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Flexible scheduling options</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">One-on-one instruction</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Customized learning experience</p>
                </div>
              </div>

              <Link
                to="/learn-to-drive/hourly"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all group-hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Rental Car Service Card */}
          <div className="group">
            <div className="h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500 flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#2c3149] rounded-2xl flex items-center justify-center mb-6">
                  <CarFront className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">
                  Rental Car Service
                </h3>
                <p className="text-gray-600 mb-6">
                  Safe and reliable vehicles for your road test or practice sessions.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Well-maintained vehicles</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Competitive rental rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-1" />
                  <p className="text-gray-600">Insurance coverage included</p>
                </div>
              </div>

              <Link
                to="/rental-car"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all group-hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your journey to becoming a confident driver?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all duration-300 text-lg font-medium group"
            >
              Get Started Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;