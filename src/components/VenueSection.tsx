import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const venueName = "The Grand Ballroom & Gardens";
  const venueAddress = "Royal Wedding Gardens, Ring Road, Cairo, Egypt";
  const mapsUrl = "https://maps.google.com/?q=Cairo+Egypt+Wedding+Venues";

  const handleCopy = () => {
    navigator.clipboard.writeText(`${venueName}, ${venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-8 px-4 flex justify-center">
      <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#ffffff] to-[#faf5ee] text-[#33151c] rounded-2xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.35)] border-2 border-[#d6c1a8] relative overflow-hidden text-center flex flex-col items-center">
        {/* Subtle decorative inner hairline border */}
        <div className="absolute inset-2.5 rounded-xl border border-[#c9aa7d]/40 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <p className="font-script text-4xl sm:text-5xl text-[#520c1d] mb-1">
            The Wedding Celebration
          </p>

          <p className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#8c5765] font-semibold mb-5">
            WILL TAKE PLACE AT
          </p>

          {/* Arched Mirror Photo with Glass Reflection Animation and continuous float */}
          <div className="group relative w-full aspect-[4/5] max-w-[300px] rounded-t-full rounded-b-xl overflow-hidden p-1.5 bg-gradient-to-b from-[#ebdcc3] via-[#c9aa7d] to-[#967442] shadow-lg mb-5 transition-transform duration-700 hover:scale-[1.03] animate-float-photo">
            <div className="relative w-full h-full rounded-t-full rounded-b-lg overflow-hidden bg-[#faf5ee]">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_k7vhjhk7vhjhk7vh_bc3c275d.jpg"
                alt="Arched gold mirror with florals for Hisham & Rahma"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Glass Mirror Gleam Animation */}
              <div className="absolute inset-0 animate-mirror-gleam bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Arched inner gold rim */}
              <div className="absolute inset-0 rounded-t-full rounded-b-lg ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>
          </div>

          <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#520c1d] mb-1">
            {venueName}
          </h3>

          <p className="font-serif-luxury text-base text-[#471d27] max-w-xs mb-3 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#731327] shrink-0" />
            <span>{venueAddress}</span>
          </p>

          {/* Guest Arrival Time Banner */}
          <div className="w-full bg-[#faf5ee] border border-[#d8c2aa] rounded-xl py-3 px-4 my-4 shadow-xs">
            <span className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#8c5765] font-semibold block">
              GUEST RECEPTION & ARRIVAL
            </span>
            <span className="font-serif-luxury text-xl font-bold text-[#520c1d] tracking-wide">
              AT 07:00 PM
            </span>
          </div>

          {/* Actions: Map Link and Copy Address */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full mt-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#520c1d] hover:bg-[#6e1127] text-[#ffffff] rounded-full font-sans-clean text-xs tracking-wider font-semibold uppercase border border-[#c9aa7d] shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Navigation className="w-3.5 h-3.5 text-[#ebdcc5]" />
              <span>View On Google Maps</span>
            </a>

            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 bg-[#faf5ee] hover:bg-[#f3e7d6] text-[#33151c] rounded-full font-sans-clean text-xs tracking-wider font-semibold uppercase border border-[#c9aa7d]/70 shadow-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1b6b33]" />
                  <span>Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#731327]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
