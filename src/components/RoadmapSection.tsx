import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Car, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Classroom Training",
    description: "20 hours of comprehensive theory lessons covering traffic rules, road safety, and defensive driving techniques.",
    color: "from-[#2c3149] to-[#1a1f33]",
    dotColor: "bg-[#2c3149]"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "In-Car Training",
    description: "10 hours of hands-on driving practice with certified instructors in dual-control vehicles.",
    color: "from-yellow-500 to-yellow-600",
    dotColor: "bg-yellow-500"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Road Test Prep",
    description: "Specialized preparation for your G2 road test, including mock tests and examiner insights.",
    color: "from-green-500 to-green-600",
    dotColor: "bg-green-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification",
    description: "Receive your BDE certification and insurance discount upon successful completion.",
    color: "from-red-500 to-red-600",
    dotColor: "bg-red-500"
  }
];

const RoadmapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Create main timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: stepsRef.current as Element,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        }
      });

      // Set initial states
      gsap.set(".roadmap-content", { opacity: 0, x: -30 });
      gsap.set(".connector-dot", { scale: 0, opacity: 0 });
      gsap.set(".icon-container", { scale: 0, opacity: 0 });
      gsap.set(".car-indicator", { opacity: 0, scale: 0 });

      // Calculate total steps for better timing
      const totalSteps = steps.length;
      const segmentLength = 1 / totalSteps;

      // Add line and car animation to main timeline
      mainTl.fromTo(".car-indicator", 
        { opacity: 0, scale: 0, top: "40px" },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );

      // Add line animation to main timeline with segments
      steps.forEach((_, index) => {
        const startProgress = index * segmentLength;
        const nextPosition = `${((index + 1)/totalSteps) * 100}%`;
        
        if (index === 0) {
          // First segment animation
          mainTl.to(".main-connector-line", { 
            height: `${(1/totalSteps) * 100}%`, 
            duration: segmentLength,
            ease: "none"
          })
          .to(".car-indicator", {
            top: nextPosition,
            duration: segmentLength,
            ease: "none"
          }, "<");
        } else {
          // Subsequent segment animations
          mainTl.to(".main-connector-line", {
            height: nextPosition,
            duration: segmentLength,
            ease: "none"
          })
          .to(".car-indicator", {
            top: nextPosition,
            duration: segmentLength,
            ease: "none"
          }, "<");
        }

        // Add step animations at the start of each segment
        const stepTl = gsap.timeline();

        // Dot animation
        stepTl.to(`.roadmap-step:nth-child(${index + 1}) .connector-dot`, {
          scale: 1,
          opacity: 1,
          duration: 0.05,
          ease: "back.out(2)"
        });

        // Icon animation
        stepTl.to(`.roadmap-step:nth-child(${index + 1}) .icon-container`, {
          scale: 1,
          opacity: 1,
          duration: 0.1,
          ease: "back.out(1.7)"
        }, ">-0.02");

        // Content animation
        stepTl.to(`.roadmap-step:nth-child(${index + 1}) .roadmap-content`, {
          opacity: 1,
          x: 0,
          duration: 0.15,
          ease: "power2.out"
        }, ">-0.05");

        // Add the step timeline at the start of its segment
        mainTl.add(stepTl, startProgress);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div ref={containerRef} className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div ref={titleRef} className="text-center mb-32">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
              Your Journey to <span className="text-yellow-500">Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Follow our proven roadmap to become a confident and skilled driver
            </p>
          </div>

          {/* Steps Section */}
          <div ref={stepsRef} className="relative max-w-4xl mx-auto">
            {/* Main Connector Line */}
            <div className="main-connector-line absolute left-[39px] top-[20px] h-[900px] w-[3px] bg-gradient-to-b from-[#2c3149] via-yellow-500 to-red-500" />
            
            {/* Car Indicator */}
            <div className="car-indicator absolute w-[45px] h-[45px] -translate-x-1/2 -translate-y-1/2 z-30" style={{ left: '40.5px' }}>
              <img 
                src="/icons/car.png" 
                alt="Car indicator" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative space-y-24"> {/* Increased spacing between steps */}
              {steps.map((step, index) => (
                <div key={index} className="roadmap-step relative">
                  <div className="group">
                    {/* Card Container */}
                    <div className="flex items-start gap-8 relative">
                      {/* Connector Dot */}
                      <div className={`connector-dot absolute left-[34.5px] top-[38px] w-[12px] h-[12px] rounded-full ${step.dotColor} z-20 shadow-lg
                        ring-4 ring-white`} />
                      
                      {/* Icon Container */}
                      <div className={`icon-container flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} 
                        shadow-lg flex items-center justify-center transform transition-all 
                        duration-500 group-hover:scale-110 group-hover:rotate-[5deg] relative z-10
                        before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 
                        before:transition-opacity before:duration-500 group-hover:before:opacity-100
                        after:absolute after:inset-[-2px] after:rounded-2xl after:bg-gradient-to-br after:${step.color} after:opacity-20 after:blur-md`}
                      >
                      </div>

                      {/* Content Card */}
                      <div className="roadmap-content flex-grow transform transition-all duration-500 group-hover:translate-x-2">
                        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] 
                          hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-all duration-500
                          border border-gray-100/50 relative overflow-hidden"
                        >
                          {/* Background Pattern */}
                          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]"></div>

                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -left-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center transform -rotate-12 shadow-lg`}>
                              <span className="text-white font-bold text-lg">{index + 1}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="relative">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-2xl font-bold text-[#2c3149]">
                                {step.title}
                              </h3>
                              <div className={`px-3 py-1 rounded-full text-sm font-medium bg-${step.dotColor}/10 text-${step.dotColor}`}>
                                Phase {index + 1}
                              </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {/* Feature List */}
                            <div className="space-y-2">
                              {index === 0 && (
                                <>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>20 hours of classroom training</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>MTO approved curriculum</span>
                                  </div>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>10 hours of in-car lessons</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>Flexible scheduling</span>
                                  </div>
                                </>
                              )}
                              {index === 2 && (
                                <>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>Mock road tests</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>Test route practice</span>
                                  </div>
                                </>
                              )}
                              {index === 3 && (
                                <>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>Insurance discount certificate</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-4 h-4 rounded-full ${step.dotColor} flex items-center justify-center`}>
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                    <span>Lifetime certification</span>
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Progress Indicator with decorative elements */}
                            <div className="absolute bottom-0 right-0 -mb-2 -mr-2">
                              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} opacity-10 relative overflow-hidden
                                before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]
                                after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  {index === 0 && (
                                    <svg className="w-6 h-6 text-current opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                  )}
                                  {index === 1 && (
                                    <svg className="w-6 h-6 text-current opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                  )}
                                  {index === 2 && (
                                    <svg className="w-6 h-6 text-current opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  )}
                                  {index === 3 && (
                                    <svg className="w-6 h-6 text-current opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>
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

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
};

export default RoadmapSection; 