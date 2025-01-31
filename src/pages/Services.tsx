import { useEffect } from 'react';
import { Car, GraduationCap, ShieldCheck, Target, Clock, Users } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "Beginner Driver's Course (BDE)",
    description: "Our MTO-approved BDE program combines 20 hours of classroom learning with 10 hours of in-car training. Perfect for new drivers seeking their G2 license.",
    features: [
      { title: "Classroom Training", desc: "20 hours comprehensive theory", icon: GraduationCap },
      { title: "In-car Lessons", desc: "10 hours practical training", icon: Car },
      { title: "Online Resources", desc: "Digital learning materials", icon: Users },
      { title: "Insurance Benefits", desc: "Discount certificate", icon: ShieldCheck },
      { title: "Practice Tests", desc: "Exam preparation", icon: Target },
      { title: "Flexible Schedule", desc: "Convenient timing", icon: Clock }
    ],
    price: "$699.99",
    duration: "30 hours",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60",
    isPopular: true
  },
  {
    id: 2,
    title: "G2 Test Package",
    description: "Comprehensive preparation for your G2 road test, including test route practice and last-minute preparation.",
    features: [
      { title: "Test Routes", desc: "Practice on actual test routes", icon: Car },
      { title: "Mock Tests", desc: "Full simulated road tests", icon: Target },
      { title: "Skills Review", desc: "Parallel & 3-point turns", icon: GraduationCap },
      { title: "Expert Tips", desc: "Common test mistakes to avoid", icon: Users },
      { title: "Road Rules", desc: "Traffic signs & regulations", icon: ShieldCheck },
      { title: "Pre-Test Check", desc: "Vehicle safety inspection", icon: Target }
    ],
    price: "$299.99",
    duration: "10 hours",
    image: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "G Test Package",
    description: "Advanced training for your full G license, focusing on highway driving, complex intersections, and advanced maneuvers required for the G test.",
    features: [
      { title: "Highway Driving", desc: "Lane changes & merging", icon: Car },
      { title: "Complex Routes", desc: "High-traffic scenarios", icon: Target },
      { title: "Advanced Skills", desc: "Emergency maneuvers", icon: GraduationCap },
      { title: "Speed Control", desc: "Highway speed management", icon: Target },
      { title: "Risk Assessment", desc: "Hazard anticipation", icon: ShieldCheck },
      { title: "Final Prep", desc: "Complete test preparation", icon: Users }
    ],
    price: "$399.99",
    duration: "12 hours",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=60"
  }
];

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <img 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
          {service.isPopular && (
            <span className="bg-white/90 text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}
          <span className="bg-white/90 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {service.duration}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold">{service.price}</div>
            <div className="text-xs text-gray-500">All-inclusive</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">{service.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <feature.icon className="w-2 h-2 text-gray-400" />
              </div>
              <div>
                <div className="text-sm font-medium">{feature.title}</div>
                <div className="text-xs text-gray-500">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#2c3149] text-white py-3 rounded-lg hover:bg-[#2c3149]/90 transition-colors font-medium">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;