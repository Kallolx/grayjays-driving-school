import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Services from "../pages/Services";
import { 

  CheckCircle2, 
  ArrowRight,
  Users,
  Calendar,
  Car,
  Shield,
  Award,
  BookOpen,
  Star
} from "lucide-react";


const STATS = [
  { number: "98%", label: "Pass Rate", icon: Award },
  { number: "15+", label: "Years Experience", icon: Shield },
  { number: "29K+", label: "Students Trained", icon: Users },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const LearnToDrive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] via-[#2c3149] to-[#1a1f33]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <BookOpen className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Learning Programs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Start Your <span className="text-yellow-500">Driving Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Choose from our comprehensive range of driving programs designed to make you a confident and skilled driver
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              {STATS.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-500">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
            <Services/>
        

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Why Choose Us */}
          <div className="bg-[#2c3149] rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Programs?</h3>
              <div className="grid gap-4">
                {[
                  "MTO-approved curriculum and certified instructors",
                  "Flexible scheduling to fit your lifestyle",
                  "Comprehensive learning materials and resources",
                  "Proven track record of student success",
                  "Modern teaching methods and vehicles",
                  "Supportive learning environment"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/90 mt-1.5">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-300">
            <h3 className="text-2xl font-bold text-[#2c3149] mb-6">Quick Resources</h3>
            <div className="grid gap-3">
              {[
                { icon: Calendar, text: "View Schedule", link: "/schedule" },
                { icon: Car, text: "Book Test Vehicle", link: "/services/car-rental" },
                { icon: Users, text: "Meet Our Instructors", link: "/instructors" },
                { icon: BookOpen, text: "Learning Materials", link: "/resources" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#2c3149] hover:bg-[#2c3149] group transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2c3149]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#2c3149] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium text-[#2c3149] group-hover:text-white transition-colors">{item.text}</span>
                    <ArrowRight className="w-5 h-5 text-[#2c3149] group-hover:text-white ml-auto group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnToDrive; 