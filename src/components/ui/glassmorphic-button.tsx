import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlassmorphicButton = React.forwardRef<HTMLButtonElement, GlassmorphicButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative w-[167px] h-[40.59px] bg-[#3B3B3B] overflow-hidden rounded-[11.5px] cursor-pointer transition-transform hover:scale-105",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Background blur effects */}
        <div className="absolute w-[95px] h-[36px] left-[89px] top-[-19px] bg-white shadow-[8px_8px_8px_rgba(0,0,0,0.3)] blur-[4px]" />
        <div className="absolute w-[54px] h-[46px] left-[-22px] top-[12.6px] bg-[#1300BF] shadow-[8px_8px_8px_rgba(0,0,0,0.3)] blur-[4px]" />
        <div className="absolute w-[40px] h-[34px] left-[-22px] top-[23.6px] bg-[#00D9FF] shadow-[8px_8px_8px_rgba(0,0,0,0.3)] blur-[4px]" />
        
        {/* Inner container */}
        <div className="absolute w-[164px] h-[37.59px] left-[1.5px] top-[1.5px] bg-[#0C0C0C] overflow-hidden rounded-[10px]">
          {/* Inner blur effects */}
          <div 
            className="absolute w-[30px] h-[84px] left-[105.01px] top-[-9.56px] bg-black shadow-[5px_5px_5px_rgba(0,0,0,0.3)] blur-[2.5px]"
            style={{ transform: 'rotate(-30deg)', transformOrigin: 'top left' }}
          />
          <div 
            className="absolute w-[75px] h-[39px] left-[-32.31px] top-[14.58px] opacity-[0.41] shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-full blur-[5px]"
            style={{ 
              background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #1300BF 0%, rgba(19, 0, 191, 0) 100%)' 
            }}
          />
          <div 
            className="absolute w-[95px] h-[42px] left-[252.5px] top-[-21px] shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-full blur-[5px]"
            style={{ 
              background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #737373 0%, rgba(115, 115, 115, 0) 100%)' 
            }}
          />
          
          {/* Button text */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white text-[16.59px] font-normal leading-[21.6px]">
            {children}
          </div>
        </div>
      </button>
    );
  }
);

GlassmorphicButton.displayName = "GlassmorphicButton";

export { GlassmorphicButton };