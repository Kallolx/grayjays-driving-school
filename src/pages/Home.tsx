import { useEffect } from 'react';
import { Award, GraduationCap, Calendar, Target, CarFront, ShieldCheck,Search,  CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Best driving school! Passed my test on first attempt. They were very helpful and patient.",
    rating: 5,
    verified: true,
    comment: "Best driving school! Passed my test on first attempt. They were very helpful and patient.",
    location: "Scarborough, ON",
    date: "June 2023"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Professional instructors who really care about your success. Highly recommended!",
    rating: 5,
    verified: true,
    comment: "Professional instructors who really care about your success. Highly recommended!",
    location: "Scarborough, ON",
    date: "June 2023"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "Flexible scheduling and great learning experience. The instructors are very patient.",
    rating: 4.5,
    verified: true,
    comment: "Flexible scheduling and great learning experience. The instructors are very patient.",
    location: "Scarborough, ON",
    date: "June 2023"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "Amazing experience! The structured learning approach helped me gain confidence.",
    rating: 5,
    verified: true,
    comment: "Amazing experience! The structured learning approach helped me gain confidence.",
    location: "Scarborough, ON",
    date: "June 2023"
  },
  {
    id: 5,
    name: "Rachel Martinez",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    quote: "From nervous beginner to confident driver. Thank you for the great support!",
    rating: 4.5,
    verified: true,
    comment: "From nervous beginner to confident driver. Thank you for the great support!",
    location: "Scarborough, ON",
    date: "June 2023"
  }
];

const STATS = [
  {
    id: 1,
    number: "29,700+",
    label: "Students",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 2,
    number: "98%",
    label: "Passing Rate",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    number: "29,106+",
    label: "Happy Customers",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins">
      <div className="absolute inset-0 bg-[#fafafa] opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-[100px] sm:pt-[160px] pb-8 sm:pb-16 lg:min-h-[80vh] lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 min-h-[400px] sm:min-h-[500px]">
            <div className="space-y-6 sm:space-y-8">
              {/* Tag */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 border border-yellow-500/20 w-[90%] sm:w-auto justify-center sm:justify-start">
                  <span className="text-yellow-500 text-xs sm:text-base">★</span>
                  <span className="font-bold text-[#2c3149] text-xs sm:text-base whitespace-nowrap">#1 Rated Driving School</span>
                  <span className="text-xs sm:text-base whitespace-nowrap">in</span>
                  <span className="font-medium text-[#2c3149] text-xs sm:text-base whitespace-nowrap">Scarborough</span>
                  <span className="text-base sm:text-lg">🍁</span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center lg:text-left">
                <h1 className="text-[28px] leading-tight sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Drive with Confidence,<br className="hidden sm:block" /> Learn with <span className="text-yellow-500">GrayJays</span>
                </h1>
              </div>
              
              {/* Benefits List */}
              <div className="space-y-3 sm:space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-[#2c3149]" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">100% online, hassle-free scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-[#2c3149]" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">Top-rated instructors that care about your success</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-[#2c3149]" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">Up to 20% discount on your auto insurance with our Beginner Driver Education course</p>
                </div>
              </div>
            </div>

            {/* User Circle Images */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-4 sm:mt-8">
              <div className="flex -space-x-2">
                {TESTIMONIALS.slice(0, 4).map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Trusted by <span className="font-semibold text-gray-900">29,700+</span> students
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[450px] lg:h-[500px]">
            <div className="absolute inset-0 bg-[#2c3149]/10 rounded-3xl -rotate-6 transform"></div>
            <img
              src="https://cdn.create.vista.com/api/media/medium/403053348/stock-photo-woman-driving-license-driving-school-young-beautiful-woman-successfully-passed?token="
              alt="Driving Lesson"
              className="relative rounded-3xl w-full h-full object-cover shadow-xl"
            />
            {/* Stats Card */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-3 gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.id} className="text-center group">
                      <div className="relative">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent group-hover:scale-105 transform transition-all duration-300">
                          {stat.number}
                        </div>
                        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#2c3149] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="mt-0.5 text-xs font-medium text-gray-600 group-hover:text-[#2c3149] transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 group/search hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_40px_-15px_rgba(44,49,73,0.25)] rounded-full bg-white">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Find your nearest Driving Instructor"
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 rounded-l-full border-0 focus:outline-none focus:ring-0 text-base sm:text-lg transition-all placeholder-gray-400 bg-white"
                />
              </div>
              <div className="border-l border-gray-200 px-1 sm:px-2">
                <select className="h-full px-2 sm:px-4 py-3 sm:py-4 text-gray-500 bg-white border-0 focus:outline-none focus:ring-0 rounded-full text-base sm:text-lg appearance-none cursor-pointer">
                  <option value="">Your Postal Code</option>
                  <option value="scarborough">Scarborough</option>
                  <option value="northYork">North York</option>
                  <option value="markham">Markham</option>
                  <option value="richmond">Richmond Hill</option>
                </select>
              </div>
              <button className="px-4 sm:px-8 py-3 sm:py-4 bg-[#2c3149] text-white rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-base sm:text-lg font-medium m-1">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent">
            Why Choose GraysJays?
          </h2>
          <p className="text-lg text-gray-600">
            Experience excellence in driving education with our comprehensive programs and expert instructors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MTO Approved */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    MTO Approved
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Government-certified curriculum delivered by licensed instructors ensuring highest quality education.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/mto.png" alt="MTO Approved" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Schedule */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <Calendar className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    Flexible Schedule
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose lesson times that work for you with our convenient online booking system.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/schedule.png" alt="Flexible Schedule" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High Success Rate */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <Target className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    High Success Rate
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    98% first-attempt pass rate with our proven teaching methods and expert guidance.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/success.png" alt="High Success Rate" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Instructors */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    Expert Instructors
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn from experienced, patient instructors dedicated to your driving success.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/instructor.png" alt="Expert Instructors" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Fleet */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <CarFront className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    Modern Fleet
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Practice in well-maintained, dual-control vehicles equipped with latest safety features.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/car.png" alt="Modern Fleet" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Training */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]" />
            <div className="bg-white rounded-2xl p-8 relative z-10 transition-all duration-300 border border-gray-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/20">
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/10 group-hover:scale-110 transform transition-all duration-300">
                  <ShieldCheck className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c3149] transition-colors duration-300">
                    Complete Training
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thorough curriculum covering both practical skills and theoretical knowledge.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-yellow-500/20">
                    <img src="/icons/training.png" alt="Complete Training" className="w-24 h-24 transform rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;