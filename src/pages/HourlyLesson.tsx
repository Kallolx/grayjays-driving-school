import { Link } from 'react-router-dom';
import { Clock, Shield, Users, CheckCircle2, Car, MapPin } from 'lucide-react';

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
    badge: "Basic",
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
    badge: "Popular",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-poppins">
      {/* Hero Section */}
      <div className="relative isolate pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Flexible Learning
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">
                Hourly Driving Lessons
              </h1>
              <p className="text-lg leading-8 text-zinc-600">
                Master your driving skills with our personalized hourly lessons. Choose the duration that fits your needs and learn at your own pace.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-driving.jpg" 
                alt="Student learning to drive" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 bg-white rounded-2xl shadow-sm p-8">
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8 text-blue-500" />
                <h4 className="text-lg font-semibold">Flexible Hours</h4>
                <p className="text-sm text-zinc-600 text-center">Choose 1 or 1.5 hour sessions</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-blue-500" />
                <h4 className="text-lg font-semibold">Money-Back Guarantee</h4>
                <p className="text-sm text-zinc-600 text-center">Full duration or refunded</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-8 w-8 text-blue-500" />
                <h4 className="text-lg font-semibold">Expert Instructors</h4>
                <p className="text-sm text-zinc-600 text-center">Certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSON_TYPES.map((type) => (
            <div 
              key={type.id} 
              className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200 hover:shadow-lg hover:ring-blue-500 transition-all duration-300"
            >
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img 
                  src={`/images/lesson-${type.id}.jpg`}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                {type.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-medium ${
                      type.recommended ? 'bg-blue-500 text-white' : 'bg-white/90 text-zinc-900'
                    }`}>
                      {type.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">{type.title}</h3>
                    <p className="text-sm text-zinc-600">{type.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-zinc-900">${type.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
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
      </div>

      {/* Features Grid with Images */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-zinc-50">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Lessons?</h2>
          <p className="mt-4 text-lg text-zinc-600">We provide comprehensive training with experienced instructors and flexible scheduling options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="relative h-48">
              <img 
                src="/images/feature-car.jpg" 
                alt="Modern driving school car" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Car className="absolute bottom-4 left-4 w-10 h-10 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Dual-Control Vehicles</h3>
              <p className="text-zinc-600">Learn in our modern, fully-equipped cars with safety features for peace of mind.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="relative h-48">
              <img 
                src="/images/feature-pickup.jpg" 
                alt="Door to door service" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <MapPin className="absolute bottom-4 left-4 w-10 h-10 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Door-to-Door Service</h3>
              <p className="text-zinc-600">Convenient pick-up and drop-off at your preferred location.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="relative h-48">
              <img 
                src="/images/feature-instructor.jpg" 
                alt="Professional instructor" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Users className="absolute bottom-4 left-4 w-10 h-10 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Personalized Training</h3>
              <p className="text-zinc-600">Customized lessons based on your skill level and learning pace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src="/images/faq-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-900/90"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">What's included in each lesson?</h3>
              <p className="text-zinc-600">Each lesson includes one-on-one instruction, pick-up & drop-off service, and a detailed progress report.</p>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">How do I schedule a lesson?</h3>
              <p className="text-zinc-600">Book online through our system. Choose your preferred time slot and we'll confirm within 24 hours.</p>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">What's your cancellation policy?</h3>
              <p className="text-zinc-600">24 hours notice required. Late cancellations or no-shows may incur a fee.</p>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Do you provide a car for lessons?</h3>
              <p className="text-zinc-600">Yes, we provide fully insured, dual-control vehicles maintained regularly for safety.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyLesson; 