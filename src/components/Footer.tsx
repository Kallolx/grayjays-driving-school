import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
  Linkedin,
} from "lucide-react";
import { Scribble } from "@phosphor-icons/react";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2c3149] to-[#1a1f33] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-10 border-b border-white/10">
          <div className="flex items-center gap-4 mb-6 lg:mb-0">
            <Link
              to="/"
              className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl hover:bg-white/10 transition-all"
            >
              <img
                src="/icons/svg-image-1.svg"
                alt="GrayJays"
                className="w-12 h-12"
              />
              <div>
                <span className="text-xl font-bold block">GrayJays</span>
                <span className="text-sm text-gray-400">
                  Opportunity Starts Here
                </span>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">Call Us</span>
            </a>
            <a
              href="mailto:info@grayjays.com"
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 transition-all"
            >
              <Mail className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">Email Us</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 transition-all"
            >
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">Find Us</span>
            </Link>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-500">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Toronto Municipal Licensing & Standards
              <br />
              Beginner Driver Education Course Provider License
            </p>
            <Link
              to="/find-us"
              className="inline-flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 group"
            >
              Find Us at Government-Approved Schools
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <Facebook className="w-5 h-5" />,
                  url: "https://facebook.com",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  url: "https://twitter.com",
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  url: "https://instagram.com",
                },
                {
                  icon: <Youtube className="w-5 h-5" />,
                  url: "https://youtube.com",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  url: "https://linkedin.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-6">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { text: "About Us", path: "/about" },
                { text: "Contact Us", path: "/contact" },
                { text: "Terms of Service", path: "/terms" },
                { text: "Privacy Policy", path: "/privacy" },
                { text: "Affiliates", path: "/affiliates" },
                { text: "Career", path: "/career" },
                { text: "Login", path: "/login" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-500/50 group-hover:text-yellow-500 transition-colors" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-6">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { text: "How To Get A License", path: "/services/license" },
                {
                  text: "Hourly Lesson Packages",
                  path: "/services/hourly-lessons",
                },
                {
                  text: "Specialty Packages",
                  path: "/services/special-packages",
                },
                {
                  text: "Rental Car For Road Test",
                  path: "/services/car-rental",
                },
                { text: "GPS Routes", path: "/services/gps-routes" },
                { text: "Score Sheet", path: "/services/score-sheet" },
                { text: "Blog", path: "/blog" },
                { text: "FAQs", path: "/faqs" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-500/50 group-hover:text-yellow-500 transition-colors" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-6">
              Service Locations
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Toronto",
                "Scarborough",
                "East York",
                "North York",
                "Markham",
                "Richmond Hill",
                "Pickering",
                "Ajax",
                "Whitby",
                "Oshawa",
                "Bowmanville",
                "Clarington",
                "Newcastle",
                "Port Perry",
                "St. Catherine's",
                "Georgina",
                "Newmarket",
                "Milton",
                "Kitchener",
              ].map((city, index) => (
                <Link
                  key={index}
                  to={`/locations/${city
                    .toLowerCase()
                    .replace(/[.']/g, "")
                    .replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-400">
                © {new Date().getFullYear()} Grayjays. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-400">
            Developed by 
              <Scribble className="w-4 h-4 text-yellow-500" /> {" "}                       
              <a
                href="https://kallolsfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Softune
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
