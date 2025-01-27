import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  href: string;
}

interface MenuItems {
  services: MenuItem[];
  pricing: MenuItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItems;
}

const Sidebar = ({ isOpen, onClose, menuItems }: SidebarProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 rounded-xl transition-colors absolute right-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group mt-1" onClick={onClose}>
            <svg className="w-8 h-8 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
            <span className="text-xl font-medium tracking-tight">GrayJays</span>
          </Link>

          {/* Navigation Links */}
          <nav className="mt-8">
            {/* Services Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => toggleMenu('services')}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${expandedMenu === 'services' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedMenu === 'services' && (
                <div className="mt-2 ml-4 space-y-2">
                  {menuItems.services.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => toggleMenu('pricing')}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg"
              >
                <span>Pricing</span>
                <svg
                  className={`w-4 h-4 transition-transform ${expandedMenu === 'pricing' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedMenu === 'pricing' && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
                    onClick={onClose}
                  >
                    All Packages
                  </Link>
                  <div className="border-t border-zinc-100 my-2 mx-4"></div>
                  {menuItems.pricing.map((item) => (
                    <Link
                      key={item.href}
                      to={`/pricing#${item.href.split('/').pop()}`}
                      className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/instructors"
              className="block px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg mb-2"
              onClick={onClose}
            >
              Instructors
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg mb-4"
              onClick={onClose}
            >
              Contact
            </Link>

            {/* Auth Buttons */}
            <div className="border-t border-zinc-100 pt-4 space-y-3">
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg"
                onClick={onClose}
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Link>
              <Link
                to="/book"
                className="block px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors text-center"
                onClick={onClose}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 