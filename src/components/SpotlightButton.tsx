import { motion } from "framer-motion";

interface SpotlightButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const SpotlightButton = ({ text = "Get Started Today", className = "", onClick }: SpotlightButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`group relative w-full max-w-xs overflow-hidden rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-4 text-base font-semibold text-[#2c3149] transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300 ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default SpotlightButton;