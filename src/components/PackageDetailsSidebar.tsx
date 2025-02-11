import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, DollarSign, Info, Car, FileCheck, AlertCircle } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import SpotlightButton from './SpotlightButton';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface PackageDetailsSidebarProps {
  selectedPackage: string | null;
  onClose: () => void;
  onAddToCart: (item: any) => void;
  packages: any[];
  selectedCrashCourse: string | null;
  setSelectedCrashCourse: (course: string | null) => void;
  CRASH_COURSES: any[];
  PARKING_FEATURES: string[];
  GUARANTEED_PASS_FEATURES: string[];
  REFRESHER_SECTIONS: any[];
  MOCK_TEST_FEATURES: any[];
  selectedLocation: string;
  selectedLicenseType: string;
}

const PackageDetailsSidebar = ({
  selectedPackage,
  onClose,
  onAddToCart,
  packages,
  selectedCrashCourse,
  setSelectedCrashCourse,
  CRASH_COURSES,
  PARKING_FEATURES,
  GUARANTEED_PASS_FEATURES,
  REFRESHER_SECTIONS,
  MOCK_TEST_FEATURES,
  selectedLocation,
  selectedLicenseType
}: PackageDetailsSidebarProps) => {
  const selectedPkg = packages.find(p => p.id === selectedPackage);

  const handleAddToCart = () => {
    if (selectedPkg?.requiresLocation && (!selectedLocation || !selectedLicenseType)) {
      toast.error('Please select your location and license type first', {
        style: {
          background: '#2c3149',
          color: '#fff',
          borderRadius: '12px',
        },
        icon: '📍',
        position: 'bottom-left',
        duration: 3000,
      });
      return;
    }
    onAddToCart({
      id: `${selectedPackage}-${Date.now()}`,
      name: selectedPkg?.title,
      price: selectedPkg?.basePrice,
      requiresLocation: selectedPkg?.requiresLocation,
      location: selectedLocation,
      licenseType: selectedLicenseType
    });
    onClose();
  };

  const renderPriceSection = (title: string, description: string) => (
    <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#2c3149]">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-yellow-500">${selectedPkg?.basePrice}</div>
          <p className="text-gray-600 text-sm">One-time payment</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <Clock className="w-5 h-5 text-yellow-500 mb-2" />
          <div className="text-[#2c3149] font-medium">2 Hours</div>
          <p className="text-sm text-gray-500">Total duration</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <Car className="w-5 h-5 text-yellow-500 mb-2" />
          <div className="text-[#2c3149] font-medium">Dual Control</div>
          <p className="text-sm text-gray-500">Test vehicle</p>
        </div>
      </div>
    </div>
  );

  const renderCrashCourseContent = () => (
    <div className="space-y-6">
      {renderPriceSection('Crash Course Package', 'Choose your preferred duration')}
      <div className="border-b-4 border-yellow-500/20 pb-6">
        <h3 className="text-lg font-semibold text-[#2c3149] mb-4">Choose Your Package</h3>
        <div className="space-y-4">
          {CRASH_COURSES.map((course) => (
            <div
              key={course.name}
              onClick={() => setSelectedCrashCourse(course.name)}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                selectedCrashCourse === course.name 
                  ? 'border-yellow-500 bg-yellow-50/50'
                  : 'border-gray-200 hover:border-yellow-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedCrashCourse === course.name 
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2c3149]">{course.name}</h4>
                    <p className="text-sm text-gray-500">{course.hours} Hour{course.hours > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="text-lg font-bold text-yellow-500">
                  ${course.basePrice}
                </div>
              </div>
              {selectedCrashCourse === course.name && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-yellow-500/20">
                  <h5 className="font-medium text-[#2c3149] mb-2">Package Includes:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      {course.hours} hours of one-on-one instruction
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Personalized learning plan
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Practice in test routes
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b-4 border-yellow-500/20 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-[#2c3149]">Why Choose Crash Course?</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-gray-600">Intensive training focused on quick skill development</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-gray-600">Flexible scheduling to fit your timeline</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-gray-600">Experienced instructors dedicated to your success</p>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderParkingContent = () => (
    <div className="space-y-6">
      {renderPriceSection('Parking Package', 'Master all parking maneuvers')}
      <div className="border-b-4 border-yellow-500/20 pb-6">
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#2c3149] mb-4">Master Every Parking Maneuver</h3>
          <div className="grid gap-4">
            {PARKING_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#2c3149]">{feature}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Master the techniques for confident and precise parking
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuaranteedPassContent = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#2c3149]">Limited Time Offer!</h3>
            <p className="text-gray-600 text-sm mt-1">Save $1,001 on our Guaranteed Pass Package</p>
          </div>
          <div className="text-right">
            <div className="text-lg line-through text-gray-400">${selectedPkg?.originalPrice}</div>
            <div className="text-3xl font-bold text-yellow-500">${selectedPkg?.basePrice}</div>
            <p className="text-gray-600 text-sm">Limited time offer</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {GUARANTEED_PASS_FEATURES.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRefresherContent = () => (
    <div className="space-y-6">
      {renderPriceSection('Refresher Package', 'Update your driving skills')}
      {REFRESHER_SECTIONS.map((section, index) => (
        <div key={index} className="border-b-4 border-yellow-500/20 pb-6">
          <h3 className="text-lg font-semibold text-[#2c3149] mb-4">{section.title}</h3>
          <div className="space-y-4">
            {section.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMockTestContent = () => (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#2c3149]">Mock Test Package</h3>
            <p className="text-gray-600 text-sm mt-1">Complete test simulation</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-500">${selectedPkg?.basePrice}</div>
            <p className="text-gray-600 text-sm">One-time payment</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <Clock className="w-5 h-5 text-yellow-500 mb-2" />
            <div className="text-[#2c3149] font-medium">2 Hours</div>
            <p className="text-sm text-gray-500">Total duration</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <Car className="w-5 h-5 text-yellow-500 mb-2" />
            <div className="text-[#2c3149] font-medium">Dual Control</div>
            <p className="text-sm text-gray-500">Test vehicle</p>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#2c3149]">What's Included</h3>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-500" />
              </div>
              <h4 className="font-medium text-[#2c3149]">Pre-Test Briefing (30 mins)</h4>
            </div>
            <p className="text-sm text-gray-600 ml-11">Comprehensive overview of test requirements</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Car className="w-4 h-4 text-yellow-500" />
              </div>
              <h4 className="font-medium text-[#2c3149]">Mock Test (45 mins)</h4>
            </div>
            <p className="text-sm text-gray-600 ml-11">Full simulation of actual road test conditions</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-yellow-500" />
              </div>
              <h4 className="font-medium text-[#2c3149]">Detailed Review (45 mins)</h4>
            </div>
            <p className="text-sm text-gray-600 ml-11">Comprehensive feedback and improvement strategies</p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-xl text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-sm font-medium text-[#2c3149]">Boost Confidence</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-sm font-medium text-[#2c3149]">Expert Feedback</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Error Popup */}
      {/* {showError && (
        <div className="fixed bottom-4 left-4 z-[60] bg-red-50 text-red-500 px-6 py-4 rounded-xl shadow-lg border border-red-100 flex items-center gap-3">
          <AlertCircle className="w-5 h-5" />
          <p>Please select your location and license type first</p>
        </div>
      )} */}

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        className="fixed top-0 right-0 h-full w-full sm:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto"
      >
        {/* Sidebar Content */}
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Package Details */}
          {selectedPackage && selectedPkg && (
            <div className="mt-12">
              {/* Package Header */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b-4 border-yellow-500/20">
                <div className="w-20 h-20 flex items-center justify-center">
                  {selectedPkg.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2c3149]">
                    {selectedPkg.title}
                  </h2>
                  <p className="text-gray-500 mt-1">
                    {selectedPkg.description}
                  </p>
                  <div className="mt-3 inline-block px-4 py-1.5 bg-yellow-500/10 rounded-full">
                    <span className="text-sm font-semibold text-yellow-500">
                      From ${selectedPkg.basePrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Specific Content */}
              {selectedPackage === 'crash-courses' && renderCrashCourseContent()}
              {selectedPackage === 'parking' && renderParkingContent()}
              {selectedPackage === 'mock-test' && renderMockTestContent()}
              {selectedPackage === 'guaranteed-pass' && renderGuaranteedPassContent()}
              {selectedPackage === 'refresher' && renderRefresherContent()}

              {/* Action Button */}
              <div className="sticky bottom-0 left-0 right-0 mt-8 pt-4 pb-2 bg-white border-t border-gray-100">
                <SpotlightButton
                  text="Add to Cart"
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default PackageDetailsSidebar;