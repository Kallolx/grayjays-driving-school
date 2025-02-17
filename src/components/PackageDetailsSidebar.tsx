import { useState } from 'react';

import { X, CheckCircle2, Clock, Car } from 'lucide-react';

import toast from 'react-hot-toast';
import LocationSelector from './LocationSelector';

interface PackageDetailsSidebarProps {
  selectedPackage: string | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  packages: Package[];
  selectedCrashCourse: string | null;
  setSelectedCrashCourse: (course: string | null) => void;
  CRASH_COURSES: CrashCourse[];
  PARKING_FEATURES: string[];
  GUARANTEED_PASS_FEATURES: string[];
  REFRESHER_SECTIONS: RefresherSection[];
  MOCK_TEST_FEATURES: string[];
  selectedLocation: string;
  selectedLicenseType: string;
  setSelectedLocation: (location: string) => void;
  setSelectedLicenseType: (type: string) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  requiresLocation: boolean;
  location?: string;
  licenseType?: string;
}

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  image: string;
  requiresLocation: boolean;
}

interface CrashCourse {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface RefresherSection {
  title: string;
  description: string;
  features: string[];
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
  selectedLicenseType,
  setSelectedLocation,
  setSelectedLicenseType
}: PackageDetailsSidebarProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleAddToCart = () => {
    if (!selectedPkg) return;

    const cartItem: CartItem = {
      id: `${selectedPkg.id}-${Date.now()}`,
      name: selectedPkg.title,
      price: selectedPkg.price,
      requiresLocation: selectedPkg.id === 'crash-course'
    };

    // Add location and license type only for crash courses
    if (selectedPkg.id === 'crash-course') {
      if (!selectedLocation || !selectedLicenseType) {
        toast.error('Please select both location and license type', {
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
      cartItem.location = selectedLocation;
      cartItem.licenseType = selectedLicenseType;
    }

    onAddToCart(cartItem);
    handleClose();
  };



  const renderCrashCourseContent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Available Courses</h3>
      <div className="grid gap-4">
        {CRASH_COURSES.map((course) => (
          <button
            key={course.id}
            onClick={() => setSelectedCrashCourse(course.id)}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              selectedCrashCourse === course.id
                ? 'bg-yellow-500 text-[#2c3149]'
                : 'bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{course.title}</h4>
                  <span className="font-bold">${course.price}</span>
                </div>
                <p className="text-sm opacity-80">{course.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderParkingContent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">What You'll Learn</h3>
      <div className="grid gap-4">
        {PARKING_FEATURES.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGuaranteedPassContent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Package Benefits</h3>
      <div className="grid gap-4">
        {GUARANTEED_PASS_FEATURES.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRefresherContent = () => (
    <div className="space-y-8">
      {REFRESHER_SECTIONS.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Car className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <p className="text-white/60 text-sm">{section.description}</p>
            </div>
          </div>
          <div className="grid gap-3 pl-16">
            {section.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" />
                </div>
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMockTestContent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Test Preparation Features</h3>
      <div className="grid gap-4">
        {MOCK_TEST_FEATURES.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (!selectedPkg) return null;

    switch (selectedPkg.id) {
      case 'crash-course':
        return renderCrashCourseContent();
      case 'parking':
        return renderParkingContent();
      case 'guaranteed-pass':
        return renderGuaranteedPassContent();
      case 'refresher':
        return renderRefresherContent();
      case 'mock-test':
        return renderMockTestContent();
      default:
        return null;
    }
  };



  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full lg:w-[600px] bg-[#2c3149] z-50 overflow-y-auto 
          transform transition-transform duration-300 ${
            isClosing ? 'translate-x-full' : 'translate-x-0'
          }`}
      >
        {/* Header with Image */}
        <div className="relative h-[300px]">
          <img 
            src={selectedPkg?.image} 
            alt={selectedPkg?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149] to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Title and Description */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-4 mb-2">
              <img src={selectedPkg?.icon} alt="" className="w-12 h-12" />
              <h2 className="text-2xl font-bold text-white">{selectedPkg?.title}</h2>
            </div>
            <p className="text-white/80 text-lg">{selectedPkg?.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Price Section */}
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Price</h3>
                <p className="text-white/60">One-time payment</p>
              </div>
              <div className="text-3xl font-bold text-yellow-500">
                ${selectedPkg?.price}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={selectedPkg?.id === 'crash-course' && (!selectedLocation || !selectedLicenseType)}
              className="w-full py-4 bg-yellow-500 text-[#2c3149] rounded-xl font-semibold hover:bg-yellow-400 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </div>

          {/* Location Selector for Crash Course */}
          {selectedPkg?.id === 'crash-course' && (
            <div className="bg-white/5 rounded-xl p-6">
              <LocationSelector
                selectedLocation={selectedLocation}
                selectedLicenseType={selectedLicenseType}
                setSelectedLocation={setSelectedLocation}
                setSelectedLicenseType={setSelectedLicenseType}
              />
            </div>
          )}

          {/* Package Specific Content */}
          <div className="bg-white/5 rounded-xl p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetailsSidebar;