import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  MapPin,
  AlertCircle,
  Key,
  Calendar,
  Clock3,
  CreditCard,
  ScanLine,
  Phone,
  Mail,
  User,
  Upload,
} from "lucide-react";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  location?: string;
  requiresLocation: boolean;
  testDetails?: {
    fullName: string;
    phone: string;
    email: string;
    testType: "G" | "G2";
    testTime: string;
    testDate: string;
    licenseNumber: string;
    licenseExpiry: string;
    numberOfPeople: number;
  };
}

interface LocationPrice {
  location: string;
  avgInstructorPrice: number;
  onePersonCost: number;
  twoPersonCost: number;
  threePersonCost: number;
}

const LOCATIONS = [
  "Missisauga",
  "Toronto Downsview",
  "Toronto Etobicoke",
  "Toronto Metro East",
  "Brampton",
  "Guelph",
  "Hamilton",
  "Newmarket",
  "Oakville",
  "Oshawa",
  "Port Hopes",
  "Toronto Port Union",
  "Burlington",
  "Barrie",
  "Collingwood",
  "Lindsay",
  "Orangeville",
  "Peterborough",
  "St. Catherines",
  "Stratford",
  "Balleville",
  "Brantford",
  "Clinton",
  "Haliburton",
  "Kitchener",
  "London",
  "Madoc",
  "Owen Sound",
  "Simcoe",
  "Tillsonburg",
  "Woodstock",
  "Bancroft",
  "Huntsville",
  "Orilia",
  "Parry Sound",
  "Walkerton",
  "Barrys Bay",
  "Kingston",
].sort();

