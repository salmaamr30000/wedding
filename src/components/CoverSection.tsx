import React from 'react';
import { CornerFlourish } from './CornerFlourish';

export const CoverSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-8 text-center flex flex-col items-center">

      {/* Decorative filigree top ornament in champagne gold */}
      <div className="flex items-center justify-center gap-3 mb-2 text-[#c9aa7d]/80">
        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9aa7d]" />
        <span className="text-xs">✦</span>
        <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9aa7d]" />
      </div>

      <p className="font-script text-4xl sm:text-5xl text-[#f7eee4] mb-1 drop-shadow-sm">
        An invitation
      </p>
      
      <p className="font-sans-clean text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#c9aa7d] font-semibold mb-7">
        TO OUR WEDDING CELEBRATION
      </p>

      {/* Hands holding envelope photograph with interactive animated sheen, continuous float, and zoom */}
      <div className="group relative w-full max-w-sm sm:max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#ebdcc3] via-[#c9aa7d] to-[#967442] shadow-[0_20px_45px_rgba(0,0,0,0.65)] transition-transform duration-700 hover:scale-[1.03] animate-float-photo">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#24040b]">
          <img
            src="/assets/aistudio/hands-envelope.png_1dc1520e.jpg"
            alt="Red wedding envelope with wax seal"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
            referrerPolicy="no-referrer"
          />

          {/* Animated diagonal light reflection sheen across image */}
          <div className="absolute inset-0 animate-mirror-gleam bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Corner gold ornaments */}
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />

          {/* Subtle warm glow around frame */}
          <div className="absolute inset-0 ring-1 ring-inset ring-[#fff]/30 pointer-events-none rounded-xl" />
        </div>
      </div>

      {/* Couple Names Stacked Vertically in Rich Warm Ivory with Gold & */}
      <div className="mt-8 mb-4">
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#f7eee4] leading-[1.05] drop-shadow-md">
          <span>Hisham</span>
          <span className="block font-serif-luxury italic text-2xl sm:text-3xl text-[#c9aa7d] my-1 leading-none">
            &
          </span>
          <span>Rahma</span>
        </h2>
      </div>

      {/* Formal Invitation Text with Enhanced Font Hierarchy & Contrast */}
      <div className="max-w-md mx-auto mt-2 px-4">
        <p className="font-sans-clean text-[11px] tracking-[0.25em] uppercase text-[#c9aa7d] font-semibold mb-3">
          Together With Their Families
        </p>
        <p className="font-serif-luxury text-base sm:text-lg text-[#ead8c7] leading-relaxed font-normal">
          Request the honour of your gracious presence to celebrate the love, commitment,
          and joyous beginning of their union.
        </p>
      </div>

      {/* Elegant divider */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c9aa7d] to-transparent mt-8" />
    </section>
  );
};
