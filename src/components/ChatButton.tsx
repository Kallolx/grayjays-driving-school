import { X, MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatModal from "./ChatModal";

interface ChatButtonProps {
  className?: string;
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

const ChatButton = ({ className = "", variant = "fixed", size = "lg" }: ChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6 sm:w-7 sm:h-7"
  };

  // Hide the fixed variant completely
  const baseButtonClass = variant === "fixed" 
    ? "hidden"
    : "group";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseButtonClass} ${className}`}
        aria-label="Chat with us"
      >
        <div className="relative">
          <div className={`relative flex items-center justify-center ${sizeClasses[size]} bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
            <div className="relative">
              {isOpen ? (
                <X className={`${iconSizes[size]} text-[#2c3149]`} />
              ) : (
                <MessageCircle className={`${iconSizes[size]} text-[#2c3149]`} />
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton; 