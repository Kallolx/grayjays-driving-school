import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, MapPin, Clock3, Package, ArrowRight, CheckCircle2, Calendar} from "lucide-react";
import SpotlightButton from "../components/SpotlightButton";
import { CartItem } from "../types";

const CRASH_COURSES = [
  {
    id: "test-day",
    title: "Test Day",
    description: "Quick preparation for your upcoming test",
    price: 99,
  },
  {
    id: "brush-up",
    title: "Brush Up",
    description: "Refresh your skills with a 2-hour session",
    price: 179,
  },
  {
    id: "road-test-ready",
    title: "Road Test Ready",
    description: "Comprehensive 3-hour preparation",
    price: 249,
  },
  {
    id: "driving-success",
    title: "Driving Success",
    description: "Complete 5-hour preparation package",
    price: 399,
  },
];

const PARKING_FEATURES = [
  "Parallel Parking",
  "Three Point Turn",
  "Uphill/Downhill Parking",
  "Forward Parking",
  "Reverse Parking",
];

const GUARANTEED_PASS_FEATURES = [
  "Flexible Payment Options Available",
  "Unlimited Driving Classes Until Pass",
  "Personalized Instruction Tailored to Your Needs",
  "Comprehensive Coverage of Test Requirements",
  "Practice in a School Car to Build Confidence",
  "Mock Tests and Practice Sessions",
  "Dedicated Road Test Preparation",
  "20 Online Lesson Hours",
  "10 Hours of Online Home Link Activities",
  "One And One Lessons",
  "Road Test Booking Help",
  "MTO Certification Fees Included",
  "Eligible For G2 Test In 8 Months",
  "Eligible For Insurance Discount",
  "Advanced Intersection Techniques",
  "Defensive Driving Technique",
  "Free Pick Up and Drop Off",
  "Use Of Instructor's Car for Road Test For 1 Time Free of Cost",
];

const REFRESHER_SECTIONS = [
  {
    title: "City and Suburban Driving",
    description: "Master urban and residential area driving skills",
    features: [
      "S-Turn Practice: Enhance precision and control in tight spaces",
      "Traffic Light Awareness: Improve reaction times",
      "Left Turn Techniques: Master safe and efficient left turns",
      "Blind Spot Awareness: Learn effective checking techniques",
      "Safe Following Distances: Apply the 3-second rule",
      "Avoiding Road Rage: Stay calm behind the wheel",
      "Eco-Driving: Save fuel and reduce emissions",
      "Speed Management: Manage speed limits effectively",
      "Cruise Control Usage: Utilize advanced driving aids",
      "Lane Discipline: Maintain proper lane position",
    ],
  },
  {
    title: "Highway Safety and Merging Techniques",
    description: "Learn essential highway driving skills",
    features: [
      "Highway Merging: Confidently merge onto highways",
      "Highway Exiting: Safely exit highways with precision",
      "Lane Changing on Highways: Execute smooth and safe lane changes",
    ],
  },
  {
    title: "Precision Parking and Maneuvering",
    description: "Perfect your parking skills",
    features: PARKING_FEATURES,
  },
  {
    title: "Basic Vehicle Care and Troubleshooting",
    description: "Learn essential vehicle maintenance",
    features: [
      "Basic Maintenance Checks",
      "Emergency Procedures",
      "Vehicle Safety Systems",
      "Tire Maintenance and Safety",
    ],
  },
];

const MOCK_TEST_FEATURES = [
  "Authentic test routes used by examiners",
  "Standard test duration and format",
  "Professional evaluation criteria",
  "Real-time feedback and scoring",
  "Point-by-point scoring system",
  "Detailed performance analysis",
  "Personalized improvement tips",
  "Common mistakes identification",
  "Pre-test vehicle inspection",
  "Documentation check practice",
  "Examiner interaction simulation",
  "Post-test review session",
];

