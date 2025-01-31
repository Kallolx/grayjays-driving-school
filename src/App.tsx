import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import HourlyLesson from './pages/HourlyLesson';
import CarRental from './pages/CarRental';
import Testimonials from './pages/Testimonials';
import PackagesAndServices from './pages/PackagesAndServices';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function MainPage() {
  return (
    <>
      <Home />
      <PackagesAndServices />
      <Services />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-poppins antialiased text-gray-900 selection:bg-[#FFD7C9] selection:text-gray-900">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services/hourly-lessons" element={<HourlyLesson />} />
            <Route path="/services/car-rental" element={<CarRental />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;