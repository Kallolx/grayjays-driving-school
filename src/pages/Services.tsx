import { Link } from 'react-router-dom';
import { GraduationCap, Clock3, CarFront, CheckCircle2, ChevronRight, Car, MinusCircle, PlusCircle} from 'lucide-react';
import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CallToAction from './CallToAction';

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

    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  const calculatePrice = (basePrice: number, hours: number) => {
    return basePrice * hours;
  };

  return (
    <div className="font-poppins">
      {/* Title Section */}
      <div className="relative py-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#2c3149] to-transparent opacity-30" />
        </div>

        <div ref={cardsContainerRef} className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Title with Visual Elements */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center shadow-lg -ml-4 transform rotate-6">
                <Car className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-4">
              Your Journey to <span className="text-yellow-500">Driving Excellence</span>
            </h1>
            <p className="text-base text-gray-600 mb-6">
              Choose from our comprehensive range of driving services tailored to your needs
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">MTO-Approved</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Flexible Times</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Best Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-12 overflow-hidden">
        <div ref={cardsContainerRef} className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Hourly Lesson Card */}
            <div ref={hourlyCardRef} className="group transform hover:-translate-y-1 transition-all duration-500 md:mt-12">
              <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
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
                        $60
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
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Satisfaction Guaranteed</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <p className="text-gray-600 text-sm">Free Pickup & Drop-Off</p>
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
            <div ref={bdeCardRef} className="group transform hover:-translate-y-1 transition-all duration-500 md:scale-110 z-10 -mt-6 mb-6">
              {/* Popular Badge - Above card */}
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1.5 rounded-xl text-sm font-medium shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Most Popular Choice
                </div>
              </div>

              <div className="h-full bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-[1.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Beginners Driver Education (BDE)
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      Complete MTO-approved beginner driver education program.
                    </p>
                  </div>

                  {/* Toggle Switch */}
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

                  {/* Hours Selector */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
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

                  <div className="space-y-4 mb-8 flex-grow">
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
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                      <p className="text-gray-300">Insurance discount certificate</p>
                    </div>
                  </div>

                  <Link
                    to="/learn-to-drive/bde"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all group-hover:shadow-lg"
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Rental Car Service Card */}
            <div ref={rentalCardRef} className="group transform hover:-translate-y-1 transition-all duration-500 md:mt-12">
              <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
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
                        $120
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
        </div>
      </div>

      {/* Call to Action Banner */}
      <CallToAction />
    </div>
  );
};

export default Services;