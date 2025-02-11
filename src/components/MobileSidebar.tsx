import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Home,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  title: string;
  icon: JSX.Element;
  path?: string;
  submenu?: {
    title: string;
    path: string;
    description?: string;
    icon?: JSX.Element;
  }[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: "Home",
    icon: <Home className="w-5 h-5" />,
    path: "/",
  },
  {
    title: "Learn to Drive",
    icon: <GraduationCap className="w-5 h-5" />,
    submenu: [
      {
        title: "BDE Course",
        path: "/learn-to-drive/bde",
        description: "Complete MTO-approved beginner driver education program",
        icon: <GraduationCap className="w-5 h-5" />,
      },
      {
        title: "Hourly Lessons",
        path: "/services/hourly-lessons",
        description: "Flexible hourly driving lessons with expert instructors",
        icon: <Clock3 className="w-5 h-5" />,
      },
      {
        title: "Special Packages",
        path: "/learn-to-drive/special-packages",
        description: "Customized packages for specific driving needs",
        icon: <Package className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Services",
    icon: <Car className="w-5 h-5" />,
    submenu: [
      {
        title: "G1 Practice",
        path: "/services/g1-practices",
        description: "Practice tests and study materials for G1",
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        title: "GPS Routes",
        path: "/services/gps-routes",
        description: "Common test routes and navigation practice",
        icon: <Route className="w-5 h-5" />,
      },
      {
        title: "Score Sheet",
        path: "/services/score-sheet",
        description: "Detailed scoring criteria and evaluation guides",
        icon: <FileSpreadsheet className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Car Rental",
    icon: <Car className="w-5 h-5" />,
    path: "/services/car-rental",
  },
  {
    title: "Contact",
    icon: <Phone className="w-5 h-5" />,
    path: "/contact",
  },
];

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
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#2c3149] z-50 transform transition-transform duration-300 ease-in-out ${
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
              <span className="text-lg font-bold text-white">GrayJays</span>
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
          <div className="flex-1">
            {MENU_ITEMS.map((item) => (
              <div key={item.title} className="px-4 py-2">
                {item.submenu ? (
                  // Item with submenu
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          expandedItem === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedItem === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 py-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={onClose}
                                className="flex items-start gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {subItem.title}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-400 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular item
                  <Link
                    to={item.path || "#"}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="px-4 py-2 border-t border-white/10">
            <Link
              to="/book"
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
