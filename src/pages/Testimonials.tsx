import { motion } from 'framer-motion';
import { Star, BadgeCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student Driver",
    rating: 5,
    date: "November 2023",
    location: "Scarborough",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    comment: "The quality of instruction exceeded my expectations. Will definitely recommend them again.",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student Driver",
    rating: 5,
    date: "January 2024",
    location: "North York",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    comment: "Professional instructors who really care about your success. Highly recommended!",
    verified: true
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Student Driver",
    rating: 5,
    date: "December 2023",
    location: "Markham",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    comment: "Great communication throughout the process. The team is very professional and helpful.",
    verified: true
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student Driver",
    rating: 5,
    date: "January 2024",
    location: "Richmond Hill",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    comment: "Amazing experience! The structured learning approach helped me gain confidence.",
    verified: true
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <motion.div
    className="flex-shrink-0 w-[400px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-full rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-900/5">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-[#2c3149]/10"
        />
        <div>
          <div className="flex items-center gap-1">
            <h3 className="text-base font-semibold text-gray-900">{testimonial.name}</h3>
            {testimonial.verified && (
              <BadgeCheck className="h-5 w-5 text-[#2c3149]" />
            )}
          </div>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <blockquote className="mt-4 text-sm text-gray-600 line-clamp-4">
        "{testimonial.comment}"
      </blockquote>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>📍 {testimonial.location}</span>
          <span>🗓 {testimonial.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-[#2c3149]">Testimonials</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What Our Students Say
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Read authentic reviews from our valued students across Greater Toronto Area
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mt-16">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{
              x: [0, -2000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
          >
            {/* First set of cards */}
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-to-b from-[#2c3149]/5 to-transparent opacity-20" />
      </div>
    </section>
  );
};

export default Testimonials; 