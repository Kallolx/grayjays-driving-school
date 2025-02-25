import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "MTO Approved",
    description:
      "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    icon: "/icons/1.png",
    color: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    title: "Customized Curriculum",
    description:
      "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    icon: "/icons/2.png",
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
  },
  {
    title: "Certified Instructors",
    description:
      "Learn from highly trained professionals who undergo rigorous background checks.",
    icon: "/icons/3.png",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees—clear and upfront costs for complete peace of mind.",
    icon: "/icons/4.png",
    color: "bg-gradient-to-br from-rose-400 to-red-500",
  },
  {
    title: "Defensive Driving Skills",
    description:
      "Master advanced techniques to stay safe and confident on the road.",
    icon: "/icons/5.png",
    color: "bg-gradient-to-br from-[#2c3149] to-[#1a1f33]",
  },
  {
    title: "99% Passing Rate",
    description:
      "Proven methods to help you pass your road test on the first attempt.",
    icon: "/icons/6.png",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Flexible Payment",
    description:
      "Interest-free financing and affordable payment plans to suit your budget.",
    icon: "/icons/7.png",
    color: "bg-gradient-to-br from-teal-400 to-emerald-500",
  },
  {
    title: "Money-Back Guarantee",
    description:
      "Your satisfaction is guaranteed—or your money back, no questions asked.",
    icon: "/icons/8.png",
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
  },
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      <div className={`h-[300px] lg:h-[350px] [perspective:1200px] group ${isMobile ? 'bg-white/50 backdrop-blur-sm rounded-2xl p-3' : ''}`}>
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
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="relative h-20 w-20 lg:h-24 lg:w-24 object-contain drop-shadow-xl mx-auto"
                  />
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

  return (
    <div 
      ref={containerRef} 
      className={`relative py-16 lg:py-24 w-full overflow-hidden ${isMobile ? 'bg-gradient-to-b from-gray-50 to-white' : ''}`}
    >
      <div className={`text-center ${isMobile ? 'mb-12' : 'mb-32'}`}>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
          Whats makes <span className="text-yellow-500">GrayJays</span> different?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We are a team of experienced instructors who are dedicated to providing the best possible driving experience for our students.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {isMobile ? (
          <div className="relative [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-[#2c3149] [&_.swiper-pagination-bullet]:opacity-30 [&_.swiper-pagination-bullet-active]:opacity-100">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination'
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              className="pb-20"
            >
              {SERVICES.map((service, index) => (
                <SwiperSlide key={index} className="px-4">
                  {renderCard(service)}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3">
              <button className="swiper-button-prev !static !w-8 !h-8 !mt-0 !text-[#2c3149] after:!hidden rounded-full border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="swiper-button-next !static !w-8 !h-8 !mt-0 !text-[#2c3149] after:!hidden rounded-full border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index}>{renderCard(service)}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;
