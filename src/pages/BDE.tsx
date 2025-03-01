import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Certificate, 
  GraduationCap, 
  Users, 
  Clock,
  Car,
  Medal,
  ShieldCheck,
  MinusCircle,
  PlusCircle,
  Warning,
  ShoppingBag,
} from "@phosphor-icons/react";

const BDE = () => {
  const [withCar, setWithCar] = useState(true);
  const [hours, setHours] = useState(10);
  const basePrice = withCar ? 80 : 60;

  const incrementHours = () => {
    if (hours < 50) {
      setHours((prev) => prev + 1);
    }
  };

  const decrementHours = () => {
    if (hours > 10) {
      setHours((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1800&auto=format&fit=crop"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[1] mix-blend-overlay" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3149] via-[#2c3149]/90 to-[#2c3149]/50" />
          {/* Additional right-side gradient for better text contrast */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#1a1f33]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <GraduationCap weight="bold" className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                MTO Approved Course
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Beginner Driver <span className="text-yellow-500">Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Start your journey to becoming a confident and skilled driver with
              our comprehensive MTO-approved program.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">40h</div>
                <div className="text-sm text-gray-300">Total Training</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">20%</div>
                <div className="text-sm text-gray-300">Insurance Discount</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">98%</div>
                <div className="text-sm text-gray-300">Pass Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">4.9★</div>
                <div className="text-sm text-gray-300">Student Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Panel - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-2xl p-6 shadow-xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <GraduationCap weight="bold" className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Book Your Course</h2>
                      <p className="text-sm text-gray-300">Start your journey today</p>
                    </div>
                  </div>

                  {/* Hours Selector */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-white mb-2">
                      Select Training Hours:
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Clock weight="bold" className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm font-medium text-white">
                            Training Hours
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={decrementHours}
                            disabled={hours <= 10}
                            className="w-9 h-9 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <MinusCircle weight="bold" className="w-5 h-5 text-white" />
                          </button>
                          <span className="text-lg font-bold text-white min-w-[3ch] text-center">
                            {hours}
                          </span>
                          <button
                            onClick={incrementHours}
                            disabled={hours >= 50}
                            className="w-9 h-9 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <PlusCircle weight="bold" className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300 flex items-center gap-2">
                        <Warning weight="bold" className="w-4 h-4 text-yellow-500" />
                        <span>Minimum 10 hours required</span>
                      </div>
                    </div>
                  </div>

                  {/* Car Option Selector */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-white mb-2">
                      Do you need a car for training?
                    </label>
                    <div className="p-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-between">
                      <button
                        onClick={() => setWithCar(true)}
                        className={`w-1/2 py-3 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                          withCar
                            ? "bg-yellow-500 text-[#2c3149]"
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        <Car weight="bold" className="w-4 h-4" />
                        Yes
                      </button>
                      <button
                        onClick={() => setWithCar(false)}
                        className={`w-1/2 py-3 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                          !withCar
                            ? "bg-yellow-500 text-[#2c3149]"
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        <Car weight="bold" className="w-4 h-4" />
                        No
                      </button>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">
                        Price per hour:
                      </span>
                      <span className="text-sm font-bold text-white">
                        ${basePrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Total hours:</span>
                      <span>{hours} hours</span>
                    </div>
                    <div className="h-px bg-white/20 my-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-yellow-500">
                        ${hours * basePrice}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full py-4 bg-yellow-500 text-[#2c3149] text-sm font-bold rounded-xl hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag weight="bold" className="w-5 h-5" />
                    Buy Now
                  </button>

                  {/* Additional Info */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-gray-300">
                    <Warning weight="bold" className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <p>
                      Flexible payment plans available. Contact us for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details - Left Column */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Main Features Section */}
            <section>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                    <Medal weight="bold" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#2c3149]">Complete Training Package</h2>
                    <p className="text-sm sm:text-base text-gray-600">Everything you need to become a confident driver</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {/* Feature Card 1 - In-Class */}
                  <div className="group relative bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative flex items-start gap-4 sm:gap-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-yellow-500 flex items-center justify-center flex-shrink-0">
                        <GraduationCap weight="bold" className="w-8 h-8 sm:w-10 sm:h-10 text-[#2c3149]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-white">In-Class Training</h3>
                          <span className="px-2 sm:px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-medium">20 Hours</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {[
                            "Interactive classroom sessions",
                            "Road rules and regulations",
                            "Defensive driving techniques",
                            "Hazard perception training"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 2 - In-Car */}
                  <div className="group relative bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative flex items-start gap-4 sm:gap-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-yellow-500 flex items-center justify-center flex-shrink-0">
                        <Car weight="bold" className="w-8 h-8 sm:w-10 sm:h-10 text-[#2c3149]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-white">In-Car Training</h3>
                          <span className="px-2 sm:px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-medium">10 Hours</span>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {[
                            "One-on-one instruction",
                            "Dual-control vehicles",
                            "Real traffic conditions",
                            "Parking & maneuvers"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck weight="bold" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#2c3149]">Why Choose GrayJays?</h2>
                    <p className="text-sm sm:text-base text-gray-600">The best choice for your driving education</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      title: "Expert Instructors",
                      description: "MTO-certified instructors with years of experience",
                      icon: Users,
                      highlight: "All instructors certified",
                    },
                    {
                      title: "Modern Facilities",
                      description: "State-of-the-art classrooms and vehicles",
                      icon: Certificate,
                      highlight: "Latest equipment",
                    },
                    {
                      title: "Flexible Schedule",
                      description: "Choose times that work best for you",
                      icon: Clock,
                      highlight: "7 days a week",
                    },
                    {
                      title: "Guaranteed Success",
                      description: "High pass rate with our proven methods",
                      icon: Medal,
                      highlight: "98% pass rate",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                      <div className="relative">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                            <benefit.icon weight="bold" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                              <h3 className="text-sm sm:text-base font-bold text-[#2c3149]">{benefit.title}</h3>
                              <span className="px-2 py-0.5 rounded-full bg-[#2c3149]/5 text-[#2c3149] text-xs font-medium">
                                {benefit.highlight}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section>
              <div className="relative bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Clock weight="bold" className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Training Schedule</h2>
                      <p className="text-sm sm:text-base text-gray-300">Flexible options to fit your lifestyle</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Weekday Classes</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {[
                          "Morning: 9:00 AM - 12:00 PM",
                          "Afternoon: 1:00 PM - 4:00 PM",
                          "Evening: 5:00 PM - 8:00 PM"
                        ].map((time, index) => (
                          <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Weekend Classes</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {[
                          "Saturday: 10:00 AM - 4:00 PM",
                          "Sunday: 10:00 AM - 4:00 PM",
                          "Flexible in-car sessions"
                        ].map((time, index) => (
                          <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Warning weight="bold" className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-300">
                        All classes can be scheduled according to your availability. Contact us for custom scheduling options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BDE;
