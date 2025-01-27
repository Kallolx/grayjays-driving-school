import React, { useState } from 'react';


const LOCATION_PRICES = [
  { location: "Belleville", avgPrice: "$400", person1: "$280", person2: "$260", person3: "$250" },
  { location: "Bowmanville", avgPrice: "$450", person1: "$320", person2: "$300", person3: "$280" },
  { location: "Barrie", avgPrice: "$350", person1: "$190", person2: "$170", person3: "$160" },
  { location: "Barry's Bay", avgPrice: "$500", person1: "$380", person2: "$360", person3: "$350" },
  { location: "Burlington", avgPrice: "$300", person1: "$190", person2: "$170", person3: "$160" },
  { location: "Brampton", avgPrice: "$400", person1: "$260", person2: "$240", person3: "$230" },
  { location: "Guelph", avgPrice: "$350", person1: "$200", person2: "$180", person3: "$170" },
  { location: "Hamilton", avgPrice: "$250", person1: "$190", person2: "$170", person3: "$160" },
  { location: "Kitchener", avgPrice: "$400", person1: "$260", person2: "$240", person3: "$230" },
  { location: "Lindsay", avgPrice: "$350", person1: "$250", person2: "$230", person3: "$220" },
  { location: "London", avgPrice: "$400", person1: "$280", person2: "$260", person3: "$250" },
  { location: "Mississauga", avgPrice: "$300", person1: "$180", person2: "$160", person3: "$150" },
  { location: "Oakville", avgPrice: "$250", person1: "$180", person2: "$160", person3: "$150" },
  { location: "Oshawa", avgPrice: "$250", person1: "$160", person2: "$140", person3: "$130" },
  { location: "Toronto Downtown", avgPrice: "$200", person1: "$150", person2: "$130", person3: "$120" }
];

const AVAILABLE_CARS = [
  {
    id: 1,
    name: "Toyota Corolla 2023",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&auto=format&fit=crop&q=60",
    features: [
      "Automatic Transmission",
      "Backup Camera",
      "Bluetooth",
      "Dual Airbags",
      "Power Steering",
      "ABS Brakes"
    ],
    price: "150",
    available: true
  }
  // More cars can be added here later
];

interface LocationPriceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationPriceModal = ({ isOpen, onClose }: LocationPriceModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = LOCATION_PRICES.filter(location =>
    location.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-zinc-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Location Prices</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-100 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search location..."
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-zinc-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="overflow-auto flex-1 p-6">
          <div className="grid grid-cols-1 gap-4">
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-zinc-100 p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-zinc-900">{location.location}</h3>
                    <p className="text-zinc-500 text-sm">Average Instructor Price: {location.avgPrice}</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-sm text-zinc-500">1 Person</p>
                      <p className="font-medium text-zinc-900">{location.person1}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-zinc-500">2 Person</p>
                      <p className="font-medium text-zinc-900">{location.person2}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-zinc-500">3 Person</p>
                      <p className="font-medium text-zinc-900">{location.person3}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarRental = () => {
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    testDate: '',
    testTime: '',
    location: '',
    licenseNumber: '',
    licenseExpiry: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-slate-50 font-poppins pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">Car Rental for Road Test</h1>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Book our well-maintained vehicle for your road test. All our cars are regularly serviced and cleaned to ensure your comfort and success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setShowPriceModal(true)}
            className="px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors"
          >
            Check All Location Price
          </button>
          <button className="px-6 py-2 rounded-full bg-emerald-50 text-emerald-600 font-medium hover:bg-emerald-100 transition-colors">
            How It Works?
          </button>
          <button className="px-6 py-2 rounded-full bg-purple-50 text-purple-600 font-medium hover:bg-purple-100 transition-colors">
            Financing Available!
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Car Display Section */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <img 
                src={AVAILABLE_CARS[0].image} 
                alt={AVAILABLE_CARS[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{AVAILABLE_CARS[0].name}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {AVAILABLE_CARS[0].features.map((feature, index) => (
                <div key={index} className="flex items-center text-zinc-700">
                  <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">${AVAILABLE_CARS[0].price}</span>
              <span className="ml-2 text-zinc-500">/ test</span>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Book Your Road Test Car</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Test Date *</label>
                  <input
                    type="date"
                    name="testDate"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={formData.testDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Test Time *</label>
                  <input
                    type="time"
                    name="testTime"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={formData.testTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Location *</label>
                <select
                  name="location"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="">Select location</option>
                  <option value="toronto">Toronto</option>
                  <option value="mississauga">Mississauga</option>
                  <option value="brampton">Brampton</option>
                  <option value="vaughan">Vaughan</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">License Number *</label>
                  <input
                    type="text"
                    name="licenseNumber"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter license number"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">License Expiry *</label>
                  <input
                    type="date"
                    name="licenseExpiry"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={formData.licenseExpiry}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Well-Maintained Cars</h3>
            <p className="text-zinc-600">Our vehicles are regularly serviced and cleaned to ensure your comfort and safety during the test.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Flexible Timing</h3>
            <p className="text-zinc-600">Book your preferred time slot. We ensure punctual pickup and drop-off for your test.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Easy Payment</h3>
            <p className="text-zinc-600">Multiple payment options available. Book now and pay later with our financing options.</p>
          </div>
        </div>

        <LocationPriceModal 
          isOpen={showPriceModal} 
          onClose={() => setShowPriceModal(false)} 
        />
      </div>
    </div>
  );
};

export default CarRental; 