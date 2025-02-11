import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2} from 'lucide-react';
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
  const [selectedDuration, setSelectedDuration] = useState<{ [key: string]: '1h' | '1.5h' }>({
    g2: '1h',
    g: '1h'
  });

  const getPrice = (pkg: typeof HOURLY_PACKAGES[0], duration: '1h' | '1.5h') => {
    return duration === '1h' ? pkg.basePrice : pkg.priceFor90Mins;
  };

  const addToCart = (pkg: typeof HOURLY_PACKAGES[0]) => {
    const duration = selectedDuration[pkg.id];
    const hours = duration === '1h' ? 1 : 1.5;
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
      <div className="relative pt-28 pb-20 bg-[#2c3149]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Hourly <span className="text-yellow-500">Lessons</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Choose your license type and preferred duration
            </motion.p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          {HOURLY_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                    <div className="w-20 h-20">
                      <img src={pkg.icon} alt={pkg.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2c3149]">{pkg.title}</h3>
                      <p className="text-gray-500 mt-1">{pkg.description}</p>
                    </div>
                  </div>

                  {/* Duration Toggle */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Duration:</label>
                    <div className="bg-gray-50 p-1 rounded-xl">
                      <div className="grid grid-cols-2 gap-1">
                        <button
                          onClick={() => setSelectedDuration(prev => ({
                            ...prev,
                            [pkg.id]: '1h'
                          }))}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            selectedDuration[pkg.id] === '1h'
                              ? 'bg-[#2c3149] text-white shadow-md'
                              : 'text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          1 Hour - ${pkg.basePrice}
                        </button>
                        <button
                          onClick={() => setSelectedDuration(prev => ({
                            ...prev,
                            [pkg.id]: '1.5h'
                          }))}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            selectedDuration[pkg.id] === '1.5h'
                              ? 'bg-[#2c3149] text-white shadow-md'
                              : 'text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          1.5 Hours - ${pkg.priceFor90Mins}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#2c3149]/5 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#2c3149]" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => addToCart(pkg)}
                    className="w-full py-4 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors mt-auto"
                  >
                    Book {selectedDuration[pkg.id] === '1h' ? '1 Hour' : '1.5 Hours'} - ${getPrice(pkg, selectedDuration[pkg.id])}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyLesson; 