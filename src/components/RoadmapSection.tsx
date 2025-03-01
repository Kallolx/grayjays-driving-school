import { GraduationCap, CheckCircle2, Clock3, Route, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesShowcase = () => {
  const packages = [
    {
      title: "BDE Course Package",
      price: "$695",
      icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
      features: [
        "20 hrs in-class lessons",
        "10 hrs in-car training",
        "Online practice tests",
        "Course completion certificate"
      ],
      description: "Complete driver education program approved by the Ministry of Transportation of Ontario.",
      link: "/learn-to-drive/bde",
      highlight: true
    },
    {
      title: "Hourly Lessons",
      price: "From $60/hr",
      icon: <Clock3 className="w-6 h-6 text-[#2c3149]" />,
      features: [
        "Flexible scheduling",
        "Experienced instructors",
        "Pick-up & drop-off",
        "Personalized training"
      ],
      description: "Perfect for those who want to improve specific driving skills or need additional practice.",
      link: "/services/hourly-lessons"
    },
    {
      title: "Test Preparation",
      price: "$299",
      icon: <Route className="w-6 h-6 text-[#2c3149]" />,
      features: [
        "Road test routes practice",
        "Mock test simulation",
        "Score sheet review",
        "Last-minute preparation"
      ],
      description: "Comprehensive preparation package designed to help you pass your road test with confidence.",
      link: "/services/test-prep"
    }
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#2c3149 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 text-[#2c3149] text-sm font-medium">
            Our Services
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#2c3149]">
            Choose Your <span className="text-yellow-500">Learning Path</span>
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Select the package that best fits your needs. All our services include professional instruction and modern vehicles with safety features.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.title}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                pkg.highlight 
                  ? 'bg-[#2c3149] text-white' 
                  : 'bg-white text-[#2c3149] border-2 border-[#2c3149]'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-[#2c3149] text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                    pkg.highlight ? 'bg-white/10' : 'bg-yellow-500/10'
                  }`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  <div className={`text-sm ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                    Starting at
                  </div>
                  <div className="text-2xl font-bold mt-1">{pkg.price}</div>
                </div>
              </div>

              <p className={`text-sm ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {pkg.description}
              </p>

              <div className={`space-y-2 mb-6 flex-grow ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                      pkg.highlight ? 'text-yellow-500' : 'text-yellow-500'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={pkg.link}
                className={`group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full font-medium transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-yellow-500 text-[#2c3149] hover:bg-yellow-400'
                    : 'bg-[#2c3149] text-white hover:bg-[#2c3149]/90'
                }`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Secondary Content */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-[#2c3149] mb-3">Why Choose GraysJays?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With a 98% pass rate and over 2000+ successful students, our driving school combines professional instruction with modern vehicles to ensure you become a confident and skilled driver. Our MTO-approved curriculum and experienced instructors are committed to your success on the road.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;