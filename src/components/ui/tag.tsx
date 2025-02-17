import { cn } from "../../lib/utils";
import { CSSProperties, FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface TagProps {
  icon?: ReactNode;
  text: string;
  className?: string;
  variant?: "default" | "yellow" | "blue";
  shimmerWidth?: number;
}

const variantStyles = {
    default: "bg-white/10 backdrop-blur-sm border-white/80 text-white",
    yellow: "bg-yellow-50/80 border-gray-200 text-[#2c3149] hover:bg-yellow-50/90 transition-colors"
  };

const Tag: FC<TagProps> = ({ 
  icon, 
  text, 
  className, 
  variant = "default",
  shimmerWidth = 100 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}      
      className={cn(
        "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border backdrop-blur-sm transition-all duration-300",
        variantStyles[variant as keyof typeof variantStyles],
        className
      )}
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {icon}
      </motion.span>
      <span
        style={
          {
            "--shiny-width": `${shimmerWidth}px`,
          } as CSSProperties
        }
        className={cn(
          "font-bold text-sm sm:text-base whitespace-nowrap",
          // Shine effect
          "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
          // Shine gradient based on variant
          variant === "default" 
            ? "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent"
            : "bg-gradient-to-r from-transparent via-[#2c3149]/80 via-50% to-transparent"
        )}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default Tag; 