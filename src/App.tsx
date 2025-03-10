import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HourlyLesson from './pages/HourlyLesson';
import CarRental from './pages/CarRental';
import Testimonials from './pages/Testimonials';
import CartButton from "./components/CartButton";
import FAQSection from './components/FAQSection';
import SpecialPackages from './pages/SpecialPackages';
import BDE from './pages/BDE';
import GPSRoutes from './pages/GPSRoutes';
import Blog from './pages/Blog';
import ScoreSheet from './pages/ScoreSheet';
import G1Practice from './pages/G1Practice';


// Add CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  location?: string;
  licenseType?: string;
  hours?: number;
  requiresLocation: boolean;
}

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
      <div className="min-h-screen bg-gray-50 font-poppins antialiased text-gray-900 selection:bg-[#FFD7C9] selection:text-gray-900 overflow-x-hidden">
        <ScrollToTop />  
        <Navbar />      
        <main className="w-full max-w-[100vw] overflow-x-hidden">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/hourly-lessons" element={<HourlyLesson cart={cart} setCart={setCart} />} />
            <Route path="/services/car-rental" element={<CarRental />} />
            <Route path="/learn-to-drive/special-packages" element={<SpecialPackages cart={cart} setCart={setCart} />} />
            <Route path="/learn-to-drive/bde" element={<BDE />} />
            <Route path="/services/gps-routes" element={<GPSRoutes cart={cart} setCart={setCart} />} />
            <Route path="/services/score-sheet" element={<ScoreSheet/>} />
            <Route path="/services/g1-practices" element={<G1Practice />} />
          </Routes>
        </main>
        <Footer />
        <CartButton cart={cart} setCart={setCart} />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;