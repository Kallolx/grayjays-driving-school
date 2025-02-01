import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, ChevronRight, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2c3149] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#2c3149]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149] via-transparent to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoMTAwdjEwMEgxMDBWMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-20"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/icons/svg-image-1.svg" 
                alt="GrayJays Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">Grayjays</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in driver education. We're committed to creating safe and confident drivers through comprehensive training and support.
            </p>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="text-sm text-white">MTO Licensed Driving School</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Packages', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@kruzee.com" className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  info@kruzee.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Driving Street, Toronto, ON M1M 1M1
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for driving tips and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-500 text-sm backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kruzee. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all transform hover:-translate-y-1">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Terms Links */}
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-yellow-500 text-sm">
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