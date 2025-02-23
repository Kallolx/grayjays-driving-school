import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
 
  Send, 
  MessageSquare,

  CheckCircle2,
  ArrowRight,
  Calendar,

  Building2
} from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      style: {
        background: '#2c3149',
        color: '#fff',
        borderRadius: '12px',
      },
      duration: 2000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "info@drivingschool.com",
      action: () => {
        navigator.clipboard.writeText('info@drivingschool.com');
        toast.success('Email copied to clipboard!');
      },
      description: "For general inquiries and support",
      gradient: "from-blue-500 to-blue-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "(123) 456-7890",
      action: () => window.location.href = 'tel:+1234567890',
      description: "Available Mon-Sat, 9am-6pm",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book a Visit",
      value: "Schedule an appointment",
      action: () => window.location.href = '/book',
      description: "Visit our training center",
      gradient: "from-purple-500 to-purple-400"
    }
  ];

  const location = {
    city: "Toronto Downtown",
    address: "123 Queen Street West",
    phone: "(123) 456-7890",
    hours: "Mon-Fri: 9AM-6PM"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] via-[#2c3149] to-[#1a1f33]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <MessageSquare className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">24/7 Support Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Get in <span className="text-yellow-500">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Have questions? We're here to help you start your journey to becoming a confident driver.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={method.action}
              className="group relative bg-gradient-to-br text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              style={{
                background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-90`} />
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.1]" />
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-white/90 font-medium">{method.value}</p>
                  <p className="text-sm text-white/80 mt-1">{method.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#2c3149]/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#2c3149]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c3149]">Send us a Message</h2>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2c3149] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2c3149] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2c3149] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2c3149] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2c3149] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#2c3149] text-white rounded-xl hover:bg-[#1a1f33] transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#2c3149]/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#2c3149]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2c3149]">Our Location</h2>
                <p className="text-gray-600">Visit our training center</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.1]" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{location.city}</h3>
                    <p className="text-white/80 text-lg mb-6">{location.address}</p>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/60 mb-1">Phone</p>
                        <p className="text-white font-medium text-lg">{location.phone}</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Hours</p>
                        <p className="text-white font-medium text-lg">{location.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="mt-8 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.1]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Have Questions?</h3>
                      <p className="text-white/90">Check our frequently asked questions</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.location.href = '/faq'}
                    className="px-4 py-2 bg-white text-yellow-500 rounded-lg hover:bg-white/90 transition-all flex items-center gap-2 font-medium"
                  >
                    View FAQ
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;