import { Shield, BookOpen, Award, DollarSign, ShieldCheck, Target, CreditCard, BadgeCheck } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "MTO Approved",
    description: "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    color: "from-[#2c3149] to-[#1a1f33]"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Customized Curriculum",
    description: "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Instructors",
    description: "Learn from highly trained professionals who undergo rigorous background checks.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Transparent Pricing",
    description: "No hidden fees—clear and upfront costs for complete peace of mind.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Defensive Driving Skills",
    description: "Master advanced techniques to stay safe and confident on the road.",
    color: "from-[#2c3149] to-[#1a1f33]"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "99% Passing Rate",
    description: "Proven methods to help you pass your road test on the first attempt.",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Flexible Payment Options",
    description: "Interest-free financing and affordable payment plans to suit your budget.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Money-Back Guarantee",
    description: "Your satisfaction is guaranteed—or your money back, no questions asked.",
    color: "from-red-500 to-red-600"
  }
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

      // Cards reveal animation
      const cards = gsap.utils.toArray(".service-card");
      
      // Initial state of cards
      gsap.set(cards, { 
        opacity: 0,
        y: 100
      });

      // Create scroll-triggered animations for cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 65%",
            scrub: 1,
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
          What Makes Us <span className="text-yellow-500">Different?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Experience excellence in driver education with our comprehensive services and dedicated approach.
        </p>
      </div>

      {/* Services Grid Section */}
      <div ref={servicesRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group [perspective:1000px]"
              onClick={() => toggleCard(index)}
            >
              <div 
                className={`relative transition-all duration-500 [transform-style:preserve-3d] w-full h-64 cursor-pointer ${
                  flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 
                    border border-gray-100 flex flex-col items-center justify-center"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl 
                      flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300
                      shadow-lg`}
                    >
                      <div className="text-white flex items-center justify-center w-12 h-12">
                        {React.cloneElement(service.icon, { className: "w-full h-full" })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3149] text-center">{service.title}</h3>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full">
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