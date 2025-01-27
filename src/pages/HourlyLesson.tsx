import { Link } from 'react-router-dom';

const LESSON_TYPES = [
  {
    id: 1,
    title: "G2 License",
    duration: "1 Hour",
    price: "50",
    features: [
      "One-on-one instruction",
      "Flexible scheduling",
      "Pick-up & drop-off service",
      "Progress tracking",
      "60-minute guarantee"
    ],
    color: "from-rose-500 to-pink-600",
    recommended: false
  },
  {
    id: 2,
    title: "G2 License",
    duration: "1.5 Hours",
    price: "75",
    features: [
      "Extended practice time",
      "One-on-one instruction",
      "Flexible scheduling",
      "Pick-up & drop-off service",
      "90-minute guarantee",
      "More in-depth training"
    ],
    color: "from-blue-500 to-indigo-600",
    recommended: true
  },
  {
    id: 3,
    title: "G License",
    duration: "1 Hour",
    price: "60",
    features: [
      "Highway driving focus",
      "One-on-one instruction",
      "Flexible scheduling",
      "Pick-up & drop-off service",
      "60-minute guarantee"
    ],
    color: "from-purple-500 to-purple-600",
    recommended: false
  },
  {
    id: 4,
    title: "G License",
    duration: "1.5 Hours",
    price: "90",
    features: [
      "Extended highway practice",
      "One-on-one instruction",
      "Flexible scheduling",
      "Pick-up & drop-off service",
      "90-minute guarantee",
      "Comprehensive training"
    ],
    color: "from-emerald-500 to-teal-600",
    recommended: false
  }
];

const HourlyLesson = () => {
  return (
    <div className="bg-slate-50 font-poppins pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">Hourly Driving Lessons</h1>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Our hourly driving lessons offer flexibility, personalized attention, and cost-effectiveness. 
            Plus, we guarantee a full 60-minute class—if you don't receive it, you get your money back!
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Flexible Scheduling</h3>
            <p className="text-zinc-600">Choose lesson times that work best for your schedule.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Money-Back Guarantee</h3>
            <p className="text-zinc-600">Full duration guaranteed or your money back.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Expert Instructors</h3>
            <p className="text-zinc-600">Learn from certified professional instructors.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Progress Tracking</h3>
            <p className="text-zinc-600">Monitor your improvement with detailed feedback.</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSON_TYPES.map((type) => (
            <div 
              key={type.id} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                type.recommended ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {type.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Recommended
                </div>
              )}
              <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{type.title}</h3>
                    <p className="text-white/90">{type.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold">${type.price}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-zinc-700">
                      <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/book?type=${type.title.toLowerCase()}&duration=${type.duration}`}
                  className="block w-full py-3 px-4 rounded-xl bg-zinc-900 text-white text-center font-medium hover:bg-zinc-800 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3">What's included in each lesson?</h3>
              <p className="text-zinc-600">Each lesson includes one-on-one instruction, pick-up & drop-off service, and a detailed progress report. We focus on building your confidence and skills.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3">How do I schedule a lesson?</h3>
              <p className="text-zinc-600">You can book your lesson online through our booking system. Choose your preferred time slot and we'll confirm your appointment within 24 hours.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3">What's your cancellation policy?</h3>
              <p className="text-zinc-600">We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3">Do you provide a car for lessons?</h3>
              <p className="text-zinc-600">Yes, we provide a fully insured, dual-control vehicle for all lessons. Our cars are regularly maintained for your safety.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyLesson; 