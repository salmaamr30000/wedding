import React, { useState } from 'react';

interface Swatch {
  name: string;
  hex: string;
  note: string;
}

export const DressCodeSection: React.FC = () => {
  const [activeSwatch, setActiveSwatch] = useState<string | null>(null);

  const swatches: Swatch[] = [
    { name: 'Deep Burgundy', hex: '#5a1727', note: 'Our signature evening wine' },
    { name: 'Midnight Black', hex: '#121212', note: 'Classic formal black-tie' },
    { name: 'Champagne Gold', hex: '#c9aa7d', note: 'Warm metallic elegance' },
    { name: 'Royal Sapphire', hex: '#090c5c', note: 'Deep jewel blue tone' },
  ];

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center text-center">
      <div className="w-full max-w-sm sm:max-w-md">
        <p className="font-script text-4xl sm:text-5xl text-[#ead8c7] mb-1">
          Dress code
        </p>

        <p className="font-sans-clean text-[11px] tracking-[0.25em] uppercase text-[#c9aa7d] font-semibold mb-3">
          FORMAL & BLACK TIE OPTIONAL
        </p>

        <p className="font-serif-luxury text-base sm:text-[17px] text-[#e2cfbe] leading-relaxed max-w-xs mx-auto mb-2">
          We kindly invite our beloved guests to dress in formal evening attire that complements our wedding colors.
        </p>

        <p className="font-serif-luxury italic text-xs text-[#d8bca6] mb-5">
          (Kindly note: White and ivory tones are reserved exclusively for the bride)
        </p>

        {/* Color Swatches */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
          {swatches.map((swatch) => (
            <button
              key={swatch.name}
              onClick={() => setActiveSwatch(activeSwatch === swatch.name ? null : swatch.name)}
              onMouseEnter={() => setActiveSwatch(swatch.name)}
              className="group relative flex flex-col items-center cursor-pointer focus:outline-none"
              title={`${swatch.name}: ${swatch.note}`}
              aria-label={swatch.name}
            >
              <span
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#faf5ee] shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110 active:scale-95"
                style={{ backgroundColor: swatch.hex }}
              />
              <span className="font-sans-clean text-[10px] text-[#d4bca4] mt-1.5 opacity-80 group-hover:opacity-100 hidden sm:block">
                {swatch.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected swatch detail hint */}
        <div className="h-6 mt-2">
          {activeSwatch && (
            <p className="font-serif-luxury italic text-sm text-[#c9aa7d] animate-fade-in">
              {swatches.find((s) => s.name === activeSwatch)?.name} —{' '}
              {swatches.find((s) => s.name === activeSwatch)?.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
