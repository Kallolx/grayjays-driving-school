import { Link } from 'react-router-dom';
import { GraduationCap, Clock3, CarFront, CheckCircle2, ChevronRight, Car, MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import CallToAction from './CallToAction';

const BASE_PRICES = {
  bde: {
    withCar: 80,
    withoutCar: 60
  },
  hourlyLesson: {
    withCar: 50,
    withoutCar: 35
  },
  rentalCar: {
    withCar: 45,
    withoutCar: 0
  }
};

const Services = () => {
  const [bdeWithCar, setBdeWithCar] = useState(true);
  const [hourlyWithCar, setHourlyWithCar] = useState(true);
  const [rentalWithCar, setRentalWithCar] = useState(true);
  const [hours, setHours] = useState(10);
  const [hourlyHours, setHourlyHours] = useState(1);
  const [rentalDays, setRentalDays] = useState(1);

  const calculatePrice = (basePrice: number, hours: number) => {
    return basePrice * hours;
  };

  return (
    <div className="font-poppins">
      {/* Title Section */}
      <div className="relative py-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#2c3149] to-transparent opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Title with Visual Elements */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center shadow-lg -ml-4 transform rotate-6">
                <Car className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-4">
              Your Journey to <span className="text-yellow-500">Driving Excellence</span>
            </h1>
            <p className="text-base text-gray-600 mb-6">
              Choose from our comprehensive range of driving services tailored to your needs
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">MTO-Approved</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Flexible Times</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Best Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Hourly Lesson Card */}
          <div className="group transform hover:-translate-y-1 transition-all duration-500">
            <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <Clock3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                    Hourly Lessons
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Flexible hourly driving lessons tailored to your schedule.
                  </p>
                </div>

                {/* Toggle Switch */}
                <div className="mb-6">
                  <div className="flex items-center justify-between p-1.5 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setHourlyWithCar(true)}
                      className={`flex items-center gap-2 flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                        hourlyWithCar 
                          ? 'bg-[#2c3149] text-white' 
                          : 'text-gray-500'
                      }`}
                    >
                      <Car className={`w-4 h-4 ${hourlyWithCar ? 'text-white' : 'text-gray-400'}`} />
                      With Car
                    </button>
                    <button
                      onClick={() => setHourlyWithCar(false)}
                      className={`flex items-center gap-2 flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                        !hourlyWithCar 
                          ? 'bg-[#2c3149] text-white' 
                          : 'text-gray-500'
                      }`}
                    >
                      <Car className={`w-4 h-4 ${!hourlyWithCar ? 'text-white' : 'text-gray-400'}`} />
                      Without Car
                    </button>
                  </div>
                </div>

                {/* Hours Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
                    <button
                      onClick={() => setHourlyHours(Math.max(1, hourlyHours - 1))}
                      className="p-2 text-gray-500 hover:text-[#2c3149] transition-colors"
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-[#2c3149]">{hourlyHours} hours</span>
                    <button
                      onClick={() => setHourlyHours(Math.min(10, hourlyHours + 1))}
                      className="p-2 text-gray-500 hover:text-[#2c3149] transition-colors"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2c3149]">
                      ${calculatePrice(BASE_PRICES.hourlyLesson[hourlyWithCar ? 'withCar' : 'withoutCar'], hourlyHours)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Total for {hourlyHours} hours</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">Flexible scheduling options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">One-on-one instruction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">Customized learning experience</p>
                  </div>
                </div>

                <Link
                  to="/learn-to-drive/hourly"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* BDE Service Card - Main Focus */}
          <div className="group transform hover:-translate-y-1 transition-all duration-500">
            {/* Popular Badge - Above card */}
            <div className="flex justify-center mb-2">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1.5 rounded-xl text-sm font-medium shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Most Popular Choice
              </div>
            </div>

            <div className="h-full bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-[1.5rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
              
              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Beginners Driver Education (BDE)
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Complete MTO-approved beginner driver education program.
                  </p>
                </div>

                {/* Toggle Switch */}
                <div className="mb-6">
                  <div className="flex items-center justify-between p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                    <button
                      onClick={() => setBdeWithCar(true)}
                      className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        bdeWithCar 
                          ? 'bg-yellow-500 text-white' 
                          : 'text-gray-300'
                      }`}
                    >
                      <Car className={`w-4 h-4 ${bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                      With Car
                    </button>
                    <button
                      onClick={() => setBdeWithCar(false)}
                      className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        !bdeWithCar 
                          ? 'bg-yellow-500 text-white' 
                          : 'text-gray-300'
                      }`}
                    >
                      <Car className={`w-4 h-4 ${!bdeWithCar ? 'text-white' : 'text-gray-400'}`} />
                      Without Car
                    </button>
                  </div>
                </div>

                {/* Hours Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                    <button
                      onClick={() => setHours(Math.max(1, hours - 1))}
                      className="p-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-white">{hours} hours</span>
                    <button
                      onClick={() => setHours(Math.min(50, hours + 1))}
                      className="p-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">
                      ${calculatePrice(BASE_PRICES.bde[bdeWithCar ? 'withCar' : 'withoutCar'], hours)}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">Total for {hours} hours</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                    <p className="text-gray-300">40 hours of comprehensive training</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                    <p className="text-gray-300">10 hours in-car instruction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                    <p className="text-gray-300">Insurance discount certificate</p>
                  </div>
                </div>

                <Link
                  to="/learn-to-drive/bde"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all group-hover:shadow-lg"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rental Car Service Card */}
          <div className="group transform hover:-translate-y-1 transition-all duration-500">
            <div className="h-full bg-white rounded-[1.5rem] p-6 border-2 border-[#2c3149] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col relative overflow-hidden">
              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2c3149] to-[#1a1f33] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <CarFront className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3149] mb-2">
                    Rental Car Service
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Safe and reliable vehicles for your road test.
                  </p>
                </div>

                {/* Toggle Switch */}
                <div className="mb-6">
                  <div className="flex items-center justify-between p-1.5 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setRentalWithCar(true)}
                      className={`flex items-center gap-2 flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                        rentalWithCar 
                          ? 'bg-[#2c3149] text-white' 
                          : 'text-gray-500'
                      }`}
                    >
                      <Clock3 className={`w-4 h-4 ${rentalWithCar ? 'text-white' : 'text-gray-400'}`} />
                      Full Day
                    </button>
                    <button
                      onClick={() => setRentalWithCar(false)}
                      className={`flex items-center gap-2 flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                        !rentalWithCar 
                          ? 'bg-[#2c3149] text-white' 
                          : 'text-gray-500'
                      }`}
                    >
                      <Clock3 className={`w-4 h-4 ${!rentalWithCar ? 'text-white' : 'text-gray-400'}`} />
                      Half Day
                    </button>
                  </div>
                </div>

                {/* Days Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
                    <button
                      onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                      className="p-2 text-gray-500 hover:text-[#2c3149] transition-colors"
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-[#2c3149]">{rentalDays} days</span>
                    <button
                      onClick={() => setRentalDays(Math.min(7, rentalDays + 1))}
                      className="p-2 text-gray-500 hover:text-[#2c3149] transition-colors"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2c3149]">
                      ${calculatePrice(BASE_PRICES.rentalCar[rentalWithCar ? 'withCar' : 'withoutCar'], rentalDays)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Total for {rentalDays} {rentalWithCar ? 'days' : 'half days'}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">Well-maintained vehicles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">Competitive rental rates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2c3149] mt-0.5" />
                    <p className="text-gray-600">Insurance coverage included</p>
                  </div>
                </div>

                <Link
                  to="/rental-car"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#2c3149] text-white rounded-full hover:bg-[#2c3149]/90 transition-all"
                >
                  Rent Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <CallToAction />
    </div>
  );
};

export default Services;