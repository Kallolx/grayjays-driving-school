import { Link } from 'react-router-dom';
import { GraduationCap, Clock3, CarFront, CheckCircle2, ChevronRight, Car, MinusCircle, PlusCircle, Paperclip} from 'lucide-react';
import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const BASE_PRICES = {
  bde: {
    withCar: 80,
    withoutCar: 60
  },
  hourlyLesson: {
    G2: 50,
    G: 60
  },
  rentalCar: {
    withCar: 45,
    withoutCar: 0
  }
};

const Services = () => {
  const [bdeWithCar, setBdeWithCar] = useState(true);
  const [hours, setHours] = useState(10);
  const [licenseType, setLicenseType] = useState<'G2' | 'G'>('G2');

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="text-yellow-500 text-sm font-medium">Our Services</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/80 text-sm">Choose Your Path</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Driving Education
              <span className="block mt-2 text-yellow-500">Tailored to Your Needs</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              From beginner courses to advanced training, we offer comprehensive programs designed to make you a confident and skilled driver.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "98%", label: "Pass Rate" },
                { value: "15+", label: "Years Experience" },
                { value: "2000+", label: "Students" },
                { value: "4.9", label: "Rating" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-yellow-500">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                    <div className="flex items-center justify-between p-2 bg-gray-50 backdrop-blur-sm rounded-xl">
                      <button
                        onClick={() => setLicenseType('G2')}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          licenseType === 'G2'
                            ? 'bg-[#2c3149] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Paperclip className={`w-4 h-4 ${licenseType === 'G2' ? 'text-white' : 'text-gray-400'}`} />
                        G2 License
                      </button>
                      <button
                        onClick={() => setLicenseType('G')}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          licenseType === 'G'
                            ? 'bg-[#2c3149] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Paperclip className={`w-4 h-4 ${licenseType === 'G' ? 'text-white' : 'text-gray-400'}`} />
                        G License
                      </button>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        ${BASE_PRICES.hourlyLesson[licenseType]}
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
              {/* Mobile Hourly Lesson Card */}
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
                    <div className="flex items-center justify-between p-2 bg-gray-50 backdrop-blur-sm rounded-xl">
                      <button
                        onClick={() => setLicenseType('G2')}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          licenseType === 'G2'
                            ? 'bg-[#2c3149] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${licenseType === 'G2' ? 'text-white' : 'text-gray-400'}`} />
                        G2 License
                      </button>
                      <button
                        onClick={() => setLicenseType('G')}
                        className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          licenseType === 'G'
                            ? 'bg-[#2c3149] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Car className={`w-4 h-4 ${licenseType === 'G' ? 'text-white' : 'text-gray-400'}`} />
                        G License
                      </button>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#2c3149]">
                        ${BASE_PRICES.hourlyLesson[licenseType]}
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