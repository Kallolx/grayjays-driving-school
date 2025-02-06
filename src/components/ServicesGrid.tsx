import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Shield, Clock, Hand, Signal, Wifi, Battery } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "MTO Approved",
    description:
      "Certified by the Ministry of Transportation, ensuring top-quality driver training.",
    icon: "/icons/1.png",
    bannerImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
    color: "from-blue-400/90 to-indigo-500/90",
    mobileColor: "from-blue-100 to-indigo-100",
    features: ["MTO Certified", "Professional Training", "Quality Assurance"],
  },
  {
    title: "Customized Curriculum",
    description:
      "Only at GrayJays! Our updated syllabus focuses on exactly what examiners look for.",
    icon: "/icons/2.png",
    bannerImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    color: "from-amber-400/90 to-yellow-500/90",
    mobileColor: "from-amber-100 to-yellow-100",
    features: ["Personalized Learning", "Updated Content", "Examiner Insights"],
  },
  {
    title: "Certified Instructors",
    description:
      "Learn from highly trained professionals who undergo rigorous background checks.",
    icon: "/icons/3.png",
    bannerImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    color: "from-green-500 to-green-600",
    mobileColor: "from-green-100 to-emerald-100",
    features: [
      "Expert Instructors",
      "Background Verified",
      "Continuous Training",
    ],
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees—clear and upfront costs for complete peace of mind.",
    icon: "/icons/4.png",
    bannerImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    color: "from-red-500 to-red-600",
    mobileColor: "from-rose-100 to-red-100",
    features: ["Clear Pricing", "No Hidden Fees", "Flexible Payment"],
  },
  {
    title: "Defensive Driving Skills",
    description:
      "Master advanced techniques to stay safe and confident on the road.",
    icon: "/icons/5.png",
    bannerImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80",
    color: "from-[#2c3149] to-[#1a1f33]",
    mobileColor: "from-slate-100 to-gray-100",
    features: ["Advanced Techniques", "Safety First", "Road Confidence"],
  },
  {
    title: "99% Passing Rate",
    description:
      "Proven methods to help you pass your road test on the first attempt.",
    icon: "/icons/6.png",
    bannerImage:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80",
    color: "from-yellow-500 to-yellow-600",
    mobileColor: "from-yellow-100 to-amber-100",
    features: ["High Success Rate", "Test Preparation", "Expert Guidance"],
  },
  {
    title: "Flexible Payment Options",
    description:
      "Interest-free financing and affordable payment plans to suit your budget.",
    icon: "/icons/7.png",
    bannerImage:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80",
    color: "from-green-500 to-green-600",
    mobileColor: "from-emerald-100 to-green-100",
    features: ["Easy Payments", "0% Interest", "Flexible Plans"],
  },
  {
    title: "Money-Back Guarantee",
    description:
      "Your satisfaction is guaranteed—or your money back, no questions asked.",
    icon: "/icons/8.png",
    bannerImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    color: "from-red-500 to-red-600",
    mobileColor: "from-red-100 to-rose-100",
    features: ["100% Guarantee", "No Questions Asked", "Full Refund"],
  },
];

const Card = ({
  service,
  isFlipped,
  onFlip,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
}) => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[450px] [perspective:1000px] cursor-pointer group"
      onClick={onFlip}
    >
      <div
        className={`w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="relative h-full rounded-[28px] overflow-hidden bg-blue-500 shadow-xl">
            {/* iPhone Status Bar */}
            <div className="absolute top-0 inset-x-0 h-5 bg-transparent z-20 flex items-center justify-between px-5 pt-1">
              <div className="text-[10px] font-medium text-white">9:41</div>
              <div className="flex items-center gap-1">
                <Signal className="w-3 h-3 text-white" />
                <Wifi className="w-3 h-3 text-white" />
                <Battery className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Main Content */}
            <div className="h-full pt-12 pb-8 flex flex-col items-center">
              {/* Tap Instruction */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <Hand className="w-4 h-4 text-white/80 animate-bounce" />
                <span className="text-xs text-white/80">Tap</span>
              </div>

              {/* Icon Container */}
              <div className="flex-1 flex items-center justify-center max-h-[200px]">
                <div className="w-32 h-32 sm:w-40 sm:h-40 transform transition-all duration-300 group-hover:scale-105 -rotate-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="px-6">
                <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card - keep the same but adjust padding */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative h-full rounded-[28px] overflow-hidden bg-blue-500 shadow-xl">
            {/* iPhone Status Bar */}
            <div className="absolute top-0 inset-x-0 h-5 bg-transparent z-20 flex items-center justify-between px-5 pt-1">
              <div className="text-[10px] font-medium text-white">9:41</div>
              <div className="flex items-center gap-1">
                <Signal className="w-3 h-3 text-white" />
                <Wifi className="w-3 h-3 text-white" />
                <Battery className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Main Content */}
            <div className="h-full pt-12 pb-8 flex flex-col">
              {/* Logo */}
              <div className="px-8">
                <img
                  src="/icons/svg-image-1.svg"
                  alt="GrayJays"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-8 py-8">
                <div className="space-y-6">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with Icons */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/50" />
                        <span className="text-xs sm:text-sm text-white/90">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back Button */}
                <div className="absolute bottom-8 left-8 flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <span className="text-xs text-white/80">
                    Tap to flip back
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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
          scrub: 1,
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
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
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8">
            <div ref={titleRef}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3149] mb-6">
                What Makes <span className="text-yellow-500">GrayJays </span>
                Different?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience excellence in driver education with our comprehensive
                services and dedicated approach.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2c3149] mb-2">
                    MTO Certified
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ministry approved curriculum and certified instructors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2c3149] mb-2">
                    Flexible Schedule
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Book lessons at your convenience, 7 days a week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Swiper */}
          <div className="relative">
            <div className="pt-4 pb-16">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="h-[400px] sm:h-[450px] w-[240px] sm:w-[280px] mx-auto"
              >
                {SERVICES.map((service, index) => (
                  <SwiperSlide key={index} className="!bg-transparent">
                    <Card
                      service={service}
                      index={index}
                      isFlipped={flippedIndex === index}
                      onFlip={() =>
                        setFlippedIndex(flippedIndex === index ? null : index)
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swipe Instruction - moved outside card with more spacing */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap">
                <img
                  src="/icons/swipe.gif"
                  alt="Swipe GIF"
                  className="w-4 h-4"
                />{" "}
                {/* Adjust width and height as needed */}
                <span className="text-xs text-gray-500">
                  Swipe to explore services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
