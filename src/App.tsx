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
import ChatButton from "./components/ChatButton";
import FAQSection from './components/FAQSection';
import './styles/swiper.css';

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
      <Services />
      <Testimonials />
      <FAQSection />
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
        <ChatButton />
      </div>
    </Router>
  );
}

export default App;