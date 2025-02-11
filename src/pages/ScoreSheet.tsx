import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, FileSpreadsheet, CheckCircle2} from "lucide-react";
import { toast } from "react-hot-toast";

interface ScoreSheetProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  requiresLocation: boolean;
}

interface ScoreSheetVersion {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "G" | "G2" | "BOTH";
  version: "NEW" | "OLD";
}

const SCORE_SHEET_VERSIONS: ScoreSheetVersion[] = [
  {
    id: "g-new",
    title: "G Test - New Version",
    description: "Latest version of the G test score sheet with essential marking criteria",
    price: 9.99,
    type: "G",
    version: "NEW"
  },
  {
    id: "g-old",
    title: "G Test - Old Version",
    description: "Detailed version of the G test score sheet with comprehensive explanations",
    price: 10.49,
    type: "G",
    version: "OLD"
  },
  {
    id: "g2-new",
    title: "G2 Test - New Version",
    description: "Latest version of the G2 test score sheet with essential marking criteria",
    price: 9.99,
    type: "G2",
    version: "NEW"
  },
  {
    id: "g2-old",
    title: "G2 Test - Old Version",
    description: "Detailed version of the G2 test score sheet with comprehensive explanations",
    price: 10.49,
    type: "G2",
    version: "OLD"
  },
  {
    id: "both-new",
    title: "G2/G Tests - New Version",
    description: "Combined new versions of both G2 and G test score sheets",
    price: 15.99,
    type: "BOTH",
    version: "NEW"
  },
  {
    id: "both-old",
    title: "G2/G Tests - Old Version",
    description: "Detailed versions of both G2 and G test score sheets with comprehensive explanations",
    price: 17.99,
    type: "BOTH",
    version: "OLD"
  }
];

const FEATURES = [
  "Detailed scoring criteria",
  "Examiner's marking guide",
  "Common mistakes to avoid",
  "Test route tips",
  "Pre-test checklist",
  "Score calculation guide"
];

const SCORING_POINTS = [
  "Starting and stopping",
  "Steering control",
  "Speed management",
  "Lane positioning",
  "Traffic signs and signals",
  "Turns and intersections",
  "Parking maneuvers",
  "Road rules compliance",
  "Observation skills",
  "Defensive driving"
];

const ScoreSheet = ({ cart, setCart }: ScoreSheetProps) => {
  const [selectedVersion, setSelectedVersion] = useState<string>("g2-new");
  const [filterType, setFilterType] = useState<"G" | "G2" | "BOTH" | "ALL">("ALL");

  const addToCart = () => {
    const version = SCORE_SHEET_VERSIONS.find(v => v.id === selectedVersion);
    if (!version) return;

    const cartItem: CartItem = {
      id: `score-sheet-${version.id}-${Date.now()}`,
      name: `${version.title} Score Sheet`,
      price: version.price,
      requiresLocation: false,
    };

    setCart([...cart, cartItem]);
    toast.success('Score Sheet added to cart!', {
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

  const filteredVersions = SCORE_SHEET_VERSIONS.filter(version => 
    filterType === "ALL" || version.type === filterType
  );

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
              <FileSpreadsheet className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-medium">
                Official Score Sheets
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Master Your <span className="text-yellow-500">Road Test</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Get the official score sheets used by examiners and understand exactly what they're looking for
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">30+</div>
                <div className="text-sm text-gray-300">Scoring Points</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">100%</div>
                <div className="text-sm text-gray-300">Accurate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">6</div>
                <div className="text-sm text-gray-300">Versions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-300">Access</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Score Sheet Preview and Features */}
          <div className="space-y-8">
            {/* Preview Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img
                src="/images/score-sheet-preview.png"
                alt="Score Sheet Preview"
                className="w-full rounded-xl shadow-lg mb-6"
              />
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    This is the Official Ontario DriveTest score sheet showing all markings you will be scored on during your G2 and G driving examinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#2c3149] mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scoring Points */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#2c3149] mb-6">Scoring Points Covered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SCORING_POINTS.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Version Selection */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-[#2c3149] mb-6">
                  Choose Your Score Sheet
                </h2>

                {/* Test Type Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Filter by Test Type:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(["ALL", "G2", "G", "BOTH"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`py-2 px-3 rounded-lg border-2 transition-all text-sm ${
                          filterType === type
                            ? "border-yellow-500 bg-yellow-50 text-yellow-500"
                            : "border-gray-200 hover:border-yellow-500/50 text-gray-600"
                        }`}
                      >
                        {type === "ALL" ? "All Types" : type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Version Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold text-[#2c3149] mb-4">
                    Select Version:
                  </h3>
                  <div className="grid gap-3">
                    {filteredVersions.map((version) => (
                      <button
                        key={version.id}
                        onClick={() => setSelectedVersion(version.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedVersion === version.id
                            ? "border-yellow-500 bg-yellow-50"
                            : "border-gray-200 hover:border-yellow-500/50"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-[#2c3149]">{version.title}</span>
                          <span className="text-yellow-500 font-bold">${version.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{version.description}</p>
                        {version.version === "OLD" && (
                          <span className="inline-block mt-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                            More Descriptive
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={addToCart}
                  className="w-full py-4 bg-[#2c3149] text-white rounded-xl hover:bg-[#2c3149]/90 transition-colors"
                >
                  Add to Cart - ${SCORE_SHEET_VERSIONS.find(v => v.id === selectedVersion)?.price.toFixed(2)}
                </button>

                {/* Additional Info */}
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>
                    Instant digital download. Compatible with all devices. 
                    Practice with this score sheet to understand exactly what 
                    examiners look for during your test.
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

export default ScoreSheet;