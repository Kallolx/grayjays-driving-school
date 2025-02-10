import { X, MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatModal from "./ChatModal";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 group"
        aria-label="Chat with us"
      >
        <div className="relative">
          {/* Outer ring animation */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full blur opacity-30 group-hover:opacity-40 animate-pulse"></div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-500 animate-ping opacity-25 duration-700"></div>
          {/* Button background with hover effect */}
          <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              {isOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#2c3149]" />
              ) : (
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#2c3149]" />
              )}
            </div>
          </div>
          {/* Notification dot with pulse */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 flex">
              <div className="relative">
                <div className="w-3 h-3 bg-[#2c3149] rounded-full border-2 border-white"></div>
                <div className="absolute inset-0 bg-[#2c3149] rounded-full animate-ping opacity-40"></div>
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton; 