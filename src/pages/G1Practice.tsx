import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Clock,
  Brain,
  FileText,
  BarChart,
} from "lucide-react";
import toast from "react-hot-toast";
import { CartItem } from '../types/cart';

interface G1PracticeProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

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

const G1Practice = ({ cart, setCart }: G1PracticeProps) => {
  const [selectedPackage, setSelectedPackage] = useState<string>("premium");

  const addToCart = () => {
    const pkg = PRACTICE_PACKAGES.find(p => p.id === selectedPackage);
    if (!pkg) return;

    const cartItem: CartItem = {
      id: `g1-practice-${pkg.id}-${Date.now()}`,
      name: `G1 ${pkg.title} Package`,
      price: pkg.price,
      requiresLocation: false,
    };

    setCart([...cart, cartItem]);
    toast.success('Practice package added to cart!', {
      style: {
        background: '#2c3149',
        color: '#fff',
        borderRadius: '12px',
      },
      icon: '🛒',
      position: 'bottom-left',
      duration: 2000,
    });
  };

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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Features and Topics */}
          <div>
            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
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

          {/* Right Column - Packages */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                  Choose Your Practice Package
                </h2>

                {/* Package Selection */}
                <div className="grid gap-4 mb-8">
                  {PRACTICE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                        selectedPackage === pkg.id
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-gray-200 hover:border-yellow-500/50"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 -right-3 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                          Popular Choice
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-bold text-[#2c3149] text-lg">{pkg.title}</h3>
                          <p className="text-sm text-gray-600">{pkg.description}</p>
                        </div>
                        <div className="text-xl font-bold text-yellow-500">${pkg.price}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.questions} practice questions</span>
                      </div>
                      <div className="grid gap-2">
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={addToCart}
                  className="w-full py-4 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors"
                >
                  Add to Cart - ${PRACTICE_PACKAGES.find(p => p.id === selectedPackage)?.price.toFixed(2)}
                </button>

                {/* Additional Info */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>
                    Instant access after purchase. Practice on any device. 
                    Our practice tests are regularly updated to match the latest G1 test format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G1Practice;