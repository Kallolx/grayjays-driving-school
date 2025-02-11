import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightButton from "./SpotlightButton";
import toast from 'react-hot-toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  location?: string;
  licenseType?: string;
  hours?: number;
  requiresLocation: boolean;
}

interface CartButtonProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const CartButton = ({ cart, setCart }: CartButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeFromCart = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from closing
    setCart(cart.filter(item => item.id !== itemId));
    toast.success('Item removed from cart', {
      style: {
        background: '#2c3149',
        color: '#fff',
        borderRadius: '12px',
      },
      icon: '🛒',
      position: 'bottom-left',
      duration: 2000,
    });
  };

  if (cart.length === 0) return null;

  return (
    <>
      {/* Cart Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[100px] right-[10px] sm:right-6 z-50 group"
        aria-label="View cart"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="relative">
          {/* Outer ring animation */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full blur opacity-30 group-hover:opacity-40 animate-pulse"></div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-500 animate-ping opacity-25 duration-700"></div>
          {/* Button background with hover effect */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              {isOpen ? (
                <X className="w-5 h-5 sm:w-7 sm:h-7 text-[#2c3149]" />
              ) : (
                <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7 text-[#2c3149]" />
              )}
            </div>
          </div>
          {/* Cart items count */}
          <div className="absolute -top-1 -right-1 flex">
            <div className="relative">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2c3149] rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-[10px] sm:text-xs text-white font-medium">{cart.length}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.button>

      {/* Cart Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-[170px] right-2 sm:right-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-1rem)] sm:w-[90vw] max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#2c3149]">Your Cart</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                    <span className="text-xs sm:text-sm text-gray-600">{cart.length} items</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 max-h-[40vh] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-4 p-2 sm:p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-medium text-sm sm:text-base text-[#2c3149]">{item.name}</div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <span>📍</span> {item.location}
                        </div>
                      )}
                      {item.licenseType && (
                        <div className="text-xs sm:text-sm text-gray-500">License: {item.licenseType}</div>
                      )}
                      <div className="text-xs sm:text-sm font-medium text-yellow-500">${item.price}</div>
                    </div>
                    <button
                      onClick={(e) => removeFromCart(item.id, e)}
                      className="p-1 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-red-500"
                    >
                      <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-sm sm:text-base text-[#2c3149]">Total:</span>
                  <span className="text-base sm:text-lg font-bold text-[#2c3149]">
                    ${cart.reduce((sum, item) => sum + item.price, 0)}
                  </span>
                </div>
                <SpotlightButton text="Proceed to Checkout" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartButton; 