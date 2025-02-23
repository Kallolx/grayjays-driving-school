import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  GraduationCap,
  Users,
  Calendar,
  AlertCircle,
  MinusCircle,
  PlusCircle,
} from "lucide-react";

import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  requiresLocation: boolean;
  hours: number;
}

interface BDEProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const BDE = ({ cart, setCart }: BDEProps) => {
  const [withCar, setWithCar] = useState(true);
  const [hours, setHours] = useState(10);
  const basePrice = withCar ? 80 : 60;

  const addToCart = () => {
    const cartItem: CartItem = {
      id: `bde-${Date.now()}`,
      name: `BDE Course - ${hours} Hours ${
        withCar ? "with Car" : "without Car"
      }`,
      price: hours * basePrice,
      requiresLocation: false,
      hours,
    };

    setCart([...cart, cartItem]);
    toast.success("BDE Course added to cart successfully!", {
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

  const incrementHours = () => {
    if (hours < 50) {
      setHours((prev) => prev + 1);
    }
  };

  const decrementHours = () => {
    if (hours > 10) {
      setHours((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <GraduationCap className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                MTO Approved Course
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Beginner Driver <span className="text-yellow-500">Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Start your journey to becoming a confident and skilled driver with
              our comprehensive MTO-approved program.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">40h</div>
                <div className="text-sm text-gray-300">Total Training</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">20%</div>
                <div className="text-sm text-gray-300">Insurance Discount</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">98%</div>
                <div className="text-sm text-gray-300">Pass Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">4.9★</div>
                <div className="text-sm text-gray-300">Student Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Details - Left Column */}

          {/* Booking Panel - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                {/* Heading */}
                <h2 className="text-xl font-bold text-[#2c3149] mb-5">
                  Book Your Course
                </h2>

                {/* Hours Selector */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Hours:
                  </label>
                  <div className="bg-gray-100 p-4 rounded-xl border border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#2c3149]" />
                        <span className="text-sm font-medium text-[#2c3149]">
                          Training Hours
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={decrementHours}
                          disabled={hours <= 10}
                          className="w-9 h-9 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <MinusCircle className="w-5 h-5 text-[#2c3149]" />
                        </button>
                        <span className="text-lg font-bold text-[#2c3149] min-w-[3ch] text-center">
                          {hours}
                        </span>
                        <button
                          onClick={incrementHours}
                          disabled={hours >= 50}
                          className="w-9 h-9 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <PlusCircle className="w-5 h-5 text-[#2c3149]" />
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>Minimum 10 hours required</span>
                    </div>
                  </div>
                </div>

                {/* Car Option Selector */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you need a car for the test?
                  </label>
                  <div className="p-1 rounded-xl bg-gray-100 border border-gray-300 flex items-center justify-between">
                    <button
                      onClick={() => setWithCar(true)}
                      className={`w-1/2 py-3 rounded-md font-medium text-sm transition-all ${
                        withCar
                          ? "bg-[#2c3149] text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setWithCar(false)}
                      className={`w-1/2 py-3 rounded-md font-medium text-sm transition-all ${
                        !withCar
                          ? "bg-[#2c3149] text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-5 p-4 bg-gray-100 rounded-xl border border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Price per hour:
                    </span>
                    <span className="text-sm font-bold text-[#2c3149]">
                      ${basePrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Total hours:</span>
                    <span className="text-gray-500">{hours} hours</span>
                  </div>
                  <div className="h-px bg-gray-300 my-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#2c3149]">
                      Total:
                    </span>
                    <span className="text-lg font-bold text-yellow-500">
                      ${hours * basePrice}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={addToCart}
                  className="w-full py-4 bg-[#2c3149] text-white text-sm font-bold rounded-xl hover:bg-[#1d2035] transition shadow-md transform hover:scale-[1.02]"
                >
                  Buy Now
                </button>

                {/* Additional Info */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-600">
                  <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <p>
                    By booking this course, you agree to our terms and
                    conditions. Flexible payment plans available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* Course Overview */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                Course Overview
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* In-Class Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <img
                          src="/icons/20.png"
                          alt="In-Class Training"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          20 Hours In-Class
                        </h3>
                        <p className="text-gray-600">
                          Comprehensive classroom sessions covering traffic
                          rules, road safety, and defensive driving techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In-Car Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <img
                          src="/icons/10.png"
                          alt="In-Car Training"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          10 Hours In-Car
                        </h3>
                        <p className="text-gray-600">
                          One-on-one practical training with certified
                          instructors in dual-brake vehicles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Study Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <img
                          src="/icons/book.png"
                          alt="Home Study"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          10 Hours Home Study
                        </h3>
                        <p className="text-gray-600">
                          Interactive online modules and materials for
                          self-paced learning and practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insurance Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <img
                          src="/icons/insu.png"
                          alt="Insurance Benefits"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          Insurance Benefits
                        </h3>
                        <p className="text-gray-600">
                          Qualify for up to 20% insurance discount upon
                          successful completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                Detailed Course Overview
              </h2>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Container */}
                <div className="relative w-full">
                  {/* 16:9 aspect ratio wrapper */}
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src="https://www.youtube.com/embed/gvim3YjvRp8"
                      title="Course Overview Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 sm:p-8 bg-gray-50">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-[#2c3149]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          Watch Our Course Introduction
                        </h3>
                        <p className="text-gray-600">
                          Get a comprehensive overview of our BDE program,
                          teaching methods, and what to expect during your
                          learning journey.
                        </p>

                        {/* Video Features */}
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#2c3149]" />
                            <span className="text-sm text-gray-600">
                              Full Course Overview
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#2c3149]" />
                            <span className="text-sm text-gray-600">
                              Teaching Methods
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Features */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                What's Included
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="grid gap-4">
                  {[
                    "MTO-approved curriculum",
                    "Experienced certified instructors",
                    "Flexible scheduling options",
                    "Free pick-up and drop-off service",
                    "Access to online learning materials",
                    "Practice tests and mock exams",
                    "Road test preparation",
                    "Insurance discount certificate",
                    "Lifetime certification",
                    "Emergency maneuver training",
                    "Defensive driving techniques",
                    "Night driving instruction",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Course Schedule */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                Course Schedule
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2c3149] mb-2">
                        Flexible Scheduling
                      </h3>
                      <p className="text-gray-600">
                        Choose from weekday, weekend, or intensive courses to
                        fit your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2c3149] mb-2">
                        Course Duration
                      </h3>
                      <p className="text-gray-600">
                        Complete the course in as little as 4 weeks or at your
                        own pace.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2c3149] mb-2">
                        Class Size
                      </h3>
                      <p className="text-gray-600">
                        Small class sizes ensure personalized attention and
                        interactive learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BDE;
