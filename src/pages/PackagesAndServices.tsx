import { Link } from 'react-router-dom';
import { Check, Car, GraduationCap, Clock, Shield, Award, ChevronRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const PACKAGES = [
  {
    name: "Standard Package",
    withCar: {
      price: "$899.99",
      features: [
        "20 hours in-class lessons",
        "10 hours in-car training",
        "Car provided for lessons",
        "Car provided for test",
        "Insurance discount certificate",
        "Flexible scheduling"
      ]
    },
    withoutCar: {
      price: "$699.99",
      features: [
        "20 hours in-class lessons",
        "10 hours in-car training",
        "Student's own car",
        "Student's car for test",
        "Insurance discount certificate",
        "Flexible scheduling"
      ]
    },
    popular: false,
    description: "Complete MTO-approved course for new drivers",
    icon: GraduationCap
  },
  {
    name: "Premium Package",
    withCar: {
      price: "$1099.99",
      features: [
        "25 hours in-class lessons",
        "15 hours in-car training",
        "Car provided for lessons",
        "Car provided for test",
        "Priority scheduling",
        "1-on-1 instructor support"
      ]
    },
    withoutCar: {
      price: "$899.99",
      features: [
        "25 hours in-class lessons",
        "15 hours in-car training",
        "Student's own car",
        "Student's car for test",
        "Priority scheduling",
        "1-on-1 instructor support"
      ]
    },
    popular: true,
    description: "Enhanced learning experience with extra support",
    icon: Award
  },
  {
    name: "Express Package",
    withCar: {
      price: "$799.99",
      features: [
        "15 hours in-class lessons",
        "8 hours in-car training",
        "Car provided for lessons",
        "Car provided for test",
        "Accelerated learning",
        "Weekend classes"
      ]
    },
    withoutCar: {
      price: "$599.99",
      features: [
        "15 hours in-class lessons",
        "8 hours in-car training",
        "Student's own car",
        "Student's car for test",
        "Accelerated learning",
        "Weekend classes"
      ]
    },
    popular: false,
    description: "Fast-track program for quick learners",
    icon: Clock
  },
  {
    name: "Elite Package",
    withCar: {
      price: "$1299.99",
      features: [
        "30 hours in-class lessons",
        "20 hours in-car training",
        "Car provided for lessons",
        "Car provided for test",
        "VIP scheduling",
        "Lifetime support"
      ]
    },
    withoutCar: {
      price: "$999.99",
      features: [
        "30 hours in-class lessons",
        "20 hours in-car training",
        "Student's own car",
        "Student's car for test",
        "VIP scheduling",
        "Lifetime support"
      ]
    },
    popular: false,
    description: "Ultimate learning experience with maximum support",
    icon: Shield
  }
];


const PackageCard = ({ pkg }: { pkg: typeof PACKAGES[0] }) => {
  const [withCar, setWithCar] = useState(true);
  const currentPackage = withCar ? pkg.withCar : pkg.withoutCar;

  return (
    <div className="relative group">
      <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-2 border border-gray-100 hover:border-[#2c3149]/20">
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${pkg.popular ? 'bg-yellow-500' : 'bg-[#2c3149]'} transform transition-transform group-hover:scale-110 duration-300`}>
            <pkg.icon className="w-6 h-6 text-white" />
          </div>
          
          {/* Toggle with Icons */}
          <button
            onClick={() => setWithCar(!withCar)}
            className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#2c3149]/30 transition-all group/toggle bg-white"
          >
            {withCar ? (
              <>
                <Car className="w-4 h-4 text-[#2c3149]" />
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <div className="text-xs font-medium text-[#2c3149]">With Car</div>
              </>
            ) : (
              <>
                <Car className="w-4 h-4 text-gray-400" />
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <div className="text-xs font-medium text-gray-500">Without Car</div>
              </>
            )}
            <div className="absolute inset-0 bg-[#2c3149]/5 opacity-0 group-hover/toggle:opacity-100 rounded-lg transition-opacity" />
          </button>
        </div>

        {/* Popular Badge */}
        {pkg.popular && (
          <div className="absolute -top-3 -right-3 bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-lg">
            Most Popular
          </div>
        )}

        {/* Package Info */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#2c3149] mb-1">{pkg.name}</h3>
          <p className="text-xs text-gray-600 line-clamp-2">{pkg.description}</p>
        </div>

        {/* Price Section with Border */}
        <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold text-[#2c3149]">
              {currentPackage.price}
            </div>
            <div className="text-xs text-gray-500">
              {withCar ? 'with car' : 'without car'}
            </div>
          </div>
        </div>

        {/* Features List with Hover Effects */}
        <div className="space-y-2 mb-4 flex-grow">
          {currentPackage.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors group/feature"
            >
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#2c3149]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#2c3149]" />
              </div>
              <span className="text-xs text-gray-600 group-hover/feature:text-gray-900">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button with Border Effect */}
        <Link
          to="/contact"
          className={`flex items-center justify-center gap-1.5 px-4 py-2.5 ${
            pkg.popular ? 'bg-yellow-500' : 'bg-[#2c3149]'
          } text-white rounded-xl hover:opacity-90 transition-all text-sm font-medium group/button relative overflow-hidden`}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Get Started
            <ChevronRight className="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity" />
        </Link>
      </div>
    </div>
  );
};

const PackagesAndServices = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(30deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(150deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(30deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(150deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(60deg,#2c314908_25%,transparent_25.5%,transparent_75%,#2c314908_75%,#2c314908),linear-gradient(60deg,#2c314908_25%,transparent_25.5%,transparent_75%,#2c314908_75%,#2c314908)] [background-size:80px_140px] [background-position:0_0,0_0,40px_70px,40px_70px,0_0,40px_70px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
            Our Packages
          </h2>
          <p className="text-lg text-gray-600">
            Select the perfect learning package that suits your needs and goals
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-32">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Banner Section */}
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-[#2c3149] rounded-[2.5rem] transform -skew-y-2 scale-105"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#2c3149] to-[#1a1f33]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#2c3149]/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149] via-transparent to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" 
                alt="Background" 
                className="w-full h-full object-cover opacity-50"
              />
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoMTAwdjEwMEgxMDBWMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-left">
                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                      Ready to Master <br />
                      <span className="text-yellow-500">the Road?</span>
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                      Take the first step towards becoming a confident driver. Our experienced instructors are here to guide you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all text-lg font-medium group"
                      >
                        Book Now
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/about"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all text-lg font-medium backdrop-blur-sm"
                      >
                        Learn More
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-12">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">5000+</div>
                        <div className="text-sm text-gray-300">Students Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">98%</div>
                        <div className="text-sm text-gray-300">Pass Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">15+</div>
                        <div className="text-sm text-gray-300">Years Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Image */}
                  <div className="relative lg:block hidden">
                    <img 
                      src="https://images.pexels.com/photos/27650726/pexels-photo-27650726/free-photo-of-detran-londrina-pista-moto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Driving Instructor" 
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-yellow-500 rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-4">
                        <Award className="w-12 h-12 text-white" />
                        <div>
                          <div className="text-white font-bold">MTO Certified</div>
                          <div className="text-white/80 text-sm">Licensed School</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10">
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesAndServices; 