import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronDown, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const QUICK_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book Now', href: '/book' }
];

const SERVICES = [
  { name: 'Beginner Driving Course', href: '/services#beginner' },
  { name: 'G2 Test Package', href: '/services#g2' },
  { name: 'G Test Package', href: '/services#g' },
  { name: 'Highway Lessons', href: '/services#highway' }
];

const FAQ_ITEMS = [
  {
    question: "What documents do I need?",
    answer: "You'll need a valid Ontario G1 license and photo ID. International students need a study permit."
  },
  {
    question: "How long is the course?",
    answer: "Our BDE course includes 20 hours classroom and 10 hours in-car training, typically 4-8 weeks."
  },
  {
    question: "Do you provide test cars?",
    answer: "Yes! We provide certified cars for both G2 and G tests in our Premium and Ultimate packages."
  }
];

const Footer = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <footer className="bg-gray-50 font-poppins">
      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#2c3149] to-[#2c3149] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help you start your journey to becoming a confident driver.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map & Contact Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-3xl p-1 shadow-lg border border-gray-100 overflow-hidden">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9261774472837!2d-79.2317227!3d43.7758138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d11f752d5847%3A0x6e6d59e3d0d8c91e!2sMarkham%20Rd%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1647889483767!5m2!1sen!2sca"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-[1.4rem]"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-5 transition-all duration-300 ${
                      expandedFAQ === index ? 'py-3' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center text-[#2c3149] hover:text-[#2c3149]/80 font-medium mt-4"
              >
                View all FAQs
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/icons/svg-image-1.svg" alt="Logo" className="w-6 h-6" />
                <span className="text-xl font-bold text-gray-900">GraysJays</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Your trusted partner in driving education. MTO-approved driving school committed to creating safe and confident drivers.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2c3149]/10 hover:bg-[#2c3149]/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-[#2c3149]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2c3149]/10 hover:bg-[#2c3149]/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#2c3149]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2c3149]/10 hover:bg-[#2c3149]/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-[#2c3149]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2c3149]/10 hover:bg-[#2c3149]/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#2c3149]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-[#2c3149] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-600 hover:text-[#2c3149] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2c3149] mt-0.5" />
                  <span className="text-gray-600">
                    1234 Markham Road, Unit 5<br />
                    Scarborough, ON M1H 2Y3
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2c3149]" />
                  <span className="text-gray-600">(647)-537-7006</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2c3149]" />
                  <span className="text-gray-600">contact@grayjaysdrivingschool.ca</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} GraysJays. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-600 hover:text-[#2c3149] text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#2c3149] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 