import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import {
  X,
  ChevronDown,
  GraduationCap,
  Clock3,
  Package,
  BookOpen,
  Route,
  FileSpreadsheet,
  Car,
  Phone,
  CalendarCheck,
  Mail,
} from "lucide-react";
import { toast } from 'react-hot-toast';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`fixed top-0 right-0 bottom-0 bg-[#2c3149] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={onClose}>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <img
                  src="/icons/svg-image-1.svg"
                  alt="Logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-lg font-bold text-white">GraysJays</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-4 flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          {/* Location Selector */}
          <div className="px-6 mb-4">
            <button className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2">
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
              </div>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
            <div className="mt-2 px-2 py-1.5 text-xs text-gray-400">
              More locations coming soon
            </div>
          </div>

          <div className="flex-1">
            {/* Learn to Drive Section */}
            <div className="px-4 py-2">
              <div>
                <button
                  onClick={() => toggleSubmenu('Learn to Drive')}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5" />
                    <span>Learn to Drive</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedItem === 'Learn to Drive' ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedItem === 'Learn to Drive' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 py-2 space-y-1">
                        {MENU_ITEMS.learnToDrive.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={onClose}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-400 mt-0.5">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Car Rental Link */}
            <div className="px-4 py-2">
              <Link
                to="/services/car-rental"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Car className="w-5 h-5" />
                <span>Rental Car</span>
              </Link>
            </div>

            {/* Services Section */}
            <div className="px-4 py-2">
              <div>
                <button
                  onClick={() => toggleSubmenu('Services')}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="w-5 h-5" />
                    <span>Services</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedItem === 'Services' ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedItem === 'Services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 py-2 space-y-1">
                        {MENU_ITEMS.services.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={onClose}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-400 mt-0.5">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Blog Link */}
            <div className="px-4 py-2">
              <Link
                to="/blog"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Blog</span>
              </Link>
            </div>

            {/* Contact Link */}
            <div className="px-4 py-2">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="px-4 py-4 space-y-3 border-t border-white/10">
            {/* Email Button */}
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
                onClose();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@drivingschool.com</span>
            </button>

            {/* Book Now Button */}
            <Link
              to="/services"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-yellow-500 text-[#2c3149] rounded-xl font-medium hover:bg-yellow-400 transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileSidebar;
