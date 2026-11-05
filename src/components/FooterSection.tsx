import React, { useState } from 'react';
import { Mail, Share2, Check, ArrowUp } from 'lucide-react';

interface FooterSectionProps {
  onReopenEnvelope: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onReopenEnvelope }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-12 pb-16 px-4 text-center flex flex-col items-center">
      {/* Golden ornament */}
      <div className="flex items-center justify-center gap-3 mb-4 text-[#c9aa7d]/70">
        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9aa7d]" />
        <span className="text-sm">✦</span>
        <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9aa7d]" />
      </div>

      <p className="font-sans-clean text-[11px] tracking-[0.28em] uppercase text-[#c9aa7d] font-semibold mb-3">
        WE CAN'T WAIT TO CELEBRATE WITH YOU
      </p>

      {/* Names Stacked Vertically in Warm Ivory & Gold */}
      <h2 className="font-script text-5xl sm:text-6xl text-[#f5ebd9] leading-[1.05] drop-shadow-md my-2">
        <span>Hisham</span>
        <span className="block font-serif-luxury italic text-2xl text-[#c9aa7d] my-0.5">
          &
        </span>
        <span>Rahma</span>
      </h2>

      <p className="font-serif-luxury italic text-sm sm:text-base text-[#d8c2aa] mt-1 mb-8">
        December 1, 2026 · With Love & Gratitude
      </p>

      {/* Action utilities: Replay envelope & Share invitation */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-sm w-full">
        <button
          onClick={onReopenEnvelope}
          className="flex-1 min-w-[140px] py-2.5 px-4 rounded-full bg-[#350811] hover:bg-[#4a0d1b] border border-[#c9aa7d]/60 text-[#f5ebd9] font-sans-clean text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
        >
          <Mail className="w-3.5 h-3.5 text-[#c9aa7d]" />
          <span>Replay Envelope</span>
        </button>

        <button
          onClick={handleShare}
          className="flex-1 min-w-[140px] py-2.5 px-4 rounded-full bg-[#350811] hover:bg-[#4a0d1b] border border-[#c9aa7d]/60 text-[#f5ebd9] font-sans-clean text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#ebdcc5]" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#c9aa7d]" />
              <span>Share Invite</span>
            </>
          )}
        </button>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="mt-8 text-xs font-sans-clean uppercase tracking-widest text-[#a88a64] hover:text-[#ebdcc5] flex items-center gap-1 transition-colors cursor-pointer"
      >
        <ArrowUp className="w-3.5 h-3.5" />
        <span>Return to Top</span>
      </button>

      <p className="font-sans-clean text-[9px] tracking-wider text-[#a88a64]/60 mt-6">
        Designed with love for Hisham & Rahma
      </p>
    </footer>
  );
};
