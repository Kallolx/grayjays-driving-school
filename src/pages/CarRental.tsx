import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Clock3, 
  CheckCircle2, 
  X,
  Calendar,
  MapPin,
  Info,
  ShieldCheck,
  Users,
  ArrowRight
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface RentalPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  icon: string;
  features: string[];
  benefits: string[];
  addons: {
    warmup: {
      title: string;
      price: number;
      description: string;
    }
  }
}

const RENTAL_PACKAGES: RentalPackage[] = [
  {
    id: 'g2-test',
    title: 'G2 Road Test Package',
    description: 'Perfect for G2 test takers',
    price: 149.45,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400&h=250',
    icon: '/icons/g2-license.png',
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Test Day Support',
      'Dual Brake System',
      'Last-minute Tips',
      'Vehicle Inspection'
    ],
    benefits: [
      'Reduce test anxiety with a familiar instructor',
      'Practice on actual test routes',
      'Gain confidence with a reliable vehicle'
    ],
    addons: {
      warmup: {
        title: '1-Hour Warm-up',
        price: 60,
        description: 'Practice before your test'
      }
    }
  },
  {
    id: 'g-test',
    title: 'G Road Test Package',
    description: 'Ideal for G license candidates',
    price: 159.45,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=400&h=250',
    icon: '/icons/g-license.png',
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Highway Practice',
      'Dual Brake System',
      'Advanced Maneuvers',
      'Vehicle Inspection'
    ],
    benefits: [
      'Master highway driving with expert guidance',
      'Practice complex traffic scenarios',
      'Gain confidence with a reliable vehicle'
    ],
    addons: {
      warmup: {
        title: '1-Hour Warm-up',
        price: 60,
        description: 'Practice before your test'
      }
    }
  },
  {
    id: 'practice',
    title: 'Practice Package',
    description: 'Extra practice before your test',
    price: 129.45,
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=400&h=250',
    icon: '/icons/practice.png',
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Route Familiarization',
      'Dual Brake System',
      'Personalized Feedback',
      'Skill Assessment'
    ],
    benefits: [
      'Focus on your specific areas of improvement',
      'Build confidence with targeted practice',
      'Get professional assessment of your skills'
    ],
    addons: {
      warmup: {
        title: '1-Hour Warm-up',
        price: 60,
        description: 'Practice before your test'
      }
    }
  }
];

const LOCATIONS = [
  'Scarborough',
  'North York',
  'Markham',
  'Richmond Hill',
  'Mississauga',
  'Brampton',
  'Etobicoke'
];

const AVAILABLE_TIMES = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM'
];

