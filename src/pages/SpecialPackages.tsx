import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  X,
  ChevronDown,
  MapPin,
  FileCheck,
} 
from 'lucide-react';
import SpotlightButton from '../components/SpotlightButton';
import PackageDetailsSidebar from '../components/PackageDetailsSidebar';
import { CartItem } from '../types';


const CRASH_COURSES = [
  {
    id: 'test-day',
    title: 'Test Day',
    description: 'Quick preparation for your upcoming test',
    price: 99
  },
  {
    id: 'brush-up',
    title: 'Brush Up',
    description: 'Refresh your skills with a 2-hour session',
    price: 179
  },
  {
    id: 'road-test-ready',
    title: 'Road Test Ready',
    description: 'Comprehensive 3-hour preparation',
    price: 249
  },
  {
    id: 'driving-success',
    title: 'Driving Success',
    description: 'Complete 5-hour preparation package',
    price: 399
  }
];

const PARKING_FEATURES = [
  'Parallel Parking',
  'Three Point Turn',
  'Uphill/Downhill Parking',
  'Forward Parking',
  'Reverse Parking'
];

const GUARANTEED_PASS_FEATURES = [
  'Flexible Payment Options Available',
  'Unlimited Driving Classes Until Pass',
  'Personalized Instruction Tailored to Your Needs',
  'Comprehensive Coverage of Test Requirements',
  'Practice in a School Car to Build Confidence',
  'Mock Tests and Practice Sessions',
  'Dedicated Road Test Preparation',
  '20 Online Lesson Hours',
  '10 Hours of Online Home Link Activities',
  'One And One Lessons',
  'Road Test Booking Help',
  'MTO Certification Fees Included',
  'Eligible For G2 Test In 8 Months',
  'Eligible For Insurance Discount',
  'Advanced Intersection Techniques',
  'Defensive Driving Technique',
  'Free Pick Up and Drop Off',
  'Use Of Instructor\'s Car for Road Test For 1 Time Free of Cost'
];

const REFRESHER_SECTIONS = [
  {
    title: 'City and Suburban Driving',
    description: 'Master urban and residential area driving skills',
    features: [
      'S-Turn Practice: Enhance precision and control in tight spaces',
      'Traffic Light Awareness: Improve reaction times',
      'Left Turn Techniques: Master safe and efficient left turns',
      'Blind Spot Awareness: Learn effective checking techniques',
      'Safe Following Distances: Apply the 3-second rule',
      'Avoiding Road Rage: Stay calm behind the wheel',
      'Eco-Driving: Save fuel and reduce emissions',
      'Speed Management: Manage speed limits effectively',
      'Cruise Control Usage: Utilize advanced driving aids',
      'Lane Discipline: Maintain proper lane position'
    ]
  },
  {
    title: 'Highway Safety and Merging Techniques',
    description: 'Learn essential highway driving skills',
    features: [
      'Highway Merging: Confidently merge onto highways',
      'Highway Exiting: Safely exit highways with precision',
      'Lane Changing on Highways: Execute smooth and safe lane changes'
    ]
  },
  {
    title: 'Precision Parking and Maneuvering',
    description: 'Perfect your parking skills',
    features: PARKING_FEATURES
  },
  {
    title: 'Basic Vehicle Care and Troubleshooting',
    description: 'Learn essential vehicle maintenance',
    features: [
      'Basic Maintenance Checks',
      'Emergency Procedures',
      'Vehicle Safety Systems',
      'Tire Maintenance and Safety'
    ]
  }
];

const MOCK_TEST_FEATURES = [
  'Authentic test routes used by examiners',
  'Standard test duration and format',
  'Professional evaluation criteria',
  'Real-time feedback and scoring',
  'Point-by-point scoring system',
  'Detailed performance analysis',
  'Personalized improvement tips',
  'Common mistakes identification',
  'Pre-test vehicle inspection',
  'Documentation check practice',
  'Examiner interaction simulation',
  'Post-test review session'
];

