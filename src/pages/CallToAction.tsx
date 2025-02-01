import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Master <span className="text-yellow-500">the Road?</span>
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Book lessons online and ace your road test with Grayjays.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all text-lg font-medium group"
                >
                  Get Started Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 