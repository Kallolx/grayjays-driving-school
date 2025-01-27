import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What documents do I need to start driving lessons?",
    answer: "You'll need a valid Ontario G1 license, proof of identity (photo ID), and if you're under 18, parental consent. For international students, you'll also need to provide your study permit."
  },
  {
    question: "How long does it take to complete the driving course?",
    answer: "Our BDE course includes 20 hours of classroom training and 10 hours of in-car instruction, typically completed within 4-8 weeks depending on your schedule and availability."
  },
  {
    question: "Do you provide a car for the road test?",
    answer: "Yes! We provide a well-maintained, driver-certified car for both your G2 and G road tests. The car rental is included in our Premium and Ultimate packages."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for lesson cancellations. Late cancellations or no-shows may result in a charge of 50% of the lesson fee to cover instructor time."
  },
  {
    question: "Do you offer weekend lessons?",
    answer: "Yes, we offer both weekend and weekday lessons to accommodate different schedules. Weekend slots are popular, so we recommend booking in advance."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    licenseType: 'G1',
    preferredSchedule: '',
    courseInterest: '',
    message: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    licenseType: '',
    preferredSchedule: '',
    courseInterest: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select your license type';
      isValid = false;
    }

    if (!formData.preferredSchedule) {
      newErrors.preferredSchedule = 'Please select your preferred schedule';
      isValid = false;
    }

    if (!formData.courseInterest) {
      newErrors.courseInterest = "Please select a course you're interested in";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide additional details';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Start Your Journey
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our driving courses? We're here to help you become a confident and safe driver. Reach out to us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                    placeholder="Enter your full name as it appears on your license"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

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
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                      placeholder="(647) 555-0123"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.licenseType ? 'border-red-500' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                    >
                      <option value="G1">G1 License</option>
                      <option value="G2">G2 License</option>
                      <option value="G">G License</option>
                      <option value="International">International License</option>
                    </select>
                    {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredSchedule" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Schedule
                    </label>
                    <select
                      id="preferredSchedule"
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.preferredSchedule ? 'border-red-500' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                    >
                      <option value="">Select schedule</option>
                      <option value="Weekday Morning">Weekday Morning</option>
                      <option value="Weekday Afternoon">Weekday Afternoon</option>
                      <option value="Weekday Evening">Weekday Evening</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                    {errors.preferredSchedule && <p className="mt-1 text-sm text-red-500">{errors.preferredSchedule}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.courseInterest ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                  >
                    <option value="">Select a course</option>
                    <option value="Basic Package">Basic Package - $699</option>
                    <option value="Premium Package">Premium Package - $899</option>
                    <option value="Ultimate Package">Ultimate Package - $1,199</option>
                    <option value="G2 Test Package">G2 Test Package</option>
                    <option value="G Test Package">G Test Package</option>
                  </select>
                  {errors.courseInterest && <p className="mt-1 text-sm text-red-500">{errors.courseInterest}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors`}
                    placeholder="Tell us about your driving experience and any specific requirements"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-3xl p-1 shadow-lg border border-gray-100 overflow-hidden">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9261774472837!2d-79.2317227!3d43.7758138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d11f752d5847%3A0x6e6d59e3d0d8c91e!2sMarkham%20Rd%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1647889483767!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-[1.4rem]"
                />
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {/* Location */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">1234 Markham Road, Unit 5</p>
                      <p className="text-gray-600">Scarborough, ON M1H 2Y3</p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Contact Info</h3>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <p className="text-gray-600">Email: contact@grayjaysdrivingschool.ca</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <Twitter className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our driving courses and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    expandedFAQ === index ? 'py-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 