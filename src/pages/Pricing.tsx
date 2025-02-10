import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Check, Car, Clock, AlertCircle } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  price: string;
  features: string[];
  color: string;
  link: string;
  popular?: boolean;
}

const PACKAGES = {
  withoutCar: [
    {
      id: 1,
      name: "Standard Package",
      price: "649",
      features: [
        "10 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-rose-500 to-pink-600",
      link: "/pricing/standard"
    },
    {
      id: 2,
      name: "Premium Package",
      price: "899",
      popular: true,
      features: [
        "15 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-blue-500 to-indigo-600",
      link: "/pricing/premium"
    },
    {
      id: 3,
      name: "Premium Plus Package",
      price: "1149",
      features: [
        "20 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-purple-500 to-purple-600",
      link: "/pricing/premium-plus"
    },
    {
      id: 4,
      name: "Ultimate Package",
      price: "1649",
      features: [
        "30 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "15 Hour Online Home Link Activities"
      ],
      color: "from-emerald-500 to-teal-600",
      link: "/pricing/ultimate"
    }
  ],
  withCar: [
    {
      id: 5,
      name: "Standard Package",
      price: "799",
      features: [
        "10 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-rose-500 to-pink-600",
      link: "/pricing/standard-with-car"
    },
    {
      id: 6,
      name: "Premium Package",
      price: "1049",
      popular: true,
      features: [
        "15 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-blue-500 to-indigo-600",
      link: "/pricing/premium-with-car"
    },
    {
      id: 7,
      name: "Premium Plus Package",
      price: "1299",
      features: [
        "20 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-purple-500 to-purple-600",
      link: "/pricing/premium-plus-with-car"
    },
    {
      id: 8,
      name: "Ultimate Package",
      price: "1799",
      features: [
        "30 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "15 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-emerald-500 to-teal-600",
      link: "/pricing/ultimate-with-car"
    }
  ]
};

const PriceCard = ({ pkg, withCar = false }: { pkg: Package; withCar?: boolean }) => (
  <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
    {pkg.popular && (
      <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
        Popular
      </div>
    )}
    {withCar && (
      <div className="absolute top-0 left-0 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-br-lg flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        Car Included
      </div>
    )}
    <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
      <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">${pkg.price}</span>
        <span className="ml-1 text-white/90">+ HST</span>
      </div>
    </div>
    <div className="p-6">
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center text-zinc-700">
            <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={pkg.link}
        className="block w-full py-3 px-4 rounded-xl bg-zinc-900 text-white text-center font-medium hover:bg-zinc-800 transition-colors"
      >
        Get Started
      </Link>
      <p className="text-center text-zinc-500 text-sm mt-4">
        Financing Available!
      </p>
    </div>
  </div>
);

const Pricing = () => {
  const [includeCar, setIncludeCar] = useState(true);
  const [isHourly, setIsHourly] = useState(false);

  const calculateBDEPrice = () => {
    let basePrice = 595;
    if (!includeCar) basePrice -= 100;
    if (isHourly) basePrice = 60;
    return basePrice;
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
            Simple, Transparent <span className="text-yellow-500">Pricing</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the package that best fits your needs. All prices include taxes and fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* BDE Course Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-[#2c3149]">BDE Course</h3>
                  <p className="text-gray-600 mt-2">Complete Driver Education</p>
                </div>
                <span className="bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>

              {/* Price Toggle Switches */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Include Car for Test
                  </span>
                  <button
                    onClick={() => setIncludeCar(!includeCar)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      includeCar ? 'bg-yellow-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        includeCar ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Hourly Rate
                  </span>
                  <button
                    onClick={() => setIsHourly(!isHourly)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      isHourly ? 'bg-yellow-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        isHourly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-[#2c3149]">${calculateBDEPrice()}</span>
                  <span className="text-gray-500 ml-2">{isHourly ? '/hour' : ''}</span>
                </div>
                {!isHourly && (
                  <p className="text-sm text-gray-500 mt-2">
                    or 3 payments of ${Math.round(calculateBDEPrice() / 3)}/month
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>20 hours in-class lessons</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>10 hours in-car training</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Insurance discount certificate</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Free pickup & drop-off</span>
                </li>
              </ul>

              <button className="w-full py-4 bg-yellow-500 text-gray-900 rounded-xl hover:bg-yellow-400 transition-colors duration-300 font-semibold">
                Get Started
              </button>
            </div>
          </div>

          {/* Hourly Lessons Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2c3149]">Hourly Lessons</h3>
                <p className="text-gray-600 mt-2">Flexible Training Sessions</p>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-[#2c3149]">$60</span>
                  <span className="text-gray-500 ml-2">/hour</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Experienced instructors</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Free pickup & drop-off</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Dual-brake vehicle</span>
                </li>
              </ul>

              <button className="w-full py-4 bg-gray-100 text-[#2c3149] rounded-xl hover:bg-gray-200 transition-colors duration-300 font-semibold">
                Book Now
              </button>
            </div>
          </div>

          {/* Car Rental Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2c3149]">Car Rental</h3>
                <p className="text-gray-600 mt-2">For Road Test & Practice</p>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-[#2c3149]">$120</span>
                  <span className="text-gray-500 ml-2">/test</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Includes 1-hour warm-up</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Well-maintained vehicle</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Fully insured</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Pre-test warm-up</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-yellow-500" />
                  <span>Pick-up from test center</span>
                </li>
              </ul>

              <button className="w-full py-4 bg-gray-100 text-[#2c3149] rounded-xl hover:bg-gray-200 transition-colors duration-300 font-semibold">
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 text-gray-600 bg-yellow-50 p-4 rounded-xl">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              All prices include applicable taxes. BDE Course payment can be split into 3 monthly installments. 
              Cancellations require 24-hour notice to avoid charges. Special rates available for group bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 