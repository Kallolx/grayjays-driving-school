import { useEffect } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import ServicesGrid from "../components/ServicesGrid";
import RoadmapSection from "../components/RoadmapSection";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote:
      "Best driving school! Passed my test on first attempt. They were very helpful and patient.",
    rating: 5,
    verified: true,
    comment:
      "Best driving school! Passed my test on first attempt. They were very helpful and patient.",
    location: "Scarborough, ON",
    date: "June 2023",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "Professional instructors who really care about your success. Highly recommended!",
    rating: 5,
    verified: true,
    comment:
      "Professional instructors who really care about your success. Highly recommended!",
    location: "Scarborough, ON",
    date: "June 2023",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote:
      "Flexible scheduling and great learning experience. The instructors are very patient.",
    rating: 4.5,
    verified: true,
    comment:
      "Flexible scheduling and great learning experience. The instructors are very patient.",
    location: "Scarborough, ON",
    date: "June 2023",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote:
      "Amazing experience! The structured learning approach helped me gain confidence.",
    rating: 5,
    verified: true,
    comment:
      "Amazing experience! The structured learning approach helped me gain confidence.",
    location: "Scarborough, ON",
    date: "June 2023",
  },
  {
    id: 5,
    name: "Rachel Martinez",
    role: "Student",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    quote:
      "From nervous beginner to confident driver. Thank you for the great support!",
    rating: 4.5,
    verified: true,
    comment:
      "From nervous beginner to confident driver. Thank you for the great support!",
    location: "Scarborough, ON",
    date: "June 2023",
  },
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
      <div className="relative max-w-7xl mx-auto px-4 pt-[60px] sm:pt-[100px] pb-8 sm:pb-16 lg:min-h-[80vh] lg:flex lg:items-center">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
          <img
            src="/icons/hero.png"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 relative">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 min-h-[300px] sm:min-h-[400px]">
            <div className="space-y-6 sm:space-y-8">
              {/* Tag */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 border border-yellow-500/20 w-[90%] sm:w-auto justify-center sm:justify-start backdrop-blur-sm">
                  <span className="text-yellow-500 text-xs sm:text-base">
                    ★
                  </span>
                  <span className="font-bold text-[#2c3149] text-xs sm:text-base whitespace-nowrap">
                    #1 Rated Driving School
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center lg:text-left">
                <h1 className="text-[28px] leading-tight sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Drive with Confidence,
                  <br className="hidden sm:block" /> Learn with{" "}
                  <span className="text-yellow-500">GrayJays</span>
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
                  <p className="text-sm sm:text-lg text-gray-700">
                    100% online, hassle-free scheduling
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-[#2c3149]" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">
                    Top-rated instructors that care about your success
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-[#2c3149]" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700">
                    Up to 20% discount on your auto insurance with our Beginner
                    Driver Education course
                  </p>
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
                Trusted by{" "}
                <span className="font-semibold text-gray-900">29,700+</span>{" "}
                students
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center hidden lg:flex">
            <img
              src="/icons/hero.png"
              alt="Driving Lesson"
              className="relative w-full h-full object-contain z-10"
            />

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/10 to-[#2c3149]/10 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative max-w-7xl mx-auto px-4 -mt-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className="flex flex-1 group/search hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out 
              shadow-[0_8px_30px_-4px_rgba(44,49,73,0.2)] hover:shadow-[0_20px_50px_-20px_rgba(44,49,73,0.3)] 
              rounded-full bg-gradient-to-r from-[#2c3149] via-[#2c3149] to-[#2c3149] backdrop-blur-sm"
            >
              <div className="flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-l-full opacity-50"></div>
                <input
                  type="text"
                  placeholder="Find your nearest Driving Instructor"
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 rounded-l-full border-0 focus:outline-none focus:ring-0 text-base sm:text-lg transition-all placeholder-gray-300 text-white bg-transparent relative z-10"
                />
              </div>
              <div className="border-l border-white/10 px-1 sm:px-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-50"></div>
                <select className="h-full px-2 sm:px-4 py-3 sm:py-4 text-white bg-transparent border-0 focus:outline-none focus:ring-0 rounded-full text-base sm:text-lg appearance-none cursor-pointer relative z-10">
                  <option value="" className="text-gray-900">
                    Your Postal Code
                  </option>
                  <option value="scarborough" className="text-gray-900">
                    Scarborough
                  </option>
                  <option value="northYork" className="text-gray-900">
                    North York
                  </option>
                  <option value="markham" className="text-gray-900">
                    Markham
                  </option>
                  <option value="richmond" className="text-gray-900">
                    Richmond Hill
                  </option>
                </select>
              </div>
              <button className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-500/90 text-gray-900 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-base sm:text-lg font-medium m-1 hover:shadow-lg">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Roadmap Section */}
      <RoadmapSection />

      {/* Why Choose Us Section */}
      <div className="relative max-w-7xl mx-auto px-4">
        <ServicesGrid />
      </div>
    </div>
  );
};

export default Home;
