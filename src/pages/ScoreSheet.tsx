import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, FileSpreadsheet, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


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

const ScoreSheet = ({}) => {
  const [selectedVersion, setSelectedVersion] = useState<string>("g2-new");
  const [filterType, setFilterType] = useState<"G" | "G2" | "BOTH" | "ALL">("ALL");
  const navigate = useNavigate();


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
        {/* Package Cards */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3149] text-center mb-8">
            Choose Your Score Sheet Version
          </h2>

          {/* Test Type Filter */}
          <div className="max-w-xl mx-auto mb-12">
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

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredVersions.map((version) => (
              <motion.div
                key={version.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative bg-white rounded-2xl p-5 ${
                  selectedVersion === version.id ? 'border-2 border-yellow-500 shadow-yellow-100' : 'border border-gray-200'
                } hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedVersion(version.id)}
              >
                {version.version === "NEW" && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                    Latest Version
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-[#2c3149] mb-1">{version.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{version.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-3xl font-bold text-[#2c3149]">${version.price}</span>
                    <span className="text-gray-500 mb-1">/one-time</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-[#2c3149] font-medium border-b border-gray-100 pb-2">
                    <FileSpreadsheet className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{version.type === "BOTH" ? "G2 & G Tests" : `${version.type} Test Only`}</span>
                  </div>
                  {FEATURES.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/contact?${new URLSearchParams({
                      package: version.title,
                      type: version.type,
                      version: version.version,
                      price: version.price.toFixed(2)
                    }).toString()}`);
                  }}
                  className={`w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    selectedVersion === version.id
                      ? 'bg-yellow-500 text-[#2c3149] hover:bg-yellow-400'
                      : 'bg-[#2c3149] text-white hover:bg-[#1a1f33]'
                  }`}
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-[#2c3149] to-[#1a1f33] rounded-2xl p-6 sm:p-8 text-white mb-16">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-sm text-gray-300">Download immediately after purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Official Format</h3>
                <p className="text-sm text-gray-300">Exact same sheets used by examiners</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Detailed Guide</h3>
                <p className="text-sm text-gray-300">Complete explanation of scoring criteria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Preview Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <img
              src="https://data.templateroller.com/pdf_docs_html/2600/26008/2600852/road-test-score-sheet-template_big.png"
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
      </div>
    </div>
  );
};

export default ScoreSheet;