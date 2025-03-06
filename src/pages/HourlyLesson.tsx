import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Users,
  Car,
  AlertCircle,
  ClipboardCheck,
  Shield,
  GraduationCap,
  Award,
  BadgeCheck,
} from "lucide-react";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  licenseType?: string;
  hours?: number;
  requiresLocation: boolean;
}

interface HourlyLessonProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const HOURLY_PACKAGES = [
  {
    id: "g2",
    title: "G2 License Training",
    basePrice: 60,
    priceFor90Mins: 85,
    priceFor2Hours: 110,
    features: [
      "Perfect for beginners & G2 test prep",
      "Residential & city driving practice",
      "Basic maneuvers & parking skills",
      "Traffic rules & road signs",
      "Pick-up from your location",
      "Instructor evaluation report",
    ],
    licenseType: "G2",
    icon: GraduationCap,
    description: "Essential training for G2 test success",
  },
  {
    id: "g",
    title: "G License Training",
    basePrice: 70,
    priceFor90Mins: 100,
    priceFor2Hours: 130,
    features: [
      "Highway & expressway driving",
      "Advanced parking techniques",
      "Emergency maneuvers practice",
      "Three-point turns & backing",
      "Pick-up from your location",
      "Mock G test simulation",
    ],
    licenseType: "G",
    icon: Award,
    description: "Advanced training for full G license",
  },
];

