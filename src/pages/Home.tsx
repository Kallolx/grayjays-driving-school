import { useEffect, useState } from "react";
import {
  Search,
  CheckCircle2,
  Navigation,
  Building2,
  Building,
  Car,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";
import ServicesGrid from "../components/ServicesGrid";
import RoadmapSection from "../components/RoadmapSection";
import Services from "./Services";
import Tag from "../components/ui/tag";
import { DotPattern } from "../components/ui/dot-pattern";
import { NumberTicker } from "../components/ui/number";
import { motion, AnimatePresence } from "framer-motion";

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

// Add mock postal code data with additional info
const MOCK_POSTAL_CODES = [
  {
    code: "M1P",
    location: "Scarborough",
    area: "Brimley and Sheppard",
    instructors: 12,
    nextAvailable: "Today",
    type: "Urban",
  },
  {
    code: "M1T",
    location: "Scarborough",
    area: "Midland and McNicoll",
    instructors: 8,
    nextAvailable: "Tomorrow",
    type: "Urban",
  },
  {
    code: "M2H",
    location: "North York",
    area: "Don Mills and Finch",
    instructors: 15,
    nextAvailable: "Today",
    type: "Urban",
  },
  {
    code: "M2J",
    location: "North York",
    area: "Don Mills and Steeles",
    instructors: 10,
    nextAvailable: "Today",
    type: "Urban",
  },
  {
    code: "L3R",
    location: "Markham",
    area: "Highway 7 and Kennedy",
    instructors: 9,
    nextAvailable: "Tomorrow",
    type: "Suburban",
  },
  {
    code: "L3S",
    location: "Markham",
    area: "McCowan and Steeles",
    instructors: 7,
    nextAvailable: "Today",
    type: "Suburban",
  },
  {
    code: "L4B",
    location: "Richmond Hill",
    area: "Highway 7 and Leslie",
    instructors: 11,
    nextAvailable: "Today",
    type: "Suburban",
  },
  {
    code: "L6B",
    location: "Richmond Hill",
    area: "Yonge and 16th Avenue",
    instructors: 13,
    nextAvailable: "Tomorrow",
    type: "Suburban",
  },
];

const Home = () => {
  const [postalCode, setPostalCode] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof MOCK_POSTAL_CODES>([]);
  const [hasVisited, setHasVisited] = useState(() => {
    return localStorage.getItem('hasVisitedBefore') === 'true';
  });

  useEffect(() => {
    if (!hasVisited) {
      localStorage.setItem('hasVisitedBefore', 'true');
      setHasVisited(true);
    }
  }, [hasVisited]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPostalCode(value);

    if (value.length >= 3) {
      const matches = MOCK_POSTAL_CODES.filter(
        (pc) =>
          pc.code.startsWith(value) ||
          pc.location.toUpperCase().includes(value) ||
          pc.area.toUpperCase().includes(value)
      );
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: (typeof MOCK_POSTAL_CODES)[0]) => {
    setPostalCode(suggestion.code);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    const match = MOCK_POSTAL_CODES.find((pc) => pc.code === postalCode);
    if (match) {
      alert(`Finding instructors near ${match.location} - ${match.area}`);
    } else {
      alert("Please enter a valid postal code");
    }
  };

  return (
    <motion.div
      className="font-poppins"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-[#fafafa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <DotPattern
          width={24}
          height={24}
          cx={12}
          cy={12}
          cr={1}
          className="fill-[#2c3149]/[0.25] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_20%,transparent_100%)]"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-16 lg:min-h-[80vh] lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 relative">
          {/* Mobile Image - Visible only on mobile */}
          <motion.div
            className="block lg:hidden relative h-[400px] sm:h-[450px] w-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/icons/hero.png"
              alt="Driving Lesson"
              className="w-full h-full object-contain scale-125"
            />
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/10 to-[#2c3149]/10 rounded-full blur-3xl opacity-30"></div>
            </div>
          </motion.div>

          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 min-h-[300px] sm:min-h-[400px]">
            <div className="space-y-6 sm:space-y-8">
              {/* Tag */}
              <motion.div
                className="flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Tag
                  variant="yellow"
                  icon={<span className="text-yellow-500">★</span>}
                  text="#1 Rated Driving School"
                  className="w-[90%] sm:w-auto justify-center sm:justify-start"
                />
              </motion.div>

              {/* Title */}
              <motion.div
                className="text-center lg:text-left"
                variants={itemVariants}
              >
                <h1 className="text-[28px] sm:text-[16px] leading-tight md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Drive with{" "}
                  <span className="text-yellow-500">Excellence</span> {" "}
                  <br className="hidden sm:block" />
                  Learn with <span className="text-yellow-500">GrayJays</span>
                </h1>
              </motion.div>

              {/* Benefits List */}
              <motion.div
                className="space-y-2 sm:space-y-4 text-left"
                variants={containerVariants}
              >
                {/* Map through benefits with animation */}
                {[
                  "100% online, hassle-free scheduling",
                  "Top-rated instructors that care about your success",
                  "Up to 20% discount on your auto insurance with our Beginner Driver Education course",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#2c3149] fill-yellow-500" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-lg text-gray-700">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Search Section with Coordinated Animation */}
            <motion.div
              className="w-full max-w-2xl relative"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-1 group/search hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out 
                  shadow-[0_8px_30px_-4px_rgba(44,49,73,0.2)] hover:shadow-[0_20px_50px_-20px_rgba(44,49,73,0.3)] 
                  rounded-full bg-gradient-to-r from-[#2c3149] via-[#2c3149] to-[#2c3149] backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Find Instructor Text */}
                <div className="flex-none relative flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-l-full opacity-50"></div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg text-white relative z-10 whitespace-nowrap">
                    Find Instructor
                  </div>
                </div>

                {/* Input Field */}
                <div className="border-l border-white/10 px-2 sm:px-3 relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-50"></div>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    placeholder="Your Postal Code"
                    className="w-full h-full px-3 sm:px-4 py-4 sm:py-5 text-white bg-transparent border-0 focus:outline-none focus:ring-0 rounded-full text-base sm:text-lg placeholder-gray-300 relative z-10"
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-yellow-500 to-yellow-500/90 text-gray-900 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-base sm:text-lg font-medium m-1 hover:shadow-lg"
                >
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </motion.div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    className="absolute mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={suggestion.code}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            {/* Location Icon */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                              {suggestion.type === "Urban" ? (
                                <Building2 className="w-5 h-5 text-yellow-500" />
                              ) : (
                                <Building className="w-5 h-5 text-yellow-500" />
                              )}
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-[#2c3149]">
                                  {suggestion.location}
                                </span>
                                <div className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">
                                  {suggestion.code}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                                <Navigation className="w-3.5 h-3.5" />
                                <span>{suggestion.area}</span>
                              </div>

                              {/* Stats Row */}
                              <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Users className="w-3.5 h-3.5 text-yellow-500" />
                                  <span>
                                    {suggestion.instructors} Instructors
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Clock className="w-3.5 h-3.5 text-yellow-500" />
                                  <span>
                                    Available {suggestion.nextAvailable}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Car className="w-3.5 h-3.5 text-yellow-500" />
                                  <span>{suggestion.type} Area</span>
                                </div>
                              </div>
                            </div>

                            {/* Arrow indicator on hover */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronRight className="w-5 h-5 text-yellow-500" />
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* User Circle Images */}
            <motion.div
              className="flex items-center gap-3 justify-center lg:justify-start mt-4 sm:mt-8"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
                  <motion.img
                    key={testimonial.id}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  />
                ))}
              </div>
              <motion.div
                className="text-sm text-gray-600"
                variants={itemVariants}
              >
                Trusted by{" "}
                <span className="inline-flex items-baseline font-semibold text-gray-900">
                  <NumberTicker
                    value={29700}
                    className="font-semibold"
                    delay={1}
                  />
                  <span>+</span>
                </span>{" "}
                students
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Image - Hidden on mobile */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] items-center hidden lg:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.img
              src="/icons/hero.png"
              alt="Driving Lesson"
              className="relative w-full h-full object-contain z-10 scale-110"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Decorative Elements */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-yellow-500/10 to-[#2c3149]/10 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Learning Roadmap Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <RoadmapSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4"
      >
        <ServicesGrid />
      </motion.div>
    </motion.div>
  );
};

export default Home;
