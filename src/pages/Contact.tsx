import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone,
  MapPin,

  MessageSquare,
  CheckCircle2,
  ArrowRight,
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

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
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
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Now",
      value: "(123) 456-7890",
      action: () => window.location.href = 'tel:+1234567890',
      description: "Available Mon-Sat, 9am-6pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "info@drivingschool.com",
      action: () => {
        navigator.clipboard.writeText('info@drivingschool.com');
        toast.success('Email copied to clipboard!', {
          style: {
            background: '#2c3149',
            color: '#fff',
            borderRadius: '12px',
          },
        });
      },
      description: "For general inquiries and support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "123 Queen Street West",
      action: () => window.open('https://maps.google.com'),
      description: "Toronto Downtown"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-24 pb-32 sm:pb-40 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1800&auto=format&fit=crop"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[1] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3149] via-[#2c3149]/90 to-[#2c3149]/50" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#1a1f33]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <MessageSquare className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Get in Touch with Us</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="text-yellow-500">Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Have questions about our driving lessons? We're here to help you become a confident driver.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={method.action}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-400 hover:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center">
                  {React.cloneElement(method.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-[#2c3149]" })}
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[#2c3149] mb-0.5">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{method.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{method.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#2c3149] group-hover:translate-x-1 transition-transform ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-400">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3149] mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-[#2c3149] text-white rounded-lg hover:bg-[#1a1f33] hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span className="font-medium">Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="bg-gradient-to-b from-[#2c3149] to-[#1a1f33] rounded-xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.05] mix-blend-overlay" />
              
              <div className="relative space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-300">123 Queen Street West, Toronto Downtown</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Contact Info</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@drivingschool.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-300">
                    For urgent inquiries outside business hours, please leave a message and we'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl w-full max-w-md overflow-hidden"
            >
              <div className="bg-[#2c3149] p-6 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
              
              <div className="p-6">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3 bg-[#2c3149] text-white rounded-lg hover:bg-[#1a1f33] transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;