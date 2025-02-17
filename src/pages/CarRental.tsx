import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Clock3, 
  CheckCircle2, 
  X
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
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Test Day Support',
      'Dual Brake System'
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
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Highway Practice',
      'Dual Brake System'
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
    features: [
      'Professional Instructor',
      'Pick-up & Drop-off',
      'Route Familiarization',
      'Dual Brake System'
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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative pt-28 pb-8 bg-[#2c3149]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Well-maintained vehicles with professional support for your road test success
            </motion.p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-lg sm:max-w-none mx-auto">
          {RENTAL_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowBookingModal(true);
                }}
                className={`relative w-full h-[450px] rounded-2xl cursor-pointer transition-all duration-500 ${
                  selectedPackage === pkg ? 'bg-[#2c3149]' : 'bg-white'
                }`}
                style={{
                  boxShadow: selectedPackage === pkg 
                    ? '0 25px 50px -12px rgba(44, 49, 73, 0.25)'
                    : '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03] rounded-2xl" />
                
                {/* Glass Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${
                  selectedPackage === pkg 
                    ? 'bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm'
                    : 'bg-white/80 backdrop-blur-sm'
                }`} />

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-yellow-500 text-[#2c3149] text-sm font-bold rounded-full shadow-lg z-10">
                    Popular Choice
                  </div>
                )}

                {/* Content Container */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Icon and Title Section */}
                  <div className="text-center mb-4">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} rounded-2xl blur-xl opacity-20`} />
                      <div className={`relative w-full h-full rounded-2xl flex items-center justify-center ${
                        selectedPackage === pkg ? 'bg-white/10' : 'bg-gray-50'
                      }`}>
                        <Car className={`w-10 h-10 ${
                          selectedPackage === pkg ? 'text-white' : 'text-yellow-500'
                        }`} />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      selectedPackage === pkg ? 'text-white' : 'text-[#2c3149]'
                    }`}>
                      {pkg.title}
                    </h3>
                    <p className={`text-sm px-4 transition-colors duration-300 ${
                      selectedPackage === pkg ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className={`rounded-xl p-4 mb-4 ${
                    selectedPackage === pkg ? 'bg-white/10' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm ${
                        selectedPackage === pkg ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        All-inclusive
                      </span>
                      <div className={`text-2xl font-bold ${
                        selectedPackage === pkg ? 'text-white' : 'text-[#2c3149]'
                      }`}>
                        ${pkg.price}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className={`w-4 h-4 ${
                        selectedPackage === pkg ? 'text-white/60' : 'text-yellow-500'
                      }`} />
                      <span className={`text-xs ${
                        selectedPackage === pkg ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        1-hour warm-up included
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 overflow-hidden">
                    <div className="space-y-2">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            selectedPackage === pkg ? 'text-white' : 'text-yellow-500'
                          }`} />
                          <span className={`text-sm ${
                            selectedPackage === pkg ? 'text-white/80' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    className={`w-full py-3 rounded-xl transition-all duration-300 mt-4 ${
                      selectedPackage === pkg
                        ? 'bg-white text-[#2c3149] hover:bg-white/90'
                        : 'bg-[#2c3149] text-white hover:bg-[#2c3149]/90'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
              className="bg-white rounded-2xl p-6 w-full max-w-lg mx-4"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#2c3149]">Book Your Vehicle</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Location Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="">Choose location</option>
                    {LOCATIONS.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="">Choose time</option>
                    {AVAILABLE_TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Warm-up Option */}
                {selectedPackage && (
                  <div className="bg-gray-50 rounded-xl p-4">
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
                )}
              </div>

              {/* Package Details */}
              {selectedPackage && (
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-[#2c3149]">
                      {selectedPackage.title}
                    </h4>
                    <span className="text-xl font-bold text-yellow-500">
                      ${(selectedPackage.price + (includeWarmup ? selectedPackage.addons.warmup.price : 0)).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {includeWarmup && (
                      <div className="flex items-center gap-2 text-yellow-500">
                        <Clock3 className="w-4 h-4" />
                        <span>Includes 1-hour warm-up</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (selectedPackage) addToCart(selectedPackage);
                  }}
                  className="flex-1 px-6 py-3 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarRental; 
