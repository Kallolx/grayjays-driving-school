import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SpotlightButton from "../components/SpotlightButton";

const CallToAction = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(30deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(150deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(30deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(150deg,#2c314905_12%,transparent_12.5%,transparent_87%,#2c314905_87.5%,#2c314905),linear-gradient(60deg,#2c314908_25%,transparent_25.5%,transparent_75%,#2c314908_75%,#2c314908),linear-gradient(60deg,#2c314908_25%,transparent_25.5%,transparent_75%,#2c314908_75%,#2c314908)] [background-size:80px_140px] [background-position:0_0,0_0,40px_70px,40px_70px,0_0,40px_70px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Banner Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#2c3149] rounded-[2.5rem] transform -skew-y-2 scale-105"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#2c3149] to-[#1a1f33]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#2c3149]/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3149] via-transparent to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
                alt="Background"
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Content */}
            <div className="relative py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  {/* Text Content */}
                  <div className="flex-1 text-left md:max-w-2xl">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                      Ready to Master <br className="hidden sm:block" />
                      <span className="relative">
                        <span className="relative z-10 text-yellow-500">
                          the Road?
                        </span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-500/20 -skew-x-6"></span>
                      </span>
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                      Book lessons online and ace your road test with Grayjays.
                      Start your journey to becoming a confident driver today.
                    </p>

                    {/* Spotlight Button */}
                    <Link to="/contact">
                      <SpotlightButton className="max-w-none w-auto" />
                    </Link>
                  </div>

                  {/* Stats Section */}
                  <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          98%
                        </div>
                        <div className="text-sm text-gray-300">Pass Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          15+
                        </div>
                        <div className="text-sm text-gray-300">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          29K+
                        </div>
                        <div className="text-sm text-gray-300">
                          Students Trained
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          4.9
                        </div>
                        <div className="text-sm text-gray-300">
                          Average Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add a decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default CallToAction;
