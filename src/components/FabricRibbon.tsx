import React from 'react';

export const FabricRibbon: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden my-1 sm:my-2 select-none pointer-events-none flex justify-center">
      {/* 
        DRAPED BURGUNDY SILK FABRIC:
        Matching the user reference image (download (5).jpg)
        Flowing, layered burgundy chiffon/silk fabric swags looping gracefully
      */}
      <div className="relative w-[114%] -ml-[7%] h-24 sm:h-32 md:h-36 overflow-hidden flex items-start justify-center">
        {/* The draped silk fabric image cropped to the sweeping swags */}
        <img
          src="/assets/aistudio/download__5__af78f19c.jpg"
          alt="Draped burgundy silk fabric"
          className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover object-top mix-blend-multiply filter contrast-125 brightness-95 drop-shadow-[0_10px_20px_rgba(20,2,6,0.6)] transform origin-top"
          referrerPolicy="no-referrer"
        />

        {/* Subtle golden shimmer accent line */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9aa7d]/70 to-transparent" />

        {/* Soft fabric ambient shadow at bottom of drapes */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
