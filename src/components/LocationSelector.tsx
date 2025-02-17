import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface LocationSelectorProps {
  selectedLocation: string;
  selectedLicenseType: string;
  setSelectedLocation: (location: string) => void;
  setSelectedLicenseType: (type: string) => void;
}

const LOCATIONS = [
  'Scarborough',
  'North York',
  'Markham',
  'Richmond Hill',
  'Mississauga',
  'Brampton',
  'Etobicoke',
  'Toronto Downtown'
];

const LICENSE_TYPES = [
  { value: 'G2', label: 'G2 License' },
  { value: 'G', label: 'G License' }
];

const LocationSelector = ({
  selectedLocation,
  selectedLicenseType,
  setSelectedLocation,
  setSelectedLicenseType
}: LocationSelectorProps) => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className="mb-6 space-y-4">
      {/* Location Dropdown */}
      <div className="relative">
        <label className="block text-sm font-medium text-white/80 mb-2">
          Select Location
        </label>
        <button
          onClick={() => setShowLocations(!showLocations)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>{selectedLocation || "Choose location"}</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showLocations ? 'rotate-180' : ''}`} />
        </button>

        {/* Location List */}
        {showLocations && (
          <div className="absolute z-50 w-full mt-2 py-2 bg-[#2c3149] rounded-xl shadow-xl border border-white/10">
            <div className="max-h-60 overflow-y-auto">
              {LOCATIONS.map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    setSelectedLocation(location);
                    setShowLocations(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${
                    selectedLocation === location 
                      ? 'text-yellow-500 bg-white/5' 
                      : 'text-white/80'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* License Type Selector */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          License Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {LICENSE_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedLicenseType(type.value)}
              className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                selectedLicenseType === type.value
                  ? 'bg-yellow-500 border-yellow-500 text-[#2c3149]'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSelector; 