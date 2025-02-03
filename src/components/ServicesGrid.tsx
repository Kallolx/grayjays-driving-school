import { Shield, BookOpen, Award, DollarSign, ShieldCheck, Target, CreditCard, BadgeCheck } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { GraduationCap, Clock, Car } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "MTO Approved",
    description: "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    icon: <Shield className="w-full h-full" />,
    color: "from-[#2c3149] to-[#1a1f33]"
  },
  {
    title: "Customized Curriculum",
    description: "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    icon: <BookOpen className="w-full h-full" />,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Certified Instructors",
    description: "Learn from highly trained professionals who undergo rigorous background checks.",
    icon: <Award className="w-full h-full" />,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees—clear and upfront costs for complete peace of mind.",
    icon: <DollarSign className="w-full h-full" />,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Defensive Driving Skills",
    description: "Master advanced techniques to stay safe and confident on the road.",
    icon: <ShieldCheck className="w-full h-full" />,
    color: "from-[#2c3149] to-[#1a1f33]"
  },
  {
    title: "99% Passing Rate",
    description: "Proven methods to help you pass your road test on the first attempt.",
    icon: <Target className="w-full h-full" />,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Flexible Payment Options",
    description: "Interest-free financing and affordable payment plans to suit your budget.",
    icon: <CreditCard className="w-full h-full" />,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Money-Back Guarantee",
    description: "Your satisfaction is guaranteed—or your money back, no questions asked.",
    icon: <BadgeCheck className="w-full h-full" />,
    color: "from-red-500 to-red-600"
  }
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 1
        }
      });

      const cards = gsap.utils.toArray<HTMLElement>('.service-card');
      gsap.set(cards, { opacity: 0, y: 50 });

      // Create scroll-triggered animations for cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 bg-gray-50">
      {/* Title Section */}
      <div ref={titleRef} className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
          What Makes <span className="text-yellow-500">GrayJays </span>Different?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Experience excellence in driver education with our comprehensive services and dedicated approach.
        </p>
      </div>

      {/* Services Grid Section */}
      <div ref={servicesRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="service-card relative h-[300px] [perspective:1000px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  hoveredIndex === index ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 
                    border border-gray-100 flex flex-col items-center justify-center"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl 
                      flex items-center justify-center mb-6 transform transition-all duration-300
                      shadow-lg`}
                    >
                      <div className="text-white flex items-center justify-center w-12 h-12">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] text-center">{service.title}</h3>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className={`h-full bg-gradient-to-br ${service.color} rounded-2xl p-6 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-center`}
                  >
                    <p className="text-white text-lg leading-relaxed">
                      {service.description}
                    </p>
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