const LOCATION_PRICES: LocationPrice[] = [
  {
    location: "Missisauga",
    avgInstructorPrice: 200,
    onePersonCost: 180,
    twoPersonCost: 160,
    threePersonCost: 150,
  },
  {
    location: "Toronto Downsview",
    avgInstructorPrice: 200,
    onePersonCost: 150,
    twoPersonCost: 130,
    threePersonCost: 120,
  },
  {
    location: "Toronto Etobicoke",
    avgInstructorPrice: 200,
    onePersonCost: 180,
    twoPersonCost: 160,
    threePersonCost: 150,
  },
  {
    location: "Toronto Metro East",
    avgInstructorPrice: 200,
    onePersonCost: 150,
    twoPersonCost: 130,
    threePersonCost: 120,
  },
  {
    location: "Brampton",
    avgInstructorPrice: 250,
    onePersonCost: 180,
    twoPersonCost: 160,
    threePersonCost: 150,
  },
  {
    location: "Guelph",
    avgInstructorPrice: 250,
    onePersonCost: 200,
    twoPersonCost: 180,
    threePersonCost: 170,
  },
  {
    location: "Hamilton",
    avgInstructorPrice: 250,
    onePersonCost: 190,
    twoPersonCost: 170,
    threePersonCost: 160,
  },
  {
    location: "Newmarket",
    avgInstructorPrice: 250,
    onePersonCost: 180,
    twoPersonCost: 160,
    threePersonCost: 150,
  },
  {
    location: "Oakville",
    avgInstructorPrice: 250,
    onePersonCost: 180,
    twoPersonCost: 160,
    threePersonCost: 150,
  },
  {
    location: "Oshawa",
    avgInstructorPrice: 250,
    onePersonCost: 160,
    twoPersonCost: 140,
    threePersonCost: 130,
  },
  {
    location: "Port Hopes",
    avgInstructorPrice: 250,
    onePersonCost: 190,
    twoPersonCost: 170,
    threePersonCost: 160,
  },
  {
    location: "Toronto Port Union",
    avgInstructorPrice: 250,
    onePersonCost: 150,
    twoPersonCost: 130,
    threePersonCost: 120,
  },
  {
    location: "Burlington",
    avgInstructorPrice: 300,
    onePersonCost: 190,
    twoPersonCost: 170,
    threePersonCost: 160,
  },
  {
    location: "Barrie",
    avgInstructorPrice: 350,
    onePersonCost: 190,
    twoPersonCost: 170,
    threePersonCost: 160,
  },
  {
    location: "Collingwood",
    avgInstructorPrice: 350,
    onePersonCost: 280,
    twoPersonCost: 260,
    threePersonCost: 250,
  },
  {
    location: "Lindsay",
    avgInstructorPrice: 350,
    onePersonCost: 250,
    twoPersonCost: 230,
    threePersonCost: 220,
  },
  {
    location: "Orangeville",
    avgInstructorPrice: 350,
    onePersonCost: 220,
    twoPersonCost: 200,
    threePersonCost: 190,
  },
  {
    location: "Peterborough",
    avgInstructorPrice: 350,
    onePersonCost: 250,
    twoPersonCost: 230,
    threePersonCost: 220,
  },
  {
    location: "St. Catherines",
    avgInstructorPrice: 350,
    onePersonCost: 260,
    twoPersonCost: 240,
    threePersonCost: 230,
  },
  {
    location: "Stratford",
    avgInstructorPrice: 380,
    onePersonCost: 260,
    twoPersonCost: 240,
    threePersonCost: 230,
  },
  {
    location: "Balleville",
    avgInstructorPrice: 400,
    onePersonCost: 280,
    twoPersonCost: 260,
    threePersonCost: 250,
  },
  {
    location: "Brantford",
    avgInstructorPrice: 400,
    onePersonCost: 260,
    twoPersonCost: 240,
    threePersonCost: 230,
  },
  {
    location: "Clinton",
    avgInstructorPrice: 400,
    onePersonCost: 300,
    twoPersonCost: 280,
    threePersonCost: 270,
  },
  {
    location: "Haliburton",
    avgInstructorPrice: 400,
    onePersonCost: 300,
    twoPersonCost: 280,
    threePersonCost: 270,
  },
  {
    location: "Kitchener",
    avgInstructorPrice: 400,
    onePersonCost: 260,
    twoPersonCost: 240,
    threePersonCost: 230,
  },
  {
    location: "London",
    avgInstructorPrice: 400,
    onePersonCost: 300,
    twoPersonCost: 280,
    threePersonCost: 270,
  },
  {
    location: "Madoc",
    avgInstructorPrice: 400,
    onePersonCost: 290,
    twoPersonCost: 270,
    threePersonCost: 260,
  },
  {
    location: "Owen Sound",
    avgInstructorPrice: 400,
    onePersonCost: 280,
    twoPersonCost: 260,
    threePersonCost: 250,
  },
  {
    location: "Simcoe",
    avgInstructorPrice: 400,
    onePersonCost: 280,
    twoPersonCost: 260,
    threePersonCost: 250,
  },
  {
    location: "Tillsonburg",
    avgInstructorPrice: 400,
    onePersonCost: 290,
    twoPersonCost: 270,
    threePersonCost: 260,
  },
  {
    location: "Woodstock",
    avgInstructorPrice: 400,
    onePersonCost: 280,
    twoPersonCost: 260,
    threePersonCost: 250,
  },
  {
    location: "Bancroft",
    avgInstructorPrice: 450,
    onePersonCost: 350,
    twoPersonCost: 330,
    threePersonCost: 300,
  },
  {
    location: "Huntsville",
    avgInstructorPrice: 450,
    onePersonCost: 320,
    twoPersonCost: 300,
    threePersonCost: 290,
  },
  {
    location: "Orilia",
    avgInstructorPrice: 450,
    onePersonCost: 300,
    twoPersonCost: 260,
    threePersonCost: 240,
  },
  {
    location: "Parry Sound",
    avgInstructorPrice: 450,
    onePersonCost: 350,
    twoPersonCost: 330,
    threePersonCost: 320,
  },
  {
    location: "Walkerton",
    avgInstructorPrice: 450,
    onePersonCost: 300,
    twoPersonCost: 280,
    threePersonCost: 270,
  },
  {
    location: "Barrys Bay",
    avgInstructorPrice: 500,
    onePersonCost: 380,
    twoPersonCost: 360,
    threePersonCost: 350,
  },
  {
    location: "Kingston",
    avgInstructorPrice: 500,
    onePersonCost: 350,
    twoPersonCost: 330,
    threePersonCost: 300,
  },
];

const TEST_TIMES = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
];

