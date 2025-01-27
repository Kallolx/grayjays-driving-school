import { Car, Fuel, Settings, Shield } from 'lucide-react';

const Rentals = () => {
  const cars = [
    {
      name: "Toyota Corolla",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012c98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "$75/day",
      transmission: "Automatic",
      features: ["Backup Camera", "ABS Brakes", "Power Steering"]
    },
    {
      name: "Honda Civic",
      image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "$80/day",
      transmission: "Automatic",
      features: ["Parking Sensors", "Dual Airbags", "Air Conditioning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Test Day Car Rentals</h1>
        
        {/* Benefits Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Car, title: "Latest Models", text: "Well-maintained vehicles" },
            { icon: Shield, title: "Fully Insured", text: "Complete coverage" },
            { icon: Settings, title: "Regular Service", text: "Maintained weekly" },
            { icon: Fuel, title: "Full Tank", text: "Ready to drive" }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <benefit.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
                <p className="text-primary font-bold text-xl mb-4">{car.price}</p>
                <p className="text-gray-600 mb-2">Transmission: {car.transmission}</p>
                <ul className="space-y-2">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rentals;