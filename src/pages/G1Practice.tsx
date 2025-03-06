import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Brain,
  FileText,
  BarChart,
  ArrowRight,
} from "lucide-react";

interface PracticePackage {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  questions: number;
  popular?: boolean;
}

const PRACTICE_PACKAGES: PracticePackage[] = [
  {
    id: "basic",
    title: "Basic Practice",
    description: "Essential practice questions and study materials",
    price: 9.99,
    questions: 100,
    features: [
      "100 practice questions",
      "Basic study materials",
      "Road signs guide",
      "Progress tracking",
      "Mobile-friendly interface"
    ]
  },
  {
    id: "premium",
    title: "Premium Practice",
    description: "Comprehensive practice with detailed explanations",
    price: 14.99,
    questions: 250,
    popular: true,
    features: [
      "250 practice questions",
      "Detailed explanations",
      "Road signs guide",
      "Progress tracking",
      "Performance analytics",
      "Mock tests",
      "Study tips and tricks",
      "Mobile-friendly interface"
    ]
  },
  {
    id: "ultimate",
    title: "Ultimate Practice",
    description: "Complete G1 preparation package",
    price: 19.99,
    questions: 500,
    features: [
      "500 practice questions",
      "Detailed explanations",
      "Road signs guide",
      "Progress tracking",
      "Performance analytics",
      "Mock tests",
      "Study tips and tricks",
      "Mobile-friendly interface",
      "Personalized study plan",
      "Exam day preparation guide"
    ]
  }
];

const G1Practice = () => {

  const features = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Practice Questions",
      description: "Hundreds of questions covering all test topics"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Study Materials",
      description: "Comprehensive guides and learning resources"
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Progress Tracking",
      description: "Monitor your improvement and identify weak areas"
    }
  ];

  const topics = [
    "Road Signs and Traffic Signals",
    "Rules of the Road",
    "Safe Driving Practices",
    "Seat Belt and Child Restraints",
    "Speed Limits and Speed Management",
    "Right-of-Way Rules",
    "Traffic Laws and Penalties",
    "Sharing the Road",
    "Emergency Situations",
    "Vehicle Safety and Maintenance"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <img 
            src="https://images.pexels.com/photos/1044329/pexels-photo-1044329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
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
              <BookOpen className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                G1 Test Preparation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Master Your G1 <span className="text-yellow-500">Written Test</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Practice with our comprehensive question bank and study materials
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">500+</div>
                <div className="text-sm text-gray-300">Practice Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">98%</div>
                <div className="text-sm text-gray-300">Pass Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">10</div>
                <div className="text-sm text-gray-300">Study Topics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-300">Access</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Package Cards */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3149] text-center mb-8">
            Choose Your Practice Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRACTICE_PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative bg-white rounded-2xl p-6 ${
                  pkg.popular ? 'border-2 border-yellow-500 shadow-yellow-100' : 'border border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#2c3149] mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 text-base mb-4">{pkg.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-[#2c3149]">${pkg.price}</span>
                    <span className="text-gray-500 mb-1 text-base">/one-time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#2c3149] font-medium border-b border-gray-100 pb-3">
                    <Brain className="w-5 h-5 text-yellow-500" />
                    <span className="text-base">{pkg.questions} Practice Questions</span>
                  </div>
                  {pkg.features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 py-1">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => window.location.href = '/contact'}
                  className={`w-full py-3 rounded-xl font-medium text-base flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? 'bg-yellow-500 text-[#2c3149] hover:bg-yellow-400'
                      : 'bg-[#2c3149] text-white hover:bg-[#1a1f33]'
                  }`}
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-2xl p-6 sm:p-8 text-white mb-16">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-sm text-gray-300">Start practicing immediately after purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Updated Content</h3>
                <p className="text-sm text-gray-300">Latest G1 test format and questions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Smart Learning</h3>
                <p className="text-sm text-gray-300">Adaptive practice based on your performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
              Why Choose Our G1 Practice Tests?
            </h2>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c3149] mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Covered */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
              Topics Covered
            </h2>
            <div className="grid gap-3">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G1Practice;