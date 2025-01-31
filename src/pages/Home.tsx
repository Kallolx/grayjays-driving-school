import { useEffect } from 'react';
import { Award,Target, CarFront, ShieldCheck,Search,  CheckCircle2, ChevronRight,Laptop, Users, History, Clock} from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="relative max-w-7xl mx-auto px-4 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 group/search hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out 
              shadow-[0_8px_30px_-4px_rgba(44,49,73,0.2)] hover:shadow-[0_20px_50px_-20px_rgba(44,49,73,0.3)] 
              rounded-full bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur-sm">
              <div className="flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c3149]/5 via-transparent to-[#2c3149]/5 rounded-l-full opacity-50"></div>
                <input
                  type="text"
                  placeholder="Find your nearest Driving Instructor"
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 rounded-l-full border-0 focus:outline-none focus:ring-0 text-base sm:text-lg transition-all placeholder-gray-500 bg-transparent relative z-10"
                />
              </div>
              <div className="border-l border-gray-200/50 px-1 sm:px-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c3149]/5 via-transparent to-[#2c3149]/5 opacity-50"></div>
                <select className="h-full px-2 sm:px-4 py-3 sm:py-4 text-gray-600 bg-transparent border-0 focus:outline-none focus:ring-0 rounded-full text-base sm:text-lg appearance-none cursor-pointer relative z-10">
                  <option value="">Your Postal Code</option>
                  <option value="scarborough">Scarborough</option>
                  <option value="northYork">North York</option>
                  <option value="markham">Markham</option>
                  <option value="richmond">Richmond Hill</option>
                </select>
              </div>
              <button className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2c3149] to-[#2c3149]/90 text-white rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-base sm:text-lg font-medium m-1 hover:shadow-lg">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#2c3149]/5 text-[#2c3149] text-sm font-medium mb-4">
            <CarFront className="w-4 h-4" />
            Why Choose GrayJays
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#2c3149]">
            Your Journey to <br />Confident Driving
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of successful drivers who started their journey with us
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 - Modern Learning */}
          <div className="group">
            <div className="relative h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500">
              <div className="absolute -top-6 right-8 w-20 h-20 bg-[#2c3149] rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                <Laptop className="w-10 h-10 text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-500" />
              </div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">Modern Learning</h3>
                <p className="text-gray-600 mb-8">Interactive digital curriculum with real-time progress tracking and virtual simulations for enhanced learning experience.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Virtual Simulations</h4>
                      <p className="text-sm text-gray-500">Practice in a safe environment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Progress Tracking</h4>
                      <p className="text-sm text-gray-500">Monitor your improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Expert Instructors */}
          <div className="group">
            <div className="relative h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500">
              <div className="absolute -top-6 right-8 w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                <Users className="w-10 h-10 text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-500" />
              </div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">Expert Instructors</h3>
                <p className="text-gray-600 mb-8">Learn from certified professionals with decades of experience and a passion for creating confident drivers.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Certified Trainers</h4>
                      <p className="text-sm text-gray-500">MTO approved instructors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Personalized Coaching</h4>
                      <p className="text-sm text-gray-500">One-on-one attention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Personalized Approach */}
          <div className="group">
            <div className="relative h-full bg-white rounded-[2rem] p-8 border-2 border-[#2c3149]/10 hover:border-[#2c3149] transition-all duration-500">
              <div className="absolute -top-6 right-8 w-20 h-20 bg-[#2c3149] rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500">
                <Target className="w-10 h-10 text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-500" />
              </div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-[#2c3149] mb-4">Personalized Approach</h3>
                <p className="text-gray-600 mb-8">Customized learning paths adapted to your pace and style, ensuring optimal progress and confidence building.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <Target className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Custom Learning Paths</h4>
                      <p className="text-sm text-gray-500">Tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#2c3149]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2c3149]">Flexible Schedule</h4>
                      <p className="text-sm text-gray-500">Learn at your convenience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-[#2c3149] rounded-[2rem] p-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-white/80">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-4">
                  <History className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">29K+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">4.9</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all duration-300 text-lg font-medium group"
          >
            Start Your Journey Today
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;