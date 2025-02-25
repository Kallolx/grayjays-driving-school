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

interface CarRentalProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  licenseType: string;
  location?: string;
  requiresLocation: boolean;
  date?: string;
  time?: string;
}

const RENTAL_PACKAGES = [
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

const CarRental = ({ cart, setCart }: CarRentalProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<typeof RENTAL_PACKAGES[0] | null>(null);
  const [includeWarmup, setIncludeWarmup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const addToCart = (pkg: typeof RENTAL_PACKAGES[0]) => {
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

    const cartItem: CartItem = {
      id: `${pkg.id}-${Date.now()}`,
      name: `${pkg.title}${includeWarmup ? ' + 1-Hour Warm-up' : ''}`,
      price: pkg.price + (includeWarmup ? pkg.addons.warmup.price : 0),
      licenseType: pkg.id === 'g2-test' ? 'G2' : 'G',
      location: selectedLocation,
      requiresLocation: true,
      date: selectedDate,
      time: selectedTime
    };

    setCart([...cart, cartItem]);
    setShowBookingModal(false);
    toast.success('Added to cart!', {
      style: {
        background: '#2c3149',
        color: '#fff',
        borderRadius: '12px',
      },
      icon: '🚗',
      position: 'bottom-left',
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

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RENTAL_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setSelectedPackage(pkg);
                setShowBookingModal(true);
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03] rounded-2xl" />

              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl" />

              {/* Image Section */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149]/80 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
                  ${pkg.price}
                </div>
              </div>

              {/* Content Container */}
              <div className="relative p-6">
                {/* Icon and Title Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl blur-lg opacity-20" />
                    <div className="relative w-full h-full rounded-xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                      <Car className="w-10 h-10 text-yellow-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2c3149] mb-1">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#2c3149] mb-3 uppercase tracking-wider">Package Includes</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2c3149]" />
                        <span className="text-sm text-gray-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-4 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] text-white rounded-xl group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="font-medium">Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
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
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-4 overflow-hidden"
            >
              {selectedPackage && (
                <>
                  {/* Modal Header with Image */}
                  <div className="relative h-48">
                    <img 
                      src={selectedPackage.image}
                      alt={selectedPackage.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149] to-[#2c3149]/50" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedPackage.title}</h3>
                      <p className="text-white/80">{selectedPackage.description}</p>
                    </div>
                    
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  
                  {/* Modal Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Booking Form */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2c3149] mb-4">Book Your Vehicle</h4>
                        
                        {/* Location Selection */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Location
                          </label>
                          <div className="relative">
                            <select
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none appearance-none"
                            >
                              <option value="">Choose location</option>
                              {LOCATIONS.map((location) => (
                                <option key={location} value={location}>
                                  {location}
                                </option>
                              ))}
                            </select>
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>

                        {/* Date Selection */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none"
                            />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>

                        {/* Time Selection */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Time
                          </label>
                          <div className="relative">
                            <select
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none appearance-none"
                            >
                              <option value="">Choose time</option>
                              {AVAILABLE_TIMES.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>

                        {/* Warm-up Option */}
                        <div className="bg-yellow-50 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-[#2c3149] mb-1">Add 1-Hour Warm-up</h4>
                              <p className="text-sm text-gray-600">{selectedPackage.addons.warmup.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-medium text-gray-600">
                                +${selectedPackage.addons.warmup.price}
                              </span>
                              <button
                                onClick={() => setIncludeWarmup(!includeWarmup)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                  includeWarmup ? 'bg-yellow-500' : 'bg-gray-200'
                                }`}
                              >
                                <span
                                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    includeWarmup ? 'translate-x-6' : 'translate-x-1'
                                  }`}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Column - Package Details */}
                      <div>
                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                          <h4 className="text-lg font-bold text-[#2c3149] mb-4">Package Details</h4>
                          
                          <div className="space-y-4 mb-6">
                            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                              <span className="text-gray-600">Base Price</span>
                              <span className="font-semibold text-[#2c3149]">${selectedPackage.price}</span>
                            </div>
                            
                            {includeWarmup && (
                              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                <span className="text-gray-600">1-Hour Warm-up</span>
                                <span className="font-semibold text-[#2c3149]">${selectedPackage.addons.warmup.price}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between pt-2">
                              <span className="font-bold text-[#2c3149]">Total</span>
                              <span className="text-xl font-bold text-yellow-500">
                                ${(selectedPackage.price + (includeWarmup ? selectedPackage.addons.warmup.price : 0)).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <h5 className="font-medium text-[#2c3149]">What's Included:</h5>
                            {selectedPackage.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl mb-6">
                          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-[#2c3149] mb-1">Important Information</h5>
                            <p className="text-sm text-gray-600">
                              Please arrive 15 minutes before your scheduled time. Don't forget to bring your driver's license and test confirmation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={() => setShowBookingModal(false)}
                        className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => addToCart(selectedPackage)}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarRental; 
