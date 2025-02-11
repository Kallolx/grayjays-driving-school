import { useState } from "react";
import { motion } from "framer-motion";
import {
  Route,
  MapPin,
  ChevronDown,
  Search,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import toast from "react-hot-toast";
import { ROUTE_PRODUCTS, LOCATIONS, RouteProduct } from "../data/routeProducts";

interface GPSRoutesProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  requiresLocation: boolean;
}

const ITEMS_PER_PAGE = 6;

const GPSRoutes = ({ cart, setCart }: GPSRoutesProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<"G" | "G2" | "">("");
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = ROUTE_PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || product.location === selectedLocation;
    const matchesType = !selectedType || product.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const addToCart = (product: RouteProduct) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.discountedPrice,
      requiresLocation: false,
    };

    setCart([...cart, cartItem]);
    toast.success('Route guide added to cart!', {
      style: {
        background: '#2c3149',
        color: '#fff',
        borderRadius: '12px',
      },
      icon: '🛒',
      position: 'bottom-left',
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-[#2c3149] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/texture-dots.png')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c3149] via-[#2c3149] to-[#1a1f33]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Route className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                Test Centre Routes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Drive Test <span className="text-yellow-500">Route Guides</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Master your test route before the big day with our detailed route guides
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-start gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-sm text-gray-300"
            >
              <Info className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-left">
                Our route guides include common test routes, key checkpoints, potential challenges,
                and examiner expectations for each test center. Perfect for practice runs before your test!
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <button
                onClick={() => setShowLocationMenu(!showLocationMenu)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-yellow-500 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>{selectedLocation || "Filter by location"}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showLocationMenu ? 'rotate-180' : ''}`} />
              </button>

              {showLocationMenu && (
                <div className="absolute z-50 w-full mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedLocation("");
                      setShowLocationMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-600"
                  >
                    All Locations
                  </button>
                  {LOCATIONS.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 text-sm ${
                        selectedLocation === location ? 'text-yellow-500 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Test Type Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType(selectedType === "G2" ? "" : "G2")}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                  selectedType === "G2"
                    ? "border-yellow-500 bg-yellow-50 text-yellow-500"
                    : "border-gray-200 hover:border-yellow-500/50"
                }`}
              >
                G2 Test
              </button>
              <button
                onClick={() => setSelectedType(selectedType === "G" ? "" : "G")}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                  selectedType === "G"
                    ? "border-yellow-500 bg-yellow-50 text-yellow-500"
                    : "border-gray-200 hover:border-yellow-500/50"
                }`}
              >
                G Test
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Product Image */}
                <div className="relative mb-6">
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Save ${(product.originalPrice - product.discountedPrice).toFixed(2)}
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-lg font-bold text-[#2c3149] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-xl font-bold text-yellow-500">
                        ${product.discountedPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {product.location}
                      </div>
                      <span className="px-2 py-1 text-xs font-medium text-white bg-[#2c3149] rounded-full">
                        {product.type}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {/* Previous Page Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#2c3149] hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* First Page */}
            {getPageNumbers()[0] > 1 && (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === 1
                      ? 'bg-[#2c3149] text-white'
                      : 'text-[#2c3149] hover:bg-gray-100'
                  }`}
                >
                  1
                </button>
                {getPageNumbers()[0] > 2 && (
                  <span className="text-gray-400">...</span>
                )}
              </>
            )}

            {/* Page Numbers */}
            {getPageNumbers().map(pageNum => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === pageNum
                    ? 'bg-[#2c3149] text-white'
                    : 'text-[#2c3149] hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Last Page */}
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
              <>
                {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                  <span className="text-gray-400">...</span>
                )}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-[#2c3149] text-white'
                      : 'text-[#2c3149] hover:bg-gray-100'
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next Page Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#2c3149] hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} routes
        </div>
      </div>
    </div>
  );
};

export default GPSRoutes; 