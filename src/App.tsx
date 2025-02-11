import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
import CartButton from "./components/CartButton";
import FAQSection from './components/FAQSection';
import SpecialPackages from './pages/SpecialPackages';
import BDE from './pages/BDE';
import GPSRoutes from './pages/GPSRoutes';
import Blog from './pages/Blog';
import ScoreSheet from './pages/ScoreSheet';
import G1Practice from './pages/G1Practice';
import { CartItem } from './types/cart';

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
      <Testimonials />
      <FAQSection />
    </>
  );
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/hourly-lessons" element={<HourlyLesson cart={cart} setCart={setCart} />} />
            <Route path="/services/car-rental" element={<CarRental cart={cart} setCart={setCart} />} />
            <Route path="/learn-to-drive/special-packages" element={<SpecialPackages cart={cart} setCart={setCart} />} />
            <Route path="/learn-to-drive/bde" element={<BDE cart={cart} setCart={setCart} />} />
            <Route path="/services/gps-routes" element={<GPSRoutes cart={cart} setCart={setCart} />} />
            <Route path="/services/score-sheet" element={<ScoreSheet cart={cart} setCart={setCart} />} />
            <Route path="/services/g1-practices" element={<G1Practice cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <Footer />
        <CartButton cart={cart} setCart={setCart} />
        <ChatButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;