import { Link } from 'react-router-dom';

interface Package {
  id: number;
  name: string;
  price: string;
  features: string[];
  color: string;
  link: string;
  popular?: boolean;
}

const PACKAGES = {
  withoutCar: [
    {
      id: 1,
      name: "Standard Package",
      price: "649",
      features: [
        "10 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-rose-500 to-pink-600",
      link: "/pricing/standard"
    },
    {
      id: 2,
      name: "Premium Package",
      price: "899",
      popular: true,
      features: [
        "15 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-blue-500 to-indigo-600",
      link: "/pricing/premium"
    },
    {
      id: 3,
      name: "Premium Plus Package",
      price: "1149",
      features: [
        "20 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities"
      ],
      color: "from-purple-500 to-purple-600",
      link: "/pricing/premium-plus"
    },
    {
      id: 4,
      name: "Ultimate Package",
      price: "1649",
      features: [
        "30 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "15 Hour Online Home Link Activities"
      ],
      color: "from-emerald-500 to-teal-600",
      link: "/pricing/ultimate"
    }
  ],
  withCar: [
    {
      id: 5,
      name: "Standard Package",
      price: "799",
      features: [
        "10 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-rose-500 to-pink-600",
      link: "/pricing/standard-with-car"
    },
    {
      id: 6,
      name: "Premium Package",
      price: "1049",
      popular: true,
      features: [
        "15 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-blue-500 to-indigo-600",
      link: "/pricing/premium-with-car"
    },
    {
      id: 7,
      name: "Premium Plus Package",
      price: "1299",
      features: [
        "20 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "10 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-purple-500 to-purple-600",
      link: "/pricing/premium-plus-with-car"
    },
    {
      id: 8,
      name: "Ultimate Package",
      price: "1799",
      features: [
        "30 Hour In-Vehicle Training",
        "20 Hour Online Lesson",
        "15 Hour Online Home Link Activities",
        "Car Provided for Road Test"
      ],
      color: "from-emerald-500 to-teal-600",
      link: "/pricing/ultimate-with-car"
    }
  ]
};

const PriceCard = ({ pkg, withCar = false }: { pkg: Package; withCar?: boolean }) => (
  <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
    {pkg.popular && (
      <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
        Popular
      </div>
    )}
    {withCar && (
      <div className="absolute top-0 left-0 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-br-lg flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        Car Included
      </div>
    )}
    <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
      <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">${pkg.price}</span>
        <span className="ml-1 text-white/90">+ HST</span>
      </div>
    </div>
    <div className="p-6">
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center text-zinc-700">
            <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={pkg.link}
        className="block w-full py-3 px-4 rounded-xl bg-zinc-900 text-white text-center font-medium hover:bg-zinc-800 transition-colors"
      >
        Get Started
      </Link>
      <p className="text-center text-zinc-500 text-sm mt-4">
        Financing Available!
      </p>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="bg-slate-50 font-poppins pt-32 pb-16">
      {/* Without Car Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
            <h2 className="text-3xl font-semibold">Package Without Car</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-zinc-600">Choose the perfect package for your learning journey. These packages are designed for students who have access to their own vehicle for practice.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.withoutCar.map((pkg) => (
            <PriceCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>

      {/* With Car Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <h2 className="text-3xl font-semibold">Packages With Car</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-zinc-600">All packages include a car for your road test. Perfect for students who need access to a vehicle for practice and testing.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.withCar.map((pkg) => (
            <PriceCard key={pkg.id} pkg={pkg} withCar={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 