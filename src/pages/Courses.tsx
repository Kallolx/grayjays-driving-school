import { BookOpen, Car, Users, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Beginner's Course",
      description: "Perfect for first-time drivers. Learn the basics of driving and road safety.",
      duration: "20 hours",
      price: "$599",
      icon: BookOpen
    },
    {
      title: "Intensive Course",
      description: "Accelerated learning program to get you ready for your test quickly.",
      duration: "30 hours",
      price: "$799",
      icon: Clock
    },
    {
      title: "Test Preparation",
      description: "Focused training for your upcoming driving test with mock tests.",
      duration: "10 hours",
      price: "$299",
      icon: Car
    },
    {
      title: "Group Sessions",
      description: "Theory classes in a group setting. Learn traffic rules and regulations.",
      duration: "15 hours",
      price: "$199",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Driving Courses</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <course.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Duration:</span>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Price:</span>
                  <p className="font-semibold text-primary">{course.price}</p>
                </div>
              </div>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;