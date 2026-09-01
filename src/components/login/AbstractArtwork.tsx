import React from 'react';
import { THEME_COLORS } from '../../constants/colors';

export const AbstractArtwork: React.FC = () => {
  return (
    <div className="relative -top-10 w-full max-w-lg lg:max-w-xl xl:-left-16 xl:scale-120 xl:-top-0 mx-auto select-none py-6">
      
      {/* Freestanding Unbounded Geometric Shapes (No White Box Canvas) */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        
        {/* Large Background Quarter Circle Corner Shape (Secondary Blue) */}
        <div 
          className="absolute rotate-340 -top-36 -left-2 w-64 h-64 rounded-tr-[100%] opacity-90 transition-transform hover:scale-105 "
          style={{ backgroundColor: THEME_COLORS.secondary }}
        />
        <div 
          className="absolute rotate-340 top-42 -left-24 w-44 h-44 rounded-bl-[100%] opacity-90 transition-transform hover:scale-105"
          style={{ backgroundColor: THEME_COLORS.secondary }}
        />

        {/* Large Primary Arch (Terracotta) extending upwards */}
        <div 
          className="absolute rotate-330 top-16 right-10 w-64 h-84 rounded-t-full flex items-center justify-center shadow-sm transition-transform hover:scale-105"
          style={{ backgroundColor: THEME_COLORS.primary }}
        >
          <div 
            className="w-20 h-20 rounded-full"
            style={{ backgroundColor: THEME_COLORS.bgLight }}
          />
        </div>

        {/* Large Accent Starburst / Asterisk Shape (Orange Accent) */}
        <div className="transition-transform hover:scale-105 absolute -bottom-20 -left-12 w-56 h-56 animate-spin" style={{ animationDuration: '40s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill={THEME_COLORS.accent}>
            <path d="M50 0 L58 35 L90 20 L68 46 L100 50 L68 54 L90 80 L58 65 L50 100 L42 65 L10 80 L32 54 L0 50 L32 46 L10 20 L42 35 Z" />
          </svg>
        </div>

        {/* Center Pill & Circular Elements */}
        <div 
          className="relative z-10 top-16 w-44 h-44 rounded-full flex items-center justify-center border-4 transition-transform hover:scale-105"
          style={{ 
            backgroundColor: THEME_COLORS.bgDark, 
            borderColor: THEME_COLORS.bgLight 
          }}
        >
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            style={{ backgroundColor: THEME_COLORS.accent }}
          >
            <div 
              className="w-10 h-10 rounded-full transition-transform hover:scale-105"
              style={{ backgroundColor: THEME_COLORS.bgLight }}
            />
          </div>
        </div>

        {/* Stacked Organic Semicircle Ribs (Lower Right) */}
        <div 
          className="absolute rotate-348 left-56 -bottom-30 right-2 w-84 h-52 rounded-b-full flex flex-col justify-around p-3 transition-transform hover:scale-105"
          style={{ backgroundColor: THEME_COLORS.secondary }}
        >
          <div className="h-2.5 w-full rounded-full" style={{ backgroundColor: THEME_COLORS.bgLight }} />
          <div className="h-2.5 w-3/4 mx-auto rounded-full" style={{ backgroundColor: THEME_COLORS.accent }} />
          <div className="h-2.5 w-1/2 mx-auto rounded-full" style={{ backgroundColor: THEME_COLORS.primary }} />
        </div>

        {/* Floating Geometric Badge (No White Background) 
        <div 
          className="absolute -bottom-4 right-16 z-20 px-5 py-2.5 rounded-full border flex items-center gap-2 shadow-md"
          style={{ 
            backgroundColor: THEME_COLORS.bgDark, 
            borderColor: THEME_COLORS.accent,
            color: THEME_COLORS.textLight 
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: THEME_COLORS.accent }} />
          <span className="text-xs font-black uppercase tracking-wider">Metodologias Ativas</span>
        </div>*/}

      </div>

    </div>
  );
};
