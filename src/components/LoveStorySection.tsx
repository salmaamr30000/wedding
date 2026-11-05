import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { CornerFlourish } from './CornerFlourish';

export const LoveStorySection: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 flex justify-center">
      <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#ffffff] to-[#faf5ee] text-[#33151c] rounded-2xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.35)] border-2 border-[#d6c1a8] relative overflow-hidden text-center flex flex-col items-center">
        {/* Subtle decorative inner hairline border */}
        <div className="absolute inset-2.5 rounded-xl border border-[#c9aa7d]/40 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <Heart className="w-5 h-5 text-[#731327] fill-current mb-2 animate-pulse" />

          <p className="font-script text-4xl sm:text-5xl text-[#520c1d] mb-1">
            With All Our Hearts
          </p>

          <p className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#8c5765] font-semibold mb-5">
            A LIFETIME IN THE MAKING
          </p>

          {/* Childhood Photo with Gilded Frame, Animated Gleam, and continuous float */}
          <div className="group relative w-full aspect-[3/4] max-w-[280px] rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#ebdcc3] via-[#c9aa7d] to-[#967442] shadow-lg mb-6 transition-transform duration-700 hover:scale-[1.04] animate-float-photo">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#faf5ee]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.30.03_PM_0ebb28b0.jpeg"
                alt="Childhood groom and bride"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Diagonal Light Gleam Animation */}
              <div className="absolute inset-0 animate-mirror-gleam bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Corner filigree accents */}
              <CornerFlourish position="top-left" />
              <CornerFlourish position="top-right" />
              <CornerFlourish position="bottom-left" />
              <CornerFlourish position="bottom-right" />
            </div>
          </div>

          <div className="space-y-4 max-w-xs font-serif-luxury text-base sm:text-[17px] text-[#3d1822] leading-relaxed">
            <p>
              "We may not be able to keep every beautiful fleeting moment forever, but we will
              always treasure the memory of celebrating our union surrounded by those we hold most dear."
            </p>
            <p className="font-semibold text-[#520c1d]">
              Your presence, warm blessings, and love are the greatest gifts we could ever receive.
            </p>
          </div>

          {/* Stacked Names */}
          <div className="mt-6 pt-4 border-t border-[#d8c2aa] w-full">
            <h3 className="font-script text-4xl sm:text-5xl text-[#520c1d] leading-none">
              <span>Hisham</span>
              <span className="block font-serif-luxury italic text-xl text-[#967442] my-1">
                &
              </span>
              <span>Rahma</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