const SpecialPackages = ({
  cart,
  setCart,
}: {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}) => {
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId));
    if (cart.length <= 1) setShowCart(false);
  };

  const packages = [
    {
      id: "crash-course",
      title: "Crash Courses",
      description:
        "Intensive driving courses designed to quickly prepare you for your test.",
      price: CRASH_COURSES[0].price,
      icon: "https://cdn-icons-png.flaticon.com/512/2436/2436855.png",
      image: "/images/crash-course.jpg",
      requiresLocation: true,
    },
    {
      id: "parking",
      title: "Parking Made Easy",
      description: "Master all types of parking with our comprehensive course.",
      price: 99,
      icon: "/icons/parking.png",
      image: "/images/parking.jpg",
      requiresLocation: false,
    },
    {
      id: "mock-test",
      title: "Mock Test",
      description: "Get real test experience with detailed feedback.",
      price: 99,
      icon: "/icons/mock.png",
      image: "/images/mock-test.jpg",
      requiresLocation: false,
    },
    {
      id: "guaranteed-pass",
      title: "Guaranteed Pass",
      description:
        "Comprehensive program with unlimited lessons until you pass.",
      price: 1999,
      icon: "/icons/guarantee.png",
      image: "/images/guaranteed-pass.jpg",
      requiresLocation: false,
    },
    {
      id: "refresher",
      title: "Refresher Course",
      description: "Update your skills and rebuild confidence.",
      price: 249,
      icon: "/icons/reload.png",
      image: "/images/refresher.jpg",
      requiresLocation: false,
    },
  ];

  const getSelectedPackageDetails = () => {
    if (!selectedPackage) return null;
    return packages.find(pkg => pkg.id === selectedPackage);
  };

  const getFeatures = () => {
    if (!selectedPackage) return [];
    switch (selectedPackage) {
      case 'crash-course':
        return CRASH_COURSES.map(course => ({
          title: course.title,
          price: course.price,
          description: course.description
        }));
      case 'parking':
        return PARKING_FEATURES.map(feature => ({
          title: feature,
          description: ''
        }));
      case 'guaranteed-pass':
        return GUARANTEED_PASS_FEATURES.map(feature => ({
          title: feature,
          description: ''
        }));
      case 'mock-test':
        return MOCK_TEST_FEATURES.map(feature => ({
          title: feature,
          description: ''
        }));
      case 'refresher':
        return REFRESHER_SECTIONS.map(section => ({
          title: section.title,
          description: section.description,
          features: section.features
        }));
      default:
        return [];
    }
  };

  const addToCart = (pkg: any) => {
    const cartItem: CartItem = {
      id: `${pkg.id}-${Date.now()}`,
      name: pkg.title,
      price: pkg.price,
      requiresLocation: pkg.requiresLocation,
    };
    setCart([...cart, cartItem]);
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative pt-16 sm:pt-28 pb-12 sm:pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1800&auto=format&fit=crop"
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
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
            >
              <Package className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-sm sm:text-base text-white font-medium">Special Packages</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6"
            >
              Tailored <span className="text-yellow-500">Learning</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8"
            >
              Choose from our specially designed packages to accelerate your learning journey.
              Each package is crafted to meet specific needs and goals.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Packages Grid - Updated Pricing */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 relative z-10 mb-6 sm:mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setSelectedPackage(pkg.id);
                setShowModal(true);
              }}
            >
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03] rounded-xl sm:rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl" />

              <div className="relative">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-lg sm:rounded-xl blur-lg opacity-20" />
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-300">
                      <img src={pkg.icon} alt={pkg.title} className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-[#2c3149] mb-0.5 sm:mb-1">{pkg.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{pkg.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="bg-[#2c3149] text-white px-3 py-1.5 rounded-lg">
                    <div className="text-xs font-medium mb-0.5">Starting from</div>
                    <div className="text-lg sm:text-xl font-bold">${pkg.price}</div>
                  </div>
                </div>

                <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] text-white rounded-lg sm:rounded-xl group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="font-medium">View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal with More Information */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-b from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 sm:top-6 right-3 sm:right-6 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              <div className="relative">
                {getSelectedPackageDetails() && (
                  <>
                    <div className="relative p-4 sm:p-8 border-b">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                        <div className="w-full sm:w-1/3">
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <img 
                              src={getSelectedPackageDetails()?.image}
                              alt={getSelectedPackageDetails()?.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149]/80 to-transparent" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3149]">
                              {getSelectedPackageDetails()?.title}
                            </h2>
                            <div className="bg-[#2c3149] text-white px-4 py-2 rounded-xl">
                              <div className="text-sm font-medium mb-0.5">Starting from</div>
                              <div className="text-2xl sm:text-3xl font-bold">
                                ${getSelectedPackageDetails()?.price}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6">
                            {getSelectedPackageDetails()?.description}
                          </p>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex items-center gap-2">
                                <Clock3 className="w-5 h-5 text-[#2c3149]" />
                                <span className="text-sm">Flexible Schedule</span>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#2c3149]" />
                                <span className="text-sm">Pick-up Service</span>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-[#2c3149]" />
                                <span className="text-sm">Book 24/7</span>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#2c3149]" />
                                <span className="text-sm">Certified Instructors</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-8">
                      <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
                        <div className="lg:col-span-2 space-y-4 sm:space-y-8">
                          {selectedPackage === 'crash-course' ? (
                            <div className="space-y-4 sm:space-y-6">
                              <div className="bg-white rounded-xl p-6 shadow-md">
                                <h3 className="text-xl font-bold text-[#2c3149] mb-4">Choose Your Crash Course Package</h3>
                                <div className="grid gap-4">
                                  {getFeatures().map((course: any, index: number) => (
                                    <div 
                                      key={index}
                                      className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                          <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#2c3149] flex items-center justify-center">
                                              <Clock3 className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#2c3149]">{course.title}</h4>
                                          </div>
                                          <p className="text-gray-600 mb-4">{course.description}</p>
                                          
                                          <div className="flex items-center gap-3 text-[#2c3149]">
                                            <div className="text-2xl font-bold">${course.price}</div>
                                            <button 
                                              onClick={() => {
                                                addToCart({
                                                  id: `crash-course-${course.title.toLowerCase().replace(/\s+/g, '-')}`,
                                                  title: `Crash Course - ${course.title}`,
                                                  price: course.price,
                                                  requiresLocation: true
                                                });
                                              }}
                                              className="px-6 py-2 bg-[#2c3149] text-white rounded-lg hover:bg-[#1a1f33] transition-colors flex items-center gap-2"
                                            >
                                              <ShoppingCart className="w-4 h-4" />
                                              <span>Select</span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : selectedPackage === 'refresher' ? (
                            <div className="space-y-4 sm:space-y-6">
                              {getFeatures().map((section: any, index: number) => (
                                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                                  <h3 className="text-lg sm:text-xl font-bold text-[#2c3149] mb-2 sm:mb-3">{section.title}</h3>
                                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{section.description}</p>
                                  <div className="grid gap-2 sm:gap-3">
                                    {section.features.map((feature: string, idx: number) => (
                                      <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                              <div className="grid gap-2 sm:gap-4">
                                {getFeatures().map((feature: any, index: number) => (
                                  <div key={index} className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg text-xs sm:text-sm">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                                    <span className="text-gray-700">{feature.title}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Updated Pricing Card */}
                        <div className="lg:col-span-1">
                          <div className="sticky top-4 sm:top-8">
                            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
                              <div className="bg-gradient-to-br from-[#2c3149] to-[#1a1f33] p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Package Summary</h3>
                                <div className="text-2xl sm:text-3xl font-bold text-white">
                                  ${getSelectedPackageDetails()?.price}
                                  <span className="text-sm font-normal text-white/80 ml-1">starting price</span>
                                </div>
                              </div>

                              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Package Benefits */}
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-[#2c3149] text-sm sm:text-base">Package Benefits:</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span>Professional instructors</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span>Dual-control vehicle</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span>Flexible scheduling</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span>Progress tracking</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Booking Information */}
                                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                                  <h4 className="font-semibold text-[#2c3149] text-xs sm:text-sm">Booking Information:</h4>
                                  <p className="text-xs text-gray-600">
                                    Book your session at least 48 hours in advance. Cancellation is free up to 24 hours before the scheduled time.
                                  </p>
                                </div>

                                {selectedPackage !== 'crash-course' && (
                                  <button
                                    onClick={() => addToCart(getSelectedPackageDetails())}
                                    className="w-full py-3 sm:py-4 bg-[#2c3149] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-[#1a1f33] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                                  >
                                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Add to Cart</span>
                                  </button>
                                )}

                                <button
                                  onClick={() => setShowModal(false)}
                                  className="w-full py-2.5 sm:py-3 border-2 border-[#2c3149] text-[#2c3149] rounded-lg sm:rounded-xl hover:bg-[#2c3149] hover:text-white transition-all duration-300 font-medium text-sm sm:text-base"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Cart - Mobile Optimized */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-16 sm:top-24 right-2 sm:right-4 z-50"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 w-[94vw] sm:w-[90vw] max-w-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#2c3149]">Your Cart</h3>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      {cart.length} items
                    </span>
                  </div>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 max-h-[35vh] sm:max-h-[40vh] overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl"
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base text-[#2c3149]">
                        {item.name}
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                      )}
                      {item.licenseType && (
                        <div className="text-xs sm:text-sm text-gray-500">
                          License: {item.licenseType}
                        </div>
                      )}
                      <div className="text-xs sm:text-sm font-medium text-yellow-500">
                        ${item.price}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-red-500"
                    >
                      <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-medium text-sm sm:text-base text-[#2c3149]">Total:</span>
                    <span className="text-base sm:text-lg font-bold text-[#2c3149]">
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
