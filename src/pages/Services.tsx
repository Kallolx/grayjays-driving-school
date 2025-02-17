import { Link } from 'react-router-dom';
import { GraduationCap, Clock3, CarFront, CheckCircle2, ChevronRight, Car, MinusCircle, PlusCircle} from 'lucide-react';
import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const BASE_PRICES = {
  bde: {
    withCar: 80,
    withoutCar: 60
  },
  hourlyLesson: {
    withCar: 50,
    withoutCar: 35
  },
  rentalCar: {
    withCar: 45,
    withoutCar: 0
  }
};

const Services = () => {
  const [bdeWithCar, setBdeWithCar] = useState(true);
  const [hours, setHours] = useState(10);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const hourlyCardRef = useRef<HTMLDivElement>(null);
  const bdeCardRef = useRef<HTMLDivElement>(null);
  const rentalCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - move cards to their starting positions
      gsap.set(hourlyCardRef.current, { y: 50, opacity: 0 });
      gsap.set(bdeCardRef.current, { y: -50, opacity: 0, scale: 0.95 });
      gsap.set(rentalCardRef.current, { y: 50, opacity: 0 });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top bottom-=100",
          end: "top center",
          scrub: 0.5,
        }
      });

      tl.to([hourlyCardRef.current, bdeCardRef.current, rentalCardRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(bdeCardRef.current, {
        scale: 1,
        duration: 0.3,
      }, "-=0.3");

      // Set initial state for cards
      gsap.set(".service-card", { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      });

      // Create stagger effect for cards
      ScrollTrigger.batch(".service-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: { 
              each: 0.2,
              ease: "power2.out"
            },
            duration: 0.8,
            ease: "back.out(1.7)"
          });
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            opacity: 0,
            y: -50,
            scale: 0.95,
            stagger: { 
              each: 0.1,
              ease: "power2.in"
            },
            duration: 0.5
          });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: { 
              each: 0.1,
              ease: "power2.out"
            },
            duration: 0.5
          });
        },
        onLeaveBack: (elements) => {
          gsap.to(elements, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: { 
              each: 0.1,
              ease: "power2.in"
            },
            duration: 0.5
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const calculatePrice = (basePrice: number, hours: number) => {
    return basePrice * hours;
  };

  return (
    <div ref={containerRef} className="font-poppins">
      {/* Title Section */}
      <div className="relative pt-20 pb-16 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] via-[#2c3149] to-[#1a1f33]" />
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        </div>

        <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
            >
              <Car className="w-4 h-4 text-yellow-500" />
              <span className="text-white text-sm font-medium">Our Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
            >
              Professional <span className="text-yellow-500">Driving Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto"
            >
              Comprehensive driving education and services tailored to your needs
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        <motion.div 
          className="absolute -left-20 -bottom-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div 
          className="absolute -right-20 -bottom-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </div>

      {/* Services Grid */}
      <div className="relative overflow-hidden py-12 sm:py-16">
        <div ref={cardsContainerRef} className="relative max-w-6xl mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 items-start max-w-[1100px] mx-auto">
            {/* Hourly Lesson Card */}
            <div ref={hourlyCardRef} className="group transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 md:mt-12">
              <div className="h-[520px] bg-white rounded-[1.5rem] p-4 lg:p-5 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Content */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      <Clock3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                      Hourly Lessons
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Flexible hourly driving lessons tailored to your schedule.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        $50+HST
                      </div>
                      <div className="text-sm text-gray-500 mt-1">per hour</div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Affordable & Transparent Pricing</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Flexible Scheduling</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">One-on-One Instruction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Customizable Lessons</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Full Hour of Dedicated Training</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/services/hourly-lessons"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all group-hover:shadow-lg"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* BDE Service Card - Main Focus */}
            <div ref={bdeCardRef} className="group transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 md:-mt-8">
              {/* Popular Badge - Above card */}
              <div className="flex justify-center -mb-3 relative z-20">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Most Popular Choice
                </div>
              </div>

              <div className="h-[600px] bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-[1.5rem] p-4 lg:p-5 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                
                {/* Content */}
                <div className="relative flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Beginners Driver Education (BDE)
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Complete MTO-approved beginner driver education program.
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <button
                        onClick={() => setBdeWithCar(true)}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          bdeWithCar 
                            ? 'bg-yellow-500 text-white' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                        With Car
                      </button>
                      <button
                        onClick={() => setBdeWithCar(false)}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          !bdeWithCar 
                            ? 'bg-yellow-500 text-white' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${!bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                        Without Car
                      </button>
                    </div>
                  </div>

                  {/* Hours Selector */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between bg-white/10 p-2 rounded-xl">
                      <button
                        onClick={() => setHours(Math.max(10, hours - 1))}
                        className={`p-2 transition-colors ${hours <= 10 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-white'}`}
                        disabled={hours <= 10}
                      >
                        <MinusCircle className="w-5 h-5" />
                      </button>
                      <span className="text-xl font-bold text-white">{hours} hours</span>
                      <button
                        onClick={() => setHours(Math.min(50, hours + 1))}
                        className="p-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <PlusCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        ${calculatePrice(BASE_PRICES.bde[bdeWithCar ? 'withCar' : 'withoutCar'], hours)}
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Total for {hours} hours</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">40 hours of comprehensive training</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">10 hours in-car instruction</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">Insurance discount certificate</p>
                    </div>
                  </div>

                  <Link
                    to="/learn-to-drive/bde"
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all group-hover:shadow-lg"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Rental Car Service Card */}
            <div ref={rentalCardRef} className="group transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 md:mt-12">
              <div className="h-[520px] bg-white rounded-[1.5rem] p-4 lg:p-5 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Content */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                      Car Rental Service
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Safe and reliable vehicles for your road test.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        $149.45
                      </div>
                      <div className="text-sm text-gray-500 mt-1">per test</div>
                      <div className="text-sm text-yellow-500 font-medium mt-1">Includes 1-hour warm-up</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Well-maintained, clean vehicles</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Full insurance coverage</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Pre-test warm-up session</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Pick-up from test center</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Dual brake system for safety</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/services/car-rental"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all group-hover:shadow-lg"
                  >
                    Reserve Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {/* Hourly Lesson Card */}
              <div className="flex-none w-[85vw] max-w-[320px] snap-center transform-gpu transition-transform duration-300 hover:scale-[0.98]">
                <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4">
                      <Clock3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                      Hourly Lessons
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Flexible hourly driving lessons tailored to your schedule.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        $50+HST
                      </div>
                      <div className="text-sm text-gray-500 mt-1">per hour</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Affordable & Transparent Pricing</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Flexible Scheduling</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">One-on-One Instruction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Customizable Lessons</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">

                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Full Hour of Dedicated Training</p>
                      </div>
                    </div>
                    
                  </div>

                  <Link
                    to="/services/hourly-lessons"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* BDE Service Card */}
              <div className="flex-none w-[85vw] max-w-[320px] snap-center transform-gpu transition-transform duration-300 hover:scale-[0.98]">
                <div className="h-full bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-[1.5rem] p-6 shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Beginners Driver Education (BDE)
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      Complete MTO-approved beginner driver education program.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <button
                        onClick={() => setBdeWithCar(true)}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          bdeWithCar 
                            ? 'bg-yellow-500 text-white' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                        With Car
                      </button>
                      <button
                        onClick={() => setBdeWithCar(false)}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          !bdeWithCar 
                            ? 'bg-yellow-500 text-white' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${!bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                        Without Car
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">
                        ${calculatePrice(BASE_PRICES.bde[bdeWithCar ? 'withCar' : 'withoutCar'], hours)}
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Total for {hours} hours</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                      <p className="text-gray-300">40 hours of comprehensive training</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                      <p className="text-gray-300">10 hours in-car instruction</p>
                    </div>
                  </div>

                  <Link
                    to="/learn-to-drive/bde"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Rental Car Service Card */}
              <div className="flex-none w-[85vw] max-w-[320px] snap-center transform-gpu transition-transform duration-300 hover:scale-[0.98]">
                <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4">
                      <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                      Car Rental Service
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Safe and reliable vehicles for your road test.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        $149.45
                      </div>
                      <div className="text-sm text-gray-500 mt-1">per test</div>
                      <div className="text-sm text-yellow-500 font-medium mt-1">Includes 1-hour warm-up</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Well-maintained, clean vehicles</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Full insurance coverage</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Pre-test warm-up session</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/services/car-rental"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all"
                  >
                    Reserve Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Services;