interface CarRentalProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const CarRental = ({ cart, setCart }: CarRentalProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    testType: "G2" as "G" | "G2",
    testTime: "",
    testDate: "",
    licenseNumber: "",
    licenseExpiry: "",
    numberOfPeople: 1,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [bookingFile, setBookingFile] = useState<File | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const selectedLocationPrices = LOCATION_PRICES.find(
    (loc) => loc.location === selectedLocation
  );

  const handleScanLicense = () => {
    // This would be integrated with a real scanning library
    // For now, we'll simulate scanning with dummy data
    setFormData((prev) => ({
      ...prev,
      fullName: "John Doe",
      licenseNumber: "D1234-56789-12345",
      licenseExpiry: "2025-12-31",
    }));
    toast.success("License scanned successfully!", {
      style: {
        background: "#2c3149",
        color: "#fff",
        borderRadius: "12px",
      },
      icon: "📄",
      position: "bottom-left",
      duration: 2000,
    });
  };

  const getPrice = () => {
    if (!selectedLocationPrices) return 0;
    switch (formData.numberOfPeople) {
      case 1:
        return selectedLocationPrices.onePersonCost;
      case 2:
        return selectedLocationPrices.twoPersonCost;
      case 3:
        return selectedLocationPrices.threePersonCost;
      default:
        return selectedLocationPrices.onePersonCost;
    }
  };

  const addToCart = () => {
    if (
      !selectedLocation ||
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.testTime ||
      !formData.testDate ||
      !formData.licenseNumber ||
      !formData.licenseExpiry
    ) {
      toast.error("Please fill in all required fields", {
        style: {
          background: "#2c3149",
          color: "#fff",
          borderRadius: "12px",
        },
        icon: "📝",
        position: "bottom-left",
        duration: 3000,
      });
      return;
    }

    const cartItem: CartItem = {
      id: `rental-${Date.now()}`,
      name: `Car Rental for ${formData.testType} Road Test`,
      price: getPrice(),
      location: selectedLocation,
      requiresLocation: true,
      testDetails: formData,
    };

    setCart([...cart, cartItem]);
    toast.success("Car rental added to cart successfully!", {
      style: {
        background: "#2c3149",
        color: "#fff",
        borderRadius: "12px",
      },
      icon: "🚗",
      position: "bottom-left",
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
              <Car className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                Road Test Vehicle Rental
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Rent a Car for Your{" "}
              <span className="text-yellow-500">Road Test</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Well-maintained vehicles with dual brake system for your road test
              success
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">1h</div>
                <div className="text-sm text-gray-300">Warm-up Included</div>
                  </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">Dual</div>
                <div className="text-sm text-gray-300">Brake System</div>
                    </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">Full</div>
                <div className="text-sm text-gray-300">Insurance</div>
                    </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">98%</div>
                <div className="text-sm text-gray-300">Pass Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form Fields */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                Road Test Details
              </h2>

              {/* License Scanner and File Upload Section */}
              <div className="space-y-6 mb-6">
                {isMobile && (
                  <button
                    onClick={handleScanLicense}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#2c3149]/5 hover:bg-[#2c3149]/10 text-[#2c3149] rounded-xl transition-colors"
                  >
                    <ScanLine className="w-5 h-5" />
                    <span>Scan Driver's License with Camera</span>
                  </button>
                )}

                {/* File Upload Section */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Your Road Test Booking Confirmation
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 5 * 1024 * 1024) {
                            // 5MB limit
                            toast.error("File size should be less than 5MB", {
                              style: {
                                background: "#2c3149",
                                color: "#fff",
                                borderRadius: "12px",
                              },
                              icon: "📁",
                              position: "bottom-left",
                              duration: 3000,
                            });
                            return;
                          }
                          setBookingFile(file);
                          toast.success("File uploaded successfully!", {
                            style: {
                              background: "#2c3149",
                              color: "#fff",
                              borderRadius: "12px",
                            },
                            icon: "📄",
                            position: "bottom-left",
                            duration: 2000,
                          });
                        }
                      }}
                      className="hidden"
                      id="booking-file"
                    />
                    <label
                      htmlFor="booking-file"
                      className="w-full flex items-center justify-center gap-2 px-4 py-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-yellow-500 transition-colors cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-6 h-6 text-gray-400" />
                        <div className="text-sm text-center">
                          <span className="text-yellow-500 font-medium">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                          <p className="text-gray-500">
                            JPG, PNG or PDF (max 5MB)
          </p>
        </div>
                      </div>
                    </label>
                    {bookingFile && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{bookingFile.name}</span>
        </div>
                    )}
            </div>
            </div>
          </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                      placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                      placeholder="Enter email address"
                    />
                  </div>
              </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Test Type
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.testType}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          testType: e.target.value as "G" | "G2",
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="G2">G2 Road Test</option>
                      <option value="G">G Road Test</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Test Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                      type="date"
                      value={formData.testDate}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          testDate: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Test Time
                  </label>
                  <div className="relative">
                    <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                      value={formData.testTime}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          testTime: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select time</option>
                      {TEST_TIMES.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                </select>
                  </div>
              </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Number
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                      value={formData.licenseNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          licenseNumber: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="Enter license number"
                  />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Expiry
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.licenseExpiry}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          licenseExpiry: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                  Book Your Vehicle
                </h2>

                {/* Location Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Location:
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowLocationMenu(!showLocationMenu)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-yellow-500/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">
                          {selectedLocation || "Select Location"}
                        </span>
                      </div>
                      <AlertCircle
                        className={`w-5 h-5 transition-transform duration-200 ${
                          showLocationMenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showLocationMenu && (
                      <div className="absolute z-50 w-full mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
                        {LOCATIONS.map((location) => (
              <button
                            key={location}
                            onClick={() => {
                              setSelectedLocation(location);
                              setShowLocationMenu(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 text-sm ${
                              selectedLocation === location
                                ? "text-yellow-500 font-medium"
                                : "text-gray-600"
                            }`}
                          >
                            {location}
              </button>
                        ))}
                      </div>
                    )}
          </div>
        </div>

                {/* Number of People Selector with Instructor Info */}
                <div className="mb-6">
                  {/* Instructor Info Card */}
                  {selectedLocationPrices && (
                    <div className="mb-4 p-2 rounded-xl">
                      <div className="flex items-center gap-5 mb-3">
                        {" "}
                        {/* Increased gap */}
                        {/* Unsplash User Image (Circular) */}
                        <img
                          src="/icons/instructor.png"
                          alt="User"
                          className="w-12 h-12  object-cover"
                        />
                        <div>
                          <div className="font-medium text-[#2c3149]">
                            Professional Instructor
                          </div>
                          <div className="text-sm text-gray-600">
                            Average rate: $
                            {selectedLocationPrices.avgInstructorPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* People Selection */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            numberOfPeople: num,
                          }))
                        }
                        className={`relative py-4 rounded-xl border-2 transition-all ${
                          formData.numberOfPeople === num
                            ? "border-yellow-500 bg-yellow-50 text-yellow-500"
                            : "border-gray-200 hover:border-yellow-500/50"
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-medium">
                            {num} {num === 1 ? "Person" : "People"}
                          </div>
                          {selectedLocationPrices && (
                            <div className="text-xs mt-1 text-gray-500">
                              $
                              {num === 1
                                ? selectedLocationPrices.onePersonCost
                                : num === 2
                                ? selectedLocationPrices.twoPersonCost
                                : selectedLocationPrices.threePersonCost}
                              /person
                            </div>
                          )}
                        </div>
                        {formData.numberOfPeople === num && (
                          <div className="absolute -top-2 -right-2">
                            <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Price Info */}
                  {selectedLocationPrices && (
                    <div className="mt-3 text-xs text-gray-500 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p>
                        Price includes instructor, vehicle rental, and one hour
                        warm-up session before the test.
                        {formData.numberOfPeople > 1 &&
                          " Group discount applied for multiple people."}
                      </p>
                    </div>
                  )}
                </div>

                {/* Price Display */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  {selectedLocationPrices ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Selected Package:</span>
                        <span className="font-bold text-[#2c3149]">
                          {formData.numberOfPeople}{" "}
                          {formData.numberOfPeople === 1 ? "Person" : "People"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Instructor Fee:</span>
                        <span>
                          ${selectedLocationPrices.avgInstructorPrice}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Vehicle & Warm-up:</span>
                        <span>
                          $
                          {getPrice() -
                            selectedLocationPrices.avgInstructorPrice}
                        </span>
                      </div>
                      <div className="h-px bg-gray-200" />
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#2c3149]">
                          Total Price:
                        </span>
                        <span className="text-lg font-bold text-yellow-500">
                          ${getPrice()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      Select a location to view pricing
            </div>
                  )}
          </div>

                {/* Action Button */}
                <button
                  onClick={addToCart}
                  className="w-full py-4 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors"
                >
                  Add to Cart
                </button>

                {/* Additional Info */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>
                    By booking this rental, you agree to our terms and
                    conditions. Please bring your valid license on the test day.
                  </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental; 
