import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import ReactCountryFlag from "react-country-flag";
import {  
  ChevronDown,
  UserCircle2,
  CalendarCheck,
  GraduationCap,
  Clock3,
  Package,
  BookOpen,
  Route,
  FileSpreadsheet
} from 'lucide-react';

const MENU_ITEMS = {
  learnToDrive: [
    { 
      name: "Beginners Driver Education(BDE) Course", 
      href: '/learn-to-drive/bde',
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Complete MTO-approved beginner driver education program"
    },
    { 
      name: "Hourly Lesson", 
      href: '/learn-to-drive/hourly',
      icon: <Clock3 className="w-5 h-5" />,
      description: "Flexible hourly driving lessons with expert instructors"
    },
    { 
      name: "Specialty Packages", 
      href: '/learn-to-drive/packages',
      icon: <Package className="w-5 h-5" />,
      description: "Customized packages for specific driving needs"
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
    { name: 'Learn to Drive', path: '/learn-to-drive', hasDropdown: true },
    { name: 'Rental Car', path: '/rental-car' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Blog', path: '/services/blog', hasDropdown: true },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#2c3149] shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Location */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 md:w-10 md:h-10">
                  <img src="/icons/svg-image-1.svg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg md:text-xl font-bold text-white">
                  GraysJays
                </span>
              </Link>

              {/* Location Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
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
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-grow mx-4 space-x-8">
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

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <UserCircle2 className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/book"
                className="flex items-center space-x-2 px-6 py-2 bg-white text-[#2c3149] rounded-full text-sm font-medium hover:bg-white/90 transition-colors shadow-lg"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        menuItems={MENU_ITEMS}
      />
    </>
  );
};

export default Navbar;