const HourlyLesson = ({ cart, setCart }: HourlyLessonProps) => {
  const [selectedDuration, setSelectedDuration] = useState<{
    [key: string]: "1h" | "1.5h" | "2h";
  }>({
    g2: "1h",
    g: "1h",
  });

  const getPrice = (
    pkg: (typeof HOURLY_PACKAGES)[0],
    duration: "1h" | "1.5h" | "2h"
  ) => {
    switch (duration) {
      case "1h":
        return pkg.basePrice;
      case "1.5h":
        return pkg.priceFor90Mins;
      case "2h":
        return pkg.priceFor2Hours;
      default:
        return pkg.basePrice;
    }
  };

  const addToCart = (pkg: (typeof HOURLY_PACKAGES)[0]) => {
    const duration = selectedDuration[pkg.id];
    const hours = duration === "1h" ? 1 : duration === "1.5h" ? 1.5 : 2;
    const price = getPrice(pkg, duration);

    const cartItem: CartItem = {
      id: `${pkg.id}-${Date.now()}`,
      name: `${pkg.title} - ${hours} ${hours === 1 ? "Hour" : "Hours"}`,
      price,
      licenseType: pkg.licenseType,
      hours,
      requiresLocation: false,
    };

    setCart([...cart, cartItem]);
    toast.success("Item added to cart successfully!", {
      style: {
        background: "#2c3149",
        color: "#fff",
        borderRadius: "12px",
      },
      icon: "🛒",
      position: "bottom-left",
      duration: 2000,
    });
  };

  // Separate rendering for G2 and G cards
  const renderPackageCard = (pkg: (typeof HOURLY_PACKAGES)[0]) => {
    if (pkg.id === "g2") {
      return (
        <motion.div
          key={pkg.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg overflow-visible"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-30 rounded-xl sm:rounded-2xl"></div>

          <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-[#2c3149] px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
            Most Popular
          </div>

          {/* Header */}
          <div className="relative flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-yellow-500 text-[#2c3149]">
              <pkg.icon size={24} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {pkg.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                {pkg.description}
              </p>
            </div>
          </div>

          {/* Duration Toggle */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-medium mb-2 text-white">
              Select Duration:
            </label>
            <div className="bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 rounded-lg sm:rounded-xl border">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "1h", label: "1H", price: pkg.basePrice },
                  { value: "1.5h", label: "1.5H", price: pkg.priceFor90Mins },
                  { value: "2h", label: "2H", price: pkg.priceFor2Hours },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setSelectedDuration((prev) => ({
                        ...prev,
                        [pkg.id]: option.value as "1h" | "1.5h" | "2h",
                      }))
                    }
                    className={`py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      selectedDuration[pkg.id] === option.value
                        ? "bg-yellow-500 text-[#2c3149]"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    {option.label} - ${option.price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={() => addToCart(pkg)}
            className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg transform hover:scale-[1.02] transition bg-yellow-500 text-[#2c3149] hover:bg-yellow-400"
          >
            Book{" "}
            {selectedDuration[pkg.id] === "1h"
              ? "1 Hour"
              : selectedDuration[pkg.id] === "1.5h"
              ? "1.5 Hours"
              : "2 Hours"}{" "}
            - ${getPrice(pkg, selectedDuration[pkg.id])}
          </button>

          {/* Additional Info */}
          <div className="mt-3 sm:mt-4 flex items-start gap-2 text-[10px] sm:text-xs text-gray-300">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
            <p>
              Flexible scheduling available. Free cancellation up to 24 hours
              before the lesson.
            </p>
          </div>
        </motion.div>
      );
    } else {
      // G License Card
      return (
        <motion.div
          key={pkg.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg overflow-visible"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#2c3149] text-yellow-500">
              <pkg.icon size={24} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#2c3149]">
                {pkg.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {pkg.description}
              </p>
            </div>
          </div>

          {/* Duration Toggle */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-medium mb-2 text-[#2c3149]">
              Select Duration:
            </label>
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "1h", label: "1H", price: pkg.basePrice },
                  { value: "1.5h", label: "1.5H", price: pkg.priceFor90Mins },
                  { value: "2h", label: "2H", price: pkg.priceFor2Hours },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setSelectedDuration((prev) => ({
                        ...prev,
                        [pkg.id]: option.value as "1h" | "1.5h" | "2h",
                      }))
                    }
                    className={`py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      selectedDuration[pkg.id] === option.value
                        ? "bg-[#2c3149] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {option.label} - ${option.price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#2c3149]/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#2c3149]" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={() => addToCart(pkg)}
            className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg transform hover:scale-[1.02] transition bg-[#2c3149] text-white hover:bg-[#1d2035]"
          >
            Book{" "}
            {selectedDuration[pkg.id] === "1h"
              ? "1 Hour"
              : selectedDuration[pkg.id] === "1.5h"
              ? "1.5 Hours"
              : "2 Hours"}{" "}
            - ${getPrice(pkg, selectedDuration[pkg.id])}
          </button>

          {/* Additional Info */}
          <div className="mt-3 sm:mt-4 flex items-start gap-2 text-[10px] sm:text-xs text-gray-600">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
            <p>
              Flexible scheduling available. Free cancellation up to 24 hours
              before the lesson.
            </p>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/1044329/pexels-photo-1044329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-60"
          />
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[1] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3149] via-[#2c3149]/90 to-[#2c3149]/50" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#1a1f33]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
            >
              <Clock3 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-sm sm:text-base text-white font-medium">
                Flexible Learning Schedule
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Hourly <span className="text-yellow-500">Driving Lessons</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8"
            >
              Personalized one-on-one instruction tailored to your skill level
              and schedule. Choose your duration and start your journey today.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mt-8 sm:mt-12"
            >
              {[
                { value: "1-2h", label: "Flexible Duration" },
                { value: "24/7", label: "Online Booking" },
                { value: "98%", label: "Pass Rate" },
                { value: "4.9★", label: "Student Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4"
                >
                  <div className="text-xl sm:text-2xl font-bold text-yellow-500">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Packages Grid - Left Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 sm:top-24">
              <div className="grid gap-4 sm:gap-6">
                {HOURLY_PACKAGES.map((pkg) => renderPackageCard(pkg))}
              </div>
            </div>
          </div>

          {/* Course Details - Right Column */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* What's Included Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c3149] mb-4 sm:mb-6">
                What's Included in Every Lesson
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Instruction",
                    description:
                      "Learn from MTO-certified instructors with years of experience",
                  },
                  {
                    icon: Car,
                    title: "Modern Vehicles",
                    description:
                      "Practice in well-maintained cars with dual-brake system",
                  },
                  {
                    icon: Shield,
                    title: "Insurance Coverage",
                    description:
                      "Full coverage during your entire training session",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Progress Report",
                    description:
                      "Detailed evaluation and improvement suggestions after each lesson",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#2c3149] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c3149] mb-4 sm:mb-6">
                Skills You'll Master
              </h2>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4">
                  {[
                    {
                      category: "Basic Skills",
                      items: [
                        "Vehicle controls & instruments",
                        "Starting & stopping smoothly",
                        "Steering techniques",
                        "Speed control & braking",
                      ],
                    },
                    {
                      category: "Parking Skills",
                      items: [
                        "Parallel parking",
                        "Reverse parking",
                        "Angle parking",
                        "Uphill/downhill parking",
                      ],
                    },
                    {
                      category: "Road Skills",
                      items: [
                        "Lane changing & merging",
                        "Intersection management",
                        "Traffic signs & signals",
                        "Right-of-way rules",
                      ],
                    },
                    {
                      category: "Advanced Skills",
                      items: [
                        "Highway driving",
                        "Night driving",
                        "Adverse weather driving",
                        "Emergency maneuvers",
                      ],
                    },
                  ].map((category, index) => (
                    <div key={index} className="space-y-2 sm:space-y-3">
                      <h3 className="font-semibold text-[#2c3149] text-sm sm:text-base">
                        {category.category}
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-500"></div>
                            <span className="text-xs sm:text-sm text-gray-600">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c3149] mb-4 sm:mb-6">
                Common Questions
              </h2>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md space-y-3 sm:space-y-4">
                {[
                  {
                    q: "How long should I book for each lesson?",
                    a: "We recommend 1.5 or 2-hour sessions for optimal learning. This gives enough time to practice multiple skills and receive thorough feedback.",
                  },
                  {
                    q: "Do you provide pick-up and drop-off service?",
                    a: "Yes, we offer convenient pick-up and drop-off service from your home, school, or workplace within our service area.",
                  },
                  {
                    q: "How many lessons do I need?",
                    a: "The number of lessons varies by individual. Most G2 candidates need 10-15 hours, while G license candidates typically need 6-8 hours of practice.",
                  },
                  {
                    q: "Can I cancel or reschedule my lesson?",
                    a: "Yes, you can reschedule or cancel your lesson up to 24 hours before the scheduled time without any charge.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-0 pb-3 sm:pb-4 last:pb-0"
                  >
                    <h3 className="font-semibold text-[#2c3149] mb-1 sm:mb-2 text-sm sm:text-base">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyLesson;
