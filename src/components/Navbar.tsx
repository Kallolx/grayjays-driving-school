import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import { motion } from 'framer-motion';
import {  
  ChevronDown,
  GraduationCap,
  Clock3,
  Package,
  BookOpen,
  Route,
  FileSpreadsheet,
  Menu,
  CalendarCheck,
  Mail
} from 'lucide-react';
import MobileSidebar from './MobileSidebar';
import { toast } from 'react-hot-toast';

const MENU_ITEMS = {
  learnToDrive: [
    { 
      name: "Beginners Driver Education(BDE) Course", 
      href: '/learn-to-drive/bde',
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Complete MTO-approved"
    },
    { 
      name: "Hourly Lesson", 
      href: '/services/hourly-lessons',
      icon: <Clock3 className="w-5 h-5" />,
      description: "Flexible hourly driving lessons"
    },
    { 
      name: "Specialty Packages", 
      href: '/learn-to-drive/special-packages',
      icon: <Package className="w-5 h-5" />,
      description: "Customized packages"
    }
  ],
  services: [
    { 
      name: 'G1 Practices', 
      href: '/services/g1-practices',
      icon: <BookOpen className="w-5 h-5" />,
      description: "Practice tests and study materials for G1"
    },
    { 
      name: 'GPS Routes', 
      href: '/services/gps-routes',
      icon: <Route className="w-5 h-5" />,
      description: "Common test routes and navigation practice"
    },
    { 
      name: 'Score Sheet', 
      href: '/services/score-sheet',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      description: "Detailed scoring criteria and evaluation guides"
    }
  ]
};

interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: 'Learn to Drive', path: '/services', hasDropdown: true },
    { name: 'Rental Car', path: '/services/car-rental' },
    { name: 'Services', path: '#', hasDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#2c3149] shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2, // Delay to wait for home content to appear
          ease: [0.1, 0.25, 0.3, 1], // Custom ease curve for smooth slide
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Location - Desktop */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10">
                  <img src="/icons/svg-image-1.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold text-white">
                  GraysJays
                </span>
              </Link>

              {/* Location Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ReactCountryFlag
                    countryCode="CA"
                    svg
                    style={{
                      width: '1.2em',
                      height: '1.2em',
                    }}
                    title="Canada"
                  />
                  <span className="text-sm font-medium text-white">Ontario</span>
                  <ChevronDown className="w-4 h-4 text-white" />
                </button>

                <div className="absolute top-full left-0 pt-2 w-48 opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="py-2 bg-[#2c3149] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 text-sm text-gray-300">
                      Available Locations
                    </div>
                    <div className="flex items-center px-4 py-2 text-sm text-white bg-white/10">
                      <ReactCountryFlag
                        countryCode="CA"
                        svg
                        style={{
                          width: '1.2em',
                          height: '1.2em',
                          marginRight: '8px'
                        }}
                        title="Canada"
                      />
                      Ontario
                    </div>
                    <div className="px-4 py-2 text-xs text-gray-400">
                      More locations coming soon
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Logo and Location - Mobile Only */}
            <motion.div 
              className="md:hidden flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <img src="/icons/svg-image-1.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-bold text-white">
                  GraysJays
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <motion.div 
              className="hidden md:flex items-center justify-center flex-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    className="relative group"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name.toLowerCase())}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`px-1 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center">
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown 
                            className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === link.name.toLowerCase() ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </span>
                    </Link>

                    {/* Dropdown Menu */}
                    {link.hasDropdown && (
                      <div 
                        className={`absolute top-full left-0 pt-2 w-64 opacity-0 translate-y-1 pointer-events-none transition-all duration-200
                          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
                      >
                        <div className="py-2 bg-[#2c3149] rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                          {MENU_ITEMS[link.name === 'Learn to Drive' ? 'learnToDrive' : 'services'].map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white group/item"
                            >
                              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white group-hover/item:bg-white/20 transition-colors">
                                {item.icon}
                              </span>
                              <div className="ml-3">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Auth Buttons - Right Side */}
            <motion.div 
              className="hidden md:flex items-center space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              <button
                onClick={() => {
                  navigator.clipboard.writeText('info@drivingschool.com');
                  toast.success('Email copied to clipboard!', {
                    style: {
                      background: '#2c3149',
                      color: '#fff',
                      borderRadius: '12px',
                      fontSize: '14px'
                    },
                    duration: 2000,
                  });
                }}
                className="flex items-center space-x-2 px-4 py-[5px] text-sm font-medium text-gray-300 border-[2px] border-white/30 rounded-full hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@drivingschool.com</span>
              </button>
              <Link
                to="/services"
                className="group relative flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400  rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_8px_25px_-8px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5"
              >
                <div className=" absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CalendarCheck className="w-4 h-4" />
                <span className="font-semibold text-black">Book Now</span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;