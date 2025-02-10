import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "MTO Approved",
    description:
      "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    icon: "/icons/1.png",
    color: "bg-gradient-to-br from-blue-400 to-indigo-500",
    features: ["MTO Certified", "Professional Training", "Quality Assurance"],
  },
  {
    title: "Customized Curriculum",
    description:
      "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    icon: "/icons/2.png",
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
    features: ["Personalized Learning", "Updated Content", "Examiner Insights"],
  },
  {
    title: "Certified Instructors",
    description:
      "Learn from highly trained professionals who undergo rigorous background checks.",
    icon: "/icons/3.png",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
    features: ["Expert Instructors", "Background Verified", "Continuous Training"],
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees—clear and upfront costs for complete peace of mind.",
    icon: "/icons/4.png",
    color: "bg-gradient-to-br from-rose-400 to-red-500",
    features: ["Clear Pricing", "No Hidden Fees", "Flexible Payment"],
  },
  {
    title: "Defensive Driving Skills",
    description:
      "Master advanced techniques to stay safe and confident on the road.",
    icon: "/icons/5.png",
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
    features: ["Advanced Techniques", "Safety First", "Road Confidence"],
  },
  {
    title: "99% Passing Rate",
    description:
      "Proven methods to help you pass your road test on the first attempt.",
    icon: "/icons/6.png",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    features: ["High Success Rate", "Test Preparation", "Expert Guidance"],
  },
  {
    title: "Flexible Payment",
    description:
      "Interest-free financing and affordable payment plans to suit your budget.",
    icon: "/icons/7.png",
    color: "bg-gradient-to-br from-teal-400 to-emerald-500",
    features: ["Easy Payments", "0% Interest", "Flexible Plans"],
  },
  {
    title: "Money-Back Guarantee",
    description:
      "Your satisfaction is guaranteed—or your money back, no questions asked.",
    icon: "/icons/8.png",
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
    features: ["100% Guarantee", "No Questions Asked", "Full Refund"],
  },
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      gsap.set(cards, { opacity: 0, y: 30 });

      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-16 lg:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card relative">
              {/* Desktop Version - Flip Card */}
              <div className="hidden lg:block h-[350px] [perspective:1200px]">
                <div 
                  className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
                  style={{ transformOrigin: 'center center' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm [backface-visibility:hidden] will-change-transform">
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-xl font-bold text-white">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Card Pattern */}
                    <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="relative transform transition-transform duration-500 hover:scale-110 hover:-rotate-6">
                          <div className={`absolute inset-0 ${service.color} rounded-full blur-2xl opacity-10 scale-150`} />
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="relative h-24 w-24 object-contain drop-shadow-xl mx-auto"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-[#2c3149] mt-6 mb-4">
                          {service.title}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-md text-gray-400">
                          <span className="animate-pulse">Hover to learn more</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div 
                    className={`absolute inset-0 flex flex-col rounded-2xl ${service.color} p-6 text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] will-change-transform overflow-hidden`}
                    style={{ transformOrigin: 'center center' }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0">
                      {/* Gradient Overlay for better text readability */}
                      <div className="absolute inset-0 bg-[#2c3149]/40"></div>
                      {/* Top Right Corner Decoration */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                      {/* Bottom Left Corner Decoration */}
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                      {/* Subtle Grid Pattern */}
                      <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.07]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      {/* Header with Icon */}
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                          <div className="w-8 h-0.5 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <img
                            src={service.icon}
                            alt=""
                            className="w-6 h-6 invert opacity-90"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-white/90 mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mt-auto">
                        <div className="text-[11px] font-medium text-white/80 uppercase tracking-wider mb-3">
                          Key Features
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-white/90">
                              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2">
                                <CheckCircle2 className="w-3 h-3 text-white/90" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Number Badge - Small Version */}
                      <div className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center opacity-20">
                        <span className="text-sm font-bold">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Version - Single Column Expandable Card */}
              <div 
                className="lg:hidden"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className={`relative overflow-hidden rounded-xl transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md ${
                  expandedCard === index ? 'bg-gradient-to-br ' + service.color + ' border-transparent' : 'bg-white'
                }`}>
                  {/* Card Pattern */}
                  <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />

                  <div className="relative flex items-center gap-4 p-5">
                    <div className="relative">
                      <div className={`absolute inset-0 ${service.color} rounded-xl blur-lg opacity-20`} />
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`w-12 h-12 object-contain relative transition-transform duration-300 ${
                          expandedCard === index ? 'scale-110 brightness-0 invert' : ''
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-lg font-bold transition-colors ${
                          expandedCard === index ? 'text-white' : 'text-[#2c3149]'
                        }`}>
                          {service.title}
                        </h3>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          expandedCard === index ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                      <p className={`text-sm mt-0.5 transition-colors ${
                        expandedCard === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-all duration-300 ${
                      expandedCard === index ? 'rotate-180 text-white' : 'text-gray-400'
                    }`} />
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="relative p-5 pt-0 text-white">
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
