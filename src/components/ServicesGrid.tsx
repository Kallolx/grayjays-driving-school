import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Certificate, 
  GraduationCap, 
  Users, 
  CurrencyCircleDollar,
  SteeringWheel,
  Trophy,
  CreditCard,
  ShieldCheck,
  X
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "MTO Approved",
    description:
      "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    icon: Certificate,
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
  },
  {
    title: "Customized Curriculum",
    description:
      "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  {
    title: "Certified Instructors",
    description:
      "Learn from highly trained professionals who undergo rigorous background checks.",
    icon: Users,
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees—clear and upfront costs for complete peace of mind.",
    icon: CurrencyCircleDollar,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  {
    title: "Defensive Driving Skills",
    description:
      "Master advanced techniques to stay safe and confident on the road.",
    icon: SteeringWheel,
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
  },
  {
    title: "99% Passing Rate",
    description:
      "Proven methods to help you pass your road test on the first attempt.",
    icon: Trophy,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  {
    title: "Flexible Payment",
    description:
      "Interest-free financing and affordable payment plans to suit your budget.",
    icon: CreditCard,
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
  },
  {
    title: "Moneyback Guarantee",
    description:
      "Your satisfaction is guaranteed—or your money back, no questions asked.",
    icon: ShieldCheck,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const renderCard = (service: typeof SERVICES[0]) => (
    <div className="service-card relative h-full">
      <div className={`h-[300px] lg:h-[350px] [perspective:1200px] group`}>
        <div
          className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer"
          style={{ transformOrigin: "center center" }}
        >
          {/* Front */}
          <div className="absolute inset-0 flex flex-col rounded-2xl bg-white p-4 lg:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm [backface-visibility:hidden] will-change-transform">
            <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03] rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 lg:px-6">
                <div className="relative transform transition-transform duration-300">
                  <div className={`absolute inset-0 ${service.color} rounded-full blur-2xl opacity-10 scale-150`} />
                  <div className="relative mx-auto flex items-center justify-center">
                    <service.icon 
                      className="w-20 h-20 lg:w-24 lg:h-24 drop-shadow-xl"
                      style={{ color: getIconColor(service.color) }}
                    />
                  </div>
                </div>
                <h3 className="text-xl lg:text-xl font-bold text-[#2c3149] mt-4 lg:mt-6">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className={`absolute inset-0 flex flex-col rounded-2xl bg-gradient-to-br from-[#2c3149] to-[#1a1f33] p-4 lg:p-8 text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] will-change-transform overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[#2c3149]/40"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.07]"></div>
            </div>

            <div className="relative flex flex-col h-full">
              <div className="mb-3 lg:mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>
                </div>
                <div className="w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center">
                  <img src="/icons/svg-image-1.svg" alt="GrayJays" className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
              </div>

              <p className="text-base lg:text-lg leading-relaxed text-white/90">{service.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileCard = (service: typeof SERVICES[0]) => (
    <div className="service-card relative">
      <div 
        className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50/80 transition-colors cursor-pointer"
        onClick={() => setSelectedService(service)}
      >
        {/* Icon */}
        <div className="mb-3">
          <service.icon weight="regular" className="w-12 h-12 text-black" />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-medium text-black text-center">
          {service.title}
        </h3>
      </div>
    </div>
  );

  const renderMobileModal = () => {
    if (!selectedService) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button 
            onClick={() => setSelectedService(null)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X weight="bold" className="w-6 h-6 text-gray-500" />
          </button>

          {/* Content */}
          <div className="flex flex-col items-center mb-6">
            <selectedService.icon weight="regular" className="w-16 h-16 text-black mb-4" />
            <h3 className="text-2xl font-bold text-black text-center mb-2">
              {selectedService.title}
            </h3>
            <div className="w-12 h-0.5 bg-gray-200 rounded-full"></div>
          </div>

          <p className="text-base text-gray-600 leading-relaxed">
            {selectedService.description}
          </p>
        </div>
      </div>
    );
  };

  const getIconColor = (gradientClass: string) => {
    if (gradientClass.includes("[#2c3149]")) return "#2c3149";
    if (gradientClass.includes("yellow")) return "#EAB308";
    return "#2c3149";
  };

  return (
    <div 
      ref={containerRef} 
      className="relative py-16 lg:py-24 w-full overflow-hidden"
    >
      <div className="text-center mb-12 lg:mb-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
          Whats makes <span className="text-yellow-500">GrayJays</span> different?
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {isMobile ? (
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((service, index) => (
              <div key={index}>{renderMobileCard(service)}</div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index}>{renderCard(service)}</div>
            ))}
          </div>
        )}
      </div>
      {renderMobileModal()}
    </div>
  );
};

export default ServicesGrid;
