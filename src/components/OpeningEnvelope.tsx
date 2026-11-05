import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface OpeningEnvelopeProps {
  onOpen: () => void;
  onClose?: () => void;
  isOpen: boolean;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen, onClose, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpen) {
      if (onClose) onClose();
      return;
    }
    if (isOpening) return;
    setIsOpening(true);

    // Launch celebratory gold & rose petals
    try {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#c9aa7d', '#ebdcc5', '#8a2b3f', '#ffffff', '#e6c594'],
          disableForReducedMotion: true,
        });
      }, 500);
    } catch {
      // safe fallback
    }

    // Allow time for the flap opening and letter emerging animation to be fully admired
    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 2400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-1000 select-none overflow-y-auto ${
        isOpen
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 pointer-events-auto scale-100'
      }`}
      style={{
        backgroundImage: `url('/assets/aistudio/background.jpg_e8b40a49.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Soft ambient lighting overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#200208]/15 to-black/35 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center my-auto py-6 sm:py-8">
        {/* Top Eyebrow Label */}
        <p className="font-sans-clean text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#c9aa7d] mb-4 sm:mb-6 font-semibold drop-shadow-sm">
          YOU ARE INVITED TO CELEBRATE
        </p>

        {/* 
          CENTRAL WHITE/IVORY CARD (Matching screenshot exactly!)
          - Self-contained card holding the envelope and names
          - Double gold hairline borders
        */}
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] bg-gradient-to-b from-[#faf5ee] to-[#f4ebe0] rounded-2xl pt-10 sm:pt-14 pb-5 px-4 sm:px-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-2 border-[#d6c1a8] overflow-visible">
          {/* Inner hairline gold border */}
          <div className="absolute inset-2.5 rounded-xl border border-[#c9aa7d]/35 pointer-events-none" />

          {/* 
            THE ENVELOPE COMPONENT WITH 3D FLAP OPENING & SLIDING LETTER
          */}
          <div
            onClick={handleOpenClick}
            className="relative w-full aspect-[1.18/1] cursor-pointer my-1 group select-none overflow-visible"
            style={{ perspective: '1200px' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleOpenClick();
            }}
          >
            {/* 
              THE INNER LETTER CARD (Slides smoothly UPWARD out of the envelope when opening)
            */}
            <div
              className={`absolute inset-x-3 sm:inset-x-4 top-1 h-40 sm:h-44 bg-white rounded-lg border-2 border-[#d6c1a8] shadow-[0_15px_35px_rgba(20,2,6,0.3)] p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out z-25 ${
                isOpening
                  ? '-translate-y-24 sm:-translate-y-28 opacity-100 scale-100 shadow-2xl'
                  : 'translate-y-4 opacity-0 pointer-events-none scale-95'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Letter gold inner border */}
              <div className="absolute inset-1.5 border border-[#c9aa7d]/40 rounded-md pointer-events-none" />

              <span className="font-script text-3xl sm:text-4xl text-[#6a1529] leading-none mb-1">
                H & R
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#967442] font-semibold mt-1">
                SAVE THE DATE
              </span>
              <span className="font-serif-luxury italic text-xs sm:text-sm text-[#4a1622] mt-1 font-medium">
                December 01, 2026
              </span>
            </div>

            {/* ENVELOPE BACK BODY */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_10px_24px_rgba(30,5,12,0.25)] border border-[#d8c2aa] bg-[#faf5ee] z-10">
              <img
                src="/assets/aistudio/DWL_CLUB_3750314a.jpg"
                alt="Embossed wedding invitation envelope"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Envelope pocket lower fold shadow */}
              <div
                className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none z-30"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 15%, 100% 100%)',
                  background: 'linear-gradient(to top, rgba(214, 193, 168, 0.6), rgba(240, 226, 210, 0.2))',
                }}
              />
            </div>

            {/* 
              TRIANGULAR FLAP WITH INITIALS "H & R" & WAX SEAL
              Flips up 180 degrees in 3D when opening
            */}
            <div
              className={`absolute inset-x-0 top-0 h-[62%] transition-transform duration-800 ease-in-out z-35 ${
                isOpening ? '-rotate-x-180 opacity-30 pointer-events-none' : 'rotate-x-0 opacity-100'
              }`}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="w-full h-full bg-[#faf5ee] shadow-[0_6px_15px_rgba(20,2,6,0.25)] relative flex flex-col items-center justify-start pt-2 sm:pt-2.5"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  backgroundImage: `linear-gradient(rgba(250, 245, 238, 0.85), rgba(244, 235, 224, 0.95)), url('/assets/aistudio/DWL_CLUB_3750314a.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                }}
              >
                {/* "H & R" CALLIGRAPHY INITIALS ON THE FLAP */}
                <div className="font-script text-2xl sm:text-3xl text-[#7c5636] font-medium tracking-wide mt-0.5 sm:mt-1 drop-shadow-xs select-none">
                  H & R
                </div>

                {/* Pearlescent Round Wax Seal with Leaf Motif */}
                <div className="absolute bottom-0 translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#faf4eb] via-[#e5d3b6] to-[#bfa072] wax-seal-shadow border-2 border-[#fff8ee] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <div className="w-[82%] h-[82%] rounded-full border border-[#9a7647]/50 flex items-center justify-center bg-gradient-to-b from-[#f5e8d5] to-[#d8c09a] shadow-inner text-[#6e461f]">
                    <svg
                      className="w-4 h-4 text-[#6e461f] drop-shadow-xs"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
            NAMES BELOW THE ENVELOPE (INSIDE THE CARD - Matching screenshot exactly!)
          */}
          <div className="mt-4 text-center select-none">
            <h2 className="font-script text-3xl sm:text-4xl text-[#75162a] leading-tight drop-shadow-xs">
              Hisham & Rahma
            </h2>
            <p className="font-serif-luxury italic text-[11px] sm:text-xs text-[#8c5665] mt-0.5">
              A beautiful beginning starts here
            </p>
          </div>
        </div>

        {/* 
          OPEN INVITATION BUTTON (Matching screenshot exactly!)
        */}
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          className="mt-6 sm:mt-8 px-8 sm:px-10 py-2.5 sm:py-3 bg-[#faf5ee] hover:bg-white text-[#380812] transition-all duration-300 font-sans-clean text-xs sm:text-[13px] tracking-[0.25em] font-semibold rounded-md border border-[#c9aa7d] shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_30px_rgba(201,170,125,0.4)] cursor-pointer active:scale-98"
        >
          {isOpen ? 'CLOSE CARD' : isOpening ? 'OPENING...' : 'OPEN INVITATION'}
        </button>
      </div>
    </div>
  );
};
