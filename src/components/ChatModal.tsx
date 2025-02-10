import { Send, Loader2, Calendar, Car, Clock, X, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface ChatModalProps {
  onClose: () => void;
}

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface QuickAction {
  icon: JSX.Element;
  label: string;
  action: () => void;
}

const ChatModal = ({ onClose }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "👋 Hi! I'm your driving assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions: QuickAction[] = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Book Lesson",
      action: () => handleQuickAction("I want to book a driving lesson"),
    },
    {
      icon: <Car className="w-4 h-4" />,
      label: "Car Rental",
      action: () => handleQuickAction("Tell me about car rental options"),
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: "Hours & Pricing",
      action: () => handleQuickAction("What are your hours and pricing?"),
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Locations",
      action: () => handleQuickAction("What areas do you serve?"),
    },
  ];

  const handleQuickAction = (message: string) => {
    setInput(message);
    handleSend(message);
    setShowSuggestions(false);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("book") || lowerMessage.includes("lesson")) {
      return "You can book a lesson through our online system. Would you like me to help you schedule one? You can also visit our booking page directly.";
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Our pricing starts at $60/hour for regular lessons. We also offer package deals! You can check our full pricing at the pricing page.";
    }
    if (lowerMessage.includes("location") || lowerMessage.includes("area")) {
      return "We serve the Greater Toronto Area, including Scarborough, North York, Markham, and Richmond Hill. Which area are you interested in?";
    }
    if (lowerMessage.includes("car") || lowerMessage.includes("rental")) {
      return "We offer car rentals for road tests and practice. Our fleet includes both automatic and manual transmission vehicles. Would you like to know more about our rental options?";
    }
    return "Thank you for your message! How else can I assist you with our driving services?";
  };

  const handleSend = async (manualMessage?: string) => {
    const messageToSend = manualMessage || input;
    if (!messageToSend.trim()) return;

    // Add user message
    const userMessage = { 
      type: "user" as const, 
      content: messageToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        type: "bot" as const,
        content: getBotResponse(messageToSend),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-24 right-4 sm:right-6 w-[calc(100%-32px)] sm:w-[400px] max-w-[400px] z-50">
      <div className="bg-white rounded-2xl shadow-2xl transform transition-all duration-300 animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2c3149] to-[#1a1f33] p-3 sm:p-4 rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <img src="/icons/svg-image-1.svg" alt="Grayjays" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">Grayjays Assistant</h3>
              <p className="text-xs sm:text-sm text-gray-300">Typically replies instantly</p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-[60vh] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.type === "bot" && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-yellow-500/10 flex items-center justify-center mr-2">
                  <img src="/icons/svg-image-1.svg" alt="Grayjays" className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-2 sm:p-3 rounded-2xl ${
                  message.type === "user"
                    ? "bg-yellow-500 text-[#2c3149]"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-xs sm:text-sm">{message.content}</p>
                <p className="text-[8px] sm:text-[10px] mt-1 opacity-50">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-yellow-500/10 flex items-center justify-center mr-2">
                <img src="/icons/svg-image-1.svg" alt="Grayjays" className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="bg-gray-100 p-2 sm:p-3 rounded-2xl">
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 animate-spin" />
              </div>
            </div>
          )}
          {showSuggestions && !isLoading && messages.length === 1 && (
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex items-center gap-2 p-2 text-xs sm:text-sm text-[#2c3149] bg-gray-100 rounded-xl hover:bg-yellow-500 transition-colors group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                      {action.icon}
                    </div>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-3 sm:p-4 border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-3 sm:px-4 py-2 rounded-xl border-2 border-gray-100 focus:border-yellow-500 focus:outline-none text-xs sm:text-sm transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-xl text-[#2c3149] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal; 