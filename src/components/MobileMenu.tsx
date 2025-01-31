import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, UserCircle2, CalendarCheck } from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface MenuItems {
  learnToDrive: MenuItem[];
  services: MenuItem[];
  pricing?: MenuItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; path: string; hasDropdown?: boolean }>;
  menuItems: MenuItems;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks, menuItems }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Menu Content */}
        <div className="h-full flex flex-col pt-20 pb-6 px-6">
          {/* Navigation Links */}
          <div className="flex-1">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div className="mb-2">
                      <button
                        onClick={() => toggleSection(link.name.toLowerCase())}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive(link.path)
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSection === link.name.toLowerCase() ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {/* Submenu */}
                      <div
                        className={`mt-1 space-y-1 transition-all duration-200 ${
                          expandedSection === link.name.toLowerCase()
                            ? 'max-h-[400px] opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        {menuItems[link.name.toLowerCase() as keyof typeof menuItems]?.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg group"
                            onClick={onClose}
                          >
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50/50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                              {item.icon}
                            </span>
                            <span className="ml-3">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive(link.path)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-4 pt-6 border-t">
            <Link
              to="/login"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={onClose}
            >
              <UserCircle2 className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/book"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
              onClick={onClose}
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 