const CarRental = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<RentalPackage | null>(null);
  const [includeWarmup, setIncludeWarmup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookNow = () => {
    if (!selectedLocation || !selectedDate || !selectedTime) {
      toast.error('Please select location, date and time', {
        style: {
          background: '#2c3149',
          color: '#fff',
          borderRadius: '12px',
        },
        icon: '📍',
        position: 'bottom-left',
      });
      return;
    }

    // Store booking details in URL parameters
    const params = new URLSearchParams({
      package: selectedPackage?.title || '',
      location: selectedLocation,
      date: selectedDate,
      time: selectedTime,
      warmup: includeWarmup ? 'yes' : 'no',
      total: ((selectedPackage?.price || 0) + (includeWarmup ? (selectedPackage?.addons.warmup.price || 0) : 0)).toFixed(2)
    });

    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-24 pb-32 sm:pb-40 bg-[#2c3149] overflow-hidden">
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
              <Car className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Road Test Vehicle Rental</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Book Your <span className="text-yellow-500">Test Vehicle</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Well-maintained vehicles with professional support for your road test success
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 text-white"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-500" />
                <span>Certified Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-yellow-500" />
                <span>Flexible Scheduling</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Most Popular Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Car className="w-5 h-5 text-black" />
            <span className="text-sm font-medium text-black">Most Popular Packages</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* G2 Test Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-400 hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => {
              setSelectedPackage(RENTAL_PACKAGES[0]);
              setShowBookingModal(true);
            }}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center">
                <Car className="w-8 h-8 sm:w-10 sm:h-10 text-[#2c3149]" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-[#2c3149] mb-0.5">G2 Test Package</h3>
                <p className="text-xs sm:text-sm text-gray-600">Perfect for G2 test takers</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {RENTAL_PACKAGES[0].features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c3149] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="bg-gray-50 text-[#2c3149] px-3 py-1.5 rounded-lg">
                <div className="text-xs font-medium mb-0.5">Starting from</div>
                <div className="text-lg sm:text-xl font-bold">${RENTAL_PACKAGES[0].price}</div>
              </div>
            </div>

            <button className="w-full py-3 sm:py-4 border-2 border-[#2c3149] text-[#2c3149] rounded-lg sm:rounded-xl hover:bg-[#2c3149] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Most Popular - G Test Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative bg-gradient-to-b from-[#2c3149] to-[#1a1f33] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => {
              setSelectedPackage(RENTAL_PACKAGES[1]);
              setShowBookingModal(true);
            }}
          >
            <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.05] rounded-xl sm:rounded-2xl" />

            <div className="relative">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center">
                  <Car className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-500 rounded-full mb-1">
                    <span className="text-xs font-medium text-[#2c3149]">Most Popular</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white">G Test Package</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Ideal for G license candidates</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {RENTAL_PACKAGES[1].features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="bg-white/10 text-white px-3 py-1.5 rounded-lg">
                  <div className="text-xs font-medium mb-0.5">Starting from</div>
                  <div className="text-lg sm:text-xl font-bold">${RENTAL_PACKAGES[1].price}</div>
                </div>
              </div>

              <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-[#2c3149] rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Practice Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-400 hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => {
              setSelectedPackage(RENTAL_PACKAGES[2]);
              setShowBookingModal(true);
            }}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center">
                <Car className="w-8 h-8 sm:w-10 sm:h-10 text-[#2c3149]" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-[#2c3149] mb-0.5">Practice Package</h3>
                <p className="text-xs sm:text-sm text-gray-600">Extra practice before your test</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {RENTAL_PACKAGES[2].features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c3149] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="bg-gray-50 text-[#2c3149] px-3 py-1.5 rounded-lg">
                <div className="text-xs font-medium mb-0.5">Starting from</div>
                <div className="text-lg sm:text-xl font-bold">${RENTAL_PACKAGES[2].price}</div>
              </div>
            </div>

            <button className="w-full py-3 sm:py-4 border-2 border-[#2c3149] text-[#2c3149] rounded-lg sm:rounded-xl hover:bg-[#2c3149] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Package Benefits Section */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {RENTAL_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-[#2c3149] mb-4">{pkg.title} Benefits</h3>
              <div className="space-y-3">
                {pkg.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3149] mb-4">All Packages Include</h2>
            <p className="text-gray-600">Every rental package comes with these essential features for your success</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-[#2c3149] mb-1">Fully Insured</h3>
              <p className="text-sm text-gray-600">Comprehensive insurance coverage for your peace of mind</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-[#2c3149] mb-1">Expert Instructors</h3>
              <p className="text-sm text-gray-600">Professional guidance from certified driving instructors</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                <Clock3 className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-[#2c3149] mb-1">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">Book your preferred time slot that works best for you</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-[#2c3149] mb-1">Pick-up Service</h3>
              <p className="text-sm text-gray-600">Convenient pick-up and drop-off at your preferred location</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3149] mb-4">Why Choose Our Rental Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our vehicles and instructors are specially prepared to help you succeed in your driving test.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-[#2c3149] mb-2">Reliable Vehicles</h3>
            <p className="text-gray-600">All our vehicles are regularly maintained, fully insured, and equipped with dual brake systems for your safety.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-[#2c3149] mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Our certified instructors know the test routes and requirements, providing valuable last-minute tips.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <Clock3 className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-[#2c3149] mb-2">Convenient Service</h3>
            <p className="text-gray-600">We offer pick-up and drop-off service, flexible scheduling, and warm-up sessions before your test.</p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && selectedPackage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#2c3149] p-4 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedPackage.title}</h3>
                    <p className="text-sm text-gray-300">{selectedPackage.description}</p>
                  </div>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-4">
                  {/* Location Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                    <div className="relative">
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                      >
                        <option value="">Select location</option>
                        {LOCATIONS.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                        />
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Time</label>
                      <div className="relative">
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                        >
                          <option value="">Select time</option>
                          {AVAILABLE_TIMES.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Warm-up Option */}
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-[#2c3149]">Add 1-Hour Warm-up</h4>
                        <p className="text-sm text-gray-600">{selectedPackage.addons.warmup.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-600">+${selectedPackage.addons.warmup.price}</span>
                        <button
                          onClick={() => setIncludeWarmup(!includeWarmup)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            includeWarmup ? 'bg-yellow-500' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            includeWarmup ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Base Price</span>
                        <span className="font-medium text-[#2c3149]">${selectedPackage.price}</span>
                      </div>
                      {includeWarmup && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Warm-up Session</span>
                          <span className="font-medium text-[#2c3149]">${selectedPackage.addons.warmup.price}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between">
                          <span className="font-semibold text-[#2c3149]">Total</span>
                          <span className="font-bold text-[#2c3149]">
                            ${(selectedPackage.price + (includeWarmup ? selectedPackage.addons.warmup.price : 0)).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Information */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <p className="text-sm text-gray-600">
                        Please arrive 15 minutes before your scheduled time. Don't forget to bring your driver's license and test confirmation.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleBookNow}
                      className="flex-1 px-4 py-2.5 bg-[#2c3149] text-white font-semibold rounded-lg hover:bg-[#1a1f33] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Buy Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarRental; 

