import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, GraduationCap, ShieldCheck, Target } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "Beginner Driver's Course (BDE)",
    description: "Our MTO-approved BDE program combines 20 hours of classroom learning with 10 hours of in-car training. Perfect for new drivers seeking their G2 license.",
    features: [
      "20 hours classroom training",
      "10 hours in-car lessons",
      "Online learning materials",
      "Practice tests included",
      "Insurance discount certificate",
      "Flexible scheduling options"
    ],
    price: "$699.99",
    duration: "30 hours",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60",
    icon: Car,
    color: "[#2c3149]"
  },
  {
    id: 2,
    title: "Highway Driving Lessons",
    description: "Master highway driving with confidence. Learn merging, lane changing, and speed management with our experienced instructors.",
    features: [
      "Comprehensive highway training",
      "Speed management techniques",
      "Merging & lane changing",
      "Emergency maneuvers",
      "Night driving practice",
      "Traffic flow management"
    ],
    price: "$299.99",
    duration: "10 hours",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60",
    icon: Target,
    color: "[#2c3149]"
  },
  {
    id: 3,
    title: "G2 Test Package",
    description: "Prepare for your G2 road test with our comprehensive package. Includes test route practice and last-minute preparation.",
    features: [
      "Test route practice",
      "Mock road test",
      "Parallel parking mastery",
      "3-point turn practice",
      "Road rules review",
      "Test day vehicle rental"
    ],
    price: "$399.99",
    duration: "15 hours",
    image: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=800&auto=format&fit=crop&q=60",
    icon: GraduationCap,
    color: "[#2c3149]"
  },
  {
    id: 4,
    title: "G Test Preparation",
    description: "Advanced training for your full G license. Focus on highway driving, complex intersections, and defensive driving techniques.",
    features: [
      "Highway driving practice",
      "Advanced maneuvers",
      "Defensive driving tactics",
      "Complex intersections",
      "Mock G test",
      "Final assessment"
    ],
    price: "$449.99",
    duration: "12 hours",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=60",
    icon: ShieldCheck,
    color: "[#2c3149]"
  }
];

const PACKAGES = [
  {
    id: 1,
    name: "Basic Package",
    description: "Perfect for beginners starting their driving journey",
    price: "$699",
    priceHST: "$789.87",
    duration: "20 Hours",
    features: [
      "10 hours in-car training",
      "20 hours classroom lessons",
      "Online learning materials",
      "Practice tests included",
      "Insurance discount certificate",
      "Flexible scheduling"
    ],
    icon: Car,
    color: "[#2c3149]",
    popular: false,
    bgColor: "bg-[#2c3149]/5"
  },
  {
    id: 2,
    name: "Premium Package",
    description: "Most popular choice for comprehensive learning",
    price: "$899",
    priceHST: "$1,015.87",
    duration: "30 Hours",
    features: [
      "15 hours in-car training",
      "25 hours classroom lessons",
      "Online learning materials",
      "Unlimited practice tests",
      "Insurance discount certificate",
      "Priority scheduling",
      "Free G2 test car rental",
      "Route training included"
    ],
    icon: Target,
    color: "[#2c3149]",
    popular: true,
    bgColor: "bg-white"
  },
  {
    id: 3,
    name: "Ultimate Package",
    description: "Complete preparation for confident driving",
    price: "$1,199",
    priceHST: "$1,354.87",
    duration: "40 Hours",
    features: [
      "20 hours in-car training",
      "30 hours classroom lessons",
      "Premium online materials",
      "Unlimited practice tests",
      "Insurance discount certificate",
      "VIP scheduling priority",
      "Free G2 & G test car rental",
      "Route training included",
      "1 free refresher lesson"
    ],
    icon: ShieldCheck,
    color: "[#2c3149]",
    popular: false,
    bgColor: "bg-[#2c3149]/5"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-24">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 py-2 bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent">
              Driving Courses & Packages
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of driving courses designed to take you from beginner to confident driver. Each package is tailored to meet your specific needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-1 transition-all duration-300 hover:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149]/5 to-[#2c3149]/5 rounded-3xl transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 h-full transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`inline-flex p-3 rounded-xl bg-${service.color}-50 group-hover:scale-110 transform transition-all duration-300`}>
                            <service.icon className={`w-6 h-6 text-${service.color}-500`} />
                          </div>
                          <div className="text-sm font-medium text-gray-500">
                            {service.duration} total
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2c3149] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <div className="text-2xl font-bold text-[#2c3149]">
                        {service.price}
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features List - 2 Columns */}
                    <div className="mb-8">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2c3149]" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        to="/book"
                        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-[#2c3149] hover:text-white border-2 border-[#2c3149] hover:bg-[#2c3149] transition-all duration-300"
                      >
                        Book Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Decorative Icon */}
                    <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none">
                      <service.icon className="w-32 h-32 transform rotate-12 text-[#2c3149]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the perfect package that matches your learning goals and schedule. Each package is designed to provide you with the best learning experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative ${pkg.bgColor} rounded-2xl transition-all duration-300 hover:scale-[0.98] ${
                  pkg.popular 
                    ? 'ring-2 ring-[#2c3149] ring-offset-4 shadow-[0_8px_30px_-12px_rgba(44,49,73,0.4)]' 
                    : 'border border-gray-200 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2c3149] text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Package Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#2c3149] transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  {/* Price & Duration */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500">/ {pkg.duration}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Including HST: {pkg.priceHST}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2c3149]" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/book"
                    className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-[#2c3149] text-white hover:shadow-lg hover:shadow-[#2c3149]/25'
                        : 'text-[#2c3149] border-2 border-[#2c3149] hover:bg-[#2c3149] hover:text-white'
                    }`}
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;