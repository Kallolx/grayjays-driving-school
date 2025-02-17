import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, ChevronRight, Award, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c3149] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/icons/svg-image-1.svg" alt="GrayJays" className="w-12 h-12" />
              <span className="text-xl font-bold">GrayJays</span>
            </Link>
            <p className="text-sm text-gray-300">Opportunity Starts Here</p>
            <div className="text-sm text-gray-300">
              <p>Toronto Municipal Licensing & Standards</p>
              <p>Beginner Driver Education Course Provider License</p>
            </div>
            <Link 
              to="/find-us" 
              className="text-sm text-yellow-500 hover:text-yellow-400"
            >
              Find Us at Government-Approved Driving Schools
            </Link>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Who We Are</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/affiliates" className="text-gray-300 hover:text-white transition-colors">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-white transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-semibold mb-4">What We Do</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/license" className="text-gray-300 hover:text-white transition-colors">
                  How To Get A License
                </Link>
              </li>
              <li>
                <Link to="/services/hourly-lessons" className="text-gray-300 hover:text-white transition-colors">
                  Hourly Lesson Packages
                </Link>
              </li>
              <li>
                <Link to="/services/special-packages" className="text-gray-300 hover:text-white transition-colors">
                  Specialty Packages
                </Link>
              </li>
              <li>
                <Link to="/services/car-rental" className="text-gray-300 hover:text-white transition-colors">
                  Rental Car For Road Test
                </Link>
              </li>
              <li>
                <Link to="/services/gps-routes" className="text-gray-300 hover:text-white transition-colors">
                  GPS Routes
                </Link>
              </li>
              <li>
                <Link to="/services/score-sheet" className="text-gray-300 hover:text-white transition-colors">
                  Score Sheet
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities Where We Operate */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cities Where We Operate</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/toronto" className="text-gray-300 hover:text-white transition-colors">
                    Toronto
                  </Link>
                </li>
                <li>
                  <Link to="/locations/scarborough" className="text-gray-300 hover:text-white transition-colors">
                    Scarborough
                  </Link>
                </li>
                <li>
                  <Link to="/locations/east-york" className="text-gray-300 hover:text-white transition-colors">
                    East York
                  </Link>
                </li>
                <li>
                  <Link to="/locations/north-york" className="text-gray-300 hover:text-white transition-colors">
                    North York
                  </Link>
                </li>
                <li>
                  <Link to="/locations/markham" className="text-gray-300 hover:text-white transition-colors">
                    Markham
                  </Link>
                </li>
                <li>
                  <Link to="/locations/port-union" className="text-gray-300 hover:text-white transition-colors">
                    Port Union
                  </Link>
                </li>
                <li>
                  <Link to="/locations/pickering" className="text-gray-300 hover:text-white transition-colors">
                    Pickering
                  </Link>
                </li>
                <li>
                  <Link to="/locations/ajax" className="text-gray-300 hover:text-white transition-colors">
                    Ajax
                  </Link>
                </li>
                <li>
                  <Link to="/locations/whitby" className="text-gray-300 hover:text-white transition-colors">
                    Whitby
                  </Link>
                </li>
                <li>
                  <Link to="/locations/oshawa" className="text-gray-300 hover:text-white transition-colors">
                    Oshawa
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/bowmanville" className="text-gray-300 hover:text-white transition-colors">
                    Bowmanville
                  </Link>
                </li>
                <li>
                  <Link to="/locations/clarington" className="text-gray-300 hover:text-white transition-colors">
                    Clarington
                  </Link>
                </li>
                <li>
                  <Link to="/locations/newcastle" className="text-gray-300 hover:text-white transition-colors">
                    Newcastle
                  </Link>
                </li>
                <li>
                  <Link to="/locations/port-perry" className="text-gray-300 hover:text-white transition-colors">
                    Port Perry
                  </Link>
                </li>
                <li>
                  <Link to="/locations/richmond-hill" className="text-gray-300 hover:text-white transition-colors">
                    Richmond Hill
                  </Link>
                </li>
                <li>
                  <Link to="/locations/st-catherines" className="text-gray-300 hover:text-white transition-colors">
                    St. Catherine's
                  </Link>
                </li>
                <li>
                  <Link to="/locations/georgina" className="text-gray-300 hover:text-white transition-colors">
                    Georgina
                  </Link>
                </li>
                <li>
                  <Link to="/locations/newmarket" className="text-gray-300 hover:text-white transition-colors">
                    Newmarket
                  </Link>
                </li>
                <li>
                  <Link to="/locations/milton" className="text-gray-300 hover:text-white transition-colors">
                    Milton
                  </Link>
                </li>
                <li>
                  <Link to="/locations/kitchener" className="text-gray-300 hover:text-white transition-colors">
                    Kitchener
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} Grayjays Driving School
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 