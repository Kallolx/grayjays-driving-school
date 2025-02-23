import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock3, 
  Calendar,
  Users,
  Car,
  GraduationCap,

  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

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
    id: 'g2',
    title: 'G2 License',
    basePrice: 50,
    priceFor90Mins: 75,
    priceFor2Hours: 95,
    features: [
      'One-on-one instruction',
      'Flexible scheduling',
      'Pick-up & drop-off',
      'Dual brake system',
      'Perfect for beginners',
      'Practice test routes'
    ],
    licenseType: 'G2',
    icon: '/icons/mto.png',
    description: 'Perfect for beginners preparing for their G2 test'
  },
  {
    id: 'g',
    title: 'G License',
    basePrice: 60,
    priceFor90Mins: 90,
    priceFor2Hours: 115,
    features: [
      'Advanced techniques',
      'Highway driving',
      'Pick-up & drop-off',
      'Dual brake system',
      'Expert instructors',
      'Test preparation'
    ],
    licenseType: 'G',
    icon: '/icons/3.png',
    description: 'Advanced training for G license candidates'
  }
];

const HourlyLesson = ({ cart, setCart }: HourlyLessonProps) => {
  const [selectedDuration, setSelectedDuration] = useState<{ [key: string]: '1h' | '1.5h' | '2h' }>({
    g2: '1h',
    g: '1h'
  });

  const getPrice = (pkg: typeof HOURLY_PACKAGES[0], duration: '1h' | '1.5h' | '2h') => {
    switch (duration) {
      case '1h':
        return pkg.basePrice;
      case '1.5h':
        return pkg.priceFor90Mins;
      case '2h':
        return pkg.priceFor2Hours;
      default:
        return pkg.basePrice;
    }
  };

  const addToCart = (pkg: typeof HOURLY_PACKAGES[0]) => {
    const duration = selectedDuration[pkg.id];
    const hours = duration === '1h' ? 1 : duration === '1.5h' ? 1.5 : 2;
    const price = getPrice(pkg, duration);

    const cartItem: CartItem = {
      id: `${pkg.id}-${Date.now()}`,
      name: `${pkg.title} - ${hours} ${hours === 1 ? 'Hour' : 'Hours'}`,
      price,
      licenseType: pkg.licenseType,
      hours,
      requiresLocation: false
    };

    setCart([...cart, cartItem]);
    toast.success('Item added to cart successfully!', {
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
              <Clock3 className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Flexible Learning Schedule</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Hourly <span className="text-yellow-500">Driving Lessons</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Personalized one-on-one instruction tailored to your skill level and schedule.
              Choose your duration and start your journey today.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">1-2h</div>
                <div className="text-sm text-gray-300">Flexible Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-300">Online Booking</div>
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
          {/* Packages Grid - Left Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="grid gap-6">
                {HOURLY_PACKAGES.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 pb-5 border-b border-gray-200">
                      <div>
                        <h3 className="text-xl font-semibold text-[#2c3149]">{pkg.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{pkg.description}</p>
                      </div>
                      <div className="w-14 h-14">
                        <img src={pkg.icon} alt={pkg.title} className="w-full h-full object-contain" />
                      </div>
                    </div>

                    {/* Duration Toggle */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Duration:
                      </label>
                      <div className="bg-gray-100 p-2 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => setSelectedDuration(prev => ({ ...prev, [pkg.id]: '1h' }))}
                            className={`py-3 rounded-md text-sm font-medium transition-all ${
                              selectedDuration[pkg.id] === '1h'
                                ? 'bg-[#2c3149] text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            1H - ${pkg.basePrice}
                          </button>
                          <button
                            onClick={() => setSelectedDuration(prev => ({ ...prev, [pkg.id]: '1.5h' }))}
                            className={`py-3 rounded-md text-sm font-medium transition-all ${
                              selectedDuration[pkg.id] === '1.5h'
                                ? 'bg-[#2c3149] text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            1.5H - ${pkg.priceFor90Mins}
                          </button>
                          <button
                            onClick={() => setSelectedDuration(prev => ({ ...prev, [pkg.id]: '2h' }))}
                            className={`py-3 rounded-md text-sm font-medium transition-all ${
                              selectedDuration[pkg.id] === '2h'
                                ? 'bg-[#2c3149] text-white shadow-md'
                                : 'text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            2H - ${pkg.priceFor2Hours}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#2c3149]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-[#2c3149]" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => addToCart(pkg)}
                      className="w-full py-4 bg-[#2c3149] text-white text-md font-semibold rounded-lg hover:bg-[#1d2035] transition shadow-lg transform hover:scale-[1.02]"
                    >
                      Book {selectedDuration[pkg.id] === '1h' ? '1 Hour' : selectedDuration[pkg.id] === '1.5h' ? '1.5 Hours' : '2 Hours'} - ${getPrice(pkg, selectedDuration[pkg.id])}
                    </button>

                    {/* Additional Info */}
                    <div className="mt-4 flex items-start gap-2 text-xs text-gray-600">
                      <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <p>
                        Flexible scheduling available. Free cancellation up to 24 hours before the lesson.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Details - Right Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Why Choose Hourly Lessons */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                Why Choose Hourly Lessons?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Flexibility Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-[#2c3149]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          Flexible Scheduling
                        </h3>
                        <p className="text-gray-600">
                          Book lessons at your convenience with our 24/7 online scheduling system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personalized Learning Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <Users className="w-8 h-8 text-[#2c3149]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          One-on-One Training
                        </h3>
                        <p className="text-gray-600">
                          Personalized attention from experienced instructors focused on your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modern Vehicles Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <Car className="w-8 h-8 text-[#2c3149]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          Modern Vehicles
                        </h3>
                        <p className="text-gray-600">
                          Learn in well-maintained, dual-control vehicles equipped with safety features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expert Instructors Card */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
                  <div className="absolute inset-x-0 -bottom-1 h-1 bg-[#2c3149] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-[#2c3149]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                          Expert Instructors
                        </h3>
                        <p className="text-gray-600">
                          Learn from certified professionals with years of teaching experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                What You'll Learn
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="grid gap-4">
                  {[
                    "Vehicle control and basic maneuvers",
                    "Traffic rules and regulations",
                    "Defensive driving techniques",
                    "Parallel parking and reverse parking",
                    "Highway driving skills",
                    "Night driving instruction",
                    "Winter driving techniques",
                    "Road test preparation",
                    "Emergency maneuvers",
                    "City navigation skills",
                    "Intersection management",
                    "Speed control and observation"
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

            {/* Video Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                See What to Expect
              </h2>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Container */}
                <div className="relative w-full">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src="https://www.youtube.com/embed/gvim3YjvRp8"
                      title="Hourly Lessons Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
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

export default HourlyLesson; 