const SpecialPackages = ({ cart, setCart }: { cart: CartItem[]; setCart: (cart: CartItem[]) => void }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedLicenseType, setSelectedLicenseType] = useState<string>('');
  const [showCart, setShowCart] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedCrashCourse, setSelectedCrashCourse] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);


  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
    if (cart.length <= 1) setShowCart(false);
  };

  const packages = [
    {
      id: 'crash-course',
      title: 'Crash Courses',
      description: 'Intensive driving courses designed to quickly prepare you for your test.',
      price: CRASH_COURSES[0].price,
      icon: '/icons/crash.png',
      image: '/images/crash-course.jpg',
      requiresLocation: true
    },
    {
      id: 'parking',
      title: 'Parking Made Easy',
      description: 'Master all types of parking with our comprehensive course.',
      price: 99,
      icon: '/icons/parking.png',
      image: '/images/parking.jpg',
      requiresLocation: false
    },
    {
      id: 'mock-test',
      title: 'Mock Test',
      description: 'Get real test experience with detailed feedback.',
      price: 99,
      icon: '/icons/mock.png',
      image: '/images/mock-test.jpg',
      requiresLocation: false
    },
    {
      id: 'guaranteed-pass',
      title: 'Guaranteed Pass',
      description: 'Comprehensive program with unlimited lessons until you pass.',
      price: 1999,
      icon: '/icons/guarantee.png',
      image: '/images/guaranteed-pass.jpg',
      requiresLocation: false
    },
    {
      id: 'refresher',
      title: 'Refresher Course',
      description: 'Update your skills and rebuild confidence.',
      price: 249,
      icon: '/icons/reload.png',
      image: '/images/refresher.jpg',
      requiresLocation: false
    }
  ];

  function addToCart(_item: CartItem): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
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
              Special <span className="text-yellow-500">Packages</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Choose from our tailored driving packages designed to meet your specific needs and goals.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-lg sm:max-w-none mx-auto">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => {
                  setExpandedCard(expandedCard === pkg.id ? null : pkg.id);
                  setSelectedPackage(pkg.id);
                  setShowSidebar(true);
                }}
                className={`relative w-full h-[400px] rounded-2xl cursor-pointer transition-all duration-500 ${
                  expandedCard === pkg.id ? 'bg-[#2c3149]' : 'bg-white'
                }`}
                style={{
                  boxShadow: expandedCard === pkg.id 
                    ? '0 25px 50px -12px rgba(44, 49, 73, 0.25)'
                    : '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03] rounded-2xl" />
                
                {/* Glass Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${
                  expandedCard === pkg.id 
                    ? 'bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm'
                    : 'bg-white/80 backdrop-blur-sm'
                }`} />

                {/* Content Container */}
                <div className="relative h-full p-6 flex flex-col">
                  <motion.div
                    layout
                    className="flex-1 flex flex-col items-center justify-center gap-6"
                  >
                    {/* Icon Container */}
                    <motion.div
                      layout="position"
                      className="relative mt-12"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full blur-2xl opacity-20" />
                      <div className={`w-28 h-28 flex items-center justify-center transition-all duration-500 ${
                        expandedCard === pkg.id 
                          ? 'bg-transparent'
                          : 'bg-transparent'
                      }`}>
                        <div className={`transform transition-all duration-500 ${
                          expandedCard === pkg.id ? 'scale-110 text-white' : 'scale-150 text-yellow-500'
                        }`}>
                          <img src={pkg.icon} alt={pkg.title} className="w-25 h-25" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Title and Description */}
                    <motion.div
                      layout="position"
                      className="text-center mt-4"
                    >
                      <motion.h3 
                        layout="position"
                        className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                          expandedCard === pkg.id ? 'text-white' : 'text-[#2c3149] group-hover:text-yellow-500'
                        }`}
                      >
                        {pkg.title}
                      </motion.h3>
                      <motion.p 
                        layout="position"
                        className={`text-sm max-w-[200px] mx-auto transition-colors duration-500 ${
                          expandedCard === pkg.id ? 'text-white/80' : 'text-gray-500'
                        }`}
                      >
                        {pkg.description}
                      </motion.p>
                    </motion.div>

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-4 py-2 rounded-full ${
                        expandedCard === pkg.id 
                          ? 'bg-white/20 text-white'
                          : 'bg-yellow-500/10 text-yellow-500'
                      } font-semibold text-sm`}>
                        From ${pkg.price}
                      </div>
                    </div>

                    {/* License Type Badge */}
                    {pkg.requiresLocation && (
                      <div className="absolute top-4 left-4">
                        <div className={`px-3 py-1.5 rounded-full ${
                          expandedCard === pkg.id 
                            ? 'bg-white/20 text-white'
                            : 'bg-[#2c3149]/10 text-[#2c3149]'
                        } text-xs font-medium flex items-center gap-1.5`}>
                          <FileCheck className="w-3.5 h-3.5" />
                          License Required
                        </div>
                      </div>
                    )}

                    {/* Expand Button */}
                    <motion.div
                      layout="position"
                      className={`mt-auto transition-all duration-500 ${
                        expandedCard === pkg.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar for Package Details */}
      <AnimatePresence>
        {showSidebar && (
          <PackageDetailsSidebar
            selectedPackage={selectedPackage}
            onClose={() => setShowSidebar(false)}
            onAddToCart={addToCart}
            packages={packages}
            selectedCrashCourse={selectedCrashCourse}
            setSelectedCrashCourse={setSelectedCrashCourse}
            CRASH_COURSES={CRASH_COURSES}
            PARKING_FEATURES={PARKING_FEATURES}
            GUARANTEED_PASS_FEATURES={GUARANTEED_PASS_FEATURES}
            REFRESHER_SECTIONS={REFRESHER_SECTIONS}
            MOCK_TEST_FEATURES={MOCK_TEST_FEATURES}
            selectedLocation={selectedLocation}
            selectedLicenseType={selectedLicenseType}
            setSelectedLocation={setSelectedLocation}
            setSelectedLicenseType={setSelectedLicenseType}
          />
        )}
      </AnimatePresence>

      {/* Floating Cart */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 right-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90vw] max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#2c3149]">Your Cart</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">{cart.length} items</span>
                  </div>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3 max-h-[40vh] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-medium text-[#2c3149]">{item.name}</div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                      )}
                      {item.licenseType && (
                        <div className="text-sm text-gray-500">License: {item.licenseType}</div>
                      )}
                      <div className="text-sm font-medium text-yellow-500">${item.price}</div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-[#2c3149]">Total:</span>
                    <span className="text-lg font-bold text-[#2c3149]">
                      ${cart.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </div>
                  <SpotlightButton text="Proceed to Checkout" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpecialPackages; 