import { 
  ComputerTower, 
  SteeringWheel, 
  Certificate, 
  CarProfile,
  RoadHorizon,
  MapPin,
  Clock,
  CalendarCheck,
  Gauge
} from "@phosphor-icons/react";

const RoadmapSection = () => {
  const steps = [
    {
      number: 1,
      title: "Book Online",
      description: "Book driving lessons in 30 seconds. Our simple booking system makes scheduling your lessons quick and hassle-free.",
      features: [
        { icon: <Clock weight="fill" className="h-4 w-4" />, text: "Quick checkout", color: "text-yellow-500" },
        { icon: <MapPin weight="fill" className="h-4 w-4" />, text: "Choose pickup location", color: "text-yellow-500" }
      ]
    },
    {
      number: 2,
      title: "Get behind the wheel",
      description: "Learn with certified instructors who are experts in driver education. Our modern vehicles ensure a safe learning experience.",
      features: [
        { icon: <Certificate weight="fill" className="h-4 w-4" />, text: "Certified instructors", color: "text-yellow-500" },
        { icon: <CarProfile weight="fill" className="h-4 w-4" />, text: "Modern vehicles", color: "text-yellow-500" }
      ]
    },
    {
      number: 3,
      title: "Ace Your Road Test",
      description: "Feel confident and prepared for your road test. We'll guide you through every step to ensure you're ready to pass with flying colors.",
      features: [
        { icon: <Gauge weight="fill" className="h-4 w-4" />, text: "Test simulation", color: "text-yellow-500" },
        { icon: <CalendarCheck weight="fill" className="h-4 w-4" />, text: "Exam preparation", color: "text-yellow-500" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-yellow-500/10 text-[#2c3149] text-xs md:text-sm font-medium mb-2 md:mb-3">
            Simple 3-Step Process
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c3149]">
            Your Road to <span className="text-yellow-500">Driving Success</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            See why thousands of students are choosing us for their driver's education.
          </p>
        </div>

        {/* Mobile Steps */}
        <div className="block md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="p-4 border-2 border-gray-500 rounded-xl shadow-md">
              <div className="flex gap-4">
                {/* Left Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                    {step.number === 1 ? <ComputerTower weight="duotone" className="w-6 h-6 text-black" /> :
                     step.number === 2 ? <CarProfile weight="duotone" className="w-6 h-6 text-black" /> :
                     <RoadHorizon weight="duotone" className="w-6 h-6 text-black" />}
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2c3149] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`flex-shrink-0 ${feature.color}`}>
                          {feature.icon}
                        </div>
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white p-6 rounded-xl border-2 border-[#2c3149] shadow-md flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 mx-auto">
                {step.number === 1 ? <ComputerTower weight="duotone" className="w-8 h-8" /> :
                 step.number === 2 ? <CarProfile weight="duotone" className="w-8 h-8" /> :
                 <RoadHorizon weight="duotone" className="w-8 h-8" />}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-[#2c3149] mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {step.description}
              </p>
              
              {/* Features */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                {step.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <div className={`flex-shrink-0 ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 md:mt-16 text-center">
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 bg-[#2c3149] text-white font-semibold rounded-full hover:bg-[#1a1f33] transition-colors inline-flex items-center justify-center gap-2">
            <SteeringWheel weight="fill" className="w-5 h-5" />
            <span>Start Your Journey Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
