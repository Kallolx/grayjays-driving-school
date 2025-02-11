import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  licenseType: string;
  preferredSchedule: string;
  courseInterest: string;
  message: string;
}

interface ContactFormErrors {
  fullName: string;
  email: string;
  phone: string;
  licenseType: string;
  preferredSchedule: string;
  courseInterest: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Driving School Ave', 'Toronto, ON M5V 2T6'],
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (647) 555-0123', '+1 (416) 555-0124'],
    color: 'text-green-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@drivingschool.com', 'support@drivingschool.com'],
    color: 'text-purple-600'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 6:00 PM'],
    color: 'text-orange-600'
  }
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    licenseType: '',
    preferredSchedule: '',
    courseInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    fullName: '',
    email: '',
    phone: '',
    licenseType: '',
    preferredSchedule: '',
    courseInterest: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      licenseType: '',
      preferredSchedule: '',
      courseInterest: '',
      message: ''
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: 'Sending your message...',
          success: 'Message sent successfully! Well get back to you soon.',
          error: 'Failed to send message. Please try again.',
        }
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
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
              <Mail className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">Contact Us</span>
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
              Have questions about our driving courses? We're here to help you become a confident and safe driver.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_INFO.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
            >
              <div className="inline-block p-3 rounded-xl bg-yellow-500/10">
                <item.icon className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="mt-4 font-semibold text-[#2c3149]">{item.title}</h3>
              <div className="mt-2 space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-[#2c3149] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-colors`}
                    placeholder="(647) 555-0123"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">
                    License Type
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Select license type</option>
                    <option value="G1">G1 License</option>
                    <option value="G2">G2 License</option>
                    <option value="G">G License</option>
                    <option value="International">International License</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-colors`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2c3149] text-white py-3 px-6 rounded-xl hover:bg-[#2c3149]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm p-2 border border-gray-100 h-[400px] overflow-hidden">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685163373!2d-79.3871!3d43.6426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzMzLjQiTiA3OcKwMjMnMTMuNiJX!5e0!3m2!1sen!2sca!4v1635787269123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-xl"
              />
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-[#2c3149] mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest updates, driving tips, and special offers.
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl bg-gray-50 text-gray-600 transition-colors ${social.color} hover:bg-yellow-500